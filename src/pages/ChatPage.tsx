
import React, { useState, useCallback } from 'react';
import ChatHeader from '@/components/ChatHeader';
import ChatMessages from '@/components/ChatMessages';
import ChatInput from '@/components/ChatInput';
import { Message } from '@/types/chat';
import { fetchAgentResponse } from '@/utils/api';
import { formatTimestamp } from '@/utils/dateFormat';
import { toast } from 'sonner';

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = useCallback(async (content: string) => {
    // Add user message to the chat
    const userMessage: Message = {
      role: 'user',
      content,
      timestamp: formatTimestamp(),
      status: 'sent',
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    
    try {
      // Send to API and get response
      const response = await fetchAgentResponse([...messages, userMessage]);
      
      // Add assistant response to the chat
      const assistantMessage: Message = {
        role: 'assistant',
        content: response,
        timestamp: formatTimestamp(),
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      toast.error("Failed to get a response. Please try again.");
      console.error("Error getting response:", error);
    } finally {
      setIsTyping(false);
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-screen">
      <ChatHeader />
      <div className="flex-1 overflow-hidden flex flex-col bg-gray-50">
        <ChatMessages messages={messages} isTyping={isTyping} />
        <ChatInput onSendMessage={handleSendMessage} isLoading={isTyping} />
      </div>
    </div>
  );
};

export default ChatPage;
