
import { Enhancement } from './types';

export const applyPresetEnhancement = (preset: string, currentEnhancement: Enhancement): Enhancement => {
  let newEnhancement = { ...currentEnhancement };
  
  switch (preset) {
    case 'portrait':
      newEnhancement = {
        ...newEnhancement,
        brightness: 105,
        contrast: 110,
        saturation: 95,
        sharpness: 115,
        warmth: 5,
        shadows: 110,
        highlights: 95
      };
      break;
    case 'landscape':
      newEnhancement = {
        ...newEnhancement,
        brightness: 100,
        contrast: 115,
        saturation: 120,
        sharpness: 110,
        vibrance: 115,
        clarity: 110
      };
      break;
    case 'vivid':
      newEnhancement = {
        ...newEnhancement,
        saturation: 140,
        vibrance: 130,
        contrast: 120,
        clarity: 115
      };
      break;
    case 'bw':
      newEnhancement = {
        ...newEnhancement,
        saturation: 0,
        contrast: 120,
        clarity: 110
      };
      break;
    case 'vintage':
      newEnhancement = {
        ...newEnhancement,
        brightness: 95,
        contrast: 90,
        saturation: 80,
        warmth: 15,
        gamma: 95
      };
      break;
  }
  
  return newEnhancement;
};

export const processImage = (
  canvas: HTMLCanvasElement,
  imageUrl: string,
  enhancement: Enhancement,
  outputFormat: string,
  quality: number
): Promise<string> => {
  return new Promise((resolve) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      
      // Apply advanced filters
      const filters = [
        `brightness(${enhancement.brightness}%)`,
        `contrast(${enhancement.contrast}%)`,
        `saturate(${enhancement.saturation}%)`,
        `hue-rotate(${enhancement.hue}deg)`,
        `sepia(${enhancement.warmth}%)`,
        enhancement.sharpness < 100 ? `blur(${(100 - enhancement.sharpness) / 20}px)` : ''
      ].filter(Boolean).join(' ');
      
      ctx.filter = filters;
      ctx.drawImage(img, 0, 0);
      
      // Apply additional processing for advanced features
      if (enhancement.gamma !== 100 || enhancement.exposure !== 100 || enhancement.highlights !== 100 || enhancement.shadows !== 100) {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        for (let i = 0; i < data.length; i += 4) {
          let r = data[i];
          let g = data[i + 1];
          let b = data[i + 2];
          
          // Apply gamma correction
          if (enhancement.gamma !== 100) {
            const gamma = enhancement.gamma / 100;
            r = Math.pow(r / 255, gamma) * 255;
            g = Math.pow(g / 255, gamma) * 255;
            b = Math.pow(b / 255, gamma) * 255;
          }
          
          // Apply exposure
          if (enhancement.exposure !== 100) {
            const exposureFactor = enhancement.exposure / 100;
            r *= exposureFactor;
            g *= exposureFactor;
            b *= exposureFactor;
          }
          
          // Apply highlights/shadows
          const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
          if (luminance > 128 && enhancement.highlights !== 100) {
            const factor = enhancement.highlights / 100;
            r *= factor;
            g *= factor;
            b *= factor;
          } else if (luminance <= 128 && enhancement.shadows !== 100) {
            const factor = enhancement.shadows / 100;
            r *= factor;
            g *= factor;
            b *= factor;
          }
          
          data[i] = Math.max(0, Math.min(255, r));
          data[i + 1] = Math.max(0, Math.min(255, g));
          data[i + 2] = Math.max(0, Math.min(255, b));
        }
        
        ctx.putImageData(imageData, 0, 0);
      }
      
      // Convert canvas to data URL with specified format and quality
      const mimeType = outputFormat === 'jpeg' ? 'image/jpeg' : 'image/png';
      const qualityValue = outputFormat === 'jpeg' ? quality / 100 : undefined;
      const enhancedDataUrl = canvas.toDataURL(mimeType, qualityValue);
      
      resolve(enhancedDataUrl);
    };
    img.src = imageUrl;
  });
};
