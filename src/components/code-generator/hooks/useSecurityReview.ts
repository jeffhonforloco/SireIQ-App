
import { useState } from "react";

export interface SecurityIssue {
  message: string;
  suggestion?: string;
  line?: number;
  canFix?: boolean;
  fixDescription?: string;
  fixLabel?: string;
}

export function useSecurityReview(code: string, language: string) {
  const [issues, setIssues] = useState<SecurityIssue[]>([]);

  function analyzeSecurity(currentCode: string = code, currentLanguage: string = language): SecurityIssue[] {
    const issues: SecurityIssue[] = [];
    const lines = currentCode.split('\n');
    const lang = currentLanguage.toLowerCase();

    if (["javascript", "react"].includes(lang)) {
      lines.forEach((line, idx) => {
        if (line.includes("eval(")) {
          issues.push({
            message: "Use of 'eval' detected.",
            suggestion: "Avoid using eval() due to the risk of arbitrary code execution.",
            fixDescription: "Comment out or remove all usages of eval().",
            fixLabel: "Remove eval()",
            line: idx + 1,
            canFix: true,
          });
        }
        if (line.match(/document\.write|innerHTML\s*=/)) {
          issues.push({
            message: "'document.write' or direct 'innerHTML' assignment detected.",
            suggestion: "Avoid document.write/innerHTML. Use safe DOM APIs or frameworks like React.",
            fixDescription: "Comment out these lines and add a note to use safer alternatives.",
            fixLabel: "Remove document.write/innerHTML",
            line: idx + 1,
            canFix: true,
          });
        }
        if (line.match(/dangerouslySetInnerHTML/)) {
          issues.push({
            message: "Use of 'dangerouslySetInnerHTML' detected.",
            suggestion: "Avoid using dangerouslySetInnerHTML except when absolutely necessary. Sanitize input if you must use it.",
            fixDescription: "Comment out dangerouslySetInnerHTML and add an explanation.",
            fixLabel: "Remove dangerouslySetInnerHTML",
            line: idx + 1,
            canFix: true,
          });
        }
        if (line.match(/on\w+=".+"/)) {
          issues.push({
            message: "Inline JavaScript event detected.",
            suggestion: "Always use event handlers in your framework instead of HTML attributes (onClick, etc).",
            fixDescription: "",
            line: idx + 1,
            canFix: false,
          });
        }
      });
    }
    if (lang === "html") {
      lines.forEach((line, idx) => {
        if (line.match(/on\w+=".+"/)) {
          issues.push({
            message: "Inline JavaScript event found (e.g. onclick).",
            suggestion: "Move scripts into separate JS files and avoid inline handlers.",
            fixDescription: "",
            line: idx + 1,
            canFix: false,
          });
        }
        if (line.match(/<script[\s>]/i)) {
          issues.push({
            message: "Inline <script> tag detected.",
            suggestion: "Avoid inline scripts. Use external files and never inject untrusted content.",
            fixDescription: "",
            line: idx + 1,
            canFix: false,
          });
        }
      });
    }
    return issues;
  }

  function autoFixCode(currentCode: string, allIssues: SecurityIssue[], issueIndex: number) {
    let lines = currentCode.split('\n');
    const issue = allIssues[issueIndex];
    if (!issue) return currentCode;

    // Fix eval()
    if (issue.message.includes('eval')) {
      lines = lines.map(line =>
        line.includes('eval(')
          ? '// [SECURITY FIX] eval() usage removed. DO NOT USE EVAL!\n//' + line
          : line
      );
    }
    // Fix document.write or innerHTML
    if (issue.message.includes('document.write') || issue.message.includes('innerHTML')) {
      lines = lines.map(line =>
        line.match(/document\.write|innerHTML\s*=/)
          ? '// [SECURITY FIX] document.write or innerHTML usage removed. Use safer alternatives.\n//' + line
          : line
      );
    }
    // Remove dangerouslySetInnerHTML
    if (issue.message.includes('dangerouslySetInnerHTML')) {
      lines = lines.map(line =>
        line.includes('dangerouslySetInnerHTML')
          ? '// [SECURITY FIX] dangerouslySetInnerHTML removed for safety.\n//' + line
          : line
      );
    }
    return lines.join('\n');
  }

  function runReview() {
    const found = analyzeSecurity();
    setIssues(found);
    return found;
  }

  function fixIssue(currentCode: string, index: number) {
    const fixed = autoFixCode(currentCode, issues, index);
    const newIssues = analyzeSecurity(fixed, language);
    setIssues(newIssues);
    return fixed;
  }

  return {
    issues,
    runReview,
    fixIssue,
    analyzeSecurity,
    autoFixCode,
    setIssues,
  };
}
