
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, ArrowRight, PlusCircle, Clock, Trash2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Chat {
  id: number;
  title: string;
  date: string;
  icon: string;
  lastMessage?: string;
  messageCount?: number;
}

interface RecentChatsCardProps {
  chats: Chat[];
  onChatSelect?: (chat: Chat) => void;
  onNewChat?: () => void;
  onDeleteChat?: (chatId: number) => void;
}

const RecentChatsCard = ({ chats, onChatSelect, onNewChat, onDeleteChat }: RecentChatsCardProps) => {
  const handleChatClick = (chat: Chat) => {
    if (onChatSelect) {
      onChatSelect(chat);
    }
  };

  const handleDelete = (e: React.MouseEvent, chatId: number) => {
    e.stopPropagation();
    if (onDeleteChat) {
      onDeleteChat(chatId);
    }
  };

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInDays < 7) return `${diffInDays}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <Card className="bg-sireiq-darker border-sireiq-accent/20">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg flex items-center">
            <MessageSquare className="w-5 h-5 mr-2 text-sireiq-cyan" />
            Recent Chats
          </CardTitle>
          <Badge variant="secondary" className="bg-sireiq-accent/20 text-sireiq-cyan">
            {chats.length}
          </Badge>
        </div>
        <CardDescription>Continue your conversations</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 max-h-80 overflow-y-auto">
        {chats.length === 0 ? (
          <div className="text-center py-8">
            <MessageSquare className="w-12 h-12 mx-auto mb-4 text-sireiq-accent/40" />
            <p className="text-sireiq-light/70 mb-4">No recent chats yet</p>
            <Button 
              onClick={onNewChat}
              className="bg-gradient-to-r from-sireiq-cyan to-sireiq-purple hover:opacity-90"
            >
              Start your first chat
            </Button>
          </div>
        ) : (
          chats.map(chat => (
            <div 
              key={chat.id} 
              className="flex items-center p-3 rounded-lg hover:bg-sireiq-accent/10 cursor-pointer group transition-colors"
              onClick={() => handleChatClick(chat)}
            >
              <div className="bg-sireiq-accent/20 p-2 rounded-full mr-3 flex-shrink-0">
                <span className="text-xl">{chat.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-sm truncate">{chat.title}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <Clock className="w-3 h-3 text-sireiq-light/50" />
                  <span className="text-xs text-sireiq-light/70">{getTimeAgo(chat.date)}</span>
                  {chat.messageCount && (
                    <Badge variant="outline" className="text-xs border-sireiq-accent/30">
                      {chat.messageCount} messages
                    </Badge>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 text-sireiq-cyan hover:text-sireiq-cyan/80"
                >
                  <ArrowRight className="w-4 h-4" />
                </Button>
                {onDeleteChat && (
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-red-400 hover:text-red-300"
                    onClick={(e) => handleDelete(e, chat.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          ))
        )}
      </CardContent>
      {chats.length > 0 && (
        <CardFooter className="pt-4">
          <Button 
            variant="outline" 
            className="w-full justify-center gap-2 border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan"
            onClick={onNewChat}
          >
            <PlusCircle className="w-4 h-4 text-sireiq-cyan" />
            <span>New Chat</span>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default RecentChatsCard;
