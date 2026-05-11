import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImg from '../../assets/atik.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container-custom">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <span className="text-accent text-sm font-mono mb-3 block tracking-wider">
              HELLO, I'M
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Atikur Rahman
            </h1>
            <p className="text-xl sm:text-2xl text-textSecondary mb-6">
              Full Stack Developer
            </p>
            <p className="text-textSecondary max-w-lg mx-auto lg:mx-0 mb-8">
              Building industry-level web applications with clean architecture and production-ready code.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-bgDark font-semibold rounded-lg hover:bg-accent/80 transition-all duration-200"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/atikur-web-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-secondary rounded-lg hover:border-accent hover:text-accent transition-all duration-200"
              >
                <FaGithub className="w-4 h-4" /> GitHub
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center lg:justify-start">
              
              <a
                href="https://www.linkedin.com/in/atikur-rahman-0475b4385/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary/30 hover:bg-accent/20 transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:atikurrahman160313@gmail.com"
                className="p-2 rounded-full bg-secondary/30 hover:bg-accent/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              <img
                src={profileImg}
                alt="Atikur Rahman"
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-accent/30 shadow-2xl transition-transform duration-300 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;