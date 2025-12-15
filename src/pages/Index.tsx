import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { HighlightCards } from '@/components/HighlightCards';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { MaintenanceSection } from '@/components/MaintenanceSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const PageContent: React.FC = () => {
  const { language, isRTL } = useLanguage();

  return (
    <div className={`min-h-screen bg-background ${isRTL ? 'font-arabic' : 'font-sans'}`}>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={language}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <HeroSection />
          <HighlightCards />
          <AboutSection />
          <ServicesSection />
          <MaintenanceSection />
          <ContactSection />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

const Index: React.FC = () => {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  );
};

export default Index;
