
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://picsum.photos/id/384/1920/600')` }}
      />
      <div className="absolute inset-0 z-10 bg-[#0B5D3E] opacity-80" />
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            ابدأ بخطوة ذكية ترفع صورة شركتك الرقمية
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto">
            تواصل معنا الآن للحصول على استشارة فنية مجانية وعرض سعر مخصص لمؤسستك.
          </p>
          <button className="bg-[#6EE7B7] text-[#0B5D3E] hover:bg-white px-12 py-5 rounded-sm font-bold text-xl transition-all shadow-2xl transform hover:scale-105">
            تواصل معنا الآن
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
