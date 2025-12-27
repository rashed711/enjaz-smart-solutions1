
import React from 'react';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="bg-[#0B5D3E] text-white pt-24 pb-12 border-t border-[#12A16B]/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-1 reveal">
            <div className="flex items-center gap-3 mb-8 cursor-pointer" onClick={() => scrollToSection('hero')}>
               <img 
                src="https://www2.0zz0.com/2025/12/27/07/473567950.png" 
                alt="إنجاز للحلول الذكية" 
                className="h-16 object-contain"
              />
            </div>
            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
              شركة إنجاز للحلول الذكية، شريكك التقني الموثوق لبناء بنية تحتية رقمية احترافية ومستقرة للأعمال. نحن نخدم المؤسسات بعقلية ذكية.
            </p>
          </div>

          {/* Services */}
          <div className="reveal transition-delay-[100ms]">
            <h3 className="text-xl font-bold mb-8 text-[#6EE7B7] border-r-4 border-[#12A16B] pr-4">خدماتنا</h3>
            <ul className="space-y-5 text-gray-300">
              <li><button onClick={() => scrollToSection('solutions')} className="hover:text-[#6EE7B7] transition-all flex items-center gap-2"><span>←</span> استضافة البريد للشركات</button></li>
              <li><button onClick={() => scrollToSection('solutions')} className="hover:text-[#6EE7B7] transition-all flex items-center gap-2"><span>←</span> استضافة المواقع الرسمية</button></li>
              <li><button onClick={() => scrollToSection('solutions')} className="hover:text-[#6EE7B7] transition-all flex items-center gap-2"><span>←</span> تطوير المواقع والمنصات</button></li>
              <li><button onClick={() => scrollToSection('solutions')} className="hover:text-[#6EE7B7] transition-all flex items-center gap-2"><span>←</span> إدارة البنية التحتية</button></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="reveal transition-delay-[200ms]">
            <h3 className="text-xl font-bold mb-8 text-[#6EE7B7] border-r-4 border-[#12A16B] pr-4">روابط سريعة</h3>
            <ul className="space-y-5 text-gray-300">
              <li><button onClick={() => scrollToSection('why-enjaz')} className="hover:text-[#6EE7B7] transition-all flex items-center gap-2"><span>←</span> من نحن</button></li>
              <li><button onClick={() => scrollToSection('credibility')} className="hover:text-[#6EE7B7] transition-all flex items-center gap-2"><span>←</span> قصص النجاح</button></li>
              <li><button onClick={() => scrollToSection('hero')} className="hover:text-[#6EE7B7] transition-all flex items-center gap-2"><span>←</span> الرئيسية</button></li>
              <li><button onClick={() => scrollToSection('cta')} className="hover:text-[#6EE7B7] transition-all flex items-center gap-2"><span>←</span> طلب استشارة</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="reveal transition-delay-[300ms]">
            <h3 className="text-xl font-bold mb-8 text-[#6EE7B7] border-r-4 border-[#12A16B] pr-4">تواصل معنا</h3>
            <ul className="space-y-6 text-gray-300">
              <li className="flex items-center gap-4 group">
                <a href="tel:01225251888" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-sm group-hover:bg-[#12A16B] transition-all">
                    <span className="text-sm">📞</span>
                  </div>
                  <span dir="ltr" className="text-lg">01225251888</span>
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <a href="mailto:info@enjaz.app" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-sm group-hover:bg-[#12A16B] transition-all">
                    <span className="text-sm">✉️</span>
                  </div>
                  <span className="text-lg">info@enjaz.app</span>
                </a>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-sm group-hover:bg-[#12A16B] transition-all mt-1">
                   <span className="text-sm">📍</span>
                </div>
                <span className="text-lg">مكرم عبيد – مدينة نصر، القاهرة</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} شركة إنجاز للحلول الذكية. جميع الحقوق محفوظة.</p>
          <div className="flex gap-8">
            <a href="https://linkedin.com/company/enjaz" target="_blank" rel="noreferrer" className="hover:text-[#6EE7B7] transition-all text-xl">LinkedIn</a>
            <a href="https://twitter.com/enjaz" target="_blank" rel="noreferrer" className="hover:text-[#6EE7B7] transition-all text-xl">Twitter</a>
            <a href="https://facebook.com/enjaz" target="_blank" rel="noreferrer" className="hover:text-[#6EE7B7] transition-all text-xl">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
