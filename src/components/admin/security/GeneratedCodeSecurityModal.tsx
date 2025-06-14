
import React from "react";
import { Shield } from "lucide-react";

interface GeneratedCodeSecurityModalProps {
  open: boolean;
  onClose: () => void;
  stats: {
    issuesFound: number;
    autoFixes: number;
    mostCommonIssue: string | null;
    lastScan: string | null;
  };
}

const GeneratedCodeSecurityModal: React.FC<GeneratedCodeSecurityModalProps> = ({
  open,
  onClose,
  stats,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-sireiq-dark border border-sireiq-accent/40 rounded-lg shadow-lg p-8 w-full max-w-lg relative animate-fade-in">
        <button
          className="absolute top-2 right-2 text-xl text-sireiq-cyan hover:text-sireiq-light focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5 text-yellow-400" />
          Generated Code Security Overview
        </h3>
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-sireiq-light/60">Total Issues:</span>
            <span className="text-base font-bold text-yellow-400">{stats.issuesFound}</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-sireiq-light/60">Auto-Fixed:</span>
            <span className="text-base font-bold text-sireiq-cyan">{stats.autoFixes}</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-sireiq-light/60">Most Common Issue:</span>
            <span className="text-base font-bold text-gray-300">
              {stats.mostCommonIssue ?? "N/A"}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-sireiq-light/60">Last Review:</span>
            <span className="text-base font-bold text-gray-300">
              {stats.lastScan ?? "No review yet"}
            </span>
          </div>
        </div>
        <div className="text-sm text-sireiq-light/70 mb-4">
          <p>
            This area will give an overview of all security issues found in user-generated code,
            helping admins monitor trends, auto-fix rates, and ensure ongoing secure code generation.
          </p>
          <p className="mt-2">
            <span className="font-semibold">No data?</span> This panel will auto-populate as more code is generated and reviewed.
          </p>
        </div>
        <button
          className="mt-4 px-4 py-2 rounded bg-yellow-400 text-sireiq-dark font-semibold hover:bg-yellow-300"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default GeneratedCodeSecurityModal;
