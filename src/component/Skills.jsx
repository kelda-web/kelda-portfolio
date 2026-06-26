import { motion } from 'framer-motion';

// === METHOD 1: EXPERIENCE LOGO IMPORTS ===
import kriyeativeLogo from '../assets/Kriyeative.jpeg';
import esoftLogo from '../assets/esoft.jpeg';

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/38BDF8" },
    { name: "React.js", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/ED8B00" },
    { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
    { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" }
  ];

  const softSkills = [
    "Teamwork",
    "Problem-Solving",
    "Effective Communication",
    "Time Management"
  ];

  const experience = [
    {
      company: "Kriyeative Verse",
      role: "Software Developer Intern",
      duration: "September 2025 – February 2026",
      description:
        "Worked with PostgreSQL, React.js, and Express.js to build REST APIs and ship user-interaction features into an existing web application as part of a collaborative team.",
      logo: kriyeativeLogo
    },
    {
      company: "e-Soft IT Solutions",
      role: "Full-Stack Development",
      duration: "June 2024 – July 2024",
      description:
        "Learned and worked with HTML, CSS, JavaScript, MySQL, and the XAMPP server, building hands-on full-stack mini projects.",
      logo: esoftLogo
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        {/* Skills Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">My Skills</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            "Technologies and tools I work with to bring ideas to life"
          </p>
        </motion.div>

        {/* Skill Icon Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.08 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-20"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 cursor-pointer overflow-hidden transition-colors duration-300 hover:border-cyan-400/60"
            >
              {/* glow on hover */}
              <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/10 transition-all duration-300 rounded-2xl"></div>

              <motion.div
                className="relative w-14 h-14 flex items-center justify-center"
                whileHover={{ rotate: [0, -8, 8, -4, 0] }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain drop-shadow-[0_0_0px_rgba(34,211,238,0)] group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.6)] transition-all duration-300"
                />
              </motion.div>

              <h3 className="relative text-sm md:text-base font-semibold text-slate-200 group-hover:text-cyan-300 text-center transition-colors duration-300">
                {skill.name}
              </h3>

              {/* underline accent */}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 bg-cyan-400 rounded-full group-hover:w-2/3 transition-all duration-300"></span>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Soft <span className="text-cyan-400">Skills</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.08, y: -3 }}
                className="px-5 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 font-medium transition-all duration-300 hover:bg-cyan-400 hover:text-slate-900"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Professional <span className="text-cyan-400">Experience</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-800 border border-slate-700 rounded-2xl shadow-lg overflow-hidden hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-1">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-9 h-9 rounded-full object-cover border border-slate-600 bg-white"
                    />
                    <h4 className="text-xl font-bold text-white">
                      {exp.company}
                    </h4>
                  </div>
                  <p className="text-cyan-400 font-medium mb-1">{exp.role}</p>
                  <p className="text-slate-500 text-sm mb-3">{exp.duration}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
