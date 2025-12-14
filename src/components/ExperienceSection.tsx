import { Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Programmer Analyst",
      company: "Theoremlabs Partners LLC",
      period: "Sep 2024 - Present",
      location: "Charlotte, NC",
      description: [
        "Developed a state-of-the-art NLP chatbot using AWS Bedrock foundation models wrapped with an MCP (Model–Context–Protocol) layer to manage context and tool calls for natural language-based CRUD operations on a PostgreSQL database",
        "Enhanced user autonomy and reduced reliance on technical teams by enabling intuitive, language-driven data access, streamlining internal query workflows and improving decision-making efficiency",
        "Applied prompt engineering to improve response reliability and reduce hallucinations by guiding the model to accurately translate user questions into SQL queries",
        "Developed an intelligent Microsoft Copilot bot that leverages company's advisory data to answer financial advisors' questions, streamlining information access and improving decision-making speed by 60%",
        "Integrated Azure services (Blob Storage, Key Vault, OpenAI) to enable secure, scalable AI-driven solutions",
        "Automated data extraction and structured financial insights using Azure Functions and Power Automate, reducing manual processing time by 40%",
        "Built an automated pipeline using Hugging Face's LayoutLM to extract structured data from scanned government and financial documents such as tax forms and KYC records",
        "Developed an interactive Streamlit UI for document upload and review, powered by a FastAPI backend that managed OCR processing, data validation, and database integration",
        "Streamlined the document processing workflow and reduced manual data entry by 80%, enabling faster access to critical financial information"
      ],
      technologies: ["Python", "AWS Bedrock", "PostgreSQL", "NLP", "Microsoft Copilot", "Azure Services", "Hugging Face", "FastAPI", "Streamlit"]
    },
    {
      title: "Instructional Assistant",
      company: "University of North Carolina at Charlotte",
      period: "Oct 2022 - Apr 2024",
      location: "Charlotte, NC",
      description: [
        "Facilitated Python lab activities and mentored students in Python scripting and problem-solving",
        "Built and maintained PowerBI dashboards visualizing key academic metrics, enabling faculty to track student performance trends"
      ],
      technologies: ["Python", "PowerBI", "Data Visualization", "Teaching", "Mentoring"]
    },
    {
      title: "Software Developer",
      company: "Persistent Systems",
      period: "Jan 2022 - Jun 2022",
      location: "Pune, India",
      description: [
        "Built a machine learning pipeline to analyze consumer data and predict repeat purchase likelihood using logistic regression and decision trees, leveraging the Instacart Online Grocery Basket dataset",
        "Engineered features such as recency and frequency of purchases to understand shopping behavior, and grouped users based on loyalty and product preferences to enhance targeting",
        "Applied uplift modeling to estimate the impact of promotions",
        "Developed a scalable real-time data ingestion and processing pipeline handling 100K+ records/minute using Kafka and Spark Streaming",
        "Reduced query response time by 40% through Redis caching layer and optimized PostgreSQL queries",
        "Implemented automated monitoring and alerting using Prometheus and Grafana for system health tracking"
      ],
      technologies: ["Machine Learning", "Decision Trees", "Kafka", "Spark Streaming", "Redis", "PostgreSQL", "Prometheus", "Grafana"]
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
