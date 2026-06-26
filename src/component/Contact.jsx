import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-20 bg-slate-950 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="inline-block px-4 py-1 mb-3 rounded-full bg-cyan-400/10 text-cyan-300 text-sm font-medium border border-cyan-400/30">
            Let's Build Something Great
          </span>
          <h2 className="text-4xl font-bold text-white mb-3">Get In Touch</h2>
          <p className="text-xl text-slate-400">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl">
          {/* Let's Connect Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
            <p className="text-slate-400 mb-8 text-sm leading-relaxed">
              I'm always excited to work on new projects and collaborate with
              amazing people. Whether you have a question, an opportunity, or
              just want to say hello — feel free to reach out!
            </p>

            <div className="space-y-5">
              <a
                href="mailto:keldaarulraj02@gmail.com"
                className="flex items-start gap-4 group"
              >
                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 group-hover:bg-cyan-400 group-hover:text-slate-900 transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <span className="text-slate-400 group-hover:text-cyan-300 transition text-sm">
                    keldaarulraj02@gmail.com
                  </span>
                </div>
              </a>

              <a href="tel:+918098970567" className="flex items-start gap-4 group">
                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 group-hover:bg-cyan-400 group-hover:text-slate-900 transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <span className="text-slate-400 group-hover:text-cyan-300 transition text-sm">
                    +91 80989 70567
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-cyan-400/10 border border-cyan-400/30 text-cyan-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold text-white">Location</h4>
                  <p className="text-slate-400 text-sm">Pudukkottai, Tamil Nadu</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Send Message Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 px-6 py-3 rounded-lg font-semibold transition duration-300 w-full md:w-auto shadow-lg shadow-cyan-500/30"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}