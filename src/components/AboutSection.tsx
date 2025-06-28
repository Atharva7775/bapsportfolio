
import { User, Database } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-black/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <User className="text-blue-400" size={24} />
              <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate Data Scientist with hands-on experience in building scalable Dashboards, 
              intelligent bots using Microsoft Copilot, and NLP-based database assistants. I specialize in crafting scalable data solutions for the modern world using cutting-edge technologies like AWS Bedrock and innovative data-driven approaches.
              
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              With a Master's degree in Computer Science from UNC Charlotte and experience at Theoremlabs Partners LLC, 
              I've developed expertise in cloud engineering, automation, and analytics that drives business value and 
              improves decision-making processes.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-colors">
                <div className="text-3xl font-bold text-blue-400 mb-2">1+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
              <a 
                href="https://www.credly.com/badges/8cec250e-b1ca-4f9b-a8da-e3c8681540a2/print" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
              <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-colors">
                  <div className="text-3xl font-bold text-purple-400 mb-2">AWS</div>
                  <div className="text-gray-300 text-sm">AWS Academy – Data Engineering Certificate</div>
                </div>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <Database className="text-blue-400" size={24} />
              <h3 className="text-2xl font-semibold text-white">What I Do</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700/50 hover:border-blue-500/30 transition-all hover:bg-gray-800/50">
                <h4 className="text-xl font-semibold text-white mb-2">Data Science & Analytics</h4>
                <p className="text-gray-300">Building scalable ETL pipelines and implementing machine learning solutions for real-time data processing.</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-orange-600/20 text-orange-300 rounded-full text-sm">AWS</span>
                  <span className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm">Pandas</span>
                </div>
              </div>

              <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700/50 hover:border-purple-500/30 transition-all hover:bg-gray-800/50">
                <h4 className="text-xl font-semibold text-white mb-2">AI & NLP Solutions</h4>
                <p className="text-gray-300">Developing intelligent chatbots and NLP-based database assistants using Microsoft Copilot and AWS Bedrock.</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">Microsoft Copilot</span>
                  <span className="px-3 py-1 bg-cyan-600/20 text-cyan-300 rounded-full text-sm">Langchain</span>
                  <span className="px-3 py-1 bg-red-600/20 text-red-300 rounded-full text-sm">OpenAI</span>
                </div>
              </div>

              <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700/50 hover:border-green-500/30 transition-all hover:bg-gray-800/50">
                <h4 className="text-xl font-semibold text-white mb-2">Cloud Infrastructure</h4>
                <p className="text-gray-300">Implementing cloud-based solutions with AWS services, Lambda functions, and CI/CD pipelines.</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-3 py-1 bg-yellow-600/20 text-yellow-300 rounded-full text-sm">AWS Lambda</span>
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">Jenkins</span>
                  <span className="px-3 py-1 bg-gray-600/20 text-gray-300 rounded-full text-sm">EventBridge</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
