
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class AgentErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Agent component error:", error, errorInfo);
    // In a production app, we would log this to an error tracking service
  }

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      
      return (
        <div className="p-4 border border-red-500/30 bg-red-500/10 rounded-lg text-red-400 flex items-center gap-3">
          <AlertTriangle size={20} />
          <div>
            <h3 className="font-medium mb-1">Something went wrong with this agent</h3>
            <p className="text-sm opacity-80">
              {this.state.error?.message || "There was an error loading this AI agent. Please try again later."}
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default AgentErrorBoundary;
