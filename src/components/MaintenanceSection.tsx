import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wrench, PackageCheck, Zap, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const features = [
  { icon: Wrench, titleKey: 'maintenance.professional', descKey: 'maintenance.professional.desc' },
  { icon: PackageCheck, titleKey: 'maintenance.parts', descKey: 'maintenance.parts.desc' },
  { icon: Zap, titleKey: 'maintenance.fast', descKey: 'maintenance.fast.desc' },
  { icon: Clock, titleKey: 'maintenance.longterm', descKey: 'maintenance.longterm.desc' },
];

export const MaintenanceSection: React.FC = () => {
  const { t, language, isRTL } = useLanguage();

  return (
    <section id="maintenance" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 geometric-pattern opacity-50" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              <motion.h2
                key={language + 'maintenance-title'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 ${isRTL ? 'font-arabic' : 'font-sans'}`}
              >
                {t('maintenance.title')}
              </motion.h2>
            </AnimatePresence>
            
            <AnimatePresence mode="wait">
              <motion.p
                key={language + 'maintenance-subtitle'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`text-lg text-muted-foreground mb-10 ${isRTL ? 'font-arabic' : 'font-sans'}`}
              >
                {t('maintenance.subtitle')}
              </motion.p>
            </AnimatePresence>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.titleKey}
                  initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </motion.div>
                  <div>
                    <AnimatePresence mode="wait">
                      <motion.h4
                        key={language + feature.titleKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`font-bold mb-1 ${isRTL ? 'font-arabic' : 'font-sans'}`}
                      >
                        {t(feature.titleKey)}
                      </motion.h4>
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={language + feature.descKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`text-muted-foreground ${isRTL ? 'font-arabic' : 'font-sans'}`}
                      >
                        {t(feature.descKey)}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Animated geometric shapes */}
              <motion.div
                className="absolute inset-8 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl"
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute inset-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl"
                animate={{ rotate: [0, -5, 0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-32 h-32 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <Wrench className="w-16 h-16 text-primary-foreground" />
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-10 right-10 w-12 h-12 bg-accent rounded-xl flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <PackageCheck className="w-6 h-6 text-primary" />
              </motion.div>
              <motion.div
                className="absolute bottom-10 left-10 w-10 h-10 bg-accent rounded-lg flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <Zap className="w-5 h-5 text-primary" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
