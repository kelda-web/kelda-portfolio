import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Project() {
  const [activeTab, setActiveTab] = useState('projects');
  const scrollRef = useRef(null);

  const projects = [
    {
      title: "The HERBAL",
      description: "Landing page for herbal products",
      tech: "HTML, CSS",
      image: "/src/assets/The herbal .jpg",
      github: "https://github.com/kelda-web/herbal_pages"
    },
    {
      title: "Agency Website",
      description: "Modern agency portfolio site",
      tech: "HTML, Tailwind CSS, JavaScript",
      image: "/src/assets/Agency.png",
      github: "https://github.com/kelda-web/Agency_Website"
    },
    {
      title: "Starbucks UI/UX",
      description: "Redesigned Starbucks interface",
      tech: "Figma, Adobe XD",
      image: "/src/assets/starbucks.jpg",
      github: "#"
    },
    {
      title: "SkillTrack",
      description: "Skill Assessment & Learning Management System with quizzes, progress tracking, and course modules.",
      tech: "React.js, Node.js, Express.js, MySQL",
      image:"src\\assets\\skilltrack.jpeg",
      github: "https://github.com/kelda-web/skilltrack"
    }
  ];

  const hackathons = [
    {
      name: "UYIR HACKATHON",
      description: "ECO-GUARDIAN: Solar-powered alerts for wildlife-human protection (Hardware Project)",
      images: ["/src/assets/uyir1.jpg", "/src/assets/uyir2.jpg","/src/assets/uyir3.jpg","/src/assets/uyir4.jpg"]
    },
    {
      name: "Hack@train",
      description: "INTELLIBOT: Mock-interview chatbot — Won 1st Prize (Software Project)",
      images: ["/src/assets/hack@train.jpg", "/src/assets/hack@2train.jpg","/src/assets/hack@3train.jpg"]
      
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
          <p className="text-xl text-slate-400">
            "A showcase of my recent work and creative solutions"
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-lg shadow-sm border border-slate-700 overflow-hidden">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-6 py-3 text-sm font-medium transition ${
                activeTab === 'projects'
                  ? 'bg-cyan-500 text-slate-900'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab('hackathons')}
              className={`px-6 py-3 text-sm font-medium transition ${
                activeTab === 'hackathons'
                  ? 'bg-cyan-500 text-slate-900'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Hackathons
            </button>
          </div>
        </div>

        {/* Projects Content */}
        {activeTab === 'projects' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-slate-800 border border-slate-700 p-2 rounded-full shadow-md hover:bg-slate-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-8 py-4 px-2 scrollbar-hide"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex-shrink-0 w-80 bg-slate-800 border border-slate-700 rounded-2xl shadow-lg overflow-hidden hover:border-cyan-400/40 transition-all"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-2 right-2 bg-black bg-opacity-70 p-2 rounded-full hover:bg-opacity-100 transition"
                      >
                        <img
                          src="/src/assets/github.png"
                          alt="GitHub"
                          className="w-6 h-6"
                        />
                      </a>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-400 mb-3 text-sm">{project.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-cyan-400 font-medium">{project.tech}</span>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-slate-200 hover:text-cyan-400 transition"
                      >
                        View Project →
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-slate-800 border border-slate-700 p-2 rounded-full shadow-md hover:bg-slate-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        )}

        {/* Hackathons Content */}
        {activeTab === 'hackathons' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800 border border-slate-700 rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">{hackathon.name}</h3>
                  <p className="text-slate-300 mb-6">{hackathon.description}</p>

                  <div className="flex overflow-x-auto gap-4 py-2 scrollbar-hide">
                    {hackathon.images.map((image, imgIndex) => (
                      <motion.div
                        key={imgIndex}
                        whileHover={{ scale: 1.02 }}
                        className="flex-shrink-0"
                      >
                        <img
                          src={image}
                          alt={`${hackathon.name} ${imgIndex + 1}`}
                          className="h-64 rounded-lg object-cover shadow-md"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}