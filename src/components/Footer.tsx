import { Phone, MapPin, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">MO DENTAL</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for comprehensive dental care in Bhubaneswar. We're committed to your oral health and beautiful smile.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-cyan-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-cyan-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-cyan-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Root Canal Treatment</li>
              <li>Dental Implants</li>
              <li>Orthodontic Correction</li>
              <li>Tooth Whitening</li>
              <li>Crown & Bridges</li>
              <li>Gum Surgeries</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  Plot no- 2405, Infront of Apollo Pharmacy, Golakha, Mancheswar, Bhubaneswar, Odisha 751010
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <a href="tel:7008520133" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  70085 20133
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <a href="mailto:info@modentalclinic.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  info@modentalclinic.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} MO Dental Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
