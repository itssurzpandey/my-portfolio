"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaLinkedinIn, FaGithub, FaXTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";

function FadeInWhenVisible({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-[#050810] overflow-hidden py-10">
      <div className="about-container relative z-10">
        {/* Section Header */}
        <FadeInWhenVisible>
          <div className="about-subblock" style={{ marginBottom: "60px" }}>
            <div className="about-section-label-pill">// 07 CONTACT</div>
            <div className="skills-header-v2">
              <h2 className="skills-heading-v2">
                <span className="skills-heading-my">Get In </span>
                <span className="skills-heading-gradient-v2">Touch</span>
              </h2>
              <p className="skills-subtitle-v2">
                Have a project in mind or want to collaborate? Feel free to reach out! I'm always open to discussing new ideas, tech stacks, or career opportunities.
              </p>
              <div className="skills-decorative-rule" />
            </div>
          </div>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column - Contact Info */}
          <FadeInWhenVisible delay={0.2} className="lg:col-span-5 w-full">
            <div className="flex flex-col gap-14">
              <div>
                <h3 className="text-3xl font-extrabold text-white mb-10">Contact Information</h3>

                <div className="flex flex-col gap-8">
                  {/* Info Block 1 */}
                  <div className="flex items-center gap-6 group">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 text-[#2dd4bf] group-hover:bg-[#2dd4bf]/20 transition-colors duration-300 shadow-lg">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-white/50 tracking-wider uppercase mb-1">Email</p>
                      <p className="text-[16px] font-medium text-white group-hover:text-[#2dd4bf] transition-colors duration-300">iamsurzpandey@gmail.com</p>
                    </div>
                  </div>

                  {/* Info Block 2 */}
                  <div className="flex items-center gap-6 group">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 text-[#2dd4bf] group-hover:bg-[#2dd4bf]/20 transition-colors duration-300 shadow-lg">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-white/50 tracking-wider uppercase mb-1">Phone</p>
                      <p className="text-[16px] font-medium text-white group-hover:text-[#2dd4bf] transition-colors duration-300">+977-9846332486</p>
                    </div>
                  </div>

                  {/* Info Block 3 */}
                  <div className="flex items-center gap-6 group">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 text-[#2dd4bf] group-hover:bg-[#2dd4bf]/20 transition-colors duration-300 shadow-lg">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-white/50 tracking-wider uppercase mb-1">Location</p>
                      <p className="text-[16px] font-medium text-white group-hover:text-[#2dd4bf] transition-colors duration-300">Pokhara, Nepal</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-[15px] font-extrabold text-white/80 mb-6 uppercase tracking-widest">Connect With Me</h4>
                <div className="flex items-center gap-6">
                  <a href="https://www.linkedin.com/in/suraj-pandey-6684391b9/" className="flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 text-white hover:text-[#2dd4bf] hover:bg-[#2dd4bf]/10 transition-all duration-300 hover:-translate-y-1 shadow-lg">
                    <FaLinkedinIn size={22} />
                  </a>
                  <a href="https://www.facebook.com/suraj.pandey.818744" className="flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 text-white hover:text-[#2dd4bf] hover:bg-[#2dd4bf]/10 transition-all duration-300 hover:-translate-y-1 shadow-lg">
                    <FaFacebook size={22} />
                  </a>
                  <a href="https://www.instagram.com/_itssurzpandey/?hl=en" className="flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 text-white hover:text-[#2dd4bf] hover:bg-[#2dd4bf]/10 transition-all duration-300 hover:-translate-y-1 shadow-lg">
                    <FaInstagram size={22} />
                  </a>
                  {/* <a href="#" className="flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 text-white hover:text-[#2dd4bf] hover:bg-[#2dd4bf]/10 transition-all duration-300 hover:-translate-y-1 shadow-lg">
                    <FaXTwitter size={22} />
                  </a> */}
                </div>
              </div>
            </div>
          </FadeInWhenVisible>

          {/* Right Column - Form */}
          <FadeInWhenVisible delay={0.4} className="lg:col-span-7 w-full flex justify-center lg:justify-end">
            <div
              className="relative overflow-hidden group w-full"
              style={{
                padding: "48px",
                borderRadius: "32px",
                background: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 20px 40px -20px rgba(0,0,0,0.5)"
              }}
            >
              <h3 className="text-[28px] font-bold text-white mb-10 text-center">Send a Message</h3>

              <form style={{ display: "flex", flexDirection: "column", gap: "32px", width: "100%" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
                  {/* Name Input */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-start" }}>
                    <label htmlFor="name" className="text-[12px] font-extrabold text-white/60 tracking-wider uppercase ml-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="John Doe"
                      className="w-full text-white placeholder-white/20 transition-all duration-300 focus:bg-white/10"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "16px",
                        padding: "16px 20px",
                        outline: "none"
                      }}
                    />
                  </div>

                  {/* Email Input */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-start" }}>
                    <label htmlFor="email" className="text-[12px] font-extrabold text-white/60 tracking-wider uppercase ml-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="john@example.com"
                      className="w-full text-white placeholder-white/20 transition-all duration-300 focus:bg-white/10"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "16px",
                        padding: "16px 20px",
                        outline: "none"
                      }}
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-start" }}>
                  <label htmlFor="message" className="text-[12px] font-extrabold text-white/60 tracking-wider uppercase ml-2">Your Message</label>
                  <textarea
                    id="message"
                    placeholder="Hello, I'd like to talk about..."
                    rows={6}
                    className="w-full text-white placeholder-white/20 transition-all duration-300 focus:bg-white/10 resize-none"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "16px",
                      padding: "16px 20px",
                      outline: "none",
                      width: "100%"
                    }}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  className="flex items-center justify-center gap-3 w-full font-bold text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(45,212,191,0.3)] hover:-translate-y-1"
                  style={{
                    marginTop: "8px",
                    padding: "18px 24px",
                    borderRadius: "16px",
                    background: "linear-gradient(90deg, #2dd4bf, #8b5cf6)",
                    boxShadow: "0 10px 20px -10px rgba(45,212,191,0.5)"
                  }}
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>

              {/* Subtle inner glow on hover */}
              <div className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 shadow-[inset_0_0_0_1px_rgba(45,212,191,0.3)] transition-all duration-700 pointer-events-none" />
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
