
import React from 'react';

const FeatureItem = ({ title, desc }: { title: string, desc: string }) => (
  <div className="flex gap-6 mb-12">
    <div className="flex-shrink-0 w-12 h-12 bg-[#12A16B] text-white flex items-center justify-center rounded-sm">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <div>
      <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
      <p className="text-gray-300 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const WhyEnjaz: React.FC = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-fixed bg-center"
        style={{ backgroundImage: `url('https://picsum.photos/id/180/1920/1200')` }}
      />
      <div className="absolute inset-0 z-10 bg-[#0B5D3E] opacity-90" />
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[#6EE7B7] font-bold text-sm tracking-widest uppercase mb-4 block">لماذا تختارنا</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">شريكك التقني الذي يفهم عقلية المؤسسات</h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              نحن لا نبيع خدمات تقنية فحسب، بل نبني بنية تحتية رقمية تليق بالشركات الكبرى التي تبحث عن الاستقرار والاحترافية المطلقة.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              <FeatureItem title="حلول مخصصة" desc="تصميم باقات تقنية تناسب حجم واحتياجات شركتك بدقة." />
              <FeatureItem title="استقرار وأمان" desc="حماية بيانات شركتك هي أولويتنا القصوى بلا تنازل." />
              <FeatureItem title="إدارة سهلة" desc="لوحات تحكم ذكية تمنحك السيطرة الكاملة ببساطة." />
              <FeatureItem title="دعم فني مباشر" desc="فريق خبير جاهز للرد وحل المشكلات في أي وقت." />
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="relative z-10 p-4 border border-[#12A16B]/30 bg-[#0B5D3E]/50 backdrop-blur-md rounded-sm">
               <img 
                src="https://picsum.photos/id/119/800/800" 
                alt="Corporate Professional" 
                className="w-full h-auto rounded-sm shadow-2xl opacity-90 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#12A16B] opacity-20 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#3CCF9A] opacity-20 blur-3xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEnjaz;
