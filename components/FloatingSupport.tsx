import React, { useState, useEffect, useRef } from 'react';
import { ChevronUp, MessageSquare, X, Send, Loader2, ArrowUp, Bot } from 'lucide-react';
import { getProductRecommendation } from '../services/geminiService';

const FloatingSupport: React.FC = () => {
  // --- Scroll To Top Logic ---
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- Chat Widget Logic ---
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    {
      role: 'model',
      text: "Hello, please let me know how I can help. You can ask me anything you want about Nusyn gear.\n\nNusyn Team"
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isChatOpen) {
      scrollToBottom();
    }
  }, [messages, isChatOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setLoading(true);

    try {
      // Reusing the Gemini service from the main page
      const response = await getProductRecommendation(userText);
      setMessages(prev => [...prev, { role: 'model', text: response.text }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "I'm sorry, I'm having trouble connecting to the server right now." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end space-y-4">
      
      {/* Chat Window Popover */}
      {isChatOpen && (
        <div className="mb-2 w-[360px] h-[550px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-slide-up origin-bottom-right font-sans">
          
          {/* Header */}
          <div className="bg-nusyn-orange p-4 flex items-center justify-between shadow-sm relative z-10">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Bot className="w-6 h-6 text-nusyn-orange" />
               </div>
               <div>
                   <h3 className="font-bold text-white text-lg leading-none">Nusyn Assistant</h3>
                   <span className="text-white/80 text-xs">Online</span>
               </div>
            </div>
            <button 
                onClick={() => setIsChatOpen(false)} 
                className="text-white/80 hover:text-white transition-colors bg-white/10 rounded-full p-1"
            >
                <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4 custom-scrollbar">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-gray-900 text-white rounded-br-sm' 
                    : 'bg-white text-gray-800 border border-gray-200 rounded-bl-sm'
                }`}>
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                </div>
                {msg.role === 'model' && idx === 0 && (
                    <span className="text-[10px] text-gray-400 mt-1 ml-1">Nusyn</span>
                )}
              </div>
            ))}
            
            {loading && (
               <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-bl-sm shadow-sm flex items-center gap-2">
                     <Loader2 className="w-4 h-4 animate-spin text-nusyn-orange" />
                     <span className="text-xs text-gray-400">Typing...</span>
                  </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <form onSubmit={handleSend} className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Write a message..." 
                className="w-full bg-gray-100 text-gray-900 placeholder-gray-400 rounded-full py-3 pl-5 pr-12 focus:outline-none focus:ring-2 focus:ring-nusyn-orange/50 transition-all"
              />
              <button 
                type="submit" 
                disabled={!input.trim() || loading}
                className={`absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    input.trim() ? 'bg-nusyn-orange text-white hover:bg-orange-600 shadow-md' : 'bg-gray-200 text-gray-400'
                }`}
              >
                <ArrowUp className="w-4 h-4 font-bold" />
              </button>
            </form>
            <div className="text-center mt-2">
                 <p className="text-[10px] text-gray-400 flex items-center justify-center gap-1">
                    <MessageSquare className="w-3 h-3" /> Powered by Gemini AI
                 </p>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="flex flex-col items-center gap-4">
        
        {/* Chat Toggle Button */}
        <button 
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="relative group w-14 h-14 bg-nusyn-orange hover:bg-orange-600 rounded-full shadow-lg hover:shadow-orange-500/40 flex items-center justify-center transition-all duration-300 transform hover:scale-110 z-20"
            aria-label="Open Support Chat"
        >
            {isChatOpen ? (
                <X className="w-6 h-6 text-white" />
            ) : (
                <>
                    <MessageSquare className="w-6 h-6 text-white fill-white" />
                    <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full animate-pulse"></span>
                </>
            )}
        </button>

        {/* Scroll To Top Button */}
        <button 
            onClick={scrollToTop}
            className={`w-12 h-12 bg-gray-500/90 hover:bg-gray-700 backdrop-blur text-white rounded-full shadow-md flex items-center justify-center transition-all duration-500 transform ${
                showScroll ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-10 opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll to top"
        >
            <ChevronUp className="w-6 h-6" />
        </button>
      </div>

    </div>
  );
};

export default FloatingSupport;