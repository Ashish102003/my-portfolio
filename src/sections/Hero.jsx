import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { ArrowRight, ChevronDown, Download, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

const skills = [
  "Python",
  "SQL",
  "Power BI",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "Data Visualization",
  "MySQL",
  "C++ (DSA)",
  "Linux (OS)",
  "Git & GitHub",
  "Jira"
];

export const Hero = () => {
  const [showCVPopup, setShowCVPopup] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 pt-40 pb-20 relative z-10">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Column - Text Content */}
          <div className="space-y-8">

            {/* Badge */}
            <div className="animate-fade-in">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 
                           rounded-full glass text-sm text-primary"
              >
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Aspiring Data Professional
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold 
                           leading-tight animate-fade-in animation-delay-100"
              >
                Driven by{" "}
                <span className="text-primary glow-text">
                  Curiosity
                </span>
                ,
                <br />
                Guided by{" "}
                <span className="font-serif italic font-normal text-white">
                  Data.
                </span>
              </h1>

              <p
                className="text-md text-muted-foreground max-w-lg 
                           animate-fade-in animation-delay-200"
              >
                Hi, I’m Ashish — an MCA student passionate about transforming
                data into insights and ideas into solutions. I’m continuously
                learning and building skills across analytics, business
                intelligence, and data engineering through projects and
                hands-on learning.
              </p>
            </div>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 
                         animate-fade-in animate-delay-100"
            >
              {/* Contact Button */}
              <a href="#contact">
                <Button size="lg">
                  Contact Me
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>

              {/* Download CV Button */}
              <AnimatedBorderButton
                onClick={() => setShowCVPopup(true)}
              >
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div
              className="flex items-center gap-4 
                         animate-fade-in animate-dely-600"
            >
              <span className="text-sm text-muted-foreground">
                Follow Me:
              </span>

              {[
                {
                  icon: FaGithub,
                  href: "https://github.com/Ashish102003"
                },
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/ashish-dandriyal"
                }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass 
                             hover:bg-primary/10 hover:text-primary 
                             transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile */}
          <div className="relative animate-fade-in animate-delay-300">

            {/* Profile Image */}
            <div className="relative max-w-mid mx-auto -mt-8">

              <div
                className="absolute inset-0 rounded-3xl
                           bg-linear-to-br from-primary/30 via-transparent
                           to-primary/10 blur-2xl animate-pulse"
              />

              <div className="relative glass rounded-3xl p-2 glow-border">

                <img
                  src="/Profile.png"
                  alt="Ashish"
                  className="w-full aspect-square object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div
                  className="absolute -bottom-4 -right-4 glass 
                             rounded-xl px-4 py-3 animate-float"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animate-delay-600">

          <p
            className="text-md text-muted-foreground mb-6 text-center"
          >
            Technologies Powering My Journey
          </p>

          <div className="relative overflow-hidden">

            <div className="flex animate-marquee">

              {[...skills, ...skills].map((skill, idx) => (
                <div
                  key={idx}
                  className="shrink-0 px-8 py-5"
                >
                  <span
                    className="text-xl font-semibold 
                               text-muted-foreground/50 
                               hover:text-muted-foreground 
                               transition-colors"
                  >
                    {skill}
                  </span>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2
                   animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 
                     text-muted-foreground hover:text-primary 
                     transition-colors"
        >
          <span
            className="text-xs uppercase tracking-wider 
                       text-muted-foreground"
          >
            Scroll
          </span>

          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>

      {/* ===================================================== */}
      {/* CV DOWNLOAD MODAL */}
      {/* ===================================================== */}

      {showCVPopup && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center 
                     bg-black/60 backdrop-blur-md px-6"
          onClick={() => setShowCVPopup(false)}
        >

          {/* Modal */}
          <div
            className="relative w-full max-w-md 
                       rounded-2xl 
                       border border-primary/20 
                       bg-background/95 
                       p-8 
                       shadow-2xl 
                       glow-border 
                       animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}
            <button
              onClick={() => setShowCVPopup(false)}
              className="absolute right-4 top-4 
                         text-muted-foreground 
                         hover:text-white 
                         transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Download Icon */}
            <div
              className="mx-auto mb-5 
                         flex h-14 w-14 
                         items-center justify-center 
                         rounded-full 
                         bg-primary/10 
                         text-primary"
            >
              <Download className="w-7 h-7" />
            </div>

            {/* Modal Content */}
            <div className="text-center space-y-3">

              <h2 className="text-2xl font-semibold text-white">
                Would you like to download my CV?
              </h2>

              <p
                className="text-sm text-muted-foreground 
                           leading-relaxed"
              >
                Get a closer look at my skills, experience,
                projects, and certifications.
              </p>

            </div>

            {/* Modal Buttons */}
            <div className="flex justify-center gap-3 mt-7">

              {/* Cancel */}
              <button
                onClick={() => setShowCVPopup(false)}
                className="px-5 py-2.5 
                           rounded-lg 
                           border border-white/10 
                           text-muted-foreground 
                           hover:text-white 
                           hover:bg-white/5 
                           transition-all"
              >
                Cancel
              </button>

              {/* Download */}
              <a
                href="/Ashish_Resume.pdf"
                download
                onClick={() => setShowCVPopup(false)}
                className="px-5 py-2.5 
                           rounded-lg 
                           bg-primary 
                           text-white 
                           font-medium 
                           hover:opacity-90 
                           transition-all 
                           flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};