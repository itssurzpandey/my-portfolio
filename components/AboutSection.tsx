"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Puzzle, Users, MessageCircle, ScanSearch, Clock, Zap } from "lucide-react";

const personalInfo = [
  { label: "Full Name", value: "Suraj Panday" },
  { label: "Email", value: "iamsurzpandey@gmail.com" },
  /*{ label: "Date of Birth", value: "Jan 3, 2000" },*/
  { label: "City", value: "Pokhara, Nepal" },
  { label: "Degree", value: "Bachelor of Science in Computer Science and Information Technology" },
  { label: "Freelance", value: "Available", isAvailable: true },
];

const technicalSkillsRow1 = [
  {
    name: "Django",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Pandas",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  {
    name: "NumPy",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  {
    name: "Matplotlib",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
  },
  {
    name: "SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
];

const technicalSkillsRow2 = [
  {
    name: "Tableau",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png",
  },
  {
    name: "Power BI",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  },
  {
    name: "Excel",
    icon: "https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg",
  },
  {
    name: "Jira",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  },
  {
    name: "Trello",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Statistics",
    icon: "/icons/statistics.svg",
  },
];

const softSkills = [
  { icon: Puzzle, name: "Problem Solving",     microLabel: "Core strength" },
  { icon: Users,  name: "Team Leadership",     microLabel: "Daily practice" },
  { icon: MessageCircle, name: "Communication", microLabel: "Core strength" },
  { icon: ScanSearch, name: "Attention to Detail", microLabel: "Daily practice" },
  { icon: Clock,  name: "Time Management",     microLabel: "Core strength" },
  { icon: Zap,    name: "Adaptability",        microLabel: "Daily practice" },
];

const coreStack = [
  {
    name: "Django",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Pandas",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  {
    name: "NumPy",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  {
    name: "Tableau",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png",
  },
  {
    name: "Power BI",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  },
];

// Utility to repeat icons for seamless infinite loop
const repeatedIcons = (icons: typeof technicalSkillsRow1, repeat = 2) =>
  Array.from({ length: repeat }).flatMap(() => icons);

function FadeInWhenVisible({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="about-unified-section">
      {/* Atmospheric Background */}
      <div className="about-bg-atmosphere" />

      <div className="about-container">
        {/* ABOUT ME SUB-BLOCK */}
        <FadeInWhenVisible>
          <div className="about-subblock">
            {/* Section Label */}
            <div className="about-section-label">// 01 ABOUT ME</div>

            {/* Two Column Layout */}
            <div className="about-grid">
              {/* Left Column - Photo */}
              <div className="about-photo-column">
                <div className="about-photo-frame">
                  <div className="about-photo-border" />
                  <Image
                    src="/hero-pic.png"
                    alt="Suraj Pandey"
                    width={400}
                    height={500}
                    className="about-photo-img"
                  />
                </div>

                {/* Availability Badge */}
                <div className="about-availability-badge">
                  <span className="about-availability-dot" />
                  <span>Available for Freelance</span>
                </div>
              </div>

              {/* Right Column - Info + Bio */}
              <div className="about-info-column">
                {/* Opening Line */}
                <p className="about-greeting">HELLO THERE!</p>

                {/* Main Heading */}
                <h2 className="about-heading">
                  <span className="about-heading-im">I&apos;m </span>
                  <span className="about-heading-name">Suraj Pandey</span>
                </h2>

                {/* Bio Paragraph */}
                <p className="about-bio">
                  A multi-skilled professional passionate about data, design, and development. 
                  From analyzing data for smart decisions to creating eye-catching visuals and 
                  building web apps with Django, I love blending creativity with technology to solve 
                  real-world problems.
                </p>

                {/* Info Grid */}
                <div className="about-info-grid">
                  {personalInfo.map((item, index) => (
                    <div key={index} className="about-info-row">
                      <span className="about-info-label">{item.label}</span>
                      <span
                        className={`about-info-value ${
                          item.isAvailable ? "about-info-available" : ""
                        }`}
                      >
                        {item.isAvailable && (
                          <span className="about-info-available-dot" />
                        )}
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeInWhenVisible>

        {/* Divider */}
        <div className="about-divider" />

        {/* SKILLS SUB-BLOCK */}
        <FadeInWhenVisible>
          <div className="about-subblock">
            {/* Section Label - Pill Badge */}
            <div className="about-section-label-pill">// 02 SKILLS</div>

            {/* Section Header */}
            <div className="skills-header-v2">
              <h2 className="skills-heading-v2">
                <span className="skills-heading-my">My </span>
                <span className="skills-heading-gradient-v2">Skill Set</span>
              </h2>
              <p className="skills-subtitle-v2">
                Technologies I build with & qualities I bring
              </p>
              {/* Decorative Rule */}
              <div className="skills-decorative-rule" />
            </div>

            {/* Skills Container Card */}
            <div className="skills-container-card-v2">
              <div className="skills-two-columns-v2">
                {/* LEFT COLUMN - Technical Skills Carousel */}
                <motion.div
                  className="skills-column-left"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="skills-column-header-v2">
                    <div className="skills-column-header-accent" />
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                    <span>Technical Stack</span>
                  </div>
                  <p className="skills-column-description">
                    Tools and technologies I work with daily
                  </p>

                  {/* Carousel - 2 Rows */}
                  <div className="tech-carousel-container-v2">
                    {/* Row 1 - Data/Programming - Scrolls Left */}
                    <div className="tech-carousel-row-v2 tech-carousel-scroll-left-v2">
                      {repeatedIcons(technicalSkillsRow1, 3).map((tech, i) => (
                        <div key={i} className="tech-carousel-item-v2" title={tech.name}>
                          <img src={tech.icon} alt={tech.name} />
                          <span className="tech-carousel-tooltip-v2">{tech.name}</span>
                        </div>
                      ))}
                    </div>

                    {/* Row 2 - BI/Project Tools - Scrolls Right */}
                    <div className="tech-carousel-row-v2 tech-carousel-scroll-right-v2">
                      {repeatedIcons(technicalSkillsRow2, 3).map((tech, i) => (
                        <div key={i} className="tech-carousel-item-v2" title={tech.name}>
                          <img src={tech.icon} alt={tech.name} />
                          <span className="tech-carousel-tooltip-v2">{tech.name}</span>
                        </div>
                      ))}
                    </div>

                    {/* Fade Overlays */}
                    <div className="tech-carousel-fade-left-v2" />
                    <div className="tech-carousel-fade-right-v2" />
                  </div>

                  {/* Featured Tech Spotlight */}
                  <div className="featured-tech-section">
                    <p className="featured-tech-label">Core Stack</p>
                    <div className="featured-tech-grid">
                      {coreStack.map((tech, index) => (
                        <motion.div
                          key={index}
                          className="featured-tech-card"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ y: -2 }}
                        >
                          <img src={tech.icon} alt={tech.name} />
                          <span>{tech.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Stat */}
                  <div className="tech-stack-stat">
                    17 technologies in my arsenal
                  </div>
                </motion.div>

                {/* Vertical Divider with Gradient */}
                <div className="skills-vertical-divider-v2" />

                {/* RIGHT COLUMN - Soft Skills List */}
                <motion.div
                  className="skills-column-right"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="skills-column-header-v2 skills-column-header-purple-v2">
                    <div className="skills-column-header-accent skills-column-header-accent-purple" />
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <span>Soft Skills</span>
                  </div>
                  <p className="skills-column-description">
                    Qualities and values I bring to every project
                  </p>

                  {/* Soft Skills List */}
                  <div className="soft-skills-list-v3">
                    {softSkills.map((skill, index) => {
                      const IconComponent = skill.icon;
                      return (
                        <motion.div
                          key={index}
                          className="soft-skill-row-v2"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.08 }}
                        >
                          <div className="soft-skill-icon-v2">
                            <IconComponent size={18} strokeWidth={2} />
                          </div>
                          <div className="soft-skill-content">
                            <div className="soft-skill-name-v2">{skill.name}</div>
                            <div className="soft-skill-micro-label">{skill.microLabel}</div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Bottom Stat */}
                  <div className="soft-skills-stat-v2">
                    6 core strengths I bring to your team
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
