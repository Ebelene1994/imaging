import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Heart, ArrowUp, Calendar, ExternalLink } from 'lucide-react';
import { CENTER_INFO } from '../data/knowledgeBase';
import { PageTab } from '../types';

interface FooterProps {
  onNavigateTab: (tab: PageTab) => void;
  onOpenBookingModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTab, onOpenBookingModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#072B5C] text-slate-200 font-sans border-t-4 border-[#2AA84A]">
      {/* Top Banner */}
      <div className="bg-[#0B4EA2] py-8 px-4 sm:px-8 border-b border-blue-900/60">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[#2AA84A] font-bold text-xs uppercase tracking-widest block mb-1">
              Hospital Quality & Compassionate Care
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Ready to schedule your ultrasound at Glims Imaging Center?
            </h3>
            <p className="text-sm text-blue-100 mt-1 max-w-2xl">
              Offering 3D/4D, Mobile, OB/GYN, Gender Reveal, Vascular, and Abdominal scans in Laurel, MD.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                if (onOpenBookingModal) {
                  onOpenBookingModal();
                } else {
                  onNavigateTab('contact');
                  scrollToTop();
                }
              }}
              className="bg-[#2AA84A] hover:bg-emerald-600 text-white font-extrabold px-6 py-3 rounded-full text-sm shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Scan</span>
            </button>
            <a
              href={`tel:${CENTER_INFO.phones.primary.replace(/\D/g, '')}`}
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-5 py-3 rounded-full text-sm border border-white/20 transition-colors"
            >
              Call (301) 615-2877
            </a>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Col 1: Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo-glims-imaging-center.png"
              alt="Glims Imaging Center - Diagnostic Ultrasound Laurel MD"
              className="h-12 sm:h-14 w-auto object-contain rounded-lg shadow-sm"
            />
          </div>

          <p className="text-xs leading-relaxed text-slate-300">
            Glims Imaging Center provides professional, board-certified diagnostic ultrasound services including 3D/4D, Mobile Ultrasound, OB/GYN, Gender Reveal, Vascular, and Abdomen imaging for pregnant women, men, children, and youth.
          </p>

          <div className="pt-2 flex items-center gap-2 text-xs text-amber-300 font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#2AA84A]" />
            <span>24/7 STAT Emergency Care Available</span>
          </div>
        </div>

        {/* Col 2: Services Quick Links */}
        <div>
          <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 text-[#2AA84A]">
            Our Imaging Services
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-300">
            <li>
              <button onClick={() => { onNavigateTab('services'); scrollToTop(); }} className="hover:text-emerald-400 transition-colors">
                • 3D/4D HD Live Ultrasound
              </button>
            </li>
            <li>
              <button onClick={() => { onNavigateTab('services'); scrollToTop(); }} className="hover:text-emerald-400 transition-colors">
                • Mobile Bedside Ultrasound
              </button>
            </li>
            <li>
              <button onClick={() => { onNavigateTab('services'); scrollToTop(); }} className="hover:text-emerald-400 transition-colors">
                • OB/GYN Diagnostic Ultrasound
              </button>
            </li>
            <li>
              <button onClick={() => { onNavigateTab('services'); scrollToTop(); }} className="hover:text-emerald-400 transition-colors">
                • Gender Reveal Ultrasound (14+ Wks)
              </button>
            </li>
            <li>
              <button onClick={() => { onNavigateTab('services'); scrollToTop(); }} className="hover:text-emerald-400 transition-colors">
                • Vascular & Doppler Screening
              </button>
            </li>
            <li>
              <button onClick={() => { onNavigateTab('services'); scrollToTop(); }} className="hover:text-emerald-400 transition-colors">
                • Abdomen & Organ Ultrasound
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Contact & Address */}
        <div>
          <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 text-[#2AA84A]">
            Facility Contact Details
          </h4>
          <ul className="space-y-3 text-xs text-slate-300">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#2AA84A] shrink-0 mt-0.5" />
              <span>{CENTER_INFO.address.full}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#2AA84A] shrink-0" />
              <div>
                <a href={`tel:${CENTER_INFO.phones.primary.replace(/\D/g, '')}`} className="hover:text-emerald-300 font-bold text-white block">
                  {CENTER_INFO.phones.primary}
                </a>
                <a href={`tel:${CENTER_INFO.phones.secondary.replace(/\D/g, '')}`} className="hover:text-emerald-300">
                  Secondary: {CENTER_INFO.phones.secondary}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-blue-300 shrink-0" />
              <a href={`mailto:${CENTER_INFO.email}`} className="hover:text-emerald-300 break-all">
                {CENTER_INFO.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: Office Hours */}
        <div>
          <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 text-[#2AA84A]">
            Facility Hours
          </h4>
          <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 space-y-2 text-xs">
            <div className="flex items-center justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">Monday – Friday:</span>
              <span className="font-bold text-white">8:00 AM – 6:00 PM</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">Saturday:</span>
              <span className="font-bold text-emerald-400">9:00 AM – 3:00 PM</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">Sunday:</span>
              <span className="font-bold text-amber-300">Closed / By Appointment</span>
            </div>
            <div className="pt-2 text-[11px] text-amber-300 font-semibold flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              <span>24/7 Emergency Care Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Copyright */}
      <div className="bg-slate-950/80 py-6 px-4 sm:px-8 border-t border-slate-800 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Glims Imaging Center. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => { onNavigateTab('prep'); scrollToTop(); }}
              className="hover:text-white"
            >
              Patient Prep
            </button>
            <button
              onClick={() => { onNavigateTab('contact'); scrollToTop(); }}
              className="hover:text-white"
            >
              Directions
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-slate-800 hover:bg-[#0B4EA2] text-white transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
