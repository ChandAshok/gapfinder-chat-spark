
export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  status?: 'sent' | 'delivered' | 'read' | 'loading';
  attachment?: {
    name: string;
    type: string;
    url: string;
  };
}

export interface ChatState {
  messages: Message[];
  isTyping: boolean;
}
