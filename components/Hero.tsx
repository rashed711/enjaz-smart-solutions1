
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-105"
        style={{ backgroundImage: `url('https://picsum.photos/id/192/1920/1080')` }}
      />
      {/* Dark Green Overlay (75%) */}
      <div className="absolute inset-0 z-10 bg-[#0B5D3E] opacity-85" />
      
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 z-10 opacity-10 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle, #12A16B 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />

      <div className="container mx-auto px-6 relative z-20 mt-16">
        <div className="max-w-4xl animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[#12A16B] bg-[#12A16B]/10">
            <span className="text-[#6EE7B7] text-xs font-semibold tracking-wide uppercase">Enterprise Smart Technology Partner</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight mb-8">
            حلول ذكية تعكس <span className="text-[#3CCF9A]">احتراف شركتك</span> من أول تواصل
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl leading-relaxed">
            نقدّم في إنجاز حلول بريد إلكتروني، استضافة مواقع، وتصميم مواقع موجهة لبيئة الأعمال بعقلية ذكية ومستقرة. نحن هنا لخدمة المؤسسات والشركات الطموحة فقط.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <button className="bg-[#12A16B] text-white hover:bg-[#6EE7B7] hover:text-[#0B5D3E] px-10 py-4 rounded-sm font-bold text-lg transition-all shadow-xl">
              اطلب عرض سعر
            </button>
            <button className="border-2 border-white/30 text-white hover:border-[#6EE7B7] hover:text-[#6EE7B7] px-10 py-4 rounded-sm font-bold text-lg transition-all backdrop-blur-sm">
              تواصل معنا
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20" />
    </div>
  );
};

export default Hero;
