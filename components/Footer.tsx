
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-[#0B5D3E] text-white pt-20 pb-10 border-t border-[#12A16B]/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#6EE7B7] rounded-lg flex items-center justify-center">
                <span className="text-[#0B5D3E] font-bold text-xl">E</span>
              </div>
              <h2 className="text-2xl font-bold text-white leading-none">إنجاز</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              شركة إنجاز للحلول الذكية، شريكك التقني الموثوق لبناء بنية تحتية رقمية احترافية ومستقرة للأعمال.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#6EE7B7] border-r-2 border-[#12A16B] pr-3">خدماتنا</h3>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">استضافة البريد للشركات</a></li>
              <li><a href="#" className="hover:text-white transition-colors">استضافة المواقع الرسمية</a></li>
              <li><a href="#" className="hover:text-white transition-colors">تطوير المواقع والمنصات</a></li>
              <li><a href="#" className="hover:text-white transition-colors">إدارة البنية التحتية الرقمية</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#6EE7B7] border-r-2 border-[#12A16B] pr-3">روابط سريعة</h3>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">لماذا إنجاز؟</a></li>
              <li><a href="#" className="hover:text-white transition-colors">قصص النجاح</a></li>
              <li><a href="#" className="hover:text-white transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#" className="hover:text-white transition-colors">سياسة الاستخدام</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#6EE7B7] border-r-2 border-[#12A16B] pr-3">تواصل معنا</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <span className="text-[#6EE7B7]">الهاتف:</span>
                <span dir="ltr">01225251888</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#6EE7B7]">الإيميل:</span>
                <span>info@enjaz.app</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#6EE7B7]">العنوان:</span>
                <span>مكرم عبيد – مدينة نصر، القاهرة</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#12A16B]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} شركة إنجاز للحلول الذكية. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#6EE7B7] transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-[#6EE7B7] transition-colors">Twitter</a>
            <a href="#" className="hover:text-[#6EE7B7] transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
