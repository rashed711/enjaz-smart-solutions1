
import React from 'react';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-nav py-3 shadow-2xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center gap-4 cursor-pointer"
          onClick={() => scrollToSection('hero')}
        >
          <img 
            src="https://www2.0zz0.com/2025/12/27/07/473567950.png" 
            alt="إنجاز للحلول الذكية" 
            className={`transition-all duration-500 ${scrolled ? 'h-10' : 'h-14'} object-contain`}
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {[
            { name: 'الرئيسية', id: 'hero' },
            { name: 'الحلول', id: 'solutions' },
            { name: 'لماذا إنجاز', id: 'why-enjaz' },
            { name: 'تواصل معنا', id: 'footer' }
          ].map((item, idx) => (
            <button 
              key={idx}
              onClick={() => scrollToSection(item.id)}
              className="text-white hover:text-[#6EE7B7] transition-all text-sm font-semibold relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[#6EE7B7] transition-all group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div>
          <button 
            onClick={() => window.open('https://wa.me/201225251888', '_blank')}
            className="bg-[#12A16B] text-white hover:bg-[#6EE7B7] hover:text-[#0B5D3E] px-8 py-2.5 rounded-sm font-bold text-sm transition-all transform hover:-translate-y-1 shadow-lg border border-[#12A16B]"
          >
            اطلب عرض سعر
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
