
import { ArrowRight, Contact } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="text-pink-400">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-red-500 mx-auto rounded-full"></div>
        </div>

        <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-pink-600/20 rounded-full">
              <Contact className="text-pink-400" size={48} />
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Discover the story your data’s been waiting to tell.
          </h3>
          
          <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
            I'm passionate about building data-driven solutions that empower businesses and drive meaningful results. 
            Whether you're looking to implement AI solutions, build scalable data pipelines, or explore new opportunities in data science, 
            let's discuss how we can work together.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a
              href="mailto:bapat.atharva9@gmail.com"
              className="bg-pink-600/80 hover:bg-pink-600 text-white px-8 py-4 rounded-full transition-all duration-300 text-lg font-medium hover:shadow-lg hover:shadow-pink-500/25 hover:scale-105 flex items-center space-x-2"
            >
              <span>Send me an email</span>
              <ArrowRight size={20} />
            </a>
            
            <a
              href="https://www.linkedin.com/in/atharva-bapat/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-600 hover:border-pink-400 text-white px-8 py-4 rounded-full transition-all duration-300 text-lg font-medium hover:bg-pink-400/10 hover:scale-105"
            >
              Connect on LinkedIn
            </a>
            <a
    href="/Atharva Bapat Resume.pdf" // Replace with the actual path to your resume file
    download="Atharva Bapat Resume.pdf" // Optional: Specify the downloaded file name
    className="bg-purple-800/80 hover:bg-purple-700 text-white px-8 py-4 rounded-full transition-all duration-300 text-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 flex items-center space-x-2"
  >
    Download Resume
  </a>
          </div>

          <div className="flex justify-center space-x-6 text-gray-400 mb-6">
            <a href="https://www.linkedin.com/in/atharva-bapat/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
              <span className="text-sm">LinkedIn</span>
            </a>
            <a href="mailto:bapat.atharva9@gmail.com" className="hover:text-pink-400 transition-colors">
              <span className="text-sm">Email</span>
            </a>
            <a href="tel:+1-980-382-0745" className="hover:text-pink-400 transition-colors">
              <span className="text-sm">Phone</span>
            </a>
          </div>

          <div className="text-center text-gray-400">
            <p className="text-sm mb-2">+1 980-382-0745</p>
            <p className="text-sm">Charlotte, NC</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Atharva Bapat. Empowering businesses through data science.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
