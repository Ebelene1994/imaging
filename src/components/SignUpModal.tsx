import React from 'react';
import { X } from 'lucide-react';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/80 backdrop-blur-sm animate-fadeIn font-sans"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="bg-white w-full max-w-3xl max-h-[90vh] rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between bg-[#0B4EA2] px-4 py-3 text-white">
          <h3 className="text-lg font-bold">Sign Up</h3>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close sign up modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-64px)] bg-slate-50 p-3 sm:p-4">
          <script src="https://elfsightcdn.com/platform.js" async></script>
          <div className="elfsight-app-aa02238f-314a-48b1-b4b7-cc3aff1b6f06" data-elfsight-app-lazy></div>
        </div>
      </div>
    </div>
  );
};
