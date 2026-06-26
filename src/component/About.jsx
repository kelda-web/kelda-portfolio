import { useState } from 'react';
import { motion } from 'framer-motion';

// Ellaa image-ayum mela import panniko
import collegeLogo from '../assets/collegelogo.png';
import collegePhoto from '../assets/college1.jpg';
import sowdamikaLogo from '../assets/sowdamikalogo.png';
import sowdamikaPhoto from '../assets/Sowdamika.jpg';
import mountZionLogo from '../assets/Mountzionlogo.png';
import mountZionPhoto from '../assets/Mountzionphoto.jpeg';

export default function About() {
  const [showImage, setShowImage] = useState(null);

  const educationData = [
    {
      name: "Kongunadu College of Engineering and Technology",
      degree: "BE Computer Science (2022-2026)",
      score: "CGPA: 8.4",
      logo: collegeLogo,
      photo: collegePhoto
    },
    {
      name: "Sowdambika Matric Hr. Sec. School",
      degree: "12th Grade (2021-2022)",
      score: "Percentage: 72.8%",
      logo: sowdamikaLogo,
      photo: sowdamikaPhoto
    },
    {
      name: "Mount Zion Matric Hr. Sec. School",
      degree: "10th Grade (2019-2020)",
      score: "Percentage: 61%",
      logo: mountZionLogo,
      photo: mountZionPhoto
    }
  ];

  return (
    <section id="about" className="relative py-20 bg-slate-900 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-slate-400 mb-8">
            Passionate frontend developer with a love for creating beautiful, functional web experiences
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="bg-slate-800/80 backdrop-blur p-8 rounded-2xl shadow-xl border border-slate-700">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                Hello, I'm Kelda!
              </h3>
              <p className="text-slate-300 mb-4">
                I'm a passionate frontend developer who loves crafting pixel-perfect, responsive web applications.
              </p>
              <p className="text-slate-300 mb-4">
                My journey started with curiosity about how websites work and evolved into creating user-centered digital experiences.
              </p>
              <p className="text-slate-300">
                When not coding, I explore new technologies and contribute to open-source projects.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 relative"
          >
            {/* Floating Education Box */}
            <div className="bg-slate-800/80 backdrop-blur p-6 rounded-2xl shadow-xl border border-slate-700 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-700 pb-3">
                Education
              </h3>
              <div className="space-y-6">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-start gap-4 cursor-pointer rounded-lg p-2 hover:bg-slate-700/50 transition"
                    onClick={() => setShowImage(edu.photo)}
                  >
                    <div className="flex-shrink-0">
                      <img
                        src={edu.logo}
                        alt={`${edu.name} logo`}
                        className="w-12 h-12 object-contain rounded-full border-2 border-slate-600 bg-white"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-100">{edu.name}</h4>
                      <p className="text-slate-400 text-sm">{edu.degree}</p>
                      <p className="text-cyan-400 text-sm font-medium">{edu.score}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Image Modal */}
        {showImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={() => setShowImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="relative max-w-3xl w-full"
            >
              <img
                src={showImage}
                alt="Institution"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <button
                className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowImage(null);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}