
export const updatePreview = (code: string, language: string, iframeRef: React.RefObject<HTMLIFrameElement>) => {
  if (!iframeRef.current) return;

  let previewContent = '';
  
  if (language === 'html') {
    previewContent = code;
  } else if (language === 'react') {
    // Create a simple HTML wrapper for React component preview
    previewContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>React Component Preview</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <style>
        body { margin: 0; padding: 20px; font-family: Arial, sans-serif; background: #f5f5f5; }
        .preview-container { max-width: 800px; margin: 0 auto; }
    </style>
</head>
<body>
    <div id="root"></div>
    <script type="text/babel">
        ${code.replace('export default ItemManager;', '')}
        
        const App = () => {
            return React.createElement('div', { className: 'preview-container' }, 
                React.createElement(ItemManager, {
                    initialItems: [
                        { id: '1', name: 'Sample Item 1', category: 'demo', status: 'active', createdAt: new Date() },
                        { id: '2', name: 'Sample Item 2', category: 'demo', status: 'inactive', createdAt: new Date() }
                    ]
                })
            );
        };
        
        ReactDOM.render(React.createElement(App), document.getElementById('root'));
    </script>
</body>
</html>`;
  }

  const blob = new Blob([previewContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  iframeRef.current.src = url;
};
