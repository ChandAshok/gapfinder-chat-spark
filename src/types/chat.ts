
export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  status?: 'sent' | 'delivered' | 'read' | 'loading';
}

export interface ChatState {
  messages: Message[];
  isTyping: boolean;
}
