
import React, { useState, useEffect } from 'react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920', // Modern Office
    tag: 'Enterprise Technology Partner'
  },
  {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920', // Team Collaboration
    tag: 'Innovative Business Solutions'
  },
  {
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1920', // Corporate Meeting
    tag: 'Smart Communication Infrastructure'
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // تغيير الصورة كل 6 ثوانٍ
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      {/* Background Slider Container */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image with Slow Zoom (Ken Burns Effect) */}
            <div 
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear ${
                index === currentSlide ? 'scale-110' : 'scale-100'
              }`}
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
          </div>
        ))}
      </div>

      {/* Corporate Overlay Gradient (65% opacity) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0B5D3E]/80 via-[#0B5D3E]/60 to-[#0B5D3E]/90" />
      
      {/* Animated Decorative Tech Pattern */}
      <div className="absolute inset-0 z-10 opacity-20 pointer-events-none floating-anim" 
           style={{ backgroundImage: `radial-gradient(circle, #3CCF9A 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />

      <div className="container mx-auto px-6 relative z-20 mt-16">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-[#6EE7B7]/40 bg-[#12A16B]/20 backdrop-blur-sm animate__animated animate__fadeInDown">
            <span className="text-[#6EE7B7] text-xs font-bold tracking-widest uppercase">
              {slides[currentSlide].tag}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight mb-8 animate__animated animate__fadeInRight animate__delay-1s">
            حلول ذكية تعكس <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3CCF9A] to-[#6EE7B7]">احتراف شركتك</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl leading-relaxed animate__animated animate__fadeInUp animate__delay-2s font-light">
            نقدّم في إنجاز حلول بريد إلكتروني، استضافة مواقع، وتصميم منصات رقمية موجهة لبيئة الأعمال بعقلية ذكية ومستقرة.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 animate__animated animate__fadeInUp animate__delay-2s">
            <button 
              onClick={() => window.open('https://wa.me/201225251888?text=أرغب في طلب عرض سعر لمؤسستي', '_blank')}
              className="bg-[#12A16B] text-white hover:bg-white hover:text-[#0B5D3E] px-12 py-4 rounded-sm font-bold text-lg transition-all shadow-[0_10px_30px_rgba(18,161,107,0.4)]"
            >
              اطلب عرض سعر
            </button>
            <button 
              onClick={() => scrollToSection('footer')}
              className="border border-white/40 text-white hover:bg-white/10 px-12 py-4 rounded-sm font-bold text-lg transition-all backdrop-blur-sm"
            >
              تواصل معنا
            </button>
          </div>
        </div>
      </div>
      
      {/* Slider Indicators (Dots) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              idx === currentSlide ? 'w-10 bg-[#6EE7B7]' : 'w-4 bg-white/30'
            }`}
          />
        ))}
      </div>
      
      {/* Bottom overlay for smooth section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent z-20" />
    </div>
  );
};

export default Hero;
