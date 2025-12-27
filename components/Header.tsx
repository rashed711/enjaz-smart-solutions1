
import React from 'react';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0B5D3E] py-3 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#6EE7B7] rounded-lg flex items-center justify-center">
            <span className="text-[#0B5D3E] font-bold text-xl">E</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-white font-bold text-xl leading-none">إنجاز</h1>
            <span className="text-[#6EE7B7] text-[10px] tracking-widest font-medium uppercase">Smart Solutions</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#hero" className="text-white hover:text-[#6EE7B7] transition-colors text-sm font-medium">الرئيسية</a>
          <a href="#solutions" className="text-white hover:text-[#6EE7B7] transition-colors text-sm font-medium">الحلول</a>
          <a href="#why-enjaz" className="text-white hover:text-[#6EE7B7] transition-colors text-sm font-medium">لماذا إنجاز</a>
          <a href="#footer" className="text-white hover:text-[#6EE7B7] transition-colors text-sm font-medium">تواصل معنا</a>
        </nav>

        {/* CTA */}
        <div>
          <button className="bg-[#6EE7B7] text-[#0B5D3E] hover:bg-white px-6 py-2.5 rounded-sm font-bold text-sm transition-all transform hover:-translate-y-0.5">
            اطلب عرض سعر
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
