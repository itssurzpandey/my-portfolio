"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Carousel } from "@ark-ui/react/carousel";
import { StarIcon, QuoteIcon, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Suju Devkota",
    role: "Manager, Websoft",
    content: "Accurate, detail-oriented, and highly professional. Every report delivered added real value to our business strategy.",
    rating: 5,
    avatar: "avatars/sujuimg.jpeg",
  },
  {
    name: "Samit Paudel",
    role: "Project Director, TipTop",
    content: "An exceptional project manager who keeps everything on track. Deadlines were met, communication was smooth, and the entire process felt effortless.",
    rating: 5,
    avatar: "avatars/samitimg.jpeg",
    
  },
  {
    name: "Rozeena Bhattarai",
    role: "Designer, USA",
    content: "Creative, professional, and detail-oriented. Every design perfectly captured our brand identity.",
    rating: 5,
    avatar: "avatars/rojuimg.jpeg",
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

export default function TestimonialsSection() {
  // Autoplay functionality safely clicking the next trigger
  useEffect(() => {
    const interval = setInterval(() => {
      const nextBtn = document.getElementById("testimonial-next");
      if (nextBtn) {
        // If disabled (end of carousel), maybe we need to click previous? 
        // Ark UI natively supports `loop` on the Root component, so Next shouldn't be disabled!
        nextBtn.click();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="relative bg-[#050810] overflow-hidden py-10">
      <div className="about-container">
        {/* Section Header */}
        <FadeInWhenVisible>
          <div className="about-subblock" style={{ marginBottom: "60px" }}>
            <div className="about-section-label-pill">// 06 TESTIMONIALS</div>
            <div className="skills-header-v2">
              <h2 className="skills-heading-v2">
                <span className="skills-heading-my">Client </span>
                <span className="skills-heading-gradient-v2">Stories</span>
              </h2>
              <p className="skills-subtitle-v2">
                What people say about working with me
              </p>
              <div className="skills-decorative-rule" />
            </div>
          </div>
        </FadeInWhenVisible>

        {/* Carousel implementation */}
        <FadeInWhenVisible delay={0.2}>
          <div style={{ maxWidth: "900px", margin: "0 auto", width: "100%" }}>
            <Carousel.Root
              defaultPage={0}
              slideCount={testimonials.length}
              className="relative overflow-hidden w-full"
              loop={true}
            >
              <Carousel.ItemGroup className="flex min-h-[300px]">
                {testimonials.map((testimonial, index) => (
                  <Carousel.Item
                    key={index}
                    index={index}
                    className="w-full flex-shrink-0"
                    style={{ padding: "0 10px" }}
                  >
                    <div 
                      className="relative flex flex-col h-full items-center text-center group transition-all duration-500"
                      style={{
                        padding: "48px 40px",
                        borderRadius: "32px",
                        background: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        boxShadow: "0 20px 40px -20px rgba(0,0,0,0.5)"
                      }}
                    >
                      <QuoteIcon className="w-12 h-12 mb-8 opacity-20" color="#2dd4bf" />
                      
                      <p className="text-white/80 text-[17px] md:text-[20px] leading-[1.8] italic mb-10 max-w-2xl">
                        "{testimonial.content}"
                      </p>
                      
                      <div className="mt-auto flex flex-col items-center">
                        <div className="flex items-center gap-1.5 mb-6">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <StarIcon
                              key={i}
                              className="w-5 h-5"
                              fill="#2dd4bf"
                              color="#2dd4bf"
                            />
                          ))}
                        </div>
                        <div className="flex items-center gap-4">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-14 h-14 rounded-full object-cover border-[2px] border-[#2dd4bf]/30"
                          />
                          <div className="text-left">
                            <h4 className="font-bold text-white text-[16px]">
                              {testimonial.name}
                            </h4>
                            <p className="text-sm text-[#2dd4bf] font-medium tracking-wide">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Subtle glow border hover */}
                      <div className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 shadow-[inset_0_0_0_1px_rgba(45,212,191,0.2)] transition-all duration-500 pointer-events-none" />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel.ItemGroup>

              <div className="flex items-center justify-center mt-12 gap-6 relative z-20">
                <Carousel.PrevTrigger className="p-3 text-white/50 border border-white/10 rounded-full hover:text-white hover:bg-white/5 hover:border-[#2dd4bf]/50 transition-all duration-300">
                  <ChevronLeft size={20} />
                </Carousel.PrevTrigger>

                <Carousel.IndicatorGroup className="flex gap-3">
                  {testimonials.map((_, index) => (
                    <Carousel.Indicator
                      key={index}
                      index={index}
                      className="w-2.5 h-2.5 rounded-full bg-white/20 data-[current]:bg-[#2dd4bf] data-[current]:scale-125 transition-all duration-300 cursor-pointer"
                    />
                  ))}
                </Carousel.IndicatorGroup>

                <Carousel.NextTrigger id="testimonial-next" className="p-3 text-white/50 border border-white/10 rounded-full hover:text-white hover:bg-white/5 hover:border-[#2dd4bf]/50 transition-all duration-300">
                  <ChevronRight size={20} />
                </Carousel.NextTrigger>
              </div>
            </Carousel.Root>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
