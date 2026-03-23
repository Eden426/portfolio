import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Backend Engineering",
    description:
      "Designing reliable backend systems and APIs using Java, Python, PHP, and MySQL.",
  },
  {
    icon: Rocket,
    title: "Machine Learning",
    description:
      "Building data-driven solutions using machine learning, deep learning, and modern AI techniques.",
  },
  {
    icon: Users,
    title: "Research & Collaboration",
    description:
      "Working with teams and researchers to develop AI solutions, including machine translation projects.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Applying analytical thinking and data-driven approaches to solve complex real-world problems.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-gray-400 text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] text-heading mb-8 animate-fade-up">
              Building intelligent systems,
              <span className="font-serif italic font-normal opacity-70 block">
                one solution at a time.
              </span>
            </h2>

            <div className="space-y-4 text-gray-400 animate-fade-in animation-delay-200">
              <p>
                I'm a motivated software engineer focused on backend development
                and machine learning. My interest in software started with
                curiosity about how systems work behind the scenes and has grown
                into building data-driven solutions to solve real-world
                problems.
              </p>

              <p>
                I work with technologies such as Java, Python, PHP, and MySQL,
                and I also explore deep learning and large language models
                (LLMs) to build intelligent systems and analyze complex data.
              </p>
              <p>
                I am an AI/ML intern at the Information Network Security
                Administration (INSA) in the AI and Machine Learning Department,
                where I worked on research related to machine translation using
                Ethiopian legal texts from the Federal Negarit Gazeta.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 border border-border animate-fade-up">
              <p className="text-lg md:text-xl font-medium italic text-foreground leading-relaxed">
                "My mission is to apply machine learning and software
                engineering to solve complex real-world problems and build
                systems that create meaningful impact."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass p-6 rounded-2xl animate-fade-in light:bg-[#333432] light:text-white"
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 hover:bg-white/20 transition-colors">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-80">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
