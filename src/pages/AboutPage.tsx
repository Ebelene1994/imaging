import React from 'react';
import { 
  ShieldCheck, Heart, Award, Users, Activity, CheckCircle2, MapPin, Phone, Mail, Calendar 
} from 'lucide-react';
import { CENTER_INFO } from '../data/knowledgeBase';
import { PageTab } from '../types';
import { CountUpStat } from '../components/CountUpStat';

interface AboutPageProps {
  onNavigateTab: (tab: PageTab) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateTab }) => {
  return (
    <div id="about-page" className="bg-slate-50 min-h-screen py-12 px-4 sm:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Hero Banner */}
        <div className="bg-gradient-to-br from-[#0B4EA2] via-blue-900 to-[#072B5C] text-white p-8 sm:p-14 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="text-emerald-300 font-extrabold text-xs uppercase tracking-widest bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
              Hospital Quality & Patient Excellence
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              About Glims Imaging Center
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Located in Laurel, Maryland, Glims Imaging Center is dedicated to delivering medical-grade diagnostic ultrasound and unforgettable 3D/4D elective pregnancy keepsakes with warmth, precision, and state-of-the-art technology.
            </p>
          </div>
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0B4EA2] flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-base text-[#0B4EA2]">Board-Certified</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Performed by registered medical diagnostic sonographers adhering to ARDMS standards.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#2AA84A] flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-base text-[#2AA84A]">100% Radiation Free</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ultrasound uses safe acoustic sound waves, completely free from ionizing radiation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#7A2CA5] flex items-center justify-center font-bold">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-base text-[#7A2CA5]">All Demographics</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tailored imaging solutions for pregnant women, adult men, children, youth, and seniors.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0B4EA2] flex items-center justify-center font-bold">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-base text-[#0B4EA2]">STAT Radiologist</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Rapid report turnaround transmitted straight to your ordering physician or medical record.
            </p>
          </div>
        </div>

        {/* Animated Key Metrics Strip */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="p-3">
              <span className="text-3xl sm:text-4xl font-black text-[#0B4EA2] block">
                <CountUpStat end={100} suffix="%" duration={2000} />
              </span>
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider mt-2 block">
                ARDMS Standards
              </span>
            </div>
            <div className="p-3 pt-6 md:pt-3">
              <span className="text-3xl sm:text-4xl font-black text-[#2AA84A] block">
                <CountUpStat end={24} suffix="/7" duration={2000} />
              </span>
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider mt-2 block">
                STAT Response
              </span>
            </div>
            <div className="p-3 pt-6 md:pt-3">
              <span className="text-3xl sm:text-4xl font-black text-[#7A2CA5] block">
                <CountUpStat end={100} suffix="%" duration={2200} />
              </span>
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider mt-2 block">
                Radiation Free
              </span>
            </div>
            <div className="p-3 pt-6 md:pt-3">
              <span className="text-3xl sm:text-4xl font-black text-[#0B4EA2] block">
                <CountUpStat end={14} suffix="+ Wks" duration={1800} />
              </span>
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider mt-2 block">
                Gender Reveal
              </span>
            </div>
          </div>
        </div>

        {/* Story & Facility Section */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-[#2AA84A] font-extrabold text-xs uppercase tracking-widest block">
              Our Facility in Laurel, MD
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B4EA2]">
              Designed for Comfort, Privacy, and Accuracy
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Located at 14504 Greenview Drive #207 in Laurel, Maryland, our imaging suite features modern diagnostic machines, ultra-comfortable ergonomic exam tables, and dedicated HD display monitors so patients and family members can view their scans live in relaxation.
            </p>

            <ul className="space-y-2.5 text-xs text-slate-700 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2AA84A]" />
                <span>Spacious family viewing room for 3D/4D and Gender Reveal celebrations</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2AA84A]" />
                <span>On-site Mobile Ultrasound unit dispatching across Maryland</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2AA84A]" />
                <span>24/7 STAT Emergency Care capability for acute medical concerns</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2AA84A]" />
                <span>Ample ground-level free parking with handicap accessibility</span>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
              alt="Glims Imaging Center Suite"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* CTA Card */}
        <div className="bg-gradient-to-r from-[#0B4EA2] to-[#2AA84A] text-white p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Experience Hospital Quality Care Today</h3>
            <p className="text-xs text-blue-100 mt-1">
              Call our Laurel center at {CENTER_INFO.phones.primary} or send us a message
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('contact')}
            className="bg-white text-[#0B4EA2] font-black px-6 py-3.5 rounded-full text-xs shadow hover:bg-blue-50 transition-colors shrink-0"
          >
            Contact & Location Details
          </button>
        </div>
      </div>
    </div>
  );
};
