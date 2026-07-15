// src/components/sections/ProjectDetailsModal.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  CheckCircle2, 
  Cpu, 
  Database, 
  Cloud, 
  Shield, 
  Zap,
  Rocket,
  Layers,
  Sparkles,
  GitBranch,
  Code2,
  Globe,
  Lock,
  BarChart3,
  ArrowRight,
  CreditCard
} from 'lucide-react';
import type { Project } from '../../data/projects';

interface ProjectDetailsModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailsModal = ({ project, isOpen, onClose }: ProjectDetailsModalProps) => {
  if (!project || !project.details) return null;

  const { details } = project;

  // Icon mapping for tech stack
  const getTechIcon = (tech: string) => {
    if (tech.includes('Node') || tech.includes('Express')) return <Cpu className="w-5 h-5 text-accent" />;
    if (tech.includes('PostgreSQL') || tech.includes('Prisma')) return <Database className="w-5 h-5 text-accent" />;
    if (tech.includes('Redis')) return <Zap className="w-5 h-5 text-accent" />;
    if (tech.includes('Cloudinary') || tech.includes('Cloud')) return <Cloud className="w-5 h-5 text-accent" />;
    if (tech.includes('Security') || tech.includes('Authentication')) return <Shield className="w-5 h-5 text-accent" />;
    if (tech.includes('SSLCommerz') || tech.includes('Payment')) return <CreditCard className="w-5 h-5 text-accent" />;
    if (tech.includes('Gemini') || tech.includes('AI')) return <Sparkles className="w-5 h-5 text-accent" />;
    if (tech.includes('TypeScript')) return <Code2 className="w-5 h-5 text-accent" />;
    return <Layers className="w-5 h-5 text-accent" />;
  };

  // Get feature icon based on content
  const getFeatureIcon = (feature: string) => {
    if (feature.includes('Intelligent') || feature.includes('AI') || feature.includes('Generation')) 
      return <Sparkles className="w-5 h-5 text-accent shrink-0 mt-0.5" />;
    if (feature.includes('Authentication') || feature.includes('Security') || feature.includes('OAuth')) 
      return <Shield className="w-5 h-5 text-accent shrink-0 mt-0.5" />;
    if (feature.includes('Credit') || feature.includes('Transaction') || feature.includes('Refund')) 
      return <CreditCard className="w-5 h-5 text-accent shrink-0 mt-0.5" />;
    if (feature.includes('Payment') || feature.includes('Verification') || feature.includes('SSLCommerz')) 
      return <Lock className="w-5 h-5 text-accent shrink-0 mt-0.5" />;
    if (feature.includes('Rate') || feature.includes('Performance') || feature.includes('Hardening')) 
      return <BarChart3 className="w-5 h-5 text-accent shrink-00 mt-0.5" />;
    if (feature.includes('Database') || feature.includes('Redis')) 
      return <Database className="w-5 h-5 text-accent shrink-0 mt-0.5" />;
    return <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-primary/95 border border-secondary/30 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary/40 transition-colors z-10"
              >
                <X className="w-6 h-6 text-textSecondary hover:text-accent" />
              </button>

              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    {project.title}
                  </h2>
                  <div className="w-16 h-1 bg-accent rounded-full"></div>
                </div>

                {/* Project Overview */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Rocket className="w-5 h-5 text-accent" />
                    <h3 className="text-lg font-semibold text-accent">Project Overview</h3>
                  </div>
                  <p className="text-textSecondary text-base leading-relaxed pl-7">
                    {details.overview}
                  </p>
                </div>

                {/* Core Tech Stack */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Layers className="w-5 h-5 text-accent" />
                    <h3 className="text-lg font-semibold text-accent">Core Tech Stack & Architecture</h3>
                  </div>
                  <div className="grid gap-3 pl-7">
                    {details.coreTech.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
                      >
                        {getTechIcon(tech)}
                        <span className="text-textSecondary text-sm leading-relaxed">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-5 h-5 text-accent" />
                    <h3 className="text-lg font-semibold text-accent">Key Technical Features</h3>
                  </div>
                  <div className="space-y-3 pl-7">
                    {details.keyFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 rounded-lg bg-secondary/10 hover:bg-secondary/20 transition-colors"
                      >
                        {getFeatureIcon(feature)}
                        <span className="text-textSecondary text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-secondary/30">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary/40 hover:bg-secondary/60 rounded-lg transition-colors group"
                  >
                    <GitBranch className="w-4 h-4" />
                    <span className="text-sm">View on GitHub</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  {project.hasLivePreview && project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/20 hover:bg-accent/30 rounded-lg transition-colors group"
                    >
                      <Globe className="w-4 h-4 text-accent" />
                      <span className="text-sm text-accent">Live Demo</span>
                      <ArrowRight className="w-3 h-3 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailsModal;