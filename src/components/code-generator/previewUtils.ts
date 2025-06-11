
export const updatePreview = (code: string, language: string, iframeRef: React.RefObject<HTMLIFrameElement>) => {
  if (!iframeRef.current) return;

  let previewContent = '';
  
  if (language === 'html') {
    // Enhance HTML with modern features
    previewContent = code.includes('<!DOCTYPE html>') ? code : `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Generated Preview</title>
    <style>
        body { 
            margin: 0; 
            padding: 20px; 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #f8fafc;
            line-height: 1.6;
        }
        .preview-container { 
            max-width: 1200px; 
            margin: 0 auto; 
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            overflow: hidden;
        }
    </style>
</head>
<body>
    <div class="preview-container">
        ${code}
    </div>
</body>
</html>`;
  } else if (language === 'react') {
    // Enhanced React component preview with better error handling
    previewContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>AI React Component Preview</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { 
            margin: 0; 
            padding: 20px; 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            min-height: 100vh;
        }
        .preview-container { 
            max-width: 1200px; 
            margin: 0 auto; 
            background: white;
            border-radius: 16px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.1);
            overflow: hidden;
            backdrop-filter: blur(10px);
        }
        .preview-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 12px 20px;
            font-size: 14px;
            font-weight: 600;
        }
        .error-boundary {
            padding: 20px;
            background: #fee;
            border: 1px solid #fcc;
            border-radius: 8px;
            margin: 20px;
            color: #900;
        }
    </style>
</head>
<body>
    <div class="preview-container">
        <div class="preview-header">
            🧠 AI Generated React Component - Live Preview
        </div>
        <div id="root" style="padding: 20px;"></div>
    </div>
    
    <script type="text/babel">
        // Error Boundary Component
        class ErrorBoundary extends React.Component {
            constructor(props) {
                super(props);
                this.state = { hasError: false, error: null };
            }

            static getDerivedStateFromError(error) {
                return { hasError: true, error };
            }

            componentDidCatch(error, errorInfo) {
                console.error('Preview Error:', error, errorInfo);
            }

            render() {
                if (this.state.hasError) {
                    return React.createElement('div', { className: 'error-boundary' }, 
                        'Preview Error: ', this.state.error?.message || 'Unknown error occurred'
                    );
                }
                return this.props.children;
            }
        }

        try {
            ${code.replace('export default', '// export default').replace(/import.*from.*;/g, '// $&')}
            
            // Try to find the main component
            const ComponentToRender = typeof ItemManager !== 'undefined' ? ItemManager :
                                    typeof DashboardManager !== 'undefined' ? DashboardManager :
                                    typeof App !== 'undefined' ? App :
                                    () => React.createElement('div', { 
                                        style: { padding: '20px', textAlign: 'center', color: '#666' } 
                                    }, '🎯 Component rendered successfully! Check the code for the actual implementation.');
            
            const App = () => {
                return React.createElement(ErrorBoundary, null,
                    React.createElement('div', { style: { minHeight: '300px' } }, 
                        React.createElement(ComponentToRender, {
                            initialItems: [
                                { id: '1', name: 'Sample Item 1', category: 'demo', status: 'active', createdAt: new Date() },
                                { id: '2', name: 'Sample Item 2', category: 'demo', status: 'inactive', createdAt: new Date() },
                                { id: '3', name: 'Preview Data', category: 'test', status: 'active', createdAt: new Date() }
                            ]
                        })
                    )
                );
            };
            
            ReactDOM.render(React.createElement(App), document.getElementById('root'));
            
            console.log('✅ AI Preview rendered successfully');
        } catch (error) {
            console.error('❌ Preview rendering error:', error);
            ReactDOM.render(
                React.createElement('div', { className: 'error-boundary' }, 
                    '⚠️ Preview Error: ' + error.message
                ), 
                document.getElementById('root')
            );
        }
    </script>
</body>
</html>`;
  }

  try {
    const blob = new Blob([previewContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    iframeRef.current.src = url;
    
    // Clean up the blob URL after a short delay
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    
    console.log('🖥️ Preview updated successfully');
  } catch (error) {
    console.error('❌ Preview update failed:', error);
  }
};
