"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Download, MapPin } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science in CSIT",
    period: "2018 — 2023",
    institution: "Prithvi Narayan Campus, Pokhara",
    description:
      "Pursuing a Bachelor's degree in science in Computer Science and Information Technology — blending theory with hands-on development, specializing in technologies and software engineering.",
    isCurrent: false,
  },
  {
    degree: "10+2 Science",
    period: "2016 — 2018",
    institution: "Rastiya Secondary School",
    description:
      "Studied Physics, Chemistry and Mathematics — built strong foundation in science.",
    isCurrent: false,
  },
  {
    degree: "School Leaving Certificate (SLC)",
    period: "2016",
    institution: "Bal Mandir Secondary School",
    description:
      "Successfully completed secondary level education with fundamental academic knowledge and skills",
    isCurrent: false,
  },
];

const experience = [
  {
    role: "Project Manager",
    period: "2026 — Present",
    company: "Proforma Digital Solutions Pvt. Ltd.",
    description:
      "Managing complex projects end-to-end — distributing resources, aligning teams, establishing collaborative environments and delivering results on schedule",
    isCurrent: true,
  },
  {
    role: "Python Tutor",
    period: "2023 — 2024",
    company: "Xdezo Technologies Pvt. Ltd.",
    description:
      "Taught Core Python programming and Django web development.",
    isCurrent: false,
  },
  {
    role: "Freelance Analyst",
    period: "2025 — Present",
    company: "Remote / Independent",
    description:
      "Analysis of collective data, studies it, and provide insights as well as recommendations based on findings",
    isCurrent: true,
  },
];

function FadeInWhenVisible({
  children,
  direction = "up",
}: {
  children: React.ReactNode;
  direction?: "up" | "left" | "right";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const initial = {
    up: { opacity: 0, y: 30, x: 0 },
    left: { opacity: 0, x: -30, y: 0 },
    right: { opacity: 0, x: 30, y: 0 },
  }[direction];

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

// ─── Timeline Column ──────────────────────────────────────────────────────────
function TimelineColumn({
  items,
  accent,
}: {
  items: {
    title: string;
    period: string;
    sub: string;
    description: string;
    isCurrent: boolean;
  }[];
  accent: "teal" | "purple";
}) {
  const isTeal = accent === "teal";
  const dotColor = isTeal ? "#2dd4bf" : "#a78bfa";
  const dotGlow = isTeal
    ? "0 0 0 4px rgba(45,212,191,0.15), 0 0 16px rgba(45,212,191,0.4)"
    : "0 0 0 4px rgba(167,139,250,0.15), 0 0 16px rgba(167,139,250,0.4)";
  const lineGradient = isTeal
    ? "linear-gradient(to bottom, rgba(45,212,191,0.6), rgba(45,212,191,0.15), rgba(255,255,255,0.02))"
    : "linear-gradient(to bottom, rgba(167,139,250,0.6), rgba(167,139,250,0.15), rgba(255,255,255,0.02))";
  const badgeBg = isTeal ? "rgba(45,212,191,0.1)" : "rgba(167,139,250,0.1)";
  const badgeBorder = isTeal ? "rgba(45,212,191,0.3)" : "rgba(167,139,250,0.3)";
  const badgeText = isTeal ? "#2dd4bf" : "#c4b5fd";
  const badgeDot = isTeal ? "#2dd4bf" : "#a78bfa";
  const badgeShadow = isTeal
    ? "0 6px 18px rgba(45,212,191,0.16), inset 0 1px 0 rgba(255,255,255,0.05)"
    : "0 6px 18px rgba(167,139,250,0.16), inset 0 1px 0 rgba(255,255,255,0.05)";
  const subText = isTeal ? "#2dd4bf" : "#c4b5fd";

  return (
    /* Outer container — relative so the vertical line can stretch full height */
    <div className="relative mt-12 block">
      {/* Vertical line extends up to perfectly hit the center of the header icon */}
      <div
        className="absolute bottom-0 w-0.5"
        style={{ top: "-48px", left: "19px", background: lineGradient }}
      />

      <div className="flex flex-col gap-10">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="relative"
            style={{ paddingLeft: "56px" }} /* ← fixed left indent for all content */
            initial={{ opacity: 0, x: isTeal ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
          >
            {/* Timeline dot — centred on the vertical line at left:19px, width:16px → left:12px */}
            <div
              className="absolute"
              style={{
                left: "12px",
                top: "32px",
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                backgroundColor: dotColor,
                boxShadow: dotGlow,
                border: "3px solid #050810",
                zIndex: 10,
              }}
            />

            {/* Card */}
            <div
              className="group relative overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:translate-x-1"
              style={{
                padding: "24px 28px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 10px 30px -15px rgba(0,0,0,0.5)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background =
                  "rgba(255,255,255,0.05)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(255,255,255,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background =
                  "rgba(255,255,255,0.03)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(255,255,255,0.08)";
              }}
            >
              {/* Subtle accent glow on hover inside the card */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(400px circle at 0% 0%, ${isTeal ? 'rgba(45,212,191,0.08)' : 'rgba(167,139,250,0.08)'}, transparent 70%)`
                }}
              />

              {/* Title row */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4 relative z-10 w-full">
                <h4
                  className="font-bold text-white leading-snug tracking-wide"
                  style={{ fontSize: "18px", wordBreak: "break-word" }}
                >
                  {item.title}
                </h4>
                {/* Date badge — nowrap + shrink-0 prevents truncation */}
                <span
                  className="inline-flex shrink-0 items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    whiteSpace: "nowrap",
                    background: badgeBg,
                    border: `1px solid ${badgeBorder}`,
                    color: badgeText,
                    boxShadow: badgeShadow,
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "999px",
                      backgroundColor: badgeDot,
                    }}
                  />
                  {item.period}
                </span>
              </div>

              {/* Current badge */}
              {item.isCurrent && (
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-4 uppercase tracking-widest font-bold relative z-10"
                  style={{
                    fontSize: "10px",
                    background: "rgba(74,222,128,0.15)",
                    border: "1px solid rgba(74,222,128,0.3)",
                    color: "#4ade80",
                    boxShadow: "0 0 10px rgba(74,222,128,0.1)",
                  }}
                >
                  <span
                    className="animate-[pulse_2s_ease-in-out_infinite] rounded-full"
                    style={{
                      width: "6px",
                      height: "6px",
                      background: "#4ade80",
                      flexShrink: 0,
                    }}
                  />
                  Current
                </div>
              )}

              {/* Institution / Company */}
              <div
                className="flex items-center gap-2 mb-4 relative z-10"
                style={{ fontSize: "14px", color: subText }}
              >
                <MapPin size={14} strokeWidth={2.5} style={{ flexShrink: 0 }} />
                <span className="font-medium">{item.sub}</span>
              </div>

              {/* Description */}
              <p
                className="leading-relaxed relative z-10"
                style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)" }}
              >
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ResumeSection() {
  const educationItems = education.map((e) => ({
    title: e.degree,
    period: e.period,
    sub: e.institution,
    description: e.description,
    isCurrent: e.isCurrent,
  }));

  const experienceItems = experience.map((e) => ({
    title: e.role,
    period: e.period,
    sub: e.company,
    description: e.description,
    isCurrent: e.isCurrent,
  }));

  return (
    <section id="resume" className="relative bg-[#050810] overflow-hidden">
      {/* Atmospheric background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px),
            radial-gradient(ellipse 900px 700px at 15% 85%, rgba(20,184,166,0.07), transparent),
            radial-gradient(ellipse 700px 900px at 85% 15%, rgba(168,85,247,0.07), transparent)
          `,
          backgroundSize: "28px 28px, 100% 100%, 100% 100%",
        }}
      />

      <div className="about-container">
        {/* ── Section Header ── */}
        <FadeInWhenVisible>
          <div className="about-subblock mb-16">
            {/* Section Label - Pill Badge */}
            <div className="about-section-label-pill">// 03 RESUME</div>

            {/* Section Header */}
            <div className="skills-header-v2">
              <h2 className="skills-heading-v2">
                <span className="skills-heading-my">My </span>
                <span className="skills-heading-gradient-v2">Resume</span>
              </h2>
              <p className="skills-subtitle-v2">
                My professional journey, education and experience
              </p>
              {/* Decorative Rule */}
              <div className="skills-decorative-rule" />
            </div>
          </div>
        </FadeInWhenVisible>

        {/* ── Two Column Grid ── */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 mt-12 lg:mt-20"
          style={{ gap: "64px", marginBottom: "80px" }}
        >
          {/* Education */}
          <FadeInWhenVisible direction="left">
            <div className="relative">
              {/* Column header */}
              <div
                className="flex items-center gap-5 relative z-10"
              >
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "rgba(45,212,191,0.15)",
                    border: "1px solid rgba(45,212,191,0.4)",
                    flexShrink: 0,
                    boxShadow: "0 0 20px rgba(45,212,191,0.2)",
                  }}
                >
                  <GraduationCap size={20} strokeWidth={2} color="#2dd4bf" />
                </div>
                <div>
                  <h3
                    className="font-bold text-white tracking-wide leading-none mb-1.5"
                    style={{ fontSize: "26px" }}
                  >
                    Education
                  </h3>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.4)",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                    }}
                  >
                    Academic Background
                  </p>
                </div>
              </div>

              <TimelineColumn items={educationItems} accent="teal" />
            </div>
          </FadeInWhenVisible>

          {/* Experience */}
          <FadeInWhenVisible direction="right">
            <div className="relative">
              {/* Column header */}
              <div
                className="flex items-center gap-5 relative z-10"
              >
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "rgba(167,139,250,0.15)",
                    border: "1px solid rgba(167,139,250,0.4)",
                    flexShrink: 0,
                    boxShadow: "0 0 20px rgba(167,139,250,0.2)",
                  }}
                >
                  <Briefcase size={20} strokeWidth={2} color="#a78bfa" />
                </div>
                <div>
                  <h3
                    className="font-bold text-white tracking-wide leading-none mb-1.5"
                    style={{ fontSize: "26px" }}
                  >
                    Experience
                  </h3>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.4)",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                    }}
                  >
                    Professional Journey
                  </p>
                </div>
              </div>

              <TimelineColumn items={experienceItems} accent="purple" />
            </div>
          </FadeInWhenVisible>
        </div>

        {/* ── Download CTA Banner ── */}
        <FadeInWhenVisible>
          <div
            className="flex items-center justify-between gap-8 rounded-2xl"
            style={{
              padding: "28px 40px",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.07)",
              flexWrap: "wrap",
            }}
          >
            <div className="flex items-center gap-5">
              <div
                className="flex items-center justify-center rounded-xl"
                style={{
                  width: "52px",
                  height: "52px",
                  background:
                    "linear-gradient(135deg, rgba(45,212,191,0.2), rgba(103,232,249,0.2))",
                  border: "1px solid rgba(45,212,191,0.3)",
                  flexShrink: 0,
                }}
              >
                <Download size={22} strokeWidth={2} color="#2dd4bf" />
              </div>
              <div>
                <h3
                  className="font-semibold text-white"
                  style={{ fontSize: "17px" }}
                >
                  Want to Connect With Me?
                </h3>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>
                  Download my CV with all details in LinkedIn
                </p>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/suraj-pandey-6684391b9/"
              className="inline-flex items-center gap-2.5 rounded-xl font-bold transition-all duration-300 hover:scale-105"
              style={{
                padding: "13px 28px",
                background: "linear-gradient(135deg, #2dd4bf, #67e8f9)",
                color: "#050810",
                fontSize: "15px",
                flexShrink: 0,
                boxShadow: "0 4px 20px rgba(45,212,191,0.25)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 8px 30px rgba(45,212,191,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 4px 20px rgba(45,212,191,0.25)";
              }}
            >
              <Download size={17} strokeWidth={2.5} />
              LinkedIn
            </a>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}