
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, MessageCircle, Zap, Shield, BarChart } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-accent">
      {/* Header / Navigation */}
      <header className="w-full py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-gapfinder-600">
            Gap<span className="text-gapfinder-500">Finder</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-gray-700 hover:text-gapfinder-600 transition-colors duration-200">Features</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-gapfinder-600 transition-colors duration-200">How It Works</a>
          <Link to="/chat">
            <Button variant="outline" className="border-gapfinder-500 text-gapfinder-600 hover:bg-gapfinder-500 hover:text-white transition-colors duration-200">
              Try Now
            </Button>
          </Link>
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="sm">
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col md:flex-row px-6 md:px-12 py-12 md:py-24">
        <div className="md:w-1/2 flex flex-col justify-center mb-12 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-gapfinder-600 mb-6">
            Meet Your Intelligent AI Assistant
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            GapFinder uses advanced AI to understand your needs, answer questions, 
            and find the information gaps in your knowledge.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/chat">
              <Button className="w-full sm:w-auto bg-gapfinder-500 hover:bg-gapfinder-600 text-white">
                Start Chatting <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="#how-it-works">
              <Button variant="outline" className="w-full sm:w-auto border-gapfinder-500 text-gapfinder-600 hover:bg-gapfinder-500 hover:text-white">
                Learn More
              </Button>
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl border border-gray-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
              <div className="ml-auto text-sm text-gray-500">GapFinder AI</div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-end">
                <div className="bg-gray-100 p-3 rounded-lg max-w-[80%]">
                  <p className="text-gray-800">How can you help me find information gaps?</p>
                </div>
              </div>
              <div className="flex">
                <div className="bg-gapfinder-500 p-3 rounded-lg text-white max-w-[80%]">
                  <p>I can analyze your questions and identify areas where your knowledge might be incomplete. Then I'll suggest resources or explanations to fill those gaps!</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-gray-100 p-3 rounded-lg max-w-[80%]">
                  <p className="text-gray-800">That sounds amazing. Can we try it now?</p>
                </div>
              </div>
              <div className="flex">
                <div className="bg-gapfinder-500 p-3 rounded-lg text-white max-w-[80%]">
                  <div className="flex space-x-1">
                    <span className="h-2 w-2 rounded-full bg-white animate-dot-flashing delay-0"></span>
                    <span className="h-2 w-2 rounded-full bg-white animate-dot-flashing delay-75"></span>
                    <span className="h-2 w-2 rounded-full bg-white animate-dot-flashing delay-150"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gapfinder-600 mb-12">
            Powerful Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-accent p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-gapfinder-500 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gapfinder-600 mb-2">Natural Conversations</h3>
              <p className="text-gray-700">Engage in fluid, human-like conversations that feel natural and intuitive.</p>
            </div>
            <div className="bg-accent p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-gapfinder-500 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gapfinder-600 mb-2">Instant Responses</h3>
              <p className="text-gray-700">Get immediate, accurate answers to your questions without waiting.</p>
            </div>
            <div className="bg-accent p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-gapfinder-500 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gapfinder-600 mb-2">Private & Secure</h3>
              <p className="text-gray-700">Your conversations are private and protected with enterprise-grade security.</p>
            </div>
            <div className="bg-accent p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-gapfinder-500 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gapfinder-600 mb-2">Gap Analysis</h3>
              <p className="text-gray-700">Identify knowledge gaps and receive targeted recommendations to fill them.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 px-6 md:px-12 bg-accent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gapfinder-600 mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-gapfinder-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-6">1</div>
              <h3 className="text-xl font-semibold text-gapfinder-600 mb-2">Ask Your Question</h3>
              <p className="text-gray-700">Type your question or topic of interest in the chat interface.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-gapfinder-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-6">2</div>
              <h3 className="text-xl font-semibold text-gapfinder-600 mb-2">AI Processing</h3>
              <p className="text-gray-700">Our advanced AI analyzes your query and identifies potential knowledge gaps.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-gapfinder-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-6">3</div>
              <h3 className="text-xl font-semibold text-gapfinder-600 mb-2">Get Comprehensive Results</h3>
              <p className="text-gray-700">Receive detailed answers that address your question and fill in knowledge gaps.</p>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <Link to="/chat">
              <Button className="bg-gapfinder-500 hover:bg-gapfinder-600 text-white">
                Try It Now <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-bold text-gapfinder-600 mb-4 md:mb-0">
            Gap<span className="text-gapfinder-500">Finder</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gapfinder-500">Terms</a>
            <a href="#" className="text-gray-600 hover:text-gapfinder-500">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-gapfinder-500">Contact</a>
          </div>
          <div className="mt-4 md:mt-0 text-gray-500 text-sm">
            © 2025 GapFinder AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
