
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const ChatHeader = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-white py-4 px-6 md:px-8 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" className="mr-4">
          <Button variant="ghost" size="icon" className="text-gapfinder-600 hover:text-gapfinder-500 hover:bg-gapfinder-100">
            <Home className="h-5 w-5" />
          </Button>
        </Link>
        <div className="text-xl font-bold text-gapfinder-600">
          Gap<span className="text-gapfinder-500">Finder</span>
          <span className="ml-2 text-sm font-normal text-gray-500">Chat Assistant</span>
        </div>
      </div>
      <div className="flex items-center">
        <Button variant="outline" size="sm" className="border-gapfinder-500 text-gapfinder-600 hover:bg-gapfinder-500 hover:text-white">
          New Chat
        </Button>
      </div>
    </header>
  );
};

export default ChatHeader;
