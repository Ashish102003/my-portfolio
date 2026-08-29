import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ashishdandriyal10@gmail.com",
    href: "mailto:ashishdandriyal10@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7696500413",
    href: "tel:+917696500413",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chandigarh, India",
    href: "#",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData(e.target);

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(
            Object.fromEntries(formDataToSend)
          ),
        }
      );

      const result = await response.json();

      if (result.success) {
        setIsSent(true);

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setIsSent(false);
        }, 3000);
      } else {
        console.error(result);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Unable to send the message. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="py-32 relative overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="text-secondary-foreground text-sm font-medium tracking-[0.25em]">
            GET IN TOUCH
          </span>

          <h2 className="mt-4 mb-6 text-4xl md:text-5xl font-bold leading-tight">
            Let's{" "}
            <span className="text-primary glow-text font-serif italic">
              Connect
            </span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            I’m seeking opportunities to apply my expertise in data and
            technology, contribute to impactful solutions, and grow alongside
            a forward-thinking team.
          </p>

        </div>

        {/* Main Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">

          {/* ================= FORM ================= */}
          <div className="glass p-8 md:p-10 rounded-3xl border border-primary/20 hover:border-primary/40 transition-all duration-500 animate-fade-in animation-delay-300">

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-2">
                Send a Message
              </h3>

              <p className="text-muted-foreground text-sm">
                Have an opportunity or a project in mind? I'd love to hear
                from you.
              </p>
            </div>

            <form
              className="space-y-6"
              onSubmit={handleSubmit}
            >

              {/* Web3Forms Access Key */}
              <input
                type="hidden"
                name="access_key"
                value="edb480eb-266e-4422-bbc2-8eb8d4d723ea"
              />

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your Name..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3.5 bg-surface/70 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all duration-300 placeholder:text-muted-foreground/60"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3.5 bg-surface/70 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all duration-300 placeholder:text-muted-foreground/60"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me a little about your project or opportunity..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3.5 bg-surface/70 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all duration-300 resize-none placeholder:text-muted-foreground/60"
                />
              </div>

              {/* Submit Button */}
              <div className="relative overflow-hidden pt-1">

                <Button
                  className={`w-full relative transition-all duration-300 ${
                    isSent
                      ? "opacity-0 scale-95"
                      : "opacity-100 scale-100"
                  }`}
                  type="submit"
                  size="lg"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </Button>

                {/* Flying Plane */}
                {isSent && (
                  <Send className="absolute left-1/2 top-1/2 text-primary animate-fly-away" />
                )}

              </div>

            </form>

            {/* Success Message */}
            {isSent && (
              <div className="text-center mt-5 animate-success">
                <p className="text-primary font-medium">
                  Message sent successfully!
                </p>
              </div>
            )}

          </div>


          {/* ================= CONTACT INFORMATION ================= */}
          <div className="flex flex-col justify-center animate-fade-in animation-delay-400">

            <div className="glass rounded-3xl p-8 md:p-10 border border-border/50">

              <span className="text-primary text-sm font-medium tracking-[0.2em]">
                CONTACT INFORMATION
              </span>

              <h3 className="text-2xl md:text-3xl font-semibold mt-4 mb-4">
                Let's start a conversation.
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're reaching out about an opportunity, a project,
                or simply want to connect, I'm always open to meaningful
                conversations.
              </p>


              {/* Contact Cards */}
              <div className="space-y-4">

                {contactInfo.map((item, i) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={i}
                      href={item.href}
                      className="group flex items-center gap-4 p-4 rounded-2xl border border-transparent hover:border-primary/20 hover:bg-surface/70 transition-all duration-300"
                    >

                      {/* Icon */}
                      <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 group-hover:scale-105 transition-all duration-300">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">

                        <div className="text-sm text-muted-foreground mb-1">
                          {item.label}
                        </div>

                        <div className="font-medium truncate group-hover:text-primary transition-colors">
                          {item.value}
                        </div>

                      </div>

                      {/* Arrow */}
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300" />

                    </a>
                  );
                })}

              </div>

            </div>

            {/* Availability card */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
            <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="font-medium">Currently Available</span>              
              </div>
              <p className="text-muted-foreground text-sm">
                Learning today. Building tomorrow. Looking for the opportunity to make an impact.

              </p>
              </div>

          </div>

        </div>

      </div>

    </section>
  );
};