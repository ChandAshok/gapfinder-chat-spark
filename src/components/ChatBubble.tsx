
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatBubbleProps {
  message: string;
  isUser: boolean;
  timestamp: string;
  status?: 'sent' | 'delivered' | 'read' | 'loading';
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ 
  message, 
  isUser, 
  timestamp,
  status = 'read'
}) => {
  return (
    <div className={cn(
      "flex flex-col max-w-[80%] animate-in slide-in-from-bottom-2 duration-100 ease-in",
      isUser ? "ml-auto items-end" : "mr-auto"
    )}>
      <div className={cn(
        "p-4 rounded-xl shadow-sm",
        isUser 
          ? "bg-gapfinder-500 text-white rounded-br-none"
          : "bg-gray-100 text-gray-800 rounded-bl-none"
      )}>
        {status === 'loading' ? (
          <div className="flex space-x-1 py-2 px-3">
            <span className={cn(
              "h-2 w-2 rounded-full animate-dot-flashing delay-0",
              isUser ? "bg-white" : "bg-gray-500"
            )}></span>
            <span className={cn(
              "h-2 w-2 rounded-full animate-dot-flashing delay-75",
              isUser ? "bg-white" : "bg-gray-500"
            )}></span>
            <span className={cn(
              "h-2 w-2 rounded-full animate-dot-flashing delay-150",
              isUser ? "bg-white" : "bg-gray-500"
            )}></span>
          </div>
        ) : (
          <p className="whitespace-pre-wrap">{message}</p>
        )}
      </div>
      <div className="flex items-center mt-1 text-xs text-gray-500">
        <span>{timestamp}</span>
        {isUser && status !== 'loading' && (
          <CheckCircle2 className="h-3 w-3 ml-1 text-gapfinder-400" />
        )}
      </div>
    </div>
  );
};

export default ChatBubble;
