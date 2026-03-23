import { motion } from "framer-motion";

// 1. IMPORT YOUR IMAGES HERE
import project1Img from "/projects/project1.png";
import project3Img from "/projects/project3.png";

const experiences = [
  {
    period: "2025 — Present",
    role: "AI & Machine Learning Intern",
    company: "Information Network Security Administration (INSA)",
    description:
      "Conducting research on machine translation using Ethiopian legal texts from the Federal Negarit Gazeta. Preprocessing and cleaning large-scale Amharic legal corpora, including tokenization and normalization. Designing and training deep learning models with PyTorch for sequence-to-sequence translation tasks.",
    technologies: [
      "Python",
      "PyTorch",
      "Machine Learning",
      "Deep Learning",
      "NLP",
    ],
    image: null,
  },
  {
    title: "Crypto Time-Series Forecasting",
    period: "2025",
    role: "ML & Backend Developer",
    description:
      "Built LSTM/GRU models to predict crypto prices with FastAPI backend and frontend UI.",
    technologies: ["Python", "TensorFlow", "FastAPI", "Pandas", "JS"],
    demo: "https://drive.google.com/file/d/1gmuNEZky17c4u_2l8W0_hA8sK6M_WuWb/view",
    image: project1Img, // 2. USE THE IMPORTED VARIABLE HERE
  },
  {
    title: "Fake News / Misinformation Detector",
    period: "2026",
    role: "ML Developer",
    description:
      "Developed an end-to-end web application for detecting fake news using NLP and transformer-based models.",
    technologies: [
      "Python",
      "PyTorch",
      "Hugging Face Transformers",
      "Pandas",
      "Scikit-learn",
    ],
    image: null,
  },
  {
    title: "Court Outcome Prediction",
    period: "2025",
    role: "NLP & ML Researcher",
    description:
      "Predicted court outcomes using NLP, TF-IDF, and ML classifiers.",
    technologies: ["Python", "Scikit-learn", "NLTK", "spaCy", "TF-IDF"],
    image: project3Img, // 3. USE THE IMPORTED VARIABLE HERE
  },
  {
    title: "RMI-based Chat Application",
    period: "2024",
    role: "Backend Developer",
    description:
      "Built a distributed chat system using Java RMI enabling real-time communication between multiple clients.",
    technologies: ["Java", "RMI", "Sockets", "Multithreading"],
    image: null,
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-32 relative bg-background overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-40"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-transparent to-background"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-20 text-center mx-auto">
          <span className="text-muted text-sm uppercase tracking-widest font-bold">
            History
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-heading">
            Professional Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              key={idx}
              className="glass rounded-xl flex flex-col h-full border border-border hover:border-primary/30 transition-all duration-500 group overflow-hidden"
            >
              {exp.image && (
                <div className="w-full h-56 md:h-64 bg-secondary overflow-hidden border-b border-border">
                  <img
                    src={exp.image}
                    alt={exp.title || exp.role}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                </div>
              )}

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-heading group-hover:text-primary transition-colors duration-300">
                  {exp.title || exp.role}
                </h3>

                <div className="mt-2 mb-4">
                  {exp.title && exp.role && (
                    <p className="text-sm font-semibold text-primary">
                      {exp.role}
                    </p>
                  )}
                  {exp.company && (
                    <p className="text-muted text-sm font-medium mt-1">
                      {exp.company}
                    </p>
                  )}
                  <p className="text-xs font-bold tracking-widest text-muted uppercase mt-2">
                    {exp.period}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-secondary text-[11px] font-bold uppercase tracking-widest rounded-md border border-border/50 text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-foreground/80 leading-relaxed text-sm md:text-base flex-grow mb-8">
                  {exp.description}
                </p>

                {exp.demo && (
                  <div className="mt-auto">
                    <a
                      href={exp.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2b2b2b] hover:bg-[#1a1a1a] text-[#f1f1f1] rounded-lg text-sm font-bold transition-colors dark:bg-white dark:text-black dark:hover:bg-gray-200"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                      Site
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
