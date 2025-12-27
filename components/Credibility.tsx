
import React from 'react';

const Credibility: React.FC = () => {
  return (
    <section className="py-24 bg-[#F3F6F5]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-6 leading-tight">ثقة المؤسسات هي رأس مالنا</h2>
          <p className="text-gray-500 text-lg">نحن فخورون بشراكتنا مع مؤسسات تضع الجودة والاحترافية في المقام الأول.</p>
        </div>
        
        {/* Logo strip placeholders */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center opacity-40 grayscale hover:grayscale-0 transition-all">
          {[1,2,3,4,5].map((i) => (
            <div key={i} className="flex justify-center p-6 border border-gray-200 rounded-sm hover:border-[#12A16B] transition-colors bg-white">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full" />
                <span className="font-bold text-gray-400">CORPORATE {i}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="p-8">
            <div className="text-5xl font-bold text-[#12A16B] mb-2">+99.9%</div>
            <div className="text-[#1F2933] font-bold uppercase tracking-widest text-sm">معدل التشغيل المستمر</div>
          </div>
          <div className="p-8">
            <div className="text-5xl font-bold text-[#12A16B] mb-2">+500</div>
            <div className="text-[#1F2933] font-bold uppercase tracking-widest text-sm">شركة ومؤسسة</div>
          </div>
          <div className="p-8">
            <div className="text-5xl font-bold text-[#12A16B] mb-2">24/7</div>
            <div className="text-[#1F2933] font-bold uppercase tracking-widest text-sm">دعم فني متخصص</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credibility;
