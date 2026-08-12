import React from 'react';
import { X, Calendar, ExternalLink, CheckCircle2 } from 'lucide-react';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendlyModal: React.FC<CalendlyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      id="calendly-booking-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/80 backdrop-blur-sm animate-fadeIn font-sans"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="bg-white w-full max-w-4xl h-[90vh] max-h-205 rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-linear-to-r from-[#0B4EA2] via-blue-800 to-[#2AA84A] p-4 sm:p-5 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center shadow-inner">
              <Calendar className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base sm:text-lg">Schedule Your Scan</h3>
                <span className="flex items-center gap-1 text-[10px] font-bold uppercase bg-emerald-500/20 text-emerald-200 px-2 py-0.5 rounded-full border border-emerald-400/30">
                  <CheckCircle2 className="w-3 h-3 text-emerald-300" />
                  Online Booking
                </span>
              </div>
              <p className="text-xs text-blue-100">
                Glims Imaging Center • 14504 Greenview Drive #207, Laurel, MD
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://calendly.com/glimsimagingcenter/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 text-xs text-blue-100 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-xl transition-colors"
              title="Open in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>New Window</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close scheduling modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Body with Calendly Iframe */}
        <div className="flex-1 w-full h-full bg-slate-50 relative">
          <iframe
            src="https://calendly.com/glimsimagingcenter/30min"
            title="Schedule Your Scan - Glims Imaging Center"
            className="w-full h-full border-0"
            allow="camera; microphone; autoplay; payment"
          />
        </div>
      </div>
    </div>
  );
};
