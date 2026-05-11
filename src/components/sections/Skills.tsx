import { motion } from 'framer-motion';
import { 
  SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, 
  SiExpress, SiMongodb, SiPostgresql, SiPrisma,
  SiGit, SiGithub, SiNextdotjs, SiDocker
} from 'react-icons/si';

const Skills = () => {
  const skillsData = [
    { category: "Database & Tools", skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Prisma", icon: SiPrisma },
      { name: "Docker", icon: SiDocker },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub }
    ]},
    { category: "Frontend", skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss }
    ]},
    { category: "Backend", skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      
    ]},
    
  ];

  return (
    <section id="skills" className="py-20 bg-primary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Tech <span className="text-accent">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-textSecondary mt-4">
            Technologies I work with to build production-ready applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-primary/40 rounded-xl border border-secondary/30 p-6"
            >
              <h3 className="text-xl font-semibold mb-6 text-accent text-center">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
                  >
                    <skill.icon className="w-5 h-5 text-accent" />
                    <span className="text-textPrimary font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;