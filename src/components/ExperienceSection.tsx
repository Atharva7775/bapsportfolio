import { Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Programmer Analyst",
      company: "Theoremlabs Partners LLC",
      period: "Sep 2024 - Present",
      location: "Charlotte, NC",
      description: [
        "Improved scalability and reduced operational costs by deploying serverless architectures using AWS Lambda, Step Functions, API Gateway, S3, SQS, and SNS to handle varying workloads efficiently without managing infrastructure",
        "Built APIs for feature enhancements in internal applications, enabling data-driven personalization that improved business operations and user experience across multiple platforms",
        "Built a self-serve question answer bot with Microsoft Copilot Studio leveraging domain-specific embeddings and LLM integration, boosting advisor decision-making efficiency by 60% through faster access to relevant information",
        "Designed SQL views to improve insight accessibility for stakeholders, making it easier for non-technical teams to query and analyze data without complex SQL knowledge",
        "Performed data mapping by fetching JSON messages from RabbitMQ via API, using the extracted fields to build additional API calls to retrieve client's actual data and map it accurately across different systems for seamless integration"
      ],
      technologies: ["Python", "AWS Lambda", "Step Functions", "API Gateway", "S3", "SQS", "SNS", "Microsoft Copilot Studio", "SQL", "RabbitMQ"]
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
        "Collaborated with cross-functional teams to translate business requirements into scalable data solutions, working closely with product managers and stakeholders to understand their needs and deliver technical implementations that aligned with business goals",
        "Enabled dynamic infrastructure observability by building React + TypeScript dashboards integrated with AWS APIs for real-time monitoring, allowing teams to visualize system health, performance metrics, and resource utilization in an interactive interface",
        "Ensured secure and flexible data access by implementing AWS API Gateway over Lambda APIs, allowing users to retrieve data by custom time ranges while preserving privacy through proper authentication and authorization mechanisms"
      ],
      technologies: ["React", "TypeScript", "AWS API Gateway", "AWS Lambda", "Python"]
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
