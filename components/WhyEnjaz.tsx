
import React from 'react';

const FeatureItem = ({ title, desc }: { title: string, desc: string }) => (
  <div className="flex gap-6 mb-12 reveal">
    <div className="flex-shrink-0 w-14 h-14 bg-[#3CCF9A] text-[#0B5D3E] flex items-center justify-center rounded-sm shadow-[0_0_15px_rgba(60,207,154,0.3)]">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <div>
      <h4 className="text-2xl font-bold text-white mb-3">{title}</h4>
      <p className="text-gray-300 leading-relaxed text-lg">{desc}</p>
    </div>
  </div>
);

const WhyEnjaz: React.FC = () => {
  return (
    <section id="why-enjaz" className="relative py-32 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-fixed bg-center"
        style={{ backgroundImage: `url('https://picsum.photos/id/180/1920/1200')` }}
      />
      {/* Opacity Reduced to 70% for better image visibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0B5D3E] via-[#0B5D3E]/90 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="reveal">
            <span className="text-[#6EE7B7] font-bold text-sm tracking-widest uppercase mb-6 block border-r-4 border-[#6EE7B7] pr-4">منظومة القوة الرقمية</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 leading-tight">شريكك التقني الذي <br/> يقدّر قيمة الاستقرار</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              <FeatureItem title="حلول مخصصة للشركات" desc="باقات تقنية مرنة تتوسع مع نمو مؤسستك دون أي تعقيدات تقنية." />
              <FeatureItem title="أمان سيبراني متقدم" desc="نطبق أعلى معايير التشفير والحماية لضمان سلامة أصولك الرقمية." />
              <FeatureItem title="دعم فني مباشر" desc="فريقنا متاح 24 ساعة للتعامل مع أي طوارئ تقنية بسرعة فائقة." />
            </div>
          </div>
          
          <div className="hidden lg:block relative reveal transition-delay-[300ms]">
            <div className="relative z-10 p-2 border-2 border-white/20 bg-white/5 backdrop-blur-md rounded-sm overflow-hidden group">
               <img 
                src="https://picsum.photos/id/119/1000/1000" 
                alt="Corporate Professional" 
                className="w-full h-auto rounded-sm shadow-2xl opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
              />
               <div className="absolute inset-0 bg-[#12A16B]/20 group-hover:bg-transparent transition-all duration-500"></div>
            </div>
            {/* Ambient glows */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#12A16B] opacity-30 blur-[100px] rounded-full animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#3CCF9A] opacity-20 blur-[100px] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEnjaz;
