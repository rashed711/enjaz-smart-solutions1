
import React from 'react';

const SolutionCard = ({ icon, title, description, imageId }: { icon: React.ReactNode, title: string, description: string, imageId: number }) => (
  <div className="group relative bg-white border border-gray-100 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full rounded-sm">
    <div 
      className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 z-0 bg-cover bg-center grayscale"
      style={{ backgroundImage: `url('https://picsum.photos/id/${imageId}/800/600')` }}
    />
    <div className="relative z-10">
      <div className="w-14 h-14 bg-[#F3F6F5] text-[#12A16B] flex items-center justify-center mb-6 group-hover:bg-[#12A16B] group-hover:text-white transition-colors duration-300 rounded-sm">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-[#1F2933] mb-4">{title}</h3>
      <p className="text-gray-500 leading-relaxed text-lg mb-8">{description}</p>
      <a href="#" className="mt-auto inline-flex items-center text-[#12A16B] font-bold hover:gap-3 transition-all">
        اكتشف المزيد
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 rotate-180" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </a>
    </div>
  </div>
);

const Solutions: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#12A16B] font-bold text-sm tracking-widest uppercase mb-4 block">حلول متكاملة للأعمال</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F2933] leading-tight">حلولنا الذكية مصممة لرفع كفاءة علامتك التجارية</h2>
          </div>
          <p className="text-gray-500 text-lg max-w-sm">
            نركز على تقديم أدوات تقنية تضمن الاستقرار، الأمان، والاحترافية التي تتطلبها بيئات العمل الكبيرة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SolutionCard 
            imageId={201}
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
            title="استضافة البريد الإلكتروني"
            description="بريد إلكتروني احترافي باسم نطاق شركتك، مع معايير أمان عالمية، استقرار تام، وإدارة مركزية متطورة تضمن عدم انقطاع التواصل."
          />
          <SolutionCard 
            imageId={160}
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
            title="استضافة مواقع للأعمال"
            description="سيرفرات فائقة السرعة مخصصة للمؤسسات، مع نسخ احتياطي يومي وحماية من الهجمات، تضمن تواجد موقعك الرسمي بقوة 24/7."
          />
          <SolutionCard 
            imageId={4}
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
            title="تصميم وتطوير المواقع"
            description="تصميم واجهات رقمية تعكس هيبة شركتك، مع تجربة مستخدم ذكية تهدف إلى بناء الثقة مع عملائك وتحقيق نمو حقيقي ومستدام."
          />
        </div>
      </div>
    </section>
  );
};

export default Solutions;
