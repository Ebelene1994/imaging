import React from 'react';
import { Calendar, CheckCircle2, Clock, ExternalLink, GraduationCap, ShieldCheck } from 'lucide-react';

const COACHING_BOOKING_URL = 'https://calendly.com/coaching-glimsimagingcenter1/30min';

interface UltrasoundCoachingCardProps {
  className?: string;
}

export const UltrasoundCoachingCard: React.FC<UltrasoundCoachingCardProps> = ({ className = '' }) => {
  const practiceAreas = ['Vital organs', 'Vascular', 'OB', '3D/4D/5D OB'];

  return (
    <div
      id="ultrasound-coaching-card"
      className={`grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-5 items-stretch ${className}`}
    >
      <div className="bg-linear-to-br from-[#0B4EA2] via-[#0A3F83] to-[#2AA84A] text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-white/20 flex flex-col min-h-100">
        <div className="w-14 h-14 rounded-2xl bg-white text-[#0B4EA2] flex items-center justify-center shadow-lg mb-8 border border-emerald-100">
          <GraduationCap className="w-7 h-7" />
        </div>

        <div className="space-y-3">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black leading-tight mt-2">
              Ultrasound Coaching
            </h3>
          </div>
          <p className="text-sm text-blue-50 leading-relaxed">
            Hands-on scan coaching for future Sonographers and working Sonographers building confidence.
          </p>
        </div>

        <div className="mt-auto pt-8 space-y-5">
          <div className="border-t border-white/25 pt-5 flex items-center justify-between gap-4">
            <div>
              <span className="block text-xs font-bold text-emerald-100 uppercase tracking-wider">
                Coaching Fee
              </span>
              <span className="block text-3xl font-black text-white">
                $250.00
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-blue-50">
              <Clock className="w-4 h-4" />
              <span>1.5 hrs</span>
            </div>
          </div>

          <a
            href={COACHING_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white text-[#0B4EA2] hover:bg-emerald-50 font-black py-3.5 px-5 rounded-2xl text-sm flex items-center justify-center gap-2 shadow-lg transition-colors"
          >
            <Calendar className="w-4 h-4 text-[#2AA84A]" />
            <span>Book</span>
            <ExternalLink className="w-4 h-4 text-[#7A2CA5]" />
          </a>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-7 flex flex-col justify-between gap-6">
        <div className="space-y-4">
          <span className="inline-flex items-center gap-2 text-[#0B4EA2] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2AA84A]" />
            Hands-On Training Only
          </span>

          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>
              Ideal for individuals interested in becoming a Sonographer who want to explore the field before applying to a program.
            </p>
            <p>
              Also ideal for Sonographers looking to build confidence and improve their scanning skills.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {practiceAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 rounded-2xl bg-slate-50 border border-slate-100 px-3 py-2.5 text-xs font-bold text-slate-700"
              >
                <CheckCircle2 className="w-4 h-4 text-[#2AA84A] shrink-0" />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3 rounded-2xl bg-slate-50 border border-slate-200 p-4 text-xs text-slate-600 leading-relaxed">
          <p className="font-semibold text-slate-800">
            Please note in the booking section what you would like coaching on.
          </p>
          <p>Hands-on training only. No lecture. No refunds.</p>
          <p>Please bring a guest who is willing to be scanned. A volunteer model will be provided if needed.</p>
        </div>
      </div>
    </div>
  );
};
