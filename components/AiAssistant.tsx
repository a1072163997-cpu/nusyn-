import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Bot, User, Loader2 } from 'lucide-react';
import { getProductRecommendation } from '../services/geminiService';
import { ChatMessage, Product } from '../types';
import { PRODUCTS } from '../constants';

interface AiAssistantProps {
  onViewProduct: (id: string) => void;
}

const AiAssistant: React.FC<AiAssistantProps> = ({ onViewProduct }) => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm NusynAI. Tell me about your setup or what you need (e.g., 'I need a fast drive for video editing on a Mac'), and I'll find the perfect gear for you." }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userMsg = query;
    setQuery('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const response = await getProductRecommendation(userMsg);
    
    setMessages(prev => [...prev, { 
      role: 'model', 
      text: response.text,
      isProductRecommendation: !!response.recommendedProductId,
      recommendedProductId: response.recommendedProductId
    }]);
    setLoading(false);
  };

  const getProductById = (id: string): Product | undefined => {
    return PRODUCTS.find(p => p.id === id);
  };

  return (
    <section id="ai-help" className="py-20 bg-white relative overflow-hidden border-t border-gray-100">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-full mb-4">
            <Sparkles className="w-6 h-6 text-nusyn-orange" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Find Your Perfect Match</h2>
          <p className="text-gray-500">Powered by Gemini AI, trained on Nusyn engineering specs.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[600px]">
          
          {/* Chat Window */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start gap-3`}>
                    
                    {/* Avatar */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${msg.role === 'user' ? 'bg-gray-200' : 'bg-nusyn-orange'}`}>
                        {msg.role === 'user' ? <User className="w-5 h-5 text-gray-600" /> : <Bot className="w-5 h-5 text-white" />}
                    </div>

                    {/* Bubble */}
                    <div className={`p-4 rounded-2xl shadow-sm ${msg.role === 'user' ? 'bg-gray-900 text-white rounded-tr-none' : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none'}`}>
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                        
                        {/* Embedded Product Recommendation Card */}
                        {msg.isProductRecommendation && msg.recommendedProductId && (
                           (() => {
                             const prod = getProductById(msg.recommendedProductId);
                             if (!prod) return null;
                             return (
                               <div className="mt-4 bg-white rounded-xl p-3 border border-gray-200 flex gap-4 items-center group cursor-pointer hover:border-nusyn-orange transition-colors shadow-sm" onClick={() => onViewProduct(prod.id)}>
                                  <img src={prod.image} alt={prod.name} className="w-16 h-16 object-contain bg-gray-50 rounded-lg p-1" />
                                  <div>
                                    <h4 className="text-gray-900 font-bold text-sm">{prod.name}</h4>
                                    <p className="text-nusyn-orange font-bold text-sm">${prod.price}</p>
                                  </div>
                                  <div className="ml-auto">
                                     <button className="px-3 py-1 bg-gray-900 text-white text-xs font-bold rounded hover:bg-nusyn-orange transition-colors">View</button>
                                  </div>
                               </div>
                             );
                           })()
                        )}
                    </div>
                </div>
              </div>
            ))}
            
            {loading && (
              <div className="flex justify-start">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-nusyn-orange flex items-center justify-center">
                        <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded-2xl rounded-tl-none flex items-center gap-2 shadow-sm">
                        <Loader2 className="w-4 h-4 animate-spin text-nusyn-orange" />
                        <span className="text-sm text-gray-500">Analyzing specs...</span>
                    </div>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-200">
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Describe your workflow or device..."
                className="w-full bg-gray-50 text-gray-900 border border-gray-200 rounded-xl py-4 pl-5 pr-14 focus:outline-none focus:border-nusyn-orange focus:ring-1 focus:ring-nusyn-orange transition-all placeholder-gray-400"
              />
              <button 
                type="submit" 
                disabled={loading || !query.trim()}
                className="absolute right-2 top-2 bottom-2 bg-nusyn-orange hover:bg-orange-600 text-white rounded-lg px-4 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAssistant;