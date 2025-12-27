
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section id="cta" className="relative py-32 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-110"
        style={{ backgroundImage: `url('https://picsum.photos/id/384/1920/600')` }}
      />
      {/* Opacity Reduced for clearer image */}
      <div className="absolute inset-0 z-10 bg-[#0B5D3E]/70" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0B5D3E] to-transparent opacity-60" />
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center reveal">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-10 leading-tight">
            ابدأ بخطوة ذكية <br/> <span className="text-[#6EE7B7]">ترفع هيبة شركتك</span> الرقمية
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-14 max-w-2xl mx-auto font-light">
            تواصل مع مستشارينا اليوم للحصول على خطة تقنية شاملة وعرض سعر يلبي طموحاتك.
          </p>
          <button 
            onClick={() => window.open('https://wa.me/201225251888', '_blank')}
            className="bg-[#12A16B] text-white hover:bg-[#6EE7B7] hover:text-[#0B5D3E] px-16 py-5 rounded-sm font-bold text-xl transition-all shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform hover:scale-110 active:scale-95 border-b-4 border-[#0B5D3E]"
          >
            تواصل معنا الآن
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
