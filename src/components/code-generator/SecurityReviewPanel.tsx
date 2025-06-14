
import React from "react";
import { AlertTriangle, ShieldCheck, Bug } from "lucide-react";

interface Issue {
  message: string;
  suggestion?: string;
  line?: number;
  canFix?: boolean;
  fixDescription?: string;
  fixLabel?: string;
}

interface SecurityReviewPanelProps {
  issues: Issue[];
  language: string;
  onClose?: () => void;
  onFix?: (index: number) => void;
}

const SecurityReviewPanel: React.FC<SecurityReviewPanelProps> = ({
  issues,
  language,
  onClose,
  onFix,
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
        <ul className="list-disc ml-6 space-y-2">
          {issues.map((issue, i) => (
            <li key={i} className="flex flex-col gap-1">
              <span>
                <span className="font-semibold">Issue:</span> {issue.message}
              </span>
              {issue.suggestion && (
                <div className="ml-1 text-sm text-yellow-800">
                  <span className="font-medium">Suggestion:</span> {issue.suggestion}
                </div>
              )}
              {issue.fixDescription && (
                <div className="ml-1 text-xs text-yellow-700">
                  <span className="font-medium">Best Practice:</span> {issue.fixDescription}
                </div>
              )}
              {issue.line !== undefined && (
                <div className="text-xs text-yellow-600">Line: {issue.line}</div>
              )}
              {onFix && issue.canFix && (
                <button
                  onClick={() => onFix(i)}
                  className="w-fit mt-1 text-xs border rounded border-green-500 px-2 py-1 text-green-700 hover:bg-green-50 transition"
                  title={issue.fixLabel || "Auto-fix this issue"}
                >
                  <Bug className="inline-block mr-1 h-3 w-3" />
                  {issue.fixLabel ? issue.fixLabel : "Fix"}
                </button>
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
