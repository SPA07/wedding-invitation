import { useState, useEffect } from 'react';

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex justify-center items-center transition-all duration-500 ease-in-out ${
        hasScrolled 
          ? "bg-[#a24415] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="relative w-full max-w-lg flex items-center justify-center px-4">
        {/* Texto con cambio de color sutil para legibilidad */}
        <h1 className={`text-center text-xl sm:text-2xl font-serif italic tracking-widest transition-colors duration-500 ${
          hasScrolled ? "text-[#fdfcf0]" : "text-white"
        }`}>
          Montse y Salvador
        </h1>
      </div>
    </header>
  );
};

export default Header;