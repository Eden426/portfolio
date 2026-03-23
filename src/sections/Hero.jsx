import { useEffect, useState } from "react";
import { Button } from "@/components/Button"; // Adjust import if needed
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton"; // Adjust import if needed
import { SiLeetcode, SiHackerrank } from "react-icons/si";

const skills = [
  "Python",
  "Data Preprocessing",
  "Machine Learning",
  "Deep Learning",
  "Natural Language Processing (NLP)",
  "Java",
  "PHP",
  "MySQL",
  "Backend Development",
  "Data Structures & Algorithms",
  "Problem Solving",
  "Innovation",
  "LeetCode & HackerRank Challenges",
  "Feature Engineering",
  "Model Evaluation",
  "Git & GitHub",
  "Docker",
  "REST APIs / FastAPI",
  "TensorFlow / PyTorch",
  "Pandas / NumPy / Scikit-learn",
];

export const Hero = () => {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsLight(document.documentElement.classList.contains("light"));
    };

    // Initial check
    checkTheme();

    // Listen for theme changes dynamically
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background text-foreground transition-colors duration-300">
      {/* Background Image (ONLY DARK MODE) */}
      {!isLight && (
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/hero-bg.jpg"
            alt="Hero background"
            className="w-full h-full object-cover object-[center_20%] opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#09090b]/80 to-[#09090b]" />
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium"
                style={{ color: "var(--color-primary)" }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: "var(--color-primary)" }}
                />
                Software Engineer • Backend & Machine Learning Developer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100 text-heading">
                Building{" "}
                <span
                  className="glow-text"
                  style={{ color: "var(--color-primary)" }}
                >
                  intelligent
                </span>
                <br />
                systems with
                <br />
                <span className="font-serif italic font-normal text-heading">
                  impact.
                </span>
              </h1>

              <p className="text-lg text-muted max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Eden Nigatu — a software engineer specializing in
                backend development and machine learning. I design scalable
                systems, develop intelligent models, and contribute to AI
                research that solves real-world problems.
              </p>
            </div>

            {/* Resume CTA */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <AnimatedBorderButton>
                  <Download className="w-5 h-5 mr-2" />
                  View Resume
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted">Follow me: </span>

              {[
                { icon: Github, href: "https://github.com/Eden426" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/eden-nigatu/",
                },
                { icon: SiLeetcode, href: "https://leetcode.com/u/Eden426/" },
                {
                  icon: SiHackerrank,
                  href: "https://www.hackerrank.com/profile/abbynigatu60",
                },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full glass hover-primary-bg transition-all duration-300 text-foreground"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column (Profile Image) */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-sm mx-auto">
              {/* Note: The glowing green background blur div was removed from here */}
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.jpg"
                  alt="Eden Nigatu"
                  className="w-full h-[420px] object-cover object-center rounded-2xl"
                />

                {/* Availability Badge */}
                <div className="absolute top-4 left-4 glass rounded-xl px-4 py-2 animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-foreground">
                      Available for work
                    </span>
                  </div>
                </div>

                {/* Experience Badge */}
                <div className="absolute top-4 right-4 glass rounded-xl px-4 py-2 animate-float animation-delay-500">
                  <div
                    className="text-lg font-bold"
                    style={{ color: "var(--color-primary)" }}
                  >
                    3+
                  </div>
                  <div className="text-xs text-muted">Years Exp.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Marquee */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted mb-6 text-center">
            Technologies I work with
          </p>

          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 z-10 fade-edges-left" />
            <div className="absolute right-0 top-0 bottom-0 w-32 z-10 fade-edges-right" />

            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted opacity-60 hover:opacity-100 hover:text-foreground transition-all cursor-default">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted hover:text-foreground transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};