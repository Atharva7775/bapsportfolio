import { Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Programmer Analyst",
      company: "Theoremlabs Partners LLC",
      period: "Sep 2024 - Present",
      location: "Charlotte, NC",
      description: [
        "Developed a natural language chatbot using AWS Bedrock foundation models with a custom MCP (Model-Context-Protocol) layer to handle context management and tool calls, enabling users to perform CRUD operations on PostgreSQL databases using conversational queries",
        "Built an intelligent Microsoft Copilot bot that helps financial advisors quickly access company advisory data to answer questions, improving their decision-making speed by 60% and streamlining information retrieval workflows",
        "Created an automated document processing pipeline using Hugging Face's LayoutLM to extract structured data from scanned government and financial documents like tax forms and KYC records, reducing manual data entry by 80%",
        "Integrated Azure services including Blob Storage, Key Vault, and OpenAI with Power Automate to build secure and scalable AI-driven solutions for financial data processing"
      ],
      technologies: ["Python", "AWS Bedrock", "PostgreSQL", "Microsoft Copilot", "Azure Services", "Hugging Face", "FastAPI", "Streamlit"]
    },
    {
      title: "Instructional Assistant",
      company: "University of North Carolina at Charlotte",
      period: "Oct 2022 - Apr 2024",
      location: "Charlotte, NC",
      description: [
        "Facilitated Python lab sessions where I helped students learn Python scripting, problem-solving techniques, and debugging strategies through hands-on coding exercises",
        "Built and maintained PowerBI dashboards that visualized key academic metrics, helping faculty members track student performance trends and make data-driven decisions about course improvements"
      ],
      technologies: ["Python", "PowerBI"]
    },
    {
      title: "Software Developer",
      company: "Persistent Systems",
      period: "Jan 2022 - Jun 2022",
      location: "Pune, India",
      description: [
        "Built a machine learning pipeline to analyze consumer purchase patterns using decision trees and logistic regression on the Instacart dataset, helping predict repeat purchase likelihood and understand customer shopping behaviors",
        "Developed a real-time data processing pipeline using Kafka and Spark Streaming that could handle over 100,000 records per minute, enabling the system to process large volumes of consumer data efficiently",
        "Improved database query performance by 40% by implementing a Redis caching layer and optimizing PostgreSQL queries, making data retrieval faster for downstream applications"
      ],
      technologies: ["Python", "Machine Learning", "Kafka", "Spark Streaming", "Redis", "PostgreSQL"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-purple-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform md:-translate-x-2 z-10 animate-glow"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:bg-gray-800/60">
                    <div className="flex items-center mb-3">
                      <Briefcase className="text-purple-400 mr-3" size={20} />
                      <span className="text-purple-400 text-sm font-medium">{exp.period}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                    <h4 className="text-lg text-blue-400 mb-1">{exp.company}</h4>
                    <p className="text-gray-400 text-sm mb-4">{exp.location}</p>
                    
                    <ul className="text-gray-300 mb-4 leading-relaxed space-y-2">
                      {exp.description.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start">
                          <span className="text-purple-400 mr-2 mt-1">•</span>
                          <span className="text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for larger screens */}
                <div className="hidden md:block w-2/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
