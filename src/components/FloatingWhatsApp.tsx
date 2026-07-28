import React, { useState } from 'react';
import { MessageCircle, X, Send, PhoneCall } from 'lucide-react';
import { CENTER_INFO } from '../data/knowledgeBase';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('Hello Glims Imaging Center! I would like to inquire about ultrasound booking.');

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedText = encodeURIComponent(userMsg);
    const whatsappUrl = `https://wa.me/13016152877?text=${encodedText}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="floating-whatsapp-container" className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* WhatsApp Chat Popover Box */}
      {isOpen && (
        <div
          id="whatsapp-popover"
          className="mb-3 w-80 sm:w-88 bg-white rounded-2xl shadow-2xl border border-emerald-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#2AA84A] to-emerald-700 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white overflow-hidden p-1 flex items-center justify-center shadow-inner">
                  <img
                    src="/images/logo-glims-imaging-center.png"
                    alt="Glims Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-300 border-2 border-white rounded-full"></span>
              </div>
              <div>
                <h4 className="font-bold text-sm">Glims WhatsApp Support</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span>Direct Hotline:</span>
                  <span className="font-mono">{CENTER_INFO.phones.whatsappDisplay}</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Preview */}
          <div className="p-4 bg-slate-50 space-y-3 text-xs">
            <div className="bg-emerald-100/70 border border-emerald-200/80 rounded-2xl p-3 text-emerald-900 shadow-sm rounded-tl-none">
              <p className="font-medium">👋 Hi there! Welcome to Glims Imaging Center.</p>
              <p className="mt-1 text-[11px] text-emerald-800">
                Need quick help with 3D/4D, OB/GYN, Vascular, or Abdomen ultrasound booking? Message our team directly on WhatsApp!
              </p>
            </div>

            <form onSubmit={handleSendWhatsApp} className="space-y-2 pt-1">
              <textarea
                value={userMsg}
                onChange={(e) => setUserMsg(e.target.value)}
                rows={2}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#2AA84A] focus:border-transparent outline-none resize-none bg-white"
                placeholder="Type your question..."
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-white bg-[#2AA84A] hover:bg-emerald-600 transition-colors shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Open WhatsApp Chat</span>
              </button>
            </form>

            <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
              <span>Fast response time</span>
              <a
                href={`tel:${CENTER_INFO.phones.primary.replace(/\D/g, '')}`}
                className="text-[#0B4EA2] font-semibold flex items-center gap-1 hover:underline"
              >
                <PhoneCall className="w-3 h-3 text-[#2AA84A]" />
                <span>Or Call (301) 615-2877</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 bg-[#2AA84A] hover:bg-emerald-600 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label="Contact Glims Imaging Center on WhatsApp +1 (301) 615-2877"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-6 h-6 text-white" />
        <span className="hidden sm:inline-block font-bold text-xs tracking-wide">
          WhatsApp +1 (301) 615-2877
        </span>
      </button>
    </div>
  );
};
