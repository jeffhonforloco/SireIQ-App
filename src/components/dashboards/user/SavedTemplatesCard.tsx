
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bookmark, ArrowRight, PlusCircle, Edit, Trash2, Copy } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/components/ui/sonner';

interface Template {
  id: number;
  title: string;
  description: string;
  icon: string;
  category?: string;
  lastUsed?: string;
  useCount?: number;
}

interface SavedTemplatesCardProps {
  templates: Template[];
  onTemplateSelect?: (template: Template) => void;
  onCreateTemplate?: () => void;
  onEditTemplate?: (template: Template) => void;
  onDeleteTemplate?: (templateId: number) => void;
}

const SavedTemplatesCard = ({ 
  templates, 
  onTemplateSelect, 
  onCreateTemplate,
  onEditTemplate,
  onDeleteTemplate 
}: SavedTemplatesCardProps) => {
  const [hoveredTemplate, setHoveredTemplate] = useState<number | null>(null);

  const handleTemplateClick = (template: Template) => {
    if (onTemplateSelect) {
      onTemplateSelect(template);
      toast.success(`Template "${template.title}" loaded`);
    }
  };

  const handleEdit = (e: React.MouseEvent, template: Template) => {
    e.stopPropagation();
    if (onEditTemplate) {
      onEditTemplate(template);
    }
  };

  const handleDelete = (e: React.MouseEvent, templateId: number) => {
    e.stopPropagation();
    if (onDeleteTemplate) {
      onDeleteTemplate(templateId);
      toast.success('Template deleted');
    }
  };

  const handleCopy = (e: React.MouseEvent, template: Template) => {
    e.stopPropagation();
    // Copy template content to clipboard
    navigator.clipboard.writeText(`Template: ${template.title}\n${template.description}`);
    toast.success('Template copied to clipboard');
  };

  const getCategoryColor = (category?: string) => {
    switch (category) {
      case 'Business': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Creative': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Technical': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Marketing': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default: return 'bg-sireiq-accent/20 text-sireiq-cyan border-sireiq-accent/30';
    }
  };

  return (
    <Card className="bg-sireiq-darker border-sireiq-accent/20">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg flex items-center">
            <Bookmark className="w-5 h-5 mr-2 text-sireiq-cyan" />
            Saved Templates
          </CardTitle>
          <Badge variant="secondary" className="bg-sireiq-accent/20 text-sireiq-cyan">
            {templates.length}
          </Badge>
        </div>
        <CardDescription>Your frequently used templates</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 max-h-80 overflow-y-auto">
        {templates.length === 0 ? (
          <div className="text-center py-8">
            <Bookmark className="w-12 h-12 mx-auto mb-4 text-sireiq-accent/40" />
            <p className="text-sireiq-light/70 mb-4">No saved templates yet</p>
            <Button 
              onClick={onCreateTemplate}
              className="bg-gradient-to-r from-sireiq-cyan to-sireiq-purple hover:opacity-90"
            >
              Create your first template
            </Button>
          </div>
        ) : (
          templates.map(template => (
            <div 
              key={template.id} 
              className="flex items-center p-3 rounded-lg hover:bg-sireiq-accent/10 cursor-pointer group transition-colors"
              onClick={() => handleTemplateClick(template)}
              onMouseEnter={() => setHoveredTemplate(template.id)}
              onMouseLeave={() => setHoveredTemplate(null)}
            >
              <div className="bg-sireiq-accent/20 p-2 rounded-full mr-3 flex-shrink-0">
                <span className="text-xl">{template.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-medium text-sm truncate">{template.title}</h3>
                  {template.category && (
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getCategoryColor(template.category)}`}
                    >
                      {template.category}
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-sireiq-light/70 truncate">{template.description}</p>
                {template.useCount && (
                  <p className="text-xs text-sireiq-light/50 mt-1">Used {template.useCount} times</p>
                )}
              </div>
              <div className={`flex items-center gap-1 transition-opacity ${
                hoveredTemplate === template.id ? 'opacity-100' : 'opacity-0'
              }`}>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 text-sireiq-cyan hover:text-sireiq-cyan/80"
                  title="Use template"
                >
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 text-blue-400 hover:text-blue-300"
                  onClick={(e) => handleCopy(e, template)}
                  title="Copy template"
                >
                  <Copy className="w-4 h-4" />
                </Button>
                {onEditTemplate && (
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-yellow-400 hover:text-yellow-300"
                    onClick={(e) => handleEdit(e, template)}
                    title="Edit template"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                )}
                {onDeleteTemplate && (
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-red-400 hover:text-red-300"
                    onClick={(e) => handleDelete(e, template.id)}
                    title="Delete template"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          ))
        )}
      </CardContent>
      {templates.length > 0 && (
        <CardFooter className="pt-4">
          <Button 
            variant="outline" 
            className="w-full justify-center gap-2 border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan"
            onClick={onCreateTemplate}
          >
            <PlusCircle className="w-4 h-4 text-sireiq-cyan" />
            <span>Create Template</span>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default SavedTemplatesCard;
