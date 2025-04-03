
import React, { useEffect, useRef } from 'react';
import ChatBubble from './ChatBubble';
import { Message } from '@/types/chat';

interface ChatMessagesProps {
  messages: Message[];
  isTyping: boolean;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages, isTyping }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-6">
      {messages.length === 0 ? (
        <div className="h-full flex flex-col items-center justify-center">
          <div className="text-3xl font-bold text-gapfinder-500 mb-2">Welcome to GapFinder</div>
          <p className="text-gray-500 text-center max-w-md">
            Ask me anything to get started. I'll help identify and fill knowledge gaps in your queries.
          </p>
        </div>
      ) : (
        messages.map((message, index) => (
          <ChatBubble
            key={index}
            message={message.content}
            isUser={message.role === 'user'}
            timestamp={message.timestamp}
            status={message.status}
          />
        ))
      )}
      
      {isTyping && (
        <ChatBubble
          message=""
          isUser={false}
          timestamp="Now"
          status="loading"
        />
      )}
      
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
