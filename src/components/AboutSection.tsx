import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Award, Users, FolderCheck, HeartHandshake } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const values = [
  { icon: Award, titleKey: 'value.quality', descKey: 'value.quality.desc' },
  { icon: Users, titleKey: 'value.experience', descKey: 'value.experience.desc' },
  { icon: HeartHandshake, titleKey: 'value.reliability', descKey: 'value.reliability.desc' },
  { icon: FolderCheck, titleKey: 'value.support', descKey: 'value.support.desc' },
];

const AnimatedCounter: React.FC<{ value: number; suffix?: string }> = ({ value, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export const AboutSection: React.FC = () => {
  const { t, language, isRTL } = useLanguage();

  const stats = [
    { value: 1997, labelKey: 'about.since', prefix: '' },
    { value: 500, labelKey: 'about.clients', suffix: '+' },
    { value: 1000, labelKey: 'about.projects', suffix: '+' },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />

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
              key={language + 'about-title'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isRTL ? 'font-arabic' : 'font-sans'}`}
            >
              {t('about.title')}
            </motion.h2>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.p
              key={language + 'about-subtitle'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`text-lg text-muted-foreground ${isRTL ? 'font-arabic' : 'font-sans'}`}
            >
              {t('about.subtitle')}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={language + 'about-text'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`text-lg leading-relaxed text-muted-foreground mb-8 ${isRTL ? 'font-arabic' : 'font-sans'}`}
              >
                {t('about.text')}
              </motion.p>
            </AnimatePresence>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.labelKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-accent/50"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={language + stat.labelKey}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={`text-sm text-muted-foreground ${isRTL ? 'font-arabic' : 'font-sans'}`}
                    >
                      {t(stat.labelKey)}
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={value.titleKey}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="card-elevated p-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <value.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <AnimatePresence mode="wait">
                  <motion.h4
                    key={language + value.titleKey}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`font-bold mb-2 ${isRTL ? 'font-arabic' : 'font-sans'}`}
                  >
                    {t(value.titleKey)}
                  </motion.h4>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={language + value.descKey}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`text-sm text-muted-foreground ${isRTL ? 'font-arabic' : 'font-sans'}`}
                  >
                    {t(value.descKey)}
                  </motion.p>
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
