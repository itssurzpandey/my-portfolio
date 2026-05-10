"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Palette, 
  Briefcase, 
  MonitorSmartphone, 
  Code2, 
  TrendingUp, 
  Server,
  BarChart3,
} from "lucide-react";

const blobShapes = [
  "43% 57% 59% 41% / 48% 38% 62% 52%",
  "56% 44% 43% 57% / 54% 53% 47% 46%",
  "34% 66% 62% 38% / 50% 33% 67% 50%",
  "47% 53% 29% 71% / 48% 60% 40% 52%",
  "60% 40% 70% 30% / 48% 55% 45% 52%",
  "38% 62% 43% 57% / 56% 40% 60% 44%",
];

const services = [
  
  {
    title: "Data Analysis",
    description: "Transforming raw data into meaningful insights, I help uncover patterns, optimize decisions, and drive business growth through analytical precision.",
    icon: BarChart3,
    color: "#3b82f6", // Blue
  },
  {
    title: "Graphics Designing",
    description: "Blending creativity with strategy, I craft visually compelling designs that communicate your brand message and captivate your audience.",
    icon: Palette,
    color: "#ec4899", // Pink
  },
  {
    title: "Project Management",
    description: "I ensure seamless project execution by aligning goals, managing resources, and delivering results on time with clear communication and strong leadership.",
    icon: Briefcase,
    color: "#f97316", // Orange
  },
  {
    title: "SEO Mastery",
    description: "Unlock SEO potential with curated strategies. Adept keyword research, on-page optimization refine content for visibility, higher rankings.",
    icon: TrendingUp,
    color: "#ef4444", // Red
  },
  {
    title: "Web Designing",
    description: "Web designers weave multimedia into sites; I enhance UX through artful design and intuitive navigation.",
    icon: Palette,
    color: "#3b82f6", // Blue
  },
  {
    title: "Efficient cPanel Hosting",
    description: "Seamlessly manage your web presence with our cPanel hosting expertise. Utilizing a user-friendly control panel, I streamline website management.",
    icon: Server,
    color: "#06b6d4", // Cyan
  }
];

function FadeInWhenVisible({
  children,
  direction = "up",
  delay = 0,
}: {
  children: React.ReactNode;
  direction?: "up" | "left" | "right" | "in";
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const initial = {
    up: { opacity: 0, y: 30, x: 0 },
    left: { opacity: 0, x: -30, y: 0 },
    right: { opacity: 0, x: 30, y: 0 },
    in: { opacity: 0, scale: 0.9 },
  }[direction];

  const animate = {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-[#050810] overflow-hidden">
      {/* Background Decor */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px),
            radial-gradient(ellipse 900px 700px at 50% -20%, rgba(45,212,191,0.05), transparent)
          `,
          backgroundSize: "28px 28px, 100% 100%",
        }}
      />

      <div className="about-container">
        {/* Section Header */}
        <FadeInWhenVisible>
          <div className="about-subblock" style={{ marginBottom: "60px" }}>
            {/* Section Label - Pill Badge */}
            <div className="about-section-label-pill">// 04 SERVICES</div>

            {/* Section Header */}
            <div className="skills-header-v2">
              <h2 className="skills-heading-v2">
                <span className="skills-heading-my">My </span>
                <span className="skills-heading-gradient-v2">Services</span>
              </h2>
              <p className="skills-subtitle-v2">
                What I can do for you and your business
              </p>
              {/* Decorative Rule */}
              <div className="skills-decorative-rule" />
            </div>
          </div>
        </FadeInWhenVisible>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-[1150px] mx-auto">
          {services.map((service, index) => {
            const blobShape = blobShapes[index % blobShapes.length];

            return (
              <FadeInWhenVisible key={index} direction="in" delay={index * 0.1}>
                <div
                  className="group relative rounded-[2.5rem] transition-all duration-500 hover:-translate-y-3 flex flex-col items-center text-center overflow-hidden h-full"
                  style={
                    {
                      padding: "56px 40px",
                      background: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      boxShadow: "0 20px 40px -20px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)",
                      "--icon-color": service.color,
                    } as React.CSSProperties
                  }
                >
                  {/* Subtle Glow Background on Hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: `radial-gradient(600px circle at 50% 0%, ${service.color}15, transparent 70%)`,
                    }}
                  />
                  
                  {/* Top Edge Glow line that activates on hover for premium feel */}
                  <div 
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                    style={{
                      background: `linear-gradient(to right, transparent, ${service.color}, transparent)`,
                      filter: "blur(2px)",
                    }}
                  />
                  <div 
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                    style={{ background: service.color }}
                  />

                  {/* Icon Blob */}
                  <div className="relative flex items-center justify-center w-28 h-28 mb-8" style={{ marginTop: "10px" }}>
                    <div
                      className="absolute inset-0 transition-all duration-500 opacity-15 group-hover:opacity-100 group-hover:scale-110"
                      style={{
                        backgroundColor: service.color,
                        borderRadius: blobShape,
                      }}
                    />
                    <div className="relative z-10 text-[var(--icon-color)] group-hover:text-white transition-colors duration-500">
                      <service.icon size={38} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="relative z-10 flex flex-col flex-grow items-center">
                    <h3
                      className="text-xl font-bold text-white mb-5 group-hover:text-[var(--icon-color)] transition-colors duration-300"
                      style={{ letterSpacing: "0.02em" }}
                    >
                      {service.title}
                    </h3>

                    <p
                      className="leading-relaxed text-[15px] opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Base overlay for border gradient hover */}
                  <div className="absolute inset-0 rounded-[2.5rem] border-2 border-transparent group-hover:border-[var(--icon-color)] opacity-0 group-hover:opacity-[0.15] transition-all duration-500 pointer-events-none" />
                </div>
              </FadeInWhenVisible>
            );
          })}
        </div>
      </div>
    </section>
  );
}
