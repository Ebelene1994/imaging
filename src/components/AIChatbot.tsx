import React, { useState, useRef, useEffect } from 'react';
import { Bot, User, X, Send, Stethoscope, RefreshCw, Calendar, Phone, CheckCircle2 } from 'lucide-react';
import { CENTER_INFO } from '../data/knowledgeBase';
import { ChatMessage, PageTab } from '../types';

interface AIChatbotProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateTab: (tab: PageTab) => void;
  onOpenBookingModal?: () => void;
}

const QUICK_PROMPTS = [
  'How do I prepare for an Abdomen scan?',
  'When can I do a Gender Reveal ultrasound?',
  'Do you offer Mobile Ultrasound at home?',
  'What are your Laurel MD office hours?',
  'Is 24/7 emergency scan care available?',
  'How do I schedule an appointment?',
];

export const AIChatbot: React.FC<AIChatbotProps> = ({ isOpen, onClose, onNavigateTab, onOpenBookingModal }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init',
      sender: 'bot',
      text: `Hello! I am Glims Health Assistant 🩺. I am here to answer any questions about our 3D/4D, Mobile, OB/GYN, Gender Reveal, Vascular, and Abdomen ultrasound services at Glims Imaging Center in Laurel, MD. How can I help you today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestions: QUICK_PROMPTS.slice(0, 3),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const sendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend.trim(),
          history: messages.slice(-6).map((m) => ({ role: m.sender === 'user' ? 'user' : 'model', parts: m.text })),
        }),
      });

      const data = await response.json();
      const botReply = data.reply || "Thank you for reaching out to Glims Imaging Center. Call us at (301) 615-2877 for instant support!";

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error('Chat error:', err);
      const fallbackMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: `Glims Imaging Center is located at 14504 Greenview Drive #207, Laurel, MD. Please call our direct helpline at ${CENTER_INFO.phones.primary} or message WhatsApp at ${CENTER_INFO.phones.whatsappDisplay} for assistance.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputText);
  };

  return (
    <div id="ai-chatbot-modal-backdrop" className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        id="ai-chatbot-card"
        className="bg-white w-full max-w-2xl h-[85vh] max-h-[700px] rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0B4EA2] via-blue-800 to-[#2AA84A] p-4 sm:p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center shadow-inner">
              <Bot className="w-6 h-6 text-emerald-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base sm:text-lg">Glims AI Health Assistant</h3>
                <span className="flex items-center gap-1 text-[10px] font-bold uppercase bg-emerald-500/20 text-emerald-200 px-2 py-0.5 rounded-full border border-emerald-400/30">
                  <Stethoscope className="w-3 h-3 text-emerald-300" />
                  AI Assistant
                </span>
              </div>
              <p className="text-xs text-blue-100 flex items-center gap-2">
                <span>Knowledge Base Connected</span>
                <span>•</span>
                <span className="text-emerald-300 font-semibold">(301) 615-2877</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close AI Assistant dialog"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Quick Action Top Bar */}
        <div className="bg-blue-50/80 px-4 py-2.5 border-b border-blue-100 flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="text-slate-600 font-medium flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#2AA84A]" />
            Ask about 3D/4D, Mobile, Prep, Insurance, or Services!
          </span>
          <div className="flex items-center gap-3">
            {onOpenBookingModal && (
              <button
                onClick={() => {
                  onClose();
                  onOpenBookingModal();
                }}
                className="flex items-center gap-1 font-bold text-[#2AA84A] hover:underline"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Scan Online →</span>
              </button>
            )}
            <button
              onClick={() => {
                onClose();
                onNavigateTab('contact');
              }}
              className="flex items-center gap-1 font-bold text-[#0B4EA2] hover:underline"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Contact →</span>
            </button>
          </div>
        </div>

        {/* Messages Body */}
        <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 bg-slate-50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'bot' && (
                <div className="w-8 h-8 rounded-xl bg-[#0B4EA2] text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <Bot className="w-4 h-4 text-emerald-300" />
                </div>
              )}

              <div
                className={`max-w-[82%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed shadow-sm ${
                  msg.sender === 'user'
                    ? 'bg-[#0B4EA2] text-white rounded-tr-none font-medium'
                    : 'bg-white text-slate-800 border border-slate-200/80 rounded-tl-none'
                }`}
              >
                <p className="whitespace-pre-line">{msg.text}</p>
                <span
                  className={`block text-[10px] mt-1.5 text-right ${
                    msg.sender === 'user' ? 'text-blue-200' : 'text-slate-400'
                  }`}
                >
                  {msg.timestamp}
                </span>

                {/* Suggestions if present */}
                {msg.suggestions && msg.suggestions.length > 0 && (
                  <div className="mt-3 pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {msg.suggestions.map((sug, idx) => (
                      <button
                        key={idx}
                        onClick={() => sendMessage(sug)}
                        className="text-[11px] font-semibold text-[#0B4EA2] bg-blue-50 hover:bg-blue-100 border border-blue-200/60 px-2.5 py-1 rounded-full text-left transition-colors"
                      >
                        {sug}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-1">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex gap-3 items-center text-slate-500 text-xs">
              <div className="w-8 h-8 rounded-xl bg-[#0B4EA2] text-white flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-emerald-300" />
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl px-4 py-3 flex items-center gap-2 shadow-sm">
                <RefreshCw className="w-4 h-4 text-[#0B4EA2] animate-spin" />
                <span>Glims AI Assistant is searching knowledge base...</span>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Quick Prompts Bar */}
        <div className="px-4 py-2 bg-white border-t border-slate-100 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">
            Quick Ask:
          </span>
          {QUICK_PROMPTS.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => sendMessage(prompt)}
              className="text-xs font-medium text-slate-700 bg-slate-100 hover:bg-blue-50 hover:text-[#0B4EA2] hover:border-blue-200 border border-slate-200 px-3 py-1 rounded-full whitespace-nowrap transition-colors shrink-0"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="p-3 sm:p-4 bg-white border-t border-slate-200 flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ask about 3D/4D ultrasound, prep fasting, hours, mobile service..."
            className="flex-1 text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0B4EA2] focus:border-transparent outline-none"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !inputText.trim()}
            className="bg-[#0B4EA2] hover:bg-blue-800 disabled:opacity-50 text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors shadow-md"
          >
            <span>Send</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
