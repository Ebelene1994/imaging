import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { EmergencyBanner } from './components/EmergencyBanner';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { FloatingAIChatLauncher } from './components/FloatingAIChatLauncher';
import { AIChatbot } from './components/AIChatbot';
import { CalendlyModal } from './components/CalendlyModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PatientPrepPage } from './pages/PatientPrepPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PageTab } from './types';

function getTabFromPath(pathname: string): PageTab {
  const decoded = decodeURIComponent(pathname).toLowerCase().trim().replace(/\/+$/, '');
  if (decoded === '/services') return 'services';
  if (decoded === '/prep' || decoded === '/patient-prep' || decoded === '/patient prep') return 'prep';
  if (decoded === '/about' || decoded === '/about-us') return 'about';
  if (decoded === '/contact' || decoded === '/contact-us') return 'contact';
  return 'home';
}

function getPathFromTab(tab: PageTab): string {
  switch (tab) {
    case 'services': return '/services';
    case 'prep': return '/prep';
    case 'about': return '/about';
    case 'contact': return '/contact';
    case 'home':
    default: return '/';
  }
}

export function App() {
  const [activeTab, setActiveTabState] = useState<PageTab>(() => getTabFromPath(window.location.pathname));
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);

  useEffect(() => {
    const handlePopState = () => {
      setActiveTabState(getTabFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Auto-open Calendly modal: Trigger when visiting each page, and again after 5 minutes
  useEffect(() => {
    // Trigger immediately when visiting a page
    setIsBookingOpen(true);

    // Trigger again after 5 minutes (300,000 ms)
    const repeatInterval = setInterval(() => {
      setIsBookingOpen(true);
    }, 300000);

    return () => {
      clearInterval(repeatInterval);
    };
  }, [activeTab]);

  const handleNavigateTab = (tab: PageTab) => {
    setActiveTabState(tab);
    const targetPath = getPathFromTab(tab);
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
  };

  const handleOpenBookingModal = () => {
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-[#2AA84A] selection:text-white">
      {/* 24/7 STAT Emergency Alert Top Bar */}
      <EmergencyBanner />

      {/* Main Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleNavigateTab}
        onOpenChat={() => setIsChatOpen(true)}
        onOpenBookingModal={handleOpenBookingModal}
      />

      {/* Dynamic Main Page Content */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            onNavigateTab={handleNavigateTab}
            onOpenChat={() => setIsChatOpen(true)}
            onOpenBookingModal={handleOpenBookingModal}
          />
        )}

        {activeTab === 'services' && (
          <ServicesPage
            onNavigateTab={handleNavigateTab}
            onOpenBookingModal={handleOpenBookingModal}
          />
        )}

        {activeTab === 'prep' && (
          <PatientPrepPage onNavigateTab={handleNavigateTab} />
        )}

        {activeTab === 'about' && (
          <AboutPage onNavigateTab={handleNavigateTab} />
        )}

        {activeTab === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Hospital Quality Footer */}
      <Footer
        onNavigateTab={handleNavigateTab}
        onOpenBookingModal={handleOpenBookingModal}
      />

      {/* Floating AI Health Assistant Launcher (Bottom Left) */}
      <FloatingAIChatLauncher
        isOpen={isChatOpen}
        onOpenChat={() => setIsChatOpen(true)}
      />

      {/* Floating WhatsApp Action Button (Bottom Right) */}
      <FloatingWhatsApp />

      {/* AI Health Assistant Chatbot Modal */}
      <AIChatbot
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        onNavigateTab={(tab) => {
          handleNavigateTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenBookingModal={handleOpenBookingModal}
      />

      {/* Calendly Booking Popup Modal */}
      <CalendlyModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}

export default App;
