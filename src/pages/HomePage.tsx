import React, { useState, useEffect } from 'react';
import { 
  Calendar, Phone, MessageSquare, ShieldCheck, HeartPulse, Baby, Truck, Activity, 
  ShieldAlert, Sparkles, CheckCircle2, ChevronRight, ChevronLeft, Clock, MapPin, Users, Star, ArrowRight, HelpCircle
} from 'lucide-react';
import { CENTER_INFO, SERVICES, TESTIMONIALS, FAQS } from '../data/knowledgeBase';
import { PageTab, ServiceItem } from '../types';
import { CountUpStat } from '../components/CountUpStat';

const HERO_SLIDES = [
  {
    id: '3d-4d-ultrasound',
    title: '3D/4D HD Live Ultrasound',
    tagline: 'Vivid Photorealistic Imaging',
    desc: 'Vivid imaging for expectant parents to see every detail before birth with photorealistic HD clarity.',
    imageUrl: '/images/3D_4D ultrasound.jpg',
    badge: '3D/4D Elective & Diagnostic',
    icon: Baby,
  },
  {
    id: 'obgyn-gender-reveal',
    title: 'OB/GYN & Gender Reveal',
    tagline: '14+ Weeks Gender Verification',
    desc: 'Celebrating family milestones with professional prenatal screening, fetal heartbeat, and gender verification.',
    imageUrl: '/images/gynecological-ultrasound.jpg',
    badge: 'Prenatal Care',
    icon: HeartPulse,
  },
  {
    id: 'vascular-doppler',
    title: 'Vascular & Abdomen Doppler',
    tagline: 'Precision Doppler Diagnostics',
    desc: 'Comprehensive Doppler scans for internal health, blood flow, DVT screening, liver, gallbladder, and kidneys.',
    imageUrl: '/images/vascular-ultrasound.jpg',
    badge: 'Diagnostic Doppler',
    icon: Activity,
  },
  {
    id: 'mobile-ultrasound',
    title: 'Mobile Bedside Ultrasound',
    tagline: 'Advanced Imaging. Anywhere You Need It.',
    desc: 'Bringing hospital-quality diagnostic imaging directly to your residence, clinic facility, or bedrest setup.',
    imageUrl: '/images/Medical-van.jpg',
    badge: '24/7 Mobile Service',
    icon: Truck,
  },
];

interface HeroCarouselProps {
  onBookService: (serviceId?: string) => void;
}

const HeroServiceCarousel: React.FC<HeroCarouselProps> = ({ onBookService }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % HERO_SLIDES.length);
      setProgressKey((prev) => prev + 1);
    }, 10000); // 10 seconds auto transition

    return () => clearInterval(timer);
  }, [activeIdx]);

  const handleSelectSlide = (idx: number) => {
    setActiveIdx(idx);
    setProgressKey((prev) => prev + 1);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    setProgressKey((prev) => prev + 1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev + 1) % HERO_SLIDES.length);
    setProgressKey((prev) => prev + 1);
  };

  const currentSlide = HERO_SLIDES[activeIdx];
  const IconComponent = currentSlide.icon;

  return (
    <div className="relative w-full h-[380px] sm:h-[400px] rounded-2xl border border-slate-200 overflow-hidden shadow-lg group bg-slate-900">
      {/* 4 Images Cross-fading */}
      {HERO_SLIDES.map((slide, idx) => {
        const isActive = idx === activeIdx;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-slate-900/20" />
          </div>
        );
      })}

      {/* Top Header: 10s Countdown Progress Bar & Badges */}
      <div className="absolute top-0 left-0 right-0 z-20 flex flex-col p-4 sm:p-5">
        {/* 10-Second Animated Progress Line */}
        <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden mb-3 backdrop-blur-sm">
          <div
            key={progressKey}
            className="bg-[#2AA84A] h-full rounded-full"
            style={{
              animation: 'progress10s 10s linear forwards',
            }}
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="bg-white/95 backdrop-blur-md text-[#0B4EA2] px-3.5 py-1.5 rounded-full text-xs font-black shadow-md flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2AA84A] animate-ping" />
            {currentSlide.badge}
          </span>
          <span className="bg-slate-900/80 backdrop-blur-md text-white/90 px-3 py-1 rounded-full text-[11px] font-bold border border-white/20 shadow-sm">
            Slide {activeIdx + 1} of 4 • 10s Auto-play
          </span>
        </div>
      </div>

      {/* Manual Prev / Next Arrows */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 shadow-md transition-all opacity-80 hover:opacity-100 hover:scale-105"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 shadow-md transition-all opacity-80 hover:opacity-100 hover:scale-105"
        aria-label="Next Image"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Bottom Content Card & Booking CTA */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-5 sm:p-6 text-white space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1 max-w-lg">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#0B4EA2] text-white flex items-center justify-center shadow-md shrink-0">
                <IconComponent className="w-4 h-4" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white drop-shadow-sm">
                {currentSlide.title}
              </h3>
            </div>
            <p className="text-xs text-slate-200 line-clamp-2 leading-relaxed pl-1 pt-0.5">
              {currentSlide.desc}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onBookService(currentSlide.id)}
            className="bg-[#2AA84A] hover:bg-green-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-lg transition-all flex items-center justify-center gap-1.5 shrink-0 hover:scale-105"
          >
            <span>Book Scan</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Navigation Dots */}
        <div className="flex items-center justify-center gap-2 pt-2 border-t border-white/15">
          {HERO_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => handleSelectSlide(idx)}
              className={`h-2.5 rounded-full transition-all ${
                idx === activeIdx
                  ? 'w-8 bg-[#2AA84A]'
                  : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
              title={`Switch to ${slide.title}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface HomePageProps {
  onNavigateTab: (tab: PageTab) => void;
  onOpenChat: () => void;
  onOpenBookingModal?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigateTab,
  onOpenChat,
  onOpenBookingModal,
}) => {
  const [openFaqId, setOpenFaqId] = useState<string>('faq-1');

  const handleBookService = (_serviceId?: string) => {
    if (onOpenBookingModal) {
      onOpenBookingModal();
    } else {
      onNavigateTab('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div id="home-page" className="font-sans bg-gray-50 text-gray-900">
      {/* Hero & Main Content Container - Sleek Interface Style */}
      <section id="hero" className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column: Hero & Office Hours */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            {/* Precision Care Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 flex-1 flex flex-col justify-center">
              <span className="text-[#7A2CA5] font-bold text-xs uppercase tracking-widest mb-2">
                Advanced Diagnostics
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                Precision Care <br />
                <span className="text-[#0B4EA2]">Inspiring Confidence.</span>
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm mb-6 leading-relaxed">
                Glims Imaging Center provides world-class diagnostic ultrasound services for families in Laurel and beyond, utilizing state-of-the-art 3D/4D and Doppler technology.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2AA84A]" />
                  </div>
                  <span className="font-medium">Expert OB/GYN & Vascular Specialists</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2AA84A]" />
                  </div>
                  <span className="font-medium">Child & Youth Friendly Facility</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2AA84A]" />
                  </div>
                  <span className="font-medium">24/7 STAT Mobile Response</span>
                </div>
              </div>

              <div>
                <button
                  onClick={() => handleBookService()}
                  className="w-full bg-[#2AA84A] hover:bg-green-700 text-white py-3 px-5 rounded-full text-xs sm:text-sm font-bold shadow-md transition-all text-center flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Your Scan</span>
                </button>
              </div>
            </div>

            {/* Office Hours Card */}
            <div className="bg-[#7A2CA5] p-5 sm:p-6 rounded-2xl text-white shadow-md">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-sm sm:text-base tracking-wide">Office Hours</h3>
                <Clock className="w-4 h-4 text-purple-200" />
              </div>
              <div className="text-xs space-y-2 opacity-95">
                <div className="flex justify-between border-b border-purple-400/30 pb-1">
                  <span>Mon – Fri</span> <span className="font-semibold">8:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-purple-400/30 pb-1">
                  <span>Saturday</span> <span className="font-semibold text-emerald-300">9:00 AM – 3:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span> <span className="font-semibold text-amber-200">Closed / By Appointment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 10-Second Auto-Changing Image Showcase Carousel & Locations Banner */}
          <div className="w-full lg:w-2/3 flex flex-col gap-4">
            <HeroServiceCarousel onBookService={handleBookService} />

            {/* Locations & Contact Block */}
            <div className="bg-[#0B4EA2] rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-full shrink-0">
                  <MapPin className="w-6 h-6 text-emerald-300" />
                </div>
                <div>
                  <p className="text-sm font-bold">14504 Greenview Drive #207</p>
                  <p className="text-xs opacity-80">Laurel, Maryland 20708</p>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 border-white/15 pt-3 sm:pt-0">
                <div className="text-left sm:text-right">
                  <p className="text-[10px] uppercase opacity-75 tracking-wider font-semibold">Call Us</p>
                  <a href={`tel:${CENTER_INFO.phones.secondary.replace(/\D/g, '')}`} className="text-sm sm:text-base font-bold hover:text-emerald-300">
                    202-571-2210
                  </a>
                </div>
                <div className="h-8 w-px bg-white/20"></div>
                <div className="text-left sm:text-right">
                  <p className="text-[10px] uppercase opacity-75 tracking-wider font-semibold">24/7 Hotline</p>
                  <a href={`tel:${CENTER_INFO.phones.primary.replace(/\D/g, '')}`} className="text-sm sm:text-base font-bold text-emerald-300 hover:underline">
                    (301) 615-2877
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Strip */}
      <section className="bg-white py-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <span className="block text-3xl sm:text-4xl font-black text-[#0B4EA2]">
              <CountUpStat end={6} suffix="+" duration={1800} />
            </span>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider mt-1.5 block">
              Core Specialties
            </span>
          </div>
          <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
            <span className="block text-3xl sm:text-4xl font-black text-[#2AA84A]">
              <CountUpStat end={24} suffix="/7" duration={2000} />
            </span>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider mt-1.5 block">
              Emergency STAT Care
            </span>
          </div>
          <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
            <span className="block text-3xl sm:text-4xl font-black text-[#7A2CA5]">
              <CountUpStat end={100} suffix="%" duration={2200} />
            </span>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider mt-1.5 block">
              Radiation-Free Sound
            </span>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <span className="block text-3xl sm:text-4xl font-black text-[#0B4EA2]">
              <CountUpStat end={14} suffix="+ Wks" duration={1800} />
            </span>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider mt-1.5 block">
              Gender Reveal Accuracy
            </span>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services-overview" className="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[#2AA84A] font-extrabold text-xs uppercase tracking-widest bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
            Comprehensive Imaging Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B4EA2]">
            Our Diagnostic & Elective Services
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Designed specifically for pregnant women, adult men, children, youth, and seniors with utmost clinical precision and compassionate care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-[#0B4EA2] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
                  <span className="bg-[#0B4EA2] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow">
                    {service.category}
                  </span>
                  {service.isPopular && (
                    <span className="bg-[#7A2CA5] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow">
                      Popular
                    </span>
                  )}
                </div>
                {service.startingPrice && (
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-extrabold text-[#2AA84A] shadow">
                    {service.startingPrice}
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-[#0B4EA2] group-hover:text-[#2AA84A] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Demographics Badges */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Target Groups:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {service.demographics.map((demo, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md capitalize"
                      >
                        {demo.replace('_', ' ')}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => handleBookService(service.id)}
                    className="flex-1 bg-[#0B4EA2] hover:bg-blue-800 text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Scan</span>
                  </button>
                  <button
                    onClick={() => {
                      onNavigateTab('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hospital Quality & Mobile Feature Section */}
      <section className="bg-gradient-to-r from-blue-900 via-[#0B4EA2] to-slate-900 text-white py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="bg-[#2AA84A] text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest inline-block">
              Mobile Bedside Imaging Available
            </span>
            <h2 className="text-3xl sm:text-4xl font-black leading-tight text-white">
              We Bring Diagnostic Precision <br className="hidden sm:inline" />
              Directly To Your Home or Clinic
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              For bedrest pregnancy, elderly patients with mobility limits, or busy schedules, Glims Mobile Ultrasound provides full hospital-grade diagnostic scans on location throughout Laurel and surrounding Maryland areas.
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Fully portable, high-resolution Doppler ultrasound system</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Board-certified sonographers with hospital credentialing</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>STAT radiologist readings sent directly to your primary doctor</span>
              </li>
            </ul>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => handleBookService('mobile-ultrasound')}
                className="bg-[#2AA84A] hover:bg-emerald-600 text-white font-extrabold px-6 py-3 rounded-full text-xs sm:text-sm shadow-lg transition-all"
              >
                Request Mobile Ultrasound
              </button>
              <a
                href={`tel:${CENTER_INFO.phones.primary.replace(/\D/g, '')}`}
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-5 py-3 rounded-full text-xs sm:text-sm border border-white/20 transition-colors"
              >
                Call Mobile Dispatch (301) 615-2877
              </a>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 h-80 sm:h-96">
            <img
              src="/images/Medical-van.jpg"
              alt="Mobile Diagnostic Ultrasound Service"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent p-6 flex flex-col justify-end">
              <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest">
                Glims Mobile Response
              </span>
              <p className="text-sm font-semibold text-white mt-1">
                Servicing Laurel, Silver Spring, Columbia, Bowie, and greater Maryland region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Journey / How It Works */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[#0B4EA2] font-extrabold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Seamless Patient Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            How Your Appointment Works
          </h2>
          <p className="text-sm text-slate-600">
            Simple 4-step process designed for comfort, clarity, and fast medical results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative space-y-3 text-center">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0B4EA2] font-black text-lg flex items-center justify-center mx-auto shadow-inner">
              1
            </div>
            <h3 className="font-bold text-base text-[#0B4EA2]">Select Scan & Prep</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Choose from 3D/4D, Mobile, OB/GYN, Gender Reveal, Vascular, or Abdomen. Check simple hydration or fasting guidelines.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative space-y-3 text-center">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#2AA84A] font-black text-lg flex items-center justify-center mx-auto shadow-inner">
              2
            </div>
            <h3 className="font-bold text-base text-[#2AA84A]">Book Online Slot</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Select your preferred date and time slot. Receive immediate calendar confirmation and printable summary.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative space-y-3 text-center">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#7A2CA5] font-black text-lg flex items-center justify-center mx-auto shadow-inner">
              3
            </div>
            <h3 className="font-bold text-base text-[#7A2CA5]">Suite Visit / Mobile</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Visit our relaxing Laurel MD suite (#207) or enjoy our mobile sonographer arriving at your residence.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative space-y-3 text-center">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0B4EA2] font-black text-lg flex items-center justify-center mx-auto shadow-inner">
              4
            </div>
            <h3 className="font-bold text-base text-[#0B4EA2]">Fast Radiologist Report</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Digital images delivered to your phone, with official radiologist report transmitted directly to your ordering physician.
            </p>
          </div>
        </div>
      </section>

      {/* Patient Reviews */}
      <section className="py-16 bg-slate-100/80 border-y border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[#2AA84A] font-extrabold text-xs uppercase tracking-widest block mb-1">
                Patient Testimonials
              </span>
              <h2 className="text-3xl font-black text-[#0B4EA2]">
                Trusted by Patients & Physicians
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-block text-[11px] font-semibold text-slate-500 bg-white px-3 py-1.5 rounded-full border border-slate-200">
                Hover to pause
              </span>
              <div className="flex items-center gap-1.5 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200 text-xs font-bold text-slate-700">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span>5.0 Star Rating in Laurel, MD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Continuous Infinite Marquee Track */}
        <div className="relative w-full overflow-hidden py-2">
          {/* Gradient Edges Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-100 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-100 to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex gap-6">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
              <div
                key={`${t.id}-${idx}`}
                className="w-80 sm:w-96 shrink-0 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-700 italic leading-relaxed">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="font-extrabold text-xs text-[#0B4EA2] block">
                      {t.name}
                    </span>
                    <span className="text-[11px] text-slate-500 block">
                      {t.service} • {t.location}
                    </span>
                  </div>
                  {t.verified && (
                    <span className="text-[10px] bg-emerald-50 text-[#2AA84A] px-2.5 py-1 rounded-full font-extrabold border border-emerald-200 shrink-0">
                      Verified
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <span className="text-[#0B4EA2] font-extrabold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Got Questions?
          </span>
          <h2 className="text-3xl font-black text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Find immediate answers about scan preparation, insurance coverage, emergency care, and appointment booking.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-colors"
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                  className="w-full text-left p-5 font-bold text-sm text-[#0B4EA2] flex items-center justify-between gap-4 hover:bg-slate-50"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#2AA84A] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <span className="text-lg font-bold text-slate-400">{isOpen ? '−' : '+'}</span>
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
