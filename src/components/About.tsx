import { Monitor, Palette, Code, MonitorSmartphone } from "lucide-react";

const skills = [
  {
    Icon: Monitor,
    color: "text-[#614BAC]",
    title: "Frontend Development",
    desktop: "Building responsive, interactive SPAs with Vue.js & React.",
    mobile: "Responsive, interactive SPAs with Vue.js & React.",
    radius: "rounded-tl-[64px] rounded-tr-[32px] rounded-bl-[16px] rounded-br-[32px]",
  },
  {
    Icon: Palette,
    color: "text-pink-400",
    title: "UI/UX Design",
    desktop: "Creating intuitive user flows, wireframes, and prototypes in Figma.",
    mobile: "User flows, wireframes, and Figma prototypes.",
    radius: "rounded-tl-[32px] rounded-tr-[64px] rounded-bl-[32px] rounded-br-[16px]",
  },
  {
    Icon: Code,
    color: "text-emerald-400",
    title: "Backend Integration",
    desktop: "Connecting robust APIs using .NET Core and Node.js.",
    mobile: "Robust APIs with .NET Core and Node.js.",
    radius: "rounded-tl-[64px] rounded-tr-[32px] rounded-bl-[16px] rounded-br-[32px]",
  },
  {
    Icon: MonitorSmartphone,
    color: "text-blue-400",
    title: "Responsive Layouts",
    desktop: "Mobile-first approach using Tailwind CSS and modern CSS.",
    mobile: "Mobile-first with Tailwind CSS & modern CSS.",
    radius: "rounded-tl-[32px] rounded-tr-[64px] rounded-bl-[32px] rounded-br-[16px]",
  },
];

export default function About() {
  return (
    <section id="about" className="py-40">
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E2E] mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#3488FD] to-[#e4defc] mx-auto rounded-full"></div>
          </div>

          {/* Desktop */}
          <div className="hidden md:grid grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#4B5563]">
                Focused on creating simple, user-friendly digital experiences
              </h3>
              <p className="text-[#4B5563] leading-relaxed text-lg">
                I&apos;m a Computer Science graduate and a UI/UX Developer. I completed my UI/UX training at
                the Information Technology Institute (ITI), where I learned how to design user-friendly
                interfaces and build responsive websites
              </p>
              <p className="text-[#4B5563] leading-relaxed text-lg">
                Besides my ITI training, I completed courses in React, UI/UX Design, Backend .NET, and Problem
                Solving, which gave me a better understanding of different parts of web development.
              </p>

              <a
                href="/Menna Allah Abd elhamed .pdf"
                download="Menna Allah abd elhamed CV.pdf"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#5B4B8A] text-[#5B4B8A] transition hover:shadow-md hover:shadow-[#5B4B8A]/50 hover:scale-105 mt-4"
              >
                Download CV
                <i className="fas fa-download ml-2"></i>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map(({ Icon, color, title, desktop, radius }) => (
                <div
                  key={title}
                  className={`p-10 bg-white border border-[#897daf] hover:border-[#6953b3] ${radius} transition-all hover:-translate-y-1 shadow-lg shadow-black/5`}
                >
                  <div className="mb-4 p-3 bg-[#f4f2f8] rounded-xl w-fit">
                    <Icon className={`w-6 h-6 ${color}`} aria-hidden="true" />
                  </div>
                  <h4 className="text-lg font-semibold text-[#1E1E2E] mb-2">{title}</h4>
                  <p className="text-sm text-slate-400">{desktop}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <div className="grid grid-cols-1 gap-6 mb-10">
              <div className="grid grid-cols-1 gap-4">
                {skills.map(({ Icon, color, title, mobile }) => (
                  <div
                    key={title}
                    className="p-4 sm:p-5 bg-white border border-[#897daf] rounded-2xl shadow-sm flex items-start gap-4"
                  >
                    <div className="p-3 bg-[#f4f2f8] rounded-xl w-fit">
                      <Icon className={`w-5 h-5 ${color}`} aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-[#1E1E2E] mb-1">{title}</h4>
                      <p className="text-sm text-slate-400">{mobile}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-2xl font-semibold text-[#4B5563]">
                  Focused on creating simple, user-friendly digital experiences
                </h3>
                <p className="text-[#4B5563] leading-relaxed text-base">
                  I&apos;m a Computer Science graduate and a UI/UX Developer.
                </p>
                <p className="text-[#4B5563] leading-relaxed text-base">
                  I learned to design user-friendly interfaces and build responsive websites at ITI.
                </p>

                <a
                  href="/Menna Allah Abd elhamed .pdf"
                  download="Menna Allah abd elhamed CV.pdf"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-[#5B4B8A] text-[#5B4B8A] transition hover:shadow-md hover:shadow-[#5B4B8A]/50 hover:scale-105 mt-4 w-full"
                >
                  Download CV
                  <i className="fas fa-download ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}