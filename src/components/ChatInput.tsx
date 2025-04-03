
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Paperclip, X } from 'lucide-react';
import { toast } from 'sonner';

interface ChatInputProps {
  onSendMessage: (message: string, attachment?: File) => void;
  isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [message, setMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if ((message.trim() || selectedFile) && !isLoading) {
      onSendMessage(message, selectedFile || undefined);
      setMessage('');
      setSelectedFile(null);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (limit to 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size exceeds 5MB limit");
        return;
      }
      
      setSelectedFile(file);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex flex-col space-y-2 p-4 border-t border-gray-200 bg-white"
    >
      {selectedFile && (
        <div className="flex items-center bg-gray-100 p-2 rounded">
          <span className="text-sm text-gray-600 truncate flex-1">
            {selectedFile.name}
          </span>
          <Button 
            type="button" 
            variant="ghost" 
            size="icon"
            onClick={handleRemoveFile}
            className="h-6 w-6 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
      
      <div className="flex items-center space-x-2">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
        />
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={triggerFileInput}
          disabled={isLoading}
          className="text-gray-500 hover:text-gray-700"
        >
          <Paperclip className="h-4 w-4" />
        </Button>
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
          className="flex-1 border-gray-300 focus:border-gapfinder-500 focus:ring-1 focus:ring-gapfinder-500"
          disabled={isLoading}
        />
        <Button 
          type="submit" 
          disabled={((!message.trim() && !selectedFile) || isLoading)}
          className="bg-gapfinder-500 hover:bg-gapfinder-600 text-white"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};

export default ChatInput;
