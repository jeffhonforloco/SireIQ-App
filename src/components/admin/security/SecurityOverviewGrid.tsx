
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Category {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  score: number;
  status: string;
  description: string;
  special?: boolean;
}

interface SecurityOverviewGridProps {
  categories: Category[];
  codeSecurityStats: {
    issuesFound: number;
    autoFixes: number;
    mostCommonIssue: string | null;
    lastScan: string | null;
  };
  onCodeSecModal: () => void;
  onCategoryClick: (value: string) => void;
  getStatusColor: (status: string) => string;
  getScoreColor: (score: number) => string;
}

const SecurityOverviewGrid: React.FC<SecurityOverviewGridProps> = ({
  categories,
  codeSecurityStats,
  onCodeSecModal,
  onCategoryClick,
  getStatusColor,
  getScoreColor,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {categories.map((category) => {
        const IconComponent = category.icon;
        if (category.special) {
          return (
            <Card
              key={category.id}
              className="bg-sireiq-darker border-sireiq-accent/20 hover:border-sireiq-cyan/50 transition-colors cursor-pointer"
              onClick={onCodeSecModal}
            >
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between text-lg">
                  <div className="flex items-center">
                    <IconComponent className="w-5 h-5 mr-2 text-yellow-400" />
                    {category.title}
                  </div>
                  <div className={`text-sm font-bold text-blue-400`}>
                    {codeSecurityStats.issuesFound ?? 0} issues
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-sireiq-light/70 mb-2">
                  {category.description}
                </p>
                <div className="text-xs font-medium text-yellow-400">
                  {codeSecurityStats.lastScan
                    ? `Last Scan: ${codeSecurityStats.lastScan}`
                    : "No code scans yet."}
                </div>
              </CardContent>
            </Card>
          );
        }
        return (
          <Card
            key={category.id}
            className="bg-sireiq-darker border-sireiq-accent/20 hover:border-sireiq-cyan/50 transition-colors cursor-pointer"
            onClick={() => onCategoryClick(category.id)}
          >
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between text-lg">
                <div className="flex items-center">
                  <IconComponent className="w-5 h-5 mr-2 text-sireiq-cyan" />
                  {category.title}
                </div>
                <div className={`text-sm font-bold ${getScoreColor(category.score)}`}>
                  {category.score}%
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-sireiq-light/70 mb-2">{category.description}</p>
              <div className={`text-xs font-medium ${getStatusColor(category.status)}`}>
                {category.status.replace("-", " ").toUpperCase()}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default SecurityOverviewGrid;
