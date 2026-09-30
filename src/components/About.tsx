export default function About() {
  return (
    <section id="about" className="py-40">
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E2E] mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#3488FD] to-[#e4defc] mx-auto rounded-full"></div>
          </div>

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
              <div className="p-10 bg-white border border-[#897daf] hover:border-[#6953b3] rounded-tl-[64px] rounded-tr-[32px] rounded-bl-[16px] rounded-br-[32px] transition-all hover:-translate-y-1 shadow-lg shadow-black/5">
                <div className="mb-2 mt-2 p-4 bg-[#f4f2f8] rounded-xl w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-code w-6 h-6 text-[#614BAC]"
                    aria-hidden="true"
                  >
                    <path d="m16 18 6-6-6-6"></path>
                    <path d="m8 6-6 6 6 6"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-[#1E1E2E] mb-2">Frontend Development</h4>
                <p className="text-sm text-slate-400">
                  Building responsive, interactive SPAs with Vue.js &amp; React.
                </p>
              </div>

              <div className="p-10 bg-white border border-[#897daf] hover:border-[#6953b3] rounded-tl-[32px] rounded-tr-[64px] rounded-bl-[32px] rounded-br-[16px] transition-all hover:-translate-y-1 shadow-lg shadow-black/5">
                <div className="mb-4 p-3 bg-[#f4f2f8] rounded-xl w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-pen-tool w-6 h-6 text-pink-400"
                    aria-hidden="true"
                  >
                    <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path>
                    <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path>
                    <path d="m2.3 2.3 7.286 7.286"></path>
                    <circle cx="11" cy="11" r="2"></circle>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-[#1E1E2E] mb-2">UI/UX Design</h4>
                <p className="text-sm text-slate-400">
                  Creating intuitive user flows, wireframes, and prototypes in Figma.
                </p>
              </div>

              <div className="p-10 bg-white border border-[#897daf] hover:border-[#6953b3] rounded-tl-[64px] rounded-tr-[32px] rounded-bl-[16px] rounded-br-[32px] transition-all hover:-translate-y-1 shadow-lg shadow-black/5">
                <div className="mb-4 p-3 bg-[#f4f2f8] rounded-xl w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-terminal w-6 h-6 text-emerald-400"
                    aria-hidden="true"
                  >
                    <path d="M12 19h8"></path>
                    <path d="m4 17 6-6-6-6"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-[#1E1E2E] mb-2">Backend Integration</h4>
                <p className="text-sm text-slate-400">Connecting robust APIs using .NET Core and Node.js.</p>
              </div>

              <div className="p-10 bg-white border border-[#897daf] hover:border-[#6953b3] rounded-tl-[32px] rounded-tr-[64px] rounded-bl-[32px] rounded-br-[16px] transition-all hover:-translate-y-1 shadow-lg shadow-black/5">
                <div className="mb-4 p-3 bg-[#f4f2f8] rounded-xl w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-panels-top-left w-6 h-6 text-blue-400"
                    aria-hidden="true"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M3 9h18"></path>
                    <path d="M9 21V9"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-[#1E1E2E] mb-2">Responsive Layouts</h4>
                <p className="text-sm text-slate-400">
                  Mobile-first approach using Tailwind CSS and modern CSS.
                </p>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <div className="grid grid-cols-1 gap-6 mb-10">
              <div className="grid grid-cols-1 gap-4">
                <div className="p-4 sm:p-5 bg-white border border-[#897daf] rounded-2xl shadow-sm flex items-start gap-4">
                  <div className="p-3 bg-[#f4f2f8] rounded-xl w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-code w-5 h-5 text-[#614BAC]"
                      aria-hidden="true"
                    >
                      <path d="m16 18 6-6-6-6"></path>
                      <path d="m8 6-6 6 6 6"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-[#1E1E2E] mb-1">
                      Frontend Development
                    </h4>
                    <p className="text-sm text-slate-400">
                      Responsive, interactive SPAs with Vue.js &amp; React.
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 bg-white border border-[#897daf] rounded-2xl shadow-sm flex items-start gap-4">
                  <div className="p-3 bg-[#f4f2f8] rounded-xl w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-pen-tool w-5 h-5 text-pink-400"
                      aria-hidden="true"
                    >
                      <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path>
                      <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path>
                      <path d="m2.3 2.3 7.286 7.286"></path>
                      <circle cx="11" cy="11" r="2"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-[#1E1E2E] mb-1">UI/UX Design</h4>
                    <p className="text-sm text-slate-400">User flows, wireframes, and Figma prototypes.</p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 bg-white border border-[#897daf] rounded-2xl shadow-sm flex items-start gap-4">
                  <div className="p-3 bg-[#f4f2f8] rounded-xl w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-terminal w-5 h-5 text-emerald-400"
                      aria-hidden="true"
                    >
                      <path d="M12 19h8"></path>
                      <path d="m4 17 6-6-6-6"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-[#1E1E2E] mb-1">
                      Backend Integration
                    </h4>
                    <p className="text-sm text-slate-400">Robust APIs with .NET Core and Node.js.</p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 bg-white border border-[#897daf] rounded-2xl shadow-sm flex items-start gap-4">
                  <div className="p-3 bg-[#f4f2f8] rounded-xl w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-panels-top-left w-5 h-5 text-blue-400"
                      aria-hidden="true"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                      <path d="M3 9h18"></path>
                      <path d="M9 21V9"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-[#1E1E2E] mb-1">
                      Responsive Layouts
                    </h4>
                    <p className="text-sm text-slate-400">Mobile-first with Tailwind CSS &amp; modern CSS.</p>
                  </div>
                </div>
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
