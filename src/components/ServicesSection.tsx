import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Printer, Droplets, Monitor, Keyboard, Cog, Settings } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const services = [
  { icon: Printer, titleKey: 'service.copiers', descKey: 'service.copiers.desc', color: 'from-emerald-500 to-green-600' },
  { icon: Droplets, titleKey: 'service.ink', descKey: 'service.ink.desc', color: 'from-cyan-500 to-teal-600' },
  { icon: Monitor, titleKey: 'service.computers', descKey: 'service.computers.desc', color: 'from-blue-500 to-indigo-600' },
  { icon: Keyboard, titleKey: 'service.accessories', descKey: 'service.accessories.desc', color: 'from-violet-500 to-purple-600' },
  { icon: Cog, titleKey: 'service.parts', descKey: 'service.parts.desc', color: 'from-amber-500 to-orange-600' },
  { icon: Settings, titleKey: 'service.maintenance', descKey: 'service.maintenance.desc', color: 'from-rose-500 to-pink-600' },
];

export const ServicesSection: React.FC = () => {
  const { t, language, isRTL } = useLanguage();

  return (
    <section id="services" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/10 rotate-45" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-primary/10 rotate-12" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <AnimatePresence mode="wait">
            <motion.h2
              key={language + 'services-title'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isRTL ? 'font-arabic' : 'font-sans'}`}
            >
              {t('services.title')}
            </motion.h2>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.p
              key={language + 'services-subtitle'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isRTL ? 'font-arabic' : 'font-sans'}`}
            >
              {t('services.subtitle')}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="card-elevated p-8 h-full group cursor-pointer relative overflow-hidden"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-all duration-300"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                  >
                    <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </motion.div>
                  
                  <AnimatePresence mode="wait">
                    <motion.h3
                      key={language + service.titleKey}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={`text-xl font-bold mb-3 ${isRTL ? 'font-arabic' : 'font-sans'}`}
                    >
                      {t(service.titleKey)}
                    </motion.h3>
                  </AnimatePresence>
                  
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={language + service.descKey}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={`text-muted-foreground leading-relaxed ${isRTL ? 'font-arabic' : 'font-sans'}`}
                    >
                      {t(service.descKey)}
                    </motion.p>
                  </AnimatePresence>
                </div>

                {/* Corner decoration */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/5 rounded-tl-full transform translate-x-8 translate-y-8 group-hover:bg-primary/10 transition-colors duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
