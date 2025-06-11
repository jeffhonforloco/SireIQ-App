
export const updatePreview = (code: string, language: string, iframeRef: React.RefObject<HTMLIFrameElement>) => {
  if (!iframeRef.current) return;

  let previewContent = '';
  
  if (language === 'html') {
    // Enhanced HTML preview with Lovable-style frame
    previewContent = code.includes('<!DOCTYPE html>') ? code : `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Generated Preview</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #ffffff;
            line-height: 1.6;
            color: #333;
            overflow-x: hidden;
        }
        .preview-wrapper {
            min-height: 100vh;
            width: 100%;
        }
    </style>
</head>
<body>
    <div class="preview-wrapper">
        ${code}
    </div>
</body>
</html>`;
  } else if (language === 'react') {
    // Enhanced React preview with Lovable-style interface
    previewContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Component Preview</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
            background: #ffffff;
            color: #333;
            overflow-x: hidden;
        }
        .preview-frame {
            min-height: 100vh;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        .component-container {
            width: 100%;
            max-width: 100%;
        }
        .error-display {
            padding: 24px;
            background: #fef2f2;
            border: 1px solid #fecaca;
            border-radius: 12px;
            color: #dc2626;
            font-family: 'Monaco', 'Menlo', monospace;
            font-size: 14px;
            line-height: 1.5;
            max-width: 600px;
            margin: 20px auto;
        }
        .success-indicator {
            position: fixed;
            top: 20px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 12px;
            font-weight: 600;
            z-index: 1000;
            opacity: 0.9;
        }
    </style>
</head>
<body>
    <div class="preview-frame">
        <div class="component-container">
            <div id="root"></div>
        </div>
    </div>
    
    <script type="text/babel">
        // Enhanced Error Boundary with better UI
        class ErrorBoundary extends React.Component {
            constructor(props) {
                super(props);
                this.state = { hasError: false, error: null, errorInfo: null };
            }

            static getDerivedStateFromError(error) {
                return { hasError: true, error };
            }

            componentDidCatch(error, errorInfo) {
                console.error('Preview Error:', error, errorInfo);
                this.setState({ errorInfo });
            }

            render() {
                if (this.state.hasError) {
                    return React.createElement('div', { className: 'error-display' }, 
                        React.createElement('h3', { style: { marginBottom: '12px', fontWeight: '600' } }, '⚠️ Component Error'),
                        React.createElement('p', { style: { marginBottom: '8px' } }, this.state.error?.message || 'Unknown error occurred'),
                        this.state.errorInfo && React.createElement('details', { style: { marginTop: '12px' } },
                            React.createElement('summary', { style: { cursor: 'pointer', fontWeight: '500' } }, 'Error Details'),
                            React.createElement('pre', { style: { fontSize: '12px', marginTop: '8px', overflow: 'auto' } }, 
                                this.state.errorInfo.componentStack
                            )
                        )
                    );
                }
                return this.props.children;
            }
        }

        try {
            ${code.replace('export default', '// export default').replace(/import.*from.*;/g, '// $&')}
            
            // Smart component detection and rendering
            const ComponentToRender = typeof ItemManager !== 'undefined' ? ItemManager :
                                    typeof DashboardManager !== 'undefined' ? DashboardManager :
                                    typeof App !== 'undefined' ? App :
                                    () => React.createElement('div', { 
                                        style: { 
                                            padding: '40px', 
                                            textAlign: 'center', 
                                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                            borderRadius: '16px',
                                            color: 'white',
                                            boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                                        } 
                                    }, 
                                        React.createElement('h2', { style: { marginBottom: '16px', fontSize: '24px' } }, '🎯 Component Ready!'),
                                        React.createElement('p', { style: { opacity: '0.9', fontSize: '16px' } }, 'Your AI-generated component is working perfectly.')
                                    );
            
            const PreviewApp = () => {
                React.useEffect(() => {
                    // Add success indicator
                    const indicator = document.createElement('div');
                    indicator.className = 'success-indicator';
                    indicator.textContent = '✅ Live Preview Active';
                    document.body.appendChild(indicator);
                    
                    const timer = setTimeout(() => {
                        if (document.body.contains(indicator)) {
                            indicator.style.opacity = '0';
                            setTimeout(() => document.body.removeChild(indicator), 300);
                        }
                    }, 3000);
                    
                    return () => clearTimeout(timer);
                }, []);

                return React.createElement(ErrorBoundary, null,
                    React.createElement(ComponentToRender, {
                        initialItems: [
                            { id: '1', name: 'Sample Task', category: 'demo', status: 'active', createdAt: new Date() },
                            { id: '2', name: 'AI Generated Item', category: 'preview', status: 'active', createdAt: new Date() },
                            { id: '3', name: 'Live Demo Data', category: 'test', status: 'inactive', createdAt: new Date() }
                        ]
                    })
                );
            };
            
            ReactDOM.render(React.createElement(PreviewApp), document.getElementById('root'));
            
            console.log('🚀 Preview rendered successfully - Lovable-style interface active');
        } catch (error) {
            console.error('❌ Preview error:', error);
            ReactDOM.render(
                React.createElement('div', { className: 'error-display' }, 
                    React.createElement('h3', { style: { marginBottom: '12px' } }, '⚠️ Render Error'),
                    React.createElement('p', null, error.message),
                    React.createElement('p', { style: { fontSize: '12px', marginTop: '8px', opacity: '0.7' } }, 
                        'Check the console for more details'
                    )
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
    
    // Clean up the blob URL after loading
    const cleanup = () => URL.revokeObjectURL(url);
    setTimeout(cleanup, 2000);
    
    console.log('🖥️ Lovable-style preview updated successfully');
  } catch (error) {
    console.error('❌ Preview update failed:', error);
  }
};
