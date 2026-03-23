import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

// 1. IMPORT YOUR ASSETS HERE
import heroBg from "/hero-bg.jpg";
import profilePhoto from "/profile-photo.jpg";
import resumePdf from "/resume.pdf";

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
    checkTheme();
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
            src={heroBg} // 2. USED IMPORTED VARIABLE
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

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Eden Nigatu — a software engineer specializing in
                backend development and machine learning.
              </p>
            </div>

            {/* Resume CTA */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href={resumePdf} target="_blank" rel="noopener noreferrer">
                {" "}
                {/* 3. USED IMPORTED VARIABLE */}
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

          {/* Right Column */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-sm mx-auto">
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src={profilePhoto} // 4. FIXED PATH AND USED IMPORTED VARIABLE
                  alt="Eden Nigatu"
                  className="w-full h-[420px] object-cover object-center rounded-2xl"
                />

                <div className="absolute top-4 left-4 glass rounded-xl px-4 py-2 animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-foreground">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
