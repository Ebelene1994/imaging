import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ShieldAlert, Menu, X, Calendar, MessageSquare } from 'lucide-react';
import { CENTER_INFO } from '../data/knowledgeBase';
import { PageTab } from '../types';

interface HeaderProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  onOpenChat: () => void;
  onOpenBookingModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenChat, onOpenBookingModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageTab; label: string }[] = [
    { id: 'services', label: 'Services' },
    { id: 'prep', label: 'Patient Prep' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (tab: PageTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header id="main-header" className="sticky top-0 z-40 bg-white border-b border-gray-200 px-4 sm:px-8 py-3.5 shadow-sm font-sans">
      <div id="main-nav" className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center group text-left focus:outline-none"
        >
          <img
            src="/images/logo-main.png"
            alt="Glims Imaging Center"
            className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-gray-600">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`py-1 transition-colors ${
                  isActive
                    ? 'text-[#0B4EA2] font-bold border-b-2 border-[#0B4EA2]'
                    : 'hover:text-[#0B4EA2]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          {onOpenBookingModal && (
            <button
              onClick={onOpenBookingModal}
              className="flex items-center gap-1.5 bg-[#0B4EA2] hover:bg-blue-900 text-white px-4 py-2 rounded-full text-xs font-bold shadow-md transition-all active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 text-emerald-300" />
              <span>Book Scan</span>
            </button>
          )}
          <a
            href={`tel:${CENTER_INFO.phones.primary.replace(/\D/g, '')}`}
            className="flex items-center gap-2 bg-[#2AA84A] hover:bg-green-700 text-white px-4 py-2 rounded-full text-xs font-bold shadow-md transition-all active:scale-95"
          >
            <Phone className="w-3.5 h-3.5 text-white" />
            <span>Call (301) 615-2877</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 shadow-xl">
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  activeTab === item.id
                    ? 'bg-[#0B4EA2] text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            {onOpenBookingModal && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white bg-[#0B4EA2] hover:bg-blue-900 shadow-md"
              >
                <Calendar className="w-4 h-4 text-emerald-300" />
                <span>Book Scan Online</span>
              </button>
            )}
            <a
              href={`tel:${CENTER_INFO.phones.primary.replace(/\D/g, '')}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white bg-[#2AA84A] hover:bg-green-700 shadow-md"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Call (301) 615-2877</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
