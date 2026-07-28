import React from 'react';
import { PhoneCall, ShieldAlert, Clock, CheckCircle, MapPin } from 'lucide-react';
import { CENTER_INFO } from '../data/knowledgeBase';

interface EmergencyBannerProps {
  onBookClick?: () => void;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = () => {
  return (
    <div id="emergency-bar" className="bg-[#0B4EA2] text-white py-2 px-4 sm:px-8 border-b border-blue-900/60 shadow-sm text-xs font-semibold uppercase tracking-wider">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Left Info */}
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-[#2AA84A] animate-ping" />
          <span className="font-extrabold text-white tracking-wider">
            24/7 Emergency Care Available
          </span>
        </div>

        {/* Right Details */}
        <div className="flex items-center gap-4 text-xs font-medium">
          <a
            href={`tel:${CENTER_INFO.phones.primary.replace(/\D/g, '')}`}
            className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors font-bold"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#2AA84A]" />
            <span>(301) 615-2877</span>
          </a>

          <a
            href={`mailto:${CENTER_INFO.email}`}
            className="hidden lg:flex items-center gap-1.5 hover:text-emerald-300 transition-colors lowercase"
          >
            <span className="text-blue-200 font-normal">info@glimsimagingcenter1.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};
