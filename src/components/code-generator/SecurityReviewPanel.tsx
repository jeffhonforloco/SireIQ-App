
import React from "react";
import { AlertTriangle, ShieldCheck } from "lucide-react";

interface Issue {
  message: string;
  suggestion?: string;
  line?: number;
}

interface SecurityReviewPanelProps {
  issues: Issue[];
  language: string;
  onClose?: () => void;
}

const SecurityReviewPanel: React.FC<SecurityReviewPanelProps> = ({
  issues,
  language,
  onClose,
}) => {
  return (
    <div className="mt-6 rounded-lg border border-yellow-400 bg-yellow-50/50 p-4 text-yellow-900 relative">
      <div className="flex items-center gap-2 mb-2">
        <AlertTriangle className="h-5 w-5 text-yellow-600" />
        <span className="font-bold text-yellow-900">Security Review</span>
        {onClose && (
          <button
            className="absolute right-2 top-2 text-xs text-yellow-700 hover:underline"
            onClick={onClose}
          >
            Close
          </button>
        )}
      </div>
      {issues.length ? (
        <ul className="list-disc ml-6 space-y-1">
          {issues.map((issue, i) => (
            <li key={i}>
              <span className="font-semibold">Issue:</span> {issue.message}
              {issue.suggestion && (
                <div className="ml-1 text-sm text-yellow-800">
                  <span className="font-medium">Suggestion:</span> {issue.suggestion}
                </div>
              )}
              {issue.line !== undefined && (
                <div className="text-xs text-yellow-600">Line: {issue.line}</div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex items-center gap-2 text-green-700 font-medium">
          <ShieldCheck className="h-5 w-5" />
          No obvious security issues detected in this {language} code.
        </div>
      )}
    </div>
  );
};

export default SecurityReviewPanel;
