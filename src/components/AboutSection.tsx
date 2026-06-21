
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
              I engineer end-to-end AI systems that solve real business problems — from retrieval-augmented generation pipelines and document intelligence models to agentic voice applications and NLP-powered data assistants. My work spans AWS Bedrock, LangChain, OpenAI, and Azure, with a strong focus on production reliability, explainability, and measurable business impact. Currently a Programmer Analyst applying cutting-edge AI to financial services workflows.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              With a Master's in Computer Science from UNC Charlotte and hands-on experience at Theoremlabs Partners LLC,
              I've shipped AI systems across the full stack — from data pipelines and model integration to agentic workflows
              and voice AI — all in production environments where reliability and business impact are non-negotiable.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-colors">
                <div className="text-3xl font-bold text-blue-400 mb-2">2+</div>
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
                <h4 className="text-xl font-semibold text-white mb-2">Data Engineering & Analytics</h4>
                <p className="text-gray-300">Designing end-to-end data pipelines, SQL data models, and analytics workflows that turn raw data into reliable, decision-ready insights.</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-orange-600/20 text-orange-300 rounded-full text-sm">SQL</span>
                  <span className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm">AWS</span>
                </div>
              </div>

              <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700/50 hover:border-purple-500/30 transition-all hover:bg-gray-800/50">
                <h4 className="text-xl font-semibold text-white mb-2">Generative AI & LLM Engineering</h4>
                <p className="text-gray-300">Building RAG pipelines, agentic AI systems, and voice AI products using LLMs, embeddings, and prompt engineering — from POC to production.</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">LangChain</span>
                  <span className="px-3 py-1 bg-cyan-600/20 text-cyan-300 rounded-full text-sm">AWS Bedrock</span>
                  <span className="px-3 py-1 bg-red-600/20 text-red-300 rounded-full text-sm">OpenAI</span>
                </div>
              </div>

              <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700/50 hover:border-green-500/30 transition-all hover:bg-gray-800/50">
                <h4 className="text-xl font-semibold text-white mb-2">MLOps & Cloud AI Infrastructure</h4>
                <p className="text-gray-300">Deploying and scaling AI workloads on AWS with serverless architectures, event-driven pipelines, and cloud-native tooling built for production reliability.</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-3 py-1 bg-yellow-600/20 text-yellow-300 rounded-full text-sm">AWS Lambda</span>
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">Step Functions</span>
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
