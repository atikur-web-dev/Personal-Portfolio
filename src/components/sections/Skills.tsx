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
    <section id="skills" className="py-20 lg:py-24 bg-primary/30">
      <div className="container-custom w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-14"
        >
          <h2 className="section-heading">
            Tech <span className="text-accent">Stack</span>
          </h2>
          <div className="section-divider"></div>
          <p className="text-textSecondary text-base mt-4">
            Technologies I work with to build production-ready applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {skillsData.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-primary/40 rounded-xl border border-secondary/30 p-6 lg:p-7"
            >
              <h3 className="text-xl font-semibold mb-6 text-accent text-center">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3.5 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
                  >
                    <skill.icon className="w-6 h-6 text-accent" />
                    <span className="text-textPrimary text-base font-medium">{skill.name}</span>
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