
import React from 'react';

const SolutionCard = ({ icon, title, description, imageId, delay }: { icon: React.ReactNode, title: string, description: string, imageId: number, delay: string }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`reveal group relative bg-white border border-gray-100 p-10 shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden flex flex-col h-full rounded-sm ${delay}`}>
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 z-0 bg-cover bg-center grayscale scale-110 group-hover:scale-100"
        style={{ backgroundImage: `url('https://picsum.photos/id/${imageId}/800/600')` }}
      />
      <div className="relative z-10">
        <div className="w-16 h-16 bg-[#F3F6F5] text-[#12A16B] flex items-center justify-center mb-8 group-hover:bg-[#12A16B] group-hover:text-white transition-all duration-500 rounded-sm transform group-hover:rotate-[360deg]">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-[#1F2933] mb-5">{title}</h3>
        <p className="text-gray-500 leading-relaxed text-lg mb-10">{description}</p>
        <button 
          onClick={() => scrollToSection('footer')}
          className="mt-auto inline-flex items-center text-[#12A16B] font-bold group-hover:translate-x-[-10px] transition-all bg-transparent border-none cursor-pointer"
        >
          <span className="ml-2">اكتشف التفاصيل</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-180" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 reveal">
          <div className="max-w-2xl">
            <span className="text-[#12A16B] font-bold text-sm tracking-widest uppercase mb-4 block border-r-4 border-[#12A16B] pr-4">حلولنا الذكية</span>
            <h2 className="text-4xl md:text-6xl font-bold text-[#1F2933] leading-tight mt-6">نبتكر لتتمكن من <span className="text-[#12A16B]">التركيز على نمو</span> أعمالك</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <SolutionCard 
            imageId={201}
            delay=""
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
            title="استضافة البريد للشركات"
            description="أنظمة بريد آمنة تعتمد على نطاق شركتك الخاص، مع حماية متطورة من الرسائل المزعجة وضمان استقرار التواصل الرسمي."
          />
          <SolutionCard 
            imageId={160}
            delay="transition-delay-[200ms]"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
            title="استضافة مواقع الأعمال"
            description="بنية تحتية سحابية مصممة لتحمل ضغط الزيارات العالي، مع حماية DDoS وشهادات أمان SSL مجانية لكل عميل."
          />
          <SolutionCard 
            imageId={4}
            delay="transition-delay-[400ms]"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
            title="تصميم وتطوير المواقع"
            description="مواقع شركات تعكس القوة والمصداقية، متوافقة مع كافة الشاشات ومحسنة لمحركات البحث لضمان وصولك لجمهورك."
          />
        </div>
      </div>
    </section>
  );
};

export default Solutions;
