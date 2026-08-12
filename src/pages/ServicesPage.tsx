import React, { useState } from 'react';
import { 
  Baby, Truck, HeartPulse, Sparkles, Activity, ShieldCheck, Calendar, CheckCircle2, 
  Clock, DollarSign, Users, AlertCircle, ArrowRight, ShieldAlert, HelpCircle, ChevronDown, ChevronUp 
} from 'lucide-react';
import { SERVICES, CENTER_INFO, FAQS } from '../data/knowledgeBase';
import { DemographicGroup, PageTab, ServiceItem } from '../types';
import { SEO } from '../components/SEO';

interface ServicesPageProps {
  onNavigateTab: (tab: PageTab) => void;
  onOpenBookingModal?: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigateTab,
  onOpenBookingModal,
}) => {
  const [selectedDemo, setSelectedDemo] = useState<string>('all');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);
  const [openFaqId, setOpenFaqId] = useState<string>('');

  const filteredServices = SERVICES.filter((svc) => {
    if (selectedDemo === 'all') return true;
    return svc.demographics.includes(selectedDemo as DemographicGroup);
  });

  const handleBookNow = (_serviceId?: string) => {
    if (onOpenBookingModal) {
      onOpenBookingModal();
    } else {
      onNavigateTab('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div id="services-page" className="bg-slate-50 min-h-screen py-12 px-4 sm:px-8 font-sans">
      <SEO
        title="Diagnostic & Elective Ultrasound Services | Glims Imaging Center"
        description="Explore 3D/4D ultrasound, OB/GYN prenatal scans, mobile bedside imaging, vascular Doppler, and abdominal diagnostics in Laurel, MD."
        canonical="/services"
      />
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#2AA84A] font-extrabold text-xs uppercase tracking-widest bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-200">
            Diagnostic & Elective Ultrasound
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0B4EA2]">
            Our Diagnostic Services & Specialties
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            At Glims Imaging Center, we combine state-of-the-art ultrasound transducers, board-certified radiologist reporting, and compassionate care tailored for pregnant women, men, children, and youth.
          </p>
        </div>

        {/* Demographics Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">
            Filter Patient Group:
          </span>
          {[
            { id: 'all', label: 'All Services (6)' },
            { id: 'pregnant_women', label: 'Pregnant Women' },
            { id: 'men', label: 'Men' },
            { id: 'children', label: 'Children & Youth' },
            { id: 'seniors', label: 'Seniors / Mobile' },
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedDemo(filter.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedDemo === filter.id
                  ? 'bg-[#0B4EA2] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Services List Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row"
            >
              {/* Image Column */}
              <div className="md:w-5/12 relative bg-slate-100 min-h-55">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#0B4EA2] text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow">
                  {service.category}
                </div>
                {service.startingPrice && (
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-black text-[#2AA84A] shadow">
                    {service.startingPrice}
                  </div>
                )}
              </div>

              {/* Content Column */}
              <div className="md:w-7/12 p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-extrabold text-[#0B4EA2]">
                      {service.title}
                    </h3>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#2AA84A]" />
                      <span>{service.durationMinutes} mins</span>
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 pt-1">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2AA84A] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => handleBookNow(service.id)}
                    className="flex-1 bg-[#0B4EA2] hover:bg-blue-800 text-white font-extrabold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors shadow"
                  >
                    <Calendar className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Book Scan</span>
                  </button>

                  <button
                    onClick={() => setActiveModalService(service)}
                    className="px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
                  >
                    Clinical Info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Modal Popup for Clinical Info */}
        {activeModalService && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
              <div className="bg-[#0B4EA2] p-5 text-white flex items-center justify-between">
                <div>
                  <span className="text-emerald-300 text-[10px] font-extrabold uppercase tracking-widest block">
                    {activeModalService.category}
                  </span>
                  <h3 className="text-xl font-bold">{activeModalService.title}</h3>
                </div>
                <button
                  onClick={() => setActiveModalService(null)}
                  className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-5 text-xs text-slate-700">
                <p className="text-sm font-medium text-slate-800 leading-relaxed">
                  {activeModalService.fullDesc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div>
                    <span className="font-bold text-[#0B4EA2] block mb-1">Duration & Information</span>
                    <p>{activeModalService.durationMinutes} Minutes {activeModalService.startingPrice ? `• ${activeModalService.startingPrice}` : ''}</p>
                  </div>
                  <div>
                    <span className="font-bold text-[#2AA84A] block mb-1">Preparation Requirement</span>
                    <p>{activeModalService.prepSummary}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-sm text-[#0B4EA2] mb-2">Key Clinical Indications:</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-600">
                    {activeModalService.clinicalIndications.map((ind, i) => (
                      <li key={i}>{ind}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-sm text-[#0B4EA2] mb-2">Patient Benefits:</h4>
                  <ul className="space-y-1.5">
                    {activeModalService.keyBenefits.map((ben, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2AA84A]" />
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setActiveModalService(null)}
                    className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-semibold"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const sid = activeModalService.id;
                      setActiveModalService(null);
                      handleBookNow(sid);
                    }}
                    className="px-6 py-2 rounded-xl bg-[#0B4EA2] hover:bg-blue-800 text-white font-extrabold flex items-center gap-2 shadow"
                  >
                    <Calendar className="w-4 h-4 text-emerald-300" />
                    <span>Book Scan</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Emergency & Insurance Notice */}
        <div className="bg-linear-to-r from-purple-900 to-[#0B4EA2] text-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-amber-300 font-extrabold text-sm uppercase">
              <ShieldAlert className="w-5 h-5" />
              <span>Need Urgent STAT Ultrasound or Home Bedside Visit?</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 max-w-2xl">
              We provide 24/7 STAT emergency availability and mobile appointments across Laurel and Maryland. Major insurance accepted with physician orders.
            </p>
          </div>
          <a
            href={`tel:${CENTER_INFO.phones.primary.replace(/\D/g, '')}`}
            className="bg-[#2AA84A] hover:bg-emerald-600 text-white font-extrabold px-6 py-3.5 rounded-full text-xs sm:text-sm shrink-0 shadow-lg"
          >
            Call Dispatch: (301) 615-2877
          </a>
        </div>

        {/* FAQ Accordion Section */}
        <div id="services-faqs" className="pt-8 border-t border-slate-200 max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-3">
            <span className="text-[#0B4EA2] font-extrabold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Service Questions & Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Frequently Asked Questions About Our Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Have questions regarding appointments, scan preparation, mobile visits, or insurance coverage?
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                    className="w-full text-left p-5 font-bold text-sm text-[#0B4EA2] flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-[#2AA84A] shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
