import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Headphones, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const HeroSection: React.FC = () => {
  const { t, language, isRTL } = useLanguage();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with geometric pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/30 to-background geometric-pattern" />
      
      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-[10%] w-64 h-64 border-2 border-primary/10 rounded-lg"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-20 left-[10%] w-48 h-48 bg-primary/5 rounded-lg"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-1/3 left-[5%] w-32 h-32 border-2 border-primary/5"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/3 right-[5%] w-24 h-24 bg-primary/10 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="section-container relative z-10 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <AnimatePresence mode="wait">
              <motion.span
                key={language + 'badge'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="font-medium text-sm"
              >
                {language === 'ar' ? 'منذ عام 1997' : 'Established 1997'}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${isRTL ? 'font-arabic' : 'font-sans'}`}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={language + 'title'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="block"
              >
                <span className="text-foreground">{t('hero.company').split(' ')[0]} </span>
                <span className="text-primary">{t('hero.company').split(' ').slice(1).join(' ')}</span>
              </motion.span>
            </AnimatePresence>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={`text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed ${isRTL ? 'font-arabic' : 'font-sans'}`}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={language + 'tagline'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {t('hero.tagline')}
              </motion.span>
            </AnimatePresence>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              onClick={scrollToContact}
              className="btn-primary flex items-center gap-3 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={20} />
              <AnimatePresence mode="wait">
                <motion.span
                  key={language + 'cta1'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {t('hero.contact')}
                </motion.span>
              </AnimatePresence>
            </motion.button>
            <motion.button
              onClick={scrollToServices}
              className="btn-outline flex items-center gap-3 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Headphones size={20} />
              <AnimatePresence mode="wait">
                <motion.span
                  key={language + 'cta2'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {t('hero.service')}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-muted-foreground cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown size={28} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
