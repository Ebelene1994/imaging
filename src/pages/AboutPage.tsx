import React, { useEffect } from 'react';
import { 
  ShieldCheck, Heart, Award, Users, Activity, CheckCircle2, MapPin, Phone, Mail, Calendar, Star, Linkedin 
} from 'lucide-react';
import { CENTER_INFO, TEAM_MEMBERS } from '../data/knowledgeBase';
import { PageTab } from '../types';
import { CountUpStat } from '../components/CountUpStat';
import { SEO } from '../components/SEO';

interface AboutPageProps {
  onNavigateTab: (tab: PageTab) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateTab }) => {
  useEffect(() => {
    const scriptId = 'elfsight-platform-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);
  return (
    <div id="about-page" className="bg-slate-50 min-h-screen py-12 px-4 sm:px-8 font-sans">
      <SEO
        title="About Glims Imaging Center | Expert Sonographers in Laurel, MD"
        description="Learn about Glims Imaging Center, our board-certified sonographers, ARDMS credentials, 100% radiation-free ultrasound, and clinical team."
        canonical="/about"
      />
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

        {/* Clinical Leadership & Care Team Section */}
        <div id="care-team" className="space-y-8 py-2">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-block bg-blue-50 text-[#0B4EA2] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider border border-blue-100/80 shadow-xs">
              Clinical Leadership & Care Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#072B5C] tracking-tight">
              Meet Our Certified Sonographers & Radiologists
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Our board-certified diagnostic specialists combine advanced technical skill with empathetic, personalized care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => {
              const getPhotoUrl = (photoPath: string) => {
                if (!photoPath) return '';
                const cleanPath = photoPath.trim().replace(/\\/g, '/');
                if (cleanPath.startsWith('public/')) {
                  return '/' + cleanPath.replace(/^public\//, '');
                }
                if (!cleanPath.startsWith('/') && !cleanPath.startsWith('http')) {
                  return '/' + cleanPath;
                }
                return cleanPath;
              };

              return (
                <div
                  key={member.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 flex flex-col hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Photo Header with Dark Gradient Overlay */}
                  <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-100">
                    <img
                      src={getPhotoUrl(member.photo)}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Experience Badge */}
                    <div className="absolute top-3.5 right-3.5 z-10 bg-[#0B4EA2] text-white px-3 py-1 rounded-full text-xs font-extrabold shadow-md flex items-center gap-1.5 backdrop-blur-sm border border-white/20">
                      <Award className="w-3.5 h-3.5 text-amber-300" />
                      <span>{member.experienceYears}+ Years Exp.</span>
                    </div>

                    {/* Gradient Overlay for Text */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent flex flex-col justify-end p-5">
                      <span className="text-[#2AA84A] font-extrabold text-[11px] tracking-wider uppercase mb-1 drop-shadow-sm">
                        {member.credentials}
                      </span>
                      <h3 className="text-xl font-black text-white leading-snug mb-0.5 drop-shadow-md">
                        {member.name}
                      </h3>
                      <p className="text-xs text-slate-200 font-medium leading-tight opacity-95">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 flex flex-col flex-1 justify-between bg-white">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {member.bio}
                    </p>

                    <div>
                      <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                        Specialties
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {member.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200/80"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#2AA84A] shrink-0" />
                            <span>{specialty}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                      {member.socialLinks?.email && (
                        <a
                          href={`mailto:${member.socialLinks.email}`}
                          className="p-2.5 rounded-xl border border-slate-200 text-slate-500 hover:text-[#0B4EA2] hover:border-blue-300 hover:bg-blue-50/50 transition-all flex items-center justify-center shrink-0"
                          title="Send Email"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      )}
                      {member.socialLinks?.linkedin && (
                        <a
                          href={member.socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl border border-slate-200 text-slate-500 hover:text-[#0B4EA2] hover:border-blue-300 hover:bg-blue-50/50 transition-all flex items-center justify-center shrink-0"
                          title="LinkedIn Profile"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}

                      <button
                        onClick={() => onNavigateTab('contact')}
                        className="bg-[#0B4EA2] hover:bg-[#072B5C] text-white font-extrabold text-xs px-4 py-2.5 rounded-xl inline-flex items-center gap-2 transition-all shadow-sm hover:shadow-md active:scale-95 ml-auto"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Book Consultation</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
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

        {/* Elfsight Google Reviews Widget Section */}
        <div id="google-reviews" className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 px-3.5 py-1 rounded-full border border-amber-200 text-xs font-bold">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>Verified Google Reviews</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B4EA2]">
              Patient Testimonials & Reviews
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Read authentic feedback from patients and families who experienced care at Glims Imaging Center.
            </p>
          </div>

          {/* Elfsight Google Reviews Container */}
          <div className="min-h-[250px] flex items-center justify-center">
            <div className="elfsight-app-364cb5cb-4e8b-47f1-a75f-008524d6602e" data-elfsight-app-lazy></div>
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
