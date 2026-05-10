"use client";

import { motion } from "framer-motion";

const footerLinks = {
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
  ],
  more: [
    { label: "Services", href: "#services" },
    { label: "Resume", href: "#resume" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#050810] pt-24 overflow-hidden border-t border-white/5 z-20">
      {/* Background glowing blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-48 bg-gradient-to-r from-[#2dd4bf] to-[#8b5cf6] opacity-[0.03] blur-[100px] pointer-events-none" />

      <div className="about-container relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16">
          
          {/* Brand & Intro (Takes up more space on wide screens) */}
          <div className="md:col-span-12 lg:col-span-6 flex flex-col items-start pr-0 lg:pr-12">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleClick("#home");
              }}
              className="inline-block text-[32px] font-black tracking-tight mb-6 group"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-white group-hover:text-white/80 transition-colors">Suraj</span>{" "}
              <span 
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #2dd4bf, #67e8f9)" }}
              >
                Panday
              </span>
            </motion.a>
            <p className="text-white/50 text-[15px] leading-[1.9] max-w-lg mb-12 relative">
              A passionate Data Analyst and IT Enthusiast turning data into stories that inspire action. Let’s redefine the future through analytics.
            </p>

            {/* Social Icons - Premium Glassmorphism styling */}
            <div className="flex gap-4">
              {/* Facebook */}
               <a href="https://www.facebook.com/suraj.pandey.818744" target="_blank" rel="noopener noreferrer" className="hero-refined-social-btn" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/suraj-pandey-6684391b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-[#2dd4bf] hover:border-[#2dd4bf]/40 hover:bg-[#2dd4bf]/10 transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* Instagram */}
             <a href="https://www.instagram.com/_itssurzpandey/?hl=en" target="_blank" rel="noopener noreferrer" className="hero-refined-social-btn" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5C18.216 4 20 5.784 20 7.75v8.5c0 1.966-1.784 3.75-3.75 3.75h-8.5C5.784 20 4 18.216 4 16.25v-8.5C4 5.784 5.784 4 7.75 4zm8.75 1.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
                 </svg>
              </a>
              {/* Email */}
              <a
                href="mailto:suraj@example.com"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-[#2dd4bf] hover:border-[#2dd4bf]/40 hover:bg-[#2dd4bf]/10 transition-all duration-300 hover:-translate-y-1"
                aria-label="Email"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-6 lg:col-span-3 flex flex-col lg:items-start lg:pl-12">
            <h4 className="text-[13px] font-extrabold text-white tracking-[0.2em] uppercase mb-8">
              Navigation
            </h4>
            <ul className="flex flex-col gap-6">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(link.href);
                    }}
                    className="text-[15px] font-medium text-white/50 hover:text-[#2dd4bf] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div className="md:col-span-6 lg:col-span-3 flex flex-col lg:items-start lg:pl-4">
            <h4 className="text-[13px] font-extrabold text-white tracking-[0.2em] uppercase mb-8">
              More
            </h4>
            <ul className="flex flex-col gap-6">
              {footerLinks.more.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(link.href);
                    }}
                    className="text-[15px] font-medium text-white/50 hover:text-[#2dd4bf] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Absolute Bottom Strip */}
      <div className="w-full bg-[#020408] py-6 border-t border-white/5 mt-16 mt-auto">
        <div className="about-container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] font-medium text-white/40 tracking-wide text-center md:text-left">
            © {currentYear} Suraj Pandey. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[13px] font-medium text-white/40 tracking-wide">
            <span>Developed by</span>
            <motion.span 
              className="inline-block"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              ♥
            </motion.span>
            <span className="text-white/80 font-bold">Suraj Panday</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
