import { Database, ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "LLM-Based Natural Language Querying for Database",
      description: "Developed a state-of-the-art NLP chatbot using AWS Bedrock foundation models wrapped with an MCP (Model–Context–Protocol) layer to manage context and tool calls for natural language-based CRUD operations on a PostgreSQL database. Enhanced user autonomy and reduced reliance on technical teams by enabling intuitive, language-driven data access, streamlining internal query workflows and improving decision-making efficiency. Applied prompt engineering to improve response reliability and reduce hallucinations by guiding the model to accurately translate user questions into SQL queries.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      technologies: ["AWS Bedrock", "PostgreSQL", "NLP", "Few-shot Learning", "Prompt Engineering"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Consumer Purchase Behavior Modeling",
      description: "Built a machine learning pipeline to analyze consumer data and predict repeat purchase likelihood using logistic regression and decision trees, leveraging the Instacart Online Grocery Basket dataset. Engineered features such as recency and frequency of purchases to understand shopping behavior, and grouped users based on loyalty and product preferences to enhance targeting. Simulated A/B testing to evaluate campaign strategies and applied uplift modeling to estimate the impact of promotions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["Decision Trees", "Machine Learning", "Real-time Processing", "Consumer Analytics"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Microsoft Copilot Financial Bot",
      description: "Developed an intelligent Microsoft Copilot bot that leverages company's advisory data to answer financial advisors' questions, streamlining information access and improving decision-making speed by 60%.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop",
      technologies: ["Microsoft Copilot", "Financial Data", "NLP", "Question Answering", "Decision Support"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "DocumentIQ: Intelligent Financial Document Process",
      description: "Built an automated pipeline using Hugging Face’s LayoutLM to extract structured data from scanned government and financial documents such as tax forms and KYC records. Developed an interactive Streamlit UI for document upload and review, powered by a FastAPI backend that managed OCR processing, data validation, and database integration. Streamlined the document processing workflow and reduced manual data entry by 80%, enabling faster access to critical financial information.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop",
      technologies: ["Python", "Machine Learning", "Hugging Face", "OCR", "Streamlit", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-green-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/40 rounded-xl overflow-hidden border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                
                {/* Project links overlay */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-green-600/80 hover:bg-green-600 text-white rounded-full transition-colors"
                  >
                    <Database size={16} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm border border-green-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
                  >
                    {/* <span className="font-medium">View Project</span> */}
                    {/* <ArrowRight size={16} /> */}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/30 p-6 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-gray-800/50"
              >
                <div className="flex items-start justify-between mb-4">
                  <Database className="text-blue-400 flex-shrink-0" size={24} />
                  <div className="flex space-x-2">
                    <a href={project.liveUrl} className="text-gray-400 hover:text-white transition-colors">
                      <Database size={20} />
                    </a>
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-white mb-2 hover:text-blue-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-gray-400 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
