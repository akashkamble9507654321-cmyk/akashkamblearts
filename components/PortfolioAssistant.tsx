
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, Loader2 } from 'lucide-react';

const PortfolioAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleQuery = async () => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    setResponse(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const res = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `User asks about this portfolio: "${query}". Context: This is Elysian, a 2026 creative portfolio. Key themes: Conceptual sketches (boundary between consciousness/digital), Portrait (character study), and Graphics (future cinema, experimental typography). High-end, minimal vibe. Reply as an elegant, professional art curator. Keep it concise.`,
        config: {
          systemInstruction: "You are the curator for Elysian's portfolio. You help potential clients understand the vision and technicality of the work. Be sophisticated, professional, and helpful.",
          temperature: 0.7
        }
      });
      setResponse(res.text || "I apologize, but I couldn't process that artistic inquiry at the moment.");
    } catch (error) {
      console.error(error);
      setResponse("Our AI curator is currently in deep meditation. Please try again soon.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-[60] bg-black text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center gap-2"
      >
        <Sparkles size={20} />
        <span className="hidden md:inline font-medium text-sm tracking-wide">Ask the Curator</span>
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-8 z-[60] w-[90vw] md:w-[400px] bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-neutral-100 rounded-3xl overflow-hidden flex flex-col"
          >
            <div className="bg-neutral-900 text-white p-6 flex justify-between items-center">
              <div>
                <h3 className="font-bold tracking-tight">Elysian AI Curator</h3>
                <p className="text-[10px] uppercase tracking-widest text-neutral-400">Powered by Gemini</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
                <X size={20} />
              </button>
            </div>

            <div className="p-6 h-[300px] overflow-auto flex flex-col gap-4 text-sm leading-relaxed">
              {!response && !isLoading && (
                <p className="text-neutral-400 italic">"How can I assist you in navigating the artistic vision of this portfolio today?"</p>
              )}
              {isLoading && (
                <div className="flex items-center gap-2 text-neutral-500 italic">
                  <Loader2 size={16} className="animate-spin" />
                  Analyzing context...
                </div>
              )}
              {response && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  className="bg-neutral-50 p-4 rounded-2xl"
                >
                  {response}
                </motion.div>
              )}
            </div>

            <div className="p-6 border-t border-neutral-100 flex gap-2">
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleQuery()}
                placeholder="Ask about the creative process..."
                className="flex-1 bg-neutral-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black transition-all"
              />
              <button 
                onClick={handleQuery}
                disabled={isLoading}
                className="bg-black text-white p-2 rounded-full disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioAssistant;
