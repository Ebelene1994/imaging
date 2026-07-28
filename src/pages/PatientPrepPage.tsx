import React, { useState } from 'react';
import { 
  Droplets, Utensils, Shirt, ArrowRight, HelpCircle 
} from 'lucide-react';
import { PREP_GUIDES, GENERAL_PREP_FAQS, CENTER_INFO } from '../data/knowledgeBase';
import { PageTab } from '../types';

interface PatientPrepPageProps {
  onNavigateTab: (tab: PageTab) => void;
}

export const PatientPrepPage: React.FC<PatientPrepPageProps> = ({ onNavigateTab }) => {
  const [activePrepId, setActivePrepId] = useState<string>('prep-ob-pelvic');

  const activeGuide = PREP_GUIDES.find((g) => g.id === activePrepId) || PREP_GUIDES[0];

  return (
    <div id="patient-prep-page" className="bg-slate-50 min-h-screen py-12 px-4 sm:px-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-5xl font-black text-[#0B4EA2]">
            Patient Preparation Guide
          </h1>
          <p className="text-sm text-slate-600">
            Following your scan preparation rules ensures maximum image resolution and diagnostic accuracy for our sonographers.
          </p>
        </div>

        {/* Scan Type Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {PREP_GUIDES.map((guide) => (
            <button
              key={guide.id}
              onClick={() => setActivePrepId(guide.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activePrepId === guide.id
                  ? 'bg-[#0B4EA2] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {guide.title.split(' ')[0]} {guide.title.split(' ')[1]} Prep
            </button>
          ))}
        </div>

        {/* Selected Guide Details Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10 space-y-8">
          <div className="pb-6 border-b border-slate-100">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#7A2CA5]">
              OFFICIAL GLIMS INSTRUCTIONS
            </span>
            <h2 className="text-2xl font-black text-[#0B4EA2]">{activeGuide.title}</h2>
          </div>

          {/* 3 Core Rules Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50/80 p-5 rounded-2xl border border-blue-200/80 space-y-2">
              <div className="flex items-center gap-2 font-bold text-sm text-[#0B4EA2]">
                <Droplets className="w-5 h-5 text-blue-600" />
                <span>1. Hydration Rule</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {activeGuide.hydrationRule}
              </p>
            </div>

            <div className="bg-amber-50/80 p-5 rounded-2xl border border-amber-200/80 space-y-2">
              <div className="flex items-center gap-2 font-bold text-sm text-amber-800">
                <Utensils className="w-5 h-5 text-amber-600" />
                <span>2. Fasting / Diet Rule</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {activeGuide.dietRule}
              </p>
            </div>

            <div className="bg-emerald-50/80 p-5 rounded-2xl border border-emerald-200/80 space-y-2">
              <div className="flex items-center gap-2 font-bold text-sm text-[#2AA84A]">
                <Shirt className="w-5 h-5 text-[#2AA84A]" />
                <span>3. Attire & Arrival</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {activeGuide.clothingRule}. {activeGuide.checkInNotice}
              </p>
            </div>
          </div>

          {/* Frequently Asked Prep Questions */}
          <div className="space-y-6 pt-6 border-t border-slate-100">
            <div className="space-y-1">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#2AA84A]">
                KNOWLEDGE BASE
              </span>
              <h3 className="text-xl font-black text-[#0B4EA2] flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-[#2AA84A]" />
                <span>Frequently Asked Prep Questions</span>
              </h3>
            </div>

            {/* Active Scan Specific Prep FAQs */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold text-[#7A2CA5] uppercase tracking-wider">
                {activeGuide.title} Specific FAQs
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {activeGuide.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs space-y-1">
                    <span className="font-bold text-[#0B4EA2] block">Q: {faq.q}</span>
                    <p className="text-slate-600 leading-relaxed">A: {faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 6 General Patient Prep FAQs */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h4 className="text-xs font-extrabold text-[#0B4EA2] uppercase tracking-wider">
                General Patient Prep Questions
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {GENERAL_PREP_FAQS.map((faq, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-1.5 hover:border-blue-200 transition-colors">
                    <span className="font-bold text-slate-900 text-xs block text-[#0B4EA2]">
                      Q: {faq.q}
                    </span>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      A: {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              Questions about your preparation? Call our Laurel team at{' '}
              <a href={`tel:${CENTER_INFO.phones.primary.replace(/\D/g, '')}`} className="font-bold text-[#0B4EA2] underline">
                (301) 615-2877
              </a>
            </div>
            <button
              onClick={() => onNavigateTab('contact')}
              className="bg-[#0B4EA2] hover:bg-blue-800 text-white font-extrabold px-6 py-3 rounded-full text-xs flex items-center gap-2 shadow"
            >
              <span>Contact & Location Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
