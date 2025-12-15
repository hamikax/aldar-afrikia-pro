import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Printer, Droplets, Monitor, Wrench } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const highlights = [
  { icon: Printer, titleKey: 'highlight.copiers', descKey: 'highlight.copiers.desc' },
  { icon: Droplets, titleKey: 'highlight.ink', descKey: 'highlight.ink.desc' },
  { icon: Monitor, titleKey: 'highlight.computers', descKey: 'highlight.computers.desc' },
  { icon: Wrench, titleKey: 'highlight.maintenance', descKey: 'highlight.maintenance.desc' },
];

export const HighlightCards: React.FC = () => {
  const { t, language, isRTL } = useLanguage();

  return (
    <section className="py-16 bg-secondary/30">
      <div className="section-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="card-elevated p-6 h-full flex flex-col items-center text-center group cursor-pointer"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <item.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </motion.div>
                
                <AnimatePresence mode="wait">
                  <motion.h3
                    key={language + item.titleKey}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`text-lg font-bold mb-2 text-foreground ${isRTL ? 'font-arabic' : 'font-sans'}`}
                  >
                    {t(item.titleKey)}
                  </motion.h3>
                </AnimatePresence>
                
                <AnimatePresence mode="wait">
                  <motion.p
                    key={language + item.descKey}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`text-sm text-muted-foreground ${isRTL ? 'font-arabic' : 'font-sans'}`}
                  >
                    {t(item.descKey)}
                  </motion.p>
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
