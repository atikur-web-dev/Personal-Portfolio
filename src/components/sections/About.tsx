import { motion } from 'framer-motion';
import { GraduationCap,   Server } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-24 bg-primary/30">
      <div className="container-custom w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-14"
        >
          <h2 className="section-heading">
            About <span className="text-accent">Me</span>
          </h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-accent">
              Backend Developer
            </h3>
            <p className="text-textSecondary text-base mb-4 leading-relaxed">
              CSE graduate from IUBAT with a passion for building modern web applications. 
              Specialized in the PERN ecosystem with TypeScript and Tailwind CSS.
            </p>
            <p className="text-textSecondary text-base mb-4 leading-relaxed">
              I write production-ready code following industry standards — clean folder 
              structure, comprehensive error handling, and strict validation. Every project 
              I build is architected for scalability and maintainability.
            </p>
            <p className="text-textSecondary text-base leading-relaxed">
              Currently expanding my toolkit with Next.js for full-stack React applications 
              and Docker for containerized deployment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex gap-3">
              <GraduationCap className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-semibold mb-1">Education & Training</h4>
                <p className="text-textSecondary text-base">
                  CSE Graduate from IUBAT | Backend Development with Node.js from Creative IT | Full Stack Web Development (MERN) from Ostad
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Server className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-semibold mb-1">Tech Stack</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="text-xs bg-accent/20 text-accent px-3 py-1.5 rounded-md">MERN</span>
                  <span className="text-xs bg-accent/20 text-accent px-3 py-1.5 rounded-md">TypeScript</span>
                  <span className="text-xs bg-accent/20 text-accent px-3 py-1.5 rounded-md">Tailwind CSS</span>
                  <span className="text-xs bg-accent/20 text-accent px-3 py-1.5 rounded-md">PostgreSQL</span>
                  <span className="text-xs bg-accent/20 text-accent px-3 py-1.5 rounded-md">Prisma</span>
                  <span className="text-xs bg-accent/20 text-accent px-3 py-1.5 rounded-md">Next.js</span>
                  <span className="text-xs bg-accent/20 text-accent px-3 py-1.5 rounded-md">Docker</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;