
import { CodeExample } from '../types';

export const htmlTemplate: CodeExample = {
  language: 'html',
  description: 'A complete HTML page with modern styling',
  code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern Landing Page</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        .hero {
            text-align: center;
            padding: 4rem 0;
            color: white;
        }
        
        .hero h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            font-weight: bold;
        }
        
        .hero p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }
        
        .btn {
            display: inline-block;
            padding: 1rem 2rem;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            text-decoration: none;
            border-radius: 50px;
            border: 2px solid rgba(255, 255, 255, 0.3);
            transition: all 0.3s ease;
            font-weight: bold;
        }
        
        .btn:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: translateY(-2px);
        }
        
        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 4rem;
        }
        
        .feature-card {
            background: rgba(255, 255, 255, 0.1);
            padding: 2rem;
            border-radius: 15px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: white;
            transition: transform 0.3s ease;
        }
        
        .feature-card:hover {
            transform: translateY(-5px);
        }
        
        .feature-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
        
        .feature-card p {
            opacity: 0.9;
        }
        
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2rem;
            }
            
            .container {
                padding: 1rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <section class="hero">
            <h1>Welcome to the Future</h1>
            <p>Experience the next generation of web development with our cutting-edge platform</p>
            <a href="#features" class="btn">Get Started</a>
        </section>
        
        <section id="features" class="features">
            <div class="feature-card">
                <h3>🚀 Lightning Fast</h3>
                <p>Built with performance in mind, our platform delivers blazing fast experiences that keep your users engaged.</p>
            </div>
            
            <div class="feature-card">
                <h3>🎨 Beautiful Design</h3>
                <p>Modern, clean, and responsive designs that look great on every device and screen size.</p>
            </div>
            
            <div class="feature-card">
                <h3>🔧 Easy to Use</h3>
                <p>Intuitive interface and powerful tools that make building amazing experiences simple and enjoyable.</p>
            </div>
        </section>
    </div>
    
    <script>
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Add some interactivity
        const featureCards = document.querySelectorAll('.feature-card');
        featureCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.background = 'rgba(255, 255, 255, 0.15)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.background = 'rgba(255, 255, 255, 0.1)';
            });
        });
    </script>
</body>
</html>`
};
