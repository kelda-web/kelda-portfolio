import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 overflow-hidden"
    >
      {/* Decorative glow blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10 py-32">
        <div className="flex flex-col md:flex-row items-center gap-12 w-full">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <span className="inline-block px-4 py-1 mb-4 rounded-full bg-cyan-400/10 text-cyan-300 text-sm font-medium border border-cyan-400/30">
              Available for new opportunities
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 leading-tight">
              Hey, I'm <span className="text-cyan-400">Kelda</span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-slate-300 font-medium mb-4">
              Frontend Developer
            </h2>

            <p className="text-lg text-slate-400 mb-8 max-w-md mx-auto md:mx-0">
               Fresher Computer Science Engineering graduate building clean, responsive web
              experiences with React.js &amp; Tailwind CSS — turning ideas
              into interfaces people enjoy using.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="#contact"
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 px-7 py-3 rounded-lg font-semibold transition duration-300 shadow-lg shadow-cyan-500/30"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="border-2 border-slate-500 text-slate-200 hover:bg-white hover:text-slate-900 hover:border-white px-7 py-3 rounded-lg font-semibold transition duration-300"
              >
                View Work
              </a>
              <a
                href="/resume/Kelda_Resume.pdf"
                download="Kelda_A_Resume.pdf"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-slate-900 px-7 py-3 rounded-lg font-semibold transition duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                </svg>
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-2xl scale-105"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-slate-800 ring-4 ring-cyan-400/50 shadow-2xl">
                {/* TIP: swap this image for a different photo than the About page if you'd like a distinct Home look */}
                <img
                  src="/src/assets/profilepic.jpeg"
                  alt="Kelda"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-slate-800 border border-cyan-400/40 px-6 py-2 rounded-full shadow-lg whitespace-nowrap">
                <span className="text-cyan-300 font-bold text-sm md:text-base">
                  FRONTEND DEVELOPER
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}