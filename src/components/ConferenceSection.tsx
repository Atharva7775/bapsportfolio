import { Star, Users, Building2, Zap, CreditCard } from 'lucide-react';

const ConferenceSection = () => {
  const highlights = [
    {
      icon: <Building2 className="text-purple-400" size={24} />,
      title: "C-Suite & Board Members",
      description: "Engaged in direct conversations with VPs and Board Members from leading financial institutions — real talk about the future of banking.",
    },
    {
      icon: <CreditCard className="text-pink-400" size={24} />,
      title: "Payments & Embedded Banking",
      description: "Dived deep into the latest innovations in modern payments infrastructure, embedded banking, and international banking rails.",
    },
    {
      icon: <Zap className="text-blue-400" size={24} />,
      title: "AI in Fintech",
      description: "Explored how artificial intelligence is reshaping financial services — from intelligent automation to AI-driven risk and compliance.",
    },
    {
      icon: <Users className="text-cyan-400" size={24} />,
      title: "Representing Theoremlabs",
      description: "Proudly flew the Theoremlabs flag among banking executives and fintech leaders, showcasing our vision on the Charlotte stage.",
    },
  ];

  return (
    <section id="conference" className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Beyond the <span className="text-purple-400">Code</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stepping into boardrooms, sparking conversations, and representing a vision.
          </p>
        </div>

        {/* Main conference card */}
        <div className="relative group mb-14">
          {/* Glowing border effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 rounded-2xl opacity-40 group-hover:opacity-70 blur-sm transition-all duration-500"></div>

          <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 md:p-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/40 text-purple-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-8">
              <Star size={14} className="fill-purple-400 text-purple-400" />
              Featured Experience — 2026
            </div>

            <div className="flex flex-col md:flex-row md:items-start gap-8">
              {/* Text content */}
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                  Finzpire <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">2026</span>
                </h3>
                <p className="text-blue-400 font-medium text-base mb-1">
                  Annual User & Industry Conference by <span className="font-semibold">Finzly</span> · Charlotte, NC
                </p>
                <p className="text-gray-500 text-sm mb-6">
                  Represented Theoremlabs Partners LLC
                </p>

                <div className="space-y-4 text-gray-300 text-base leading-relaxed">
                  <p>
                    Walking into <span className="text-white font-semibold">Finzpire 2026</span> — Finzly's flagship annual conference right here in Charlotte — was one of those moments that genuinely takes your breath away. The room was electric, packed with <span className="text-white font-semibold">VPs, Board Members, banking executives, and fintech pioneers</span> from across the industry, all under one roof to talk about what's next in financial technology.
                  </p>
                  <p>
                    I had the honour of representing <span className="text-purple-400 font-semibold">Theoremlabs</span> at this powerhouse event. The conversations were anything but surface-level — from a <span className="text-white font-semibold">Board Member</span> unpacking the regulatory future of embedded banking, to a <span className="text-white font-semibold">VP of Payments</span> revealing how AI is quietly revolutionising international transaction rails. Every session, every hallway chat was a masterclass in where the industry is truly headed.
                  </p>
                  <p>
                    Finzpire brought together the worlds of <span className="text-purple-400 font-semibold">payments innovation, embedded banking, international banking, and artificial intelligence</span> in a way that felt genuinely visionary. It was a sharp reminder that the decisions we make as engineers have a direct seat at the table in boardroom strategy — and that's a responsibility that fuels me every single day.
                  </p>
                </div>
              </div>


            </div>
          </div>
        </div>

        {/* Highlight grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 hover:border-purple-500/50 hover:bg-gray-800/60 transition-all duration-300 group"
            >
              <div className="mb-4 p-2.5 bg-gray-700/40 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="text-white font-semibold text-base mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ConferenceSection;
