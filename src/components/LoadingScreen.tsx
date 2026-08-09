import React from 'react';
import { Activity } from 'lucide-react';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-slate-900 transition-colors">
      
      {/* Outer Pulse Rings */}
      <div className="relative flex items-center justify-center">
        <div className="absolute w-32 h-32 rounded-full bg-blue-500/20 dark:bg-blue-400/10 animate-ping" />
        <div className="absolute w-24 h-24 rounded-full bg-emerald-500/20 dark:bg-emerald-400/10 animate-pulse" />
        
        {/* Logo */}
        <img 
          src="/images/logo1.png" 
          alt="GLIMS Imaging Center - From First Glimpse to Lifelong Care" 
          className="h-20 sm:h-24 max-w-[320px] sm:max-w-[420px] object-contain animate-pulse relative z-10" 
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/logo-main.png';
          }}
        />
      </div>

      {/* Medical Wave SVG Animation */}
      <div className="mt-6 flex items-center gap-1 text-[#0B4EA2]">
        <Activity className="w-6 h-6 animate-pulse" />
        <span className="text-xs font-semibold text-slate-500">Initializing High-Definition Imaging Portal...</span>
      </div>

    </div>
  );
};
