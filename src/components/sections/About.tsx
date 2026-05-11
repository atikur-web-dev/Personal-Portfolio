import { motion } from 'framer-motion';
import { GraduationCap,   Server } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-accent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-accent">
              MERN Stack Developer
            </h3>
            <p className="text-textSecondary mb-4 leading-relaxed">
              CSE graduate from IUBAT with a passion for building modern web applications. 
              Specialized in the MERN ecosystem with TypeScript and Tailwind CSS.
            </p>
            <p className="text-textSecondary mb-4 leading-relaxed">
              I write production-ready code following industry standards — clean folder 
              structure, comprehensive error handling, and strict validation. Every project 
              I build is architected for scalability and maintainability.
            </p>
            <p className="text-textSecondary leading-relaxed">
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
                <h4 className="font-semibold mb-1">Education & Training</h4>
                <p className="text-textSecondary text-sm">
                  CSE Graduate from IUBAT | Backend Development with Node.js from Creative IT | Full Stack Web Development (MERN) from Ostad
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Server className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Tech Stack</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">MERN</span>
                  <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">TypeScript</span>
                  <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">Tailwind CSS</span>
                  <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">PostgreSQL</span>
                  <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">Prisma</span>
                  <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">Next.js</span>
                  <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">Docker</span>
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