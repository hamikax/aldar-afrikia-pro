import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.jpeg';

export const Footer: React.FC = () => {
  const { t, language, isRTL } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <img src={logo} alt="Al-Dar Al-Afrikia" className="h-16 w-auto bg-white rounded-lg p-1" />
            <div>
              <AnimatePresence mode="wait">
                <motion.h3
                  key={language + 'footer-company'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`font-bold text-lg ${isRTL ? 'font-arabic' : 'font-sans'}`}
                >
                  {t('hero.company')}
                </motion.h3>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={language + 'footer-tagline'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`text-sm opacity-70 ${isRTL ? 'font-arabic' : 'font-sans'}`}
                >
                  {t('footer.tagline')}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center md:text-end"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={language + 'copyright'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`text-sm opacity-70 ${isRTL ? 'font-arabic' : 'font-sans'}`}
              >
                © {currentYear} {t('hero.company')}. {t('footer.rights')}.
              </motion.p>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Credit Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 pt-6 border-t border-background/20 text-center"
        >
          <p className="text-xs opacity-50">
            Edited by : Access LY || شركة آكسس
          </p>
          <p className="text-xs opacity-50 mt-1">
            +218910772495 // +218920987211
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
