
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background dots */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          <p className="text-gray-300 text-lg mb-4 animate-fade-in">
            Hi, I'm <span className="text-blue-400 font-semibold">Atharva Bapat!</span>
          </p>
          
          {/* Progress bar */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-1 bg-gray-700 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight animate-fade-in">
          Turning Ideas Into Impact
          <br />
          Through{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-glow">
            Data Science
          </span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in">
        Engineer with expertise in analytics, holding a Master’s in Computer Science and hands-on experience building scalable
        analytics pipelines, curated datasets, and data-driven platforms. Strong background in SQL, Python, AWS, and Airflow, with
        experience supporting analytics use cases through data modeling, validation, automation, and cloud-native architectures.
        Focused on data quality, ownership, and enabling data democratization across teams.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in">
          <button
            onClick={() => scrollToSection('about')}
            className="bg-blue-600/80 hover:bg-blue-600 text-white px-8 py-4 rounded-full transition-all duration-300 text-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
          >
            About me
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="border-2 border-gray-600 hover:border-blue-400 text-white px-8 py-4 rounded-full transition-all duration-300 text-lg font-medium flex items-center space-x-2 hover:bg-blue-400/10 hover:scale-105"
          >
            <span>Let's talk</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Social media links */}
      {/* <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-40">
        <div className="text-white text-sm writing-mode-vertical-rl mb-4 opacity-60">
          Follow me
        </div>
        <div className="w-px h-16 bg-gray-600"></div>
        <div className="flex flex-col space-y-4">
          <a href="https://www.linkedin.com/in/atharva-bapat/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors p-2">
            <div className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs">
              in
            </div>
          </a>
          <a href="mailto:bapat.atharva9@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors p-2">
            <div className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs">
              @
            </div>
          </a>
          <a href="tel:+1-980-382-0745" className="text-gray-400 hover:text-blue-400 transition-colors p-2">
            <div className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs">
              ph
            </div>
          </a>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
