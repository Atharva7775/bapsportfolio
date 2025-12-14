import { Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Programmer Analyst",
      company: "Theoremlabs Partners LLC",
      period: "Sep 2024 - Present",
      location: "Charlotte, NC",
      description: [
        "Developed NLP chatbot using AWS Bedrock with MCP layer for natural language CRUD operations on PostgreSQL database",
        "Built Microsoft Copilot bot improving financial advisors' decision-making speed by 60%",
        "Automated document processing with Hugging Face LayoutLM, reducing manual data entry by 80%"
      ],
      technologies: ["Python", "AWS Bedrock", "PostgreSQL", "Microsoft Copilot", "Azure Services", "Hugging Face", "FastAPI", "Streamlit"]
    },
    {
      title: "Instructional Assistant",
      company: "University of North Carolina at Charlotte",
      period: "Oct 2022 - Apr 2024",
      location: "Charlotte, NC",
      description: [
        "Facilitated Python lab activities and mentored students in Python scripting",
        "Built PowerBI dashboards visualizing key academic metrics for faculty"
      ],
      technologies: ["Python", "PowerBI"]
    },
    {
      title: "Software Developer",
      company: "Persistent Systems",
      period: "Jan 2022 - Jun 2022",
      location: "Pune, India",
      description: [
        "Built ML pipeline to predict repeat purchase likelihood using logistic regression and decision trees",
        "Developed real-time data pipeline handling 100K+ records/minute using Kafka and Spark Streaming",
        "Reduced query response time by 40% through Redis caching and optimized PostgreSQL queries"
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
