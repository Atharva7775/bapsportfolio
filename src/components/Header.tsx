
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            Atharva Bapat
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-sm transition-colors ${
                activeSection === 'home' ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`text-sm transition-colors ${
                activeSection === 'about' ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className={`text-sm transition-colors ${
                activeSection === 'experience' ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`text-sm transition-colors ${
                activeSection === 'projects' ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Projects
            </button>
          </nav>

          <button
            onClick={() => scrollToSection('contact')}
            className="bg-blue-600/80 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-all duration-300 flex items-center space-x-2 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <span>Let's Connect</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
