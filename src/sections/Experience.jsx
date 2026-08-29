const experiences = [
  {
    period: "2026 - Present",
    role: "Data Visualization Intern",
    company: "Infosys Springboard 7.0",
    description:
      "Working on real-world data visualization projects using Python, SQL, and Power BI to transform raw data into interactive dashboards and generate meaningful business insights.",
    technologies: ["Python", "SQL", "Power BI", "Data Analysis"],
    current: true,
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-1/4 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Section Heading */}
        <div className="max-w-3xl mb-20">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary animate-fade-in">
            Career Journey
          </span>

          <h2 className="mt-4 mb-6 text-4xl font-bold md:text-5xl animate-fade-in animation-delay-100">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              speaks
            </span>
          </h2>

          <p className="text-lg leading-relaxed text-muted-foreground animate-fade-in animation-delay-200">
            A journey of learning and building practical experience through
            real-world projects, internships, and continuous skill development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-primary/30 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-16">

            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2"
                style={{
                  animationDelay: `${idx * 150}ms`,
                }}
              >

                {/* Timeline Dot */}
                <div className="absolute left-4 top-8 h-4 w-4 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background md:left-1/2 z-20">

                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-70"></span>
                  )}

                </div>

                {/* Card */}
                <div
                  className={`pl-12 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass rounded-2xl border border-primary/25 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/60 hover:shadow-[0_0_30px_rgba(32,178,166,0.15)]">

                    <span className="text-sm font-medium text-primary">
                      {exp.period}
                    </span>

                    <h3 className="mt-3 text-2xl font-bold">
                      {exp.role}
                    </h3>

                    <p className="mt-1 text-muted-foreground">
                      {exp.company}
                    </p>

                    <p className="mt-6 leading-7 text-muted-foreground">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div
                      className={`mt-6 flex flex-wrap gap-3 ${
                        idx % 2 === 0 ? "" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="rounded-full bg-surface px-4 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};