import { motion } from 'framer-motion';
import { Mail, Phone, Copy, CheckCheck } from 'lucide-react';
import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-24">
      <div className="container-custom w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-14"
        >
          <h2 className="section-heading">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <div className="section-divider"></div>
          <p className="text-textSecondary text-base mt-4">
            Let's connect and discuss opportunities
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto w-full"
        >
          <div className="bg-primary/40 rounded-xl border border-secondary/30 p-7 lg:p-8 space-y-6">
            {/* Email */}
            <div className="flex items-center justify-between p-4 lg:p-5 bg-secondary/20 rounded-lg group">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-accent shrink-0" />
                <span className="text-textPrimary text-base lg:text-lg">atikurrahman160313@gmail.com</span>
              </div>
              <button
                onClick={() => copyToClipboard('atikurrahman160313@gmail.com', 'email')}
                className="p-2 hover:bg-accent/20 rounded-lg transition-colors"
              >
                {copiedEmail ? (
                  <CheckCheck className="w-4 h-4 text-accent" />
                ) : (
                  <Copy className="w-4 h-4 text-textSecondary hover:text-accent" />
                )}
              </button>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-between p-4 lg:p-5 bg-secondary/20 rounded-lg group">
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-accent shrink-0" />
                <span className="text-textPrimary text-base lg:text-lg">01943697606</span>
              </div>
              <button
                onClick={() => copyToClipboard('01943697606', 'phone')}
                className="p-2 hover:bg-accent/20 rounded-lg transition-colors"
              >
                {copiedPhone ? (
                  <CheckCheck className="w-4 h-4 text-accent" />
                ) : (
                  <Copy className="w-4 h-4 text-textSecondary hover:text-accent" />
                )}
              </button>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-secondary/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-bgDark text-textSecondary">Social</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <a
                href="https://github.com/atikur-web-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3.5 rounded-lg bg-secondary/20 hover:bg-accent/20 transition-all duration-200 group"
              >
                <FaGithub className="w-5 h-5 text-textSecondary group-hover:text-accent" />
                <span className="text-base text-textSecondary group-hover:text-accent">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/atikur-rahman-0475b4385/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3.5 rounded-lg bg-secondary/20 hover:bg-accent/20 transition-all duration-200 group"
              >
                <FaLinkedin className="w-5 h-5 text-textSecondary group-hover:text-accent" />
                <span className="text-base text-textSecondary group-hover:text-accent">LinkedIn</span>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center pt-6 border-t border-secondary/30 mt-2">
              <p className="text-textSecondary text-sm">
                © 2026 Atikur Rahman. All rights reserved.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;