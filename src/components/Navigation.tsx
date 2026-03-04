import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (page: string) => currentPage === page;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick('home')}
              className="text-2xl font-bold text-cyan-600 hover:text-cyan-700 transition-colors"
            >
              MO DENTAL
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick('home')}
              className={`font-medium transition-colors ${
                isActive('home') ? 'text-cyan-600' : 'text-gray-700 hover:text-cyan-600'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className={`font-medium transition-colors ${
                isActive('services') ? 'text-cyan-600' : 'text-gray-700 hover:text-cyan-600'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`font-medium transition-colors ${
                isActive('about') ? 'text-cyan-600' : 'text-gray-700 hover:text-cyan-600'
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`font-medium transition-colors ${
                isActive('contact') ? 'text-cyan-600' : 'text-gray-700 hover:text-cyan-600'
              }`}
            >
              Contact
            </button>
            <a
              href="tel:7008520133"
              className="flex items-center gap-2 bg-cyan-600 text-white px-6 py-2.5 rounded-full hover:bg-cyan-700 transition-colors font-medium"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => handleNavClick('home')}
              className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                isActive('home') ? 'bg-cyan-100 text-cyan-600' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                isActive('services') ? 'bg-cyan-100 text-cyan-600' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                isActive('about') ? 'bg-cyan-100 text-cyan-600' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                isActive('contact') ? 'bg-cyan-100 text-cyan-600' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Contact
            </button>
            <a
              href="tel:7008520133"
              className="flex items-center justify-center gap-2 bg-cyan-600 text-white px-6 py-3 rounded-full hover:bg-cyan-700 transition-colors font-medium"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
