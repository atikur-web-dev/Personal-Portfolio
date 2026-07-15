// src/components/sections/Projects.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, Eye } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projectsData, type Project } from '../../data/projects';
import ProjectDetailsModal from './ProjectDetailsModal';

const Projects = (): React.ReactElement => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleViewDetails = (project: Project): void => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section id="projects" className="py-20 lg:py-24">
        <div className="container-custom w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-14"
          >
            <h2 className="section-heading">
              Featured <span className="text-accent">Projects</span>
            </h2>
            <div className="section-divider"></div>
            <p className="text-textSecondary text-base mt-4 max-w-2xl mx-auto">
              Industry-level projects built with modern technologies and production standards
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary/40 rounded-xl border border-secondary/30 hover:border-accent/50 transition-all duration-300 overflow-hidden group"
              >
                {/* Project Image */}
                {project.imageUrl && (
                  <div className="w-full h-52 sm:h-56 overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                
                <div className="p-6 lg:p-7">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-4">
                    <Code2 className="w-10 h-10 text-accent" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl lg:text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-textSecondary text-base mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-secondary/40 px-3 py-1.5 rounded-md text-textSecondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links - Updated with View Details button */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-textSecondary hover:text-accent transition-colors"
                    >
                      <FaGithub className="w-4 h-4" /> GitHub
                    </a>
                    {project.hasLivePreview && project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                    {/* View Details Button */}
                    <button
                      onClick={() => handleViewDetails(project)}
                      className="inline-flex items-center gap-2 text-sm text-textSecondary hover:text-accent transition-colors ml-auto"
                    >
                      <Eye className="w-4 h-4" /> View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Projects;