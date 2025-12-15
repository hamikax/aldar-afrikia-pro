import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  'nav.home': { ar: 'الرئيسية', en: 'Home' },
  'nav.about': { ar: 'من نحن', en: 'About Us' },
  'nav.services': { ar: 'المنتجات والخدمات', en: 'Products & Services' },
  'nav.maintenance': { ar: 'الصيانة والدعم', en: 'Maintenance & Support' },
  'nav.contact': { ar: 'اتصل بنا', en: 'Contact Us' },

  // Hero
  'hero.company': { ar: 'شركة الدار الإفريقية', en: 'Al-Dar Al-Afrikia Company' },
  'hero.tagline': { 
    ar: 'خبرة منذ 1997 في توريد وصيانة أجهزة وتقنيات الطباعة والحاسوب', 
    en: 'Providing printing and computer technology solutions since 1997' 
  },
  'hero.contact': { ar: 'اتصل بنا', en: 'Contact Us' },
  'hero.service': { ar: 'طلب خدمة', en: 'Request Service' },

  // Highlights
  'highlight.copiers': { ar: 'آلات التصوير', en: 'Photocopiers' },
  'highlight.copiers.desc': { ar: 'أحدث آلات التصوير من الماركات العالمية', en: 'Latest photocopiers from global brands' },
  'highlight.ink': { ar: 'الأحبار الأصلية', en: 'Original Ink & Toner' },
  'highlight.ink.desc': { ar: 'جميع أنواع الأحبار الأصلية والمتوافقة', en: 'All types of original and compatible inks' },
  'highlight.computers': { ar: 'أجهزة وملحقات الكمبيوتر', en: 'Computer & Accessories' },
  'highlight.computers.desc': { ar: 'أجهزة كمبيوتر وملحقاتها بأعلى جودة', en: 'High-quality computers and accessories' },
  'highlight.maintenance': { ar: 'الصيانة والدعم الفني', en: 'Maintenance & Support' },
  'highlight.maintenance.desc': { ar: 'دعم فني متخصص وصيانة احترافية', en: 'Specialized technical support and professional maintenance' },

  // About
  'about.title': { ar: 'من نحن', en: 'About Us' },
  'about.subtitle': { ar: 'خبرة تمتد لأكثر من 27 عاماً', en: 'Over 27 Years of Excellence' },
  'about.text': { 
    ar: 'شركة الدار الإفريقية تأسست عام 1997، وتُعد من الشركات الرائدة في ليبيا في مجال توريد آلات التصوير، الأحبار، أجهزة الكمبيوتر وملحقاتها، إضافة إلى الصيانة والدعم الفني باحترافية عالية.', 
    en: 'Al-Dar Al-Afrikia Company was established in 1997 and is one of Libya\'s leading companies in photocopiers, inks, computer devices, accessories, spare parts, and professional maintenance services.' 
  },
  'about.since': { ar: 'منذ عام', en: 'Since' },
  'about.clients': { ar: 'عميل راضٍ', en: 'Happy Clients' },
  'about.projects': { ar: 'مشروع منجز', en: 'Projects Done' },

  // Values
  'value.quality': { ar: 'الجودة', en: 'Quality' },
  'value.quality.desc': { ar: 'نلتزم بأعلى معايير الجودة في جميع منتجاتنا', en: 'We commit to the highest quality standards in all products' },
  'value.experience': { ar: 'الخبرة', en: 'Experience' },
  'value.experience.desc': { ar: 'خبرة تمتد لأكثر من 27 عاماً في المجال', en: 'Over 27 years of industry experience' },
  'value.reliability': { ar: 'الاعتمادية', en: 'Reliability' },
  'value.reliability.desc': { ar: 'شريك موثوق يمكنك الاعتماد عليه دائماً', en: 'A trusted partner you can always rely on' },
  'value.support': { ar: 'الدعم الفني', en: 'Technical Support' },
  'value.support.desc': { ar: 'فريق دعم فني متخصص على مدار الساعة', en: 'Specialized 24/7 technical support team' },

  // Services
  'services.title': { ar: 'المنتجات والخدمات', en: 'Products & Services' },
  'services.subtitle': { ar: 'حلول متكاملة لجميع احتياجاتكم التقنية', en: 'Complete solutions for all your technical needs' },
  
  'service.copiers': { ar: 'آلات تصوير', en: 'Photocopiers' },
  'service.copiers.desc': { ar: 'آلات تصوير متعددة الوظائف من أفضل الماركات العالمية', en: 'Multi-function photocopiers from the best global brands' },
  
  'service.ink': { ar: 'الأحبار', en: 'Ink & Toner' },
  'service.ink.desc': { ar: 'أحبار أصلية ومتوافقة لجميع أنواع الطابعات وآلات التصوير', en: 'Original and compatible inks for all printers and copiers' },
  
  'service.computers': { ar: 'أجهزة الكمبيوتر', en: 'Computers' },
  'service.computers.desc': { ar: 'أجهزة كمبيوتر مكتبية ومحمولة بمواصفات عالية', en: 'Desktop and laptop computers with high specifications' },
  
  'service.accessories': { ar: 'ملحقات الكمبيوتر', en: 'Accessories' },
  'service.accessories.desc': { ar: 'جميع ملحقات الكمبيوتر من لوحات مفاتيح وشاشات وغيرها', en: 'All computer accessories including keyboards, monitors, and more' },
  
  'service.parts': { ar: 'قطع الغيار', en: 'Spare Parts' },
  'service.parts.desc': { ar: 'قطع غيار أصلية لجميع الأجهزة والطابعات', en: 'Original spare parts for all devices and printers' },
  
  'service.maintenance': { ar: 'الصيانة', en: 'Maintenance' },
  'service.maintenance.desc': { ar: 'خدمات صيانة احترافية وسريعة لجميع الأجهزة', en: 'Professional and fast maintenance services for all devices' },

  // Maintenance Section
  'maintenance.title': { ar: 'الصيانة والدعم الفني', en: 'Maintenance & Technical Support' },
  'maintenance.subtitle': { ar: 'خدمات صيانة متخصصة بأعلى معايير الجودة', en: 'Specialized maintenance services with the highest quality standards' },
  
  'maintenance.professional': { ar: 'صيانة احترافية', en: 'Professional Maintenance' },
  'maintenance.professional.desc': { ar: 'فريق من الفنيين المتخصصين لصيانة جميع أنواع الأجهزة', en: 'Team of specialized technicians for all device maintenance' },
  
  'maintenance.parts': { ar: 'قطع غيار أصلية', en: 'Original Spare Parts' },
  'maintenance.parts.desc': { ar: 'نستخدم فقط قطع الغيار الأصلية لضمان أفضل أداء', en: 'We use only original spare parts for best performance' },
  
  'maintenance.fast': { ar: 'استجابة سريعة', en: 'Fast Response' },
  'maintenance.fast.desc': { ar: 'فريق جاهز للاستجابة لطلباتكم في أسرع وقت', en: 'Team ready to respond to your requests quickly' },
  
  'maintenance.longterm': { ar: 'دعم طويل المدى', en: 'Long-term Support' },
  'maintenance.longterm.desc': { ar: 'عقود صيانة سنوية تضمن أداء مستمر لأجهزتكم', en: 'Annual maintenance contracts for continuous device performance' },

  // Contact
  'contact.title': { ar: 'اتصل بنا', en: 'Contact Us' },
  'contact.subtitle': { ar: 'نحن هنا لخدمتكم', en: 'We are here to serve you' },
  'contact.address': { ar: 'العنوان', en: 'Address' },
  'contact.address.line1': { ar: 'ليبيا – طرابلس – الفرناج – ميدان الفرناج', en: 'Libya – Tripoli – Al-Farnaj – Al-Farnaj Square' },
  'contact.address.line2': { ar: 'ميزران – طرابلس – ليبيا', en: 'Mezran – Tripoli – Libya' },
  'contact.phone': { ar: 'الهاتف', en: 'Phone' },
  'contact.taxNumber': { ar: 'الرقم الضريبي', en: 'Tax Number' },
  'contact.form.name': { ar: 'الاسم الكامل', en: 'Full Name' },
  'contact.form.email': { ar: 'البريد الإلكتروني', en: 'Email Address' },
  'contact.form.message': { ar: 'رسالتك', en: 'Your Message' },
  'contact.form.submit': { ar: 'إرسال الرسالة', en: 'Send Message' },
  'contact.form.success': { ar: 'تم إرسال رسالتك بنجاح', en: 'Your message has been sent successfully' },

  // Footer
  'footer.rights': { ar: 'جميع الحقوق محفوظة', en: 'All rights reserved' },
  'footer.tagline': { ar: 'شريككم الموثوق في حلول التقنية والطباعة', en: 'Your trusted partner in technology and printing solutions' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  }, []);

  const t = useCallback((key: string): string => {
    return translations[key]?.[language] || key;
  }, [language]);

  const isRTL = language === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
