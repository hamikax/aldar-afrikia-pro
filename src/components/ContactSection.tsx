import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, FileText, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

export const ContactSection: React.FC = () => {
  const { t, language, isRTL } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success(t('contact.form.success'), {
      icon: <CheckCircle className="w-5 h-5 text-primary" />,
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      titleKey: 'contact.address',
      lines: [t('contact.address.line1'), t('contact.address.line2')],
    },
    {
      icon: Phone,
      titleKey: 'contact.phone',
      lines: ['+218 91 054 5650', '+218 91 321 6399'],
    },
    {
      icon: FileText,
      titleKey: 'contact.taxNumber',
      lines: ['2550'],
    },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/30 relative overflow-hidden">
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
              key={language + 'contact-title'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isRTL ? 'font-arabic' : 'font-sans'}`}
            >
              {t('contact.title')}
            </motion.h2>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.p
              key={language + 'contact-subtitle'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`text-lg text-muted-foreground ${isRTL ? 'font-arabic' : 'font-sans'}`}
            >
              {t('contact.subtitle')}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated p-6 flex items-start gap-4 group hover:border-primary/30"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <info.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div>
                  <AnimatePresence mode="wait">
                    <motion.h4
                      key={language + info.titleKey}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={`font-bold mb-2 ${isRTL ? 'font-arabic' : 'font-sans'}`}
                    >
                      {t(info.titleKey)}
                    </motion.h4>
                  </AnimatePresence>
                  {info.lines.map((line, i) => (
                    <p key={i} className={`text-muted-foreground ${isRTL ? 'font-arabic' : 'font-sans'}`}>
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card-elevated overflow-hidden h-64"
            >
              <div className="w-full h-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className={`text-muted-foreground ${isRTL ? 'font-arabic' : 'font-sans'}`}>
                    {isRTL ? 'طرابلس، ليبيا' : 'Tripoli, Libya'}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="card-elevated p-8 space-y-6">
              <div>
                <AnimatePresence mode="wait">
                  <motion.label
                    key={language + 'name-label'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`block text-sm font-medium mb-2 ${isRTL ? 'font-arabic' : 'font-sans'}`}
                  >
                    {t('contact.form.name')}
                  </motion.label>
                </AnimatePresence>
                <motion.input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`input-focus w-full ${isRTL ? 'font-arabic text-right' : 'font-sans'}`}
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <div>
                <AnimatePresence mode="wait">
                  <motion.label
                    key={language + 'email-label'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`block text-sm font-medium mb-2 ${isRTL ? 'font-arabic' : 'font-sans'}`}
                  >
                    {t('contact.form.email')}
                  </motion.label>
                </AnimatePresence>
                <motion.input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input-focus w-full"
                  dir="ltr"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <div>
                <AnimatePresence mode="wait">
                  <motion.label
                    key={language + 'message-label'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`block text-sm font-medium mb-2 ${isRTL ? 'font-arabic' : 'font-sans'}`}
                  >
                    {t('contact.form.message')}
                  </motion.label>
                </AnimatePresence>
                <motion.textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`input-focus w-full resize-none ${isRTL ? 'font-arabic text-right' : 'font-sans'}`}
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <motion.div
                    className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  />
                ) : (
                  <>
                    <Send size={18} />
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={language + 'submit'}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={isRTL ? 'font-arabic' : 'font-sans'}
                      >
                        {t('contact.form.submit')}
                      </motion.span>
                    </AnimatePresence>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
