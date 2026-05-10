"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { LuGithub } from "react-icons/lu"

const projects = [
  {
    title: "Proforma Insights Website",
    category: "Full Stack Development",
    image: "/proforma.png",
    description: "A dynamic company website for Proforma Insights using Django (Python) and React.js, ensuring high performance, scalability, and a seamless user experience for an IT service platform",
    tech: ["React","Django","Tailwind CSS"],
    liveUrl: "https://proformainsights.com/",
    githubUrl: "#",
  },
  {
    title: "EcoFurnitures E-commerce Platform",
    category: "Web Application",
    image: "/ecofurn.png",
    description: "EcoFurnitures is a sustainable furniture e-commerce platform built with Django,CSS and JavaScript.",
    tech: ["Django","CSS","JavaScript"],
    liveUrl: "https://ecofurnitures.com.au/",
    githubUrl: "#",
  },
  {
    title: "Hope Ability Website",
    category: "Web Development",
    image: "/hopeability.png",
    description: "Hope Ability is a disability services provider website built with Django,CSS and JavaScript.",
    tech: ["Django","CSS","JavaScript"],
    liveUrl: "https://www.hopeability.com.au/",
    githubUrl: "#",
  },
];

function FadeInWhenVisible({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative bg-[#050810] overflow-hidden py-10">
      <div className="about-container">
        {/* Section Header */}
        <FadeInWhenVisible>
          <div className="about-subblock" style={{ marginBottom: "60px" }}>
            <div className="about-section-label-pill">// 05 PROJECTS</div>
            <div className="skills-header-v2">
              <h2 className="skills-heading-v2">
                <span className="skills-heading-my">My </span>
                <span className="skills-heading-gradient-v2">Projects</span>
              </h2>
              <p className="skills-subtitle-v2">
                Showcasing some of my latest and greatest work
              </p>
              <div className="skills-decorative-rule" />
            </div>
          </div>
        </FadeInWhenVisible>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.15}>
              <div 
                className="group relative cursor-pointer flex flex-col h-full overflow-hidden transition-all duration-500 hover:-translate-y-2"
                style={{
                  padding: "24px",
                  borderRadius: "32px",
                  background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 20px 40px -20px rgba(0,0,0,0.7)"
                }}
              >
                {/* Image Container - Forced Inset style */}
                <div 
                  className="relative w-full overflow-hidden" 
                  style={{ height: "260px", borderRadius: "20px", marginBottom: "28px" }}
                >
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-transparent to-transparent opacity-80 z-10" />
                  
                  {/* Hover Color Tint */}
                  <div className="absolute inset-0 bg-[#2dd4bf] opacity-0 group-hover:opacity-15 mix-blend-color transition-opacity duration-500 z-10" />
                  
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Category Badge overlay placed bottom-left of image area */}
                  <div className="absolute bottom-5 left-5 z-20">
                    <span 
                      className="inline-flex items-center text-[#2dd4bf]"
                      style={{
                        padding: "6px 16px",
                        fontSize: "11px",
                        fontWeight: 800,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        borderRadius: "999px",
                        background: "rgba(45,212,191,0.1)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(45,212,191,0.2)"
                      }}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="flex flex-col flex-grow" style={{ padding: "0 8px 8px 8px" }}>
                  <h3 className="text-white group-hover:text-[#2dd4bf] transition-colors duration-300" style={{ fontSize: "24px", fontWeight: 800, marginBottom: "16px" }}>
                    {project.title}
                  </h3>
                  
                  <p className="text-white/60 flex-grow" style={{ fontSize: "15px", lineHeight: 1.8, marginBottom: "28px" }}>
                    {project.description}
                  </p>
                  
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2.5 mb-8">
                    {project.tech.map((techItem, i) => (
                      <span 
                        key={i} 
                        className="text-white/70"
                        style={{
                          fontSize: "13px",
                          fontWeight: 500,
                          backgroundColor: "rgba(255,255,255,0.05)",
                          padding: "6px 12px",
                          borderRadius: "8px",
                          border: "1px solid rgba(255,255,255,0.05)"
                        }}
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>

                  {/* Links Row - Styled deeply */}
                  <div className="flex items-center justify-between mt-auto" style={{ paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#2dd4bf] hover:text-white transition-colors group/link"
                      style={{ fontSize: "15px", fontWeight: 600 }}
                    >
                      <span>Live Preview</span>
                      <ExternalLink size={16} className="transform transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                    </a>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/50 hover:text-white transition-colors"
                      style={{ fontSize: "14px", fontWeight: 500 }}
                    >
                      <LuGithub size={18} />
                      <span>Source</span>
                    </a>
                  </div>
                </div>
                
                {/* Premium Glow effect on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" 
                  style={{ borderRadius: "32px", boxShadow: "inset 0 0 0 1px rgba(45,212,191,0.3)" }}
                />
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
