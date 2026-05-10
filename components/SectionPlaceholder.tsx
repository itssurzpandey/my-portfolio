"use client";

import { motion } from "framer-motion";

interface SectionPlaceholderProps {
  id: string;
  title: string; 
  subtitle: string;
}

export default function SectionPlaceholder({
  id,
  title,
  subtitle,
}: SectionPlaceholderProps) {
  return (
    <section id={id} className="section">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text">{title}</h2>
          <p className="section-subtitle mx-auto">{subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center min-h-[300px] rounded-3xl border border-dashed border-white/10 bg-white/[0.02]"
        >
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-zinc-600"
              >
                <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" />
              </svg>
            </div>
            <p className="text-zinc-600 text-sm">
              {title} section — coming soon
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
