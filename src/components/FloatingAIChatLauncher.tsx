import React from 'react';
import { Stethoscope } from 'lucide-react';

interface FloatingAIChatLauncherProps {
  onOpenChat: () => void;
  isOpen: boolean;
}

const ASSISTANT_LOGO_URL = 'https://res.cloudinary.com/pr49uw5p/image/upload/v1785519229/logo_thkuq0.png';

export const FloatingAIChatLauncher: React.FC<FloatingAIChatLauncherProps> = ({ onOpenChat, isOpen }) => {
  if (isOpen) return null;

  return (
    <div id="floating-ai-chat-launcher" className="fixed bottom-6 left-6 z-50 flex flex-col items-start font-sans">
      {/* Tooltip / Speech Bubble */}
      <div className="mb-2.5 bg-white text-slate-800 px-3.5 py-2 rounded-2xl shadow-xl border border-blue-100 text-xs font-semibold flex items-center gap-2 animate-bounce">
        <Stethoscope className="w-3.5 h-3.5 text-[#0B4EA2]" />
        <span>Ask Glims AI Assistant</span>
      </div>

      {/* Floating Button */}
      <button
        onClick={onOpenChat}
        className="group relative flex items-center gap-2.5 bg-[#0B4EA2] hover:bg-blue-900 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/30"
        aria-label="Open Glims AI Health Assistant"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
        </span>
        <img
          src={ASSISTANT_LOGO_URL}
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
          className="w-7 h-7 rounded-full bg-white object-contain p-0.5"
        />
        <span className="hidden sm:inline-block font-bold text-xs tracking-wide">
          Glims AI Assistant
        </span>
      </button>
    </div>
  );
};
