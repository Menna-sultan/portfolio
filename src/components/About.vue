<template>
  <section id="about" class="py-40">
    <div style="opacity: 1; transform: none;">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-[#1E1E2E] mb-4">About Me</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-[#3488FD] to-[#e4defc] mx-auto rounded-full"></div>
        </div>

        <!-- Desktop (keep exactly as-is) -->
        <div class="hidden md:grid grid-cols-2 gap-12 items-center mb-20">
          <div class="space-y-6">
            <h3 class="text-2xl font-semibold text-[#4B5563]">Focused on creating simple, user-friendly digital experiences</h3>
            <p class="text-[#4B5563] leading-relaxed text-lg">
              I'm a Computer Science graduate and a UI/UX Developer. I completed my UI/UX training at the Information Technology Institute (ITI), where I learned how to design user-friendly interfaces and build responsive websites
            </p>
            <p class="text-[#4B5563] leading-relaxed text-lg">
              Besides my ITI training, I completed courses in React, UI/UX Design, Backend .NET, and Problem Solving, which gave me a better understanding of different parts of web development.
            </p>

            <a
              href="/Menna Allah Abd elhamed .pdf"
              download="Menna Allah abd elhamed CV.pdf"
              class="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#5B4B8A] text-[#5B4B8A] transition
                hover:shadow-md hover:shadow-[#5B4B8A]/50 hover:scale-105 mt-4"
            >
              Download CV
              <i class="fas fa-download ml-2"></i>
            </a>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div
              class="p-10 bg-white border border-[#897daf] hover:border-[#6953b3]
                rounded-tl-[64px] rounded-tr-[32px] rounded-bl-[16px] rounded-br-[32px]
                transition-all hover:-translate-y-1 shadow-lg shadow-black/5"
            >
              <div class="mb-2 mt-2 p-4 bg-[#f4f2f8] rounded-xl w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-code w-6 h-6 text-[#614BAC]"
                  aria-hidden="true"
                >
                  <path d="m16 18 6-6-6-6"></path>
                  <path d="m8 6-6 6 6 6"></path>
                </svg>
              </div>
              <h4 class="text-lg font-semibold text-[#1E1E2E] mb-2">Frontend Development</h4>
              <p class="text-sm text-slate-400">Building responsive, interactive SPAs with Vue.js &amp; React.</p>
            </div>

            <div
              class="p-10 bg-white border border-[#897daf] hover:border-[#6953b3]
                rounded-tl-[32px] rounded-tr-[64px] rounded-bl-[32px] rounded-br-[16px]
                transition-all hover:-translate-y-1 shadow-lg shadow-black/5"
            >
              <div class="mb-4 p-3 bg-[#f4f2f8] rounded-xl w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-pen-tool w-6 h-6 text-pink-400"
                  aria-hidden="true"
                >
                  <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path>
                  <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path>
                  <path d="m2.3 2.3 7.286 7.286"></path>
                  <circle cx="11" cy="11" r="2"></circle>
                </svg>
              </div>
              <h4 class="text-lg font-semibold text-[#1E1E2E] mb-2">UI/UX Design</h4>
              <p class="text-sm text-slate-400">Creating intuitive user flows, wireframes, and prototypes in Figma.</p>
            </div>

            <div
              class="p-10 bg-white border border-[#897daf] hover:border-[#6953b3]
                rounded-tl-[64px] rounded-tr-[32px] rounded-bl-[16px] rounded-br-[32px]
                transition-all hover:-translate-y-1 shadow-lg shadow-black/5"
            >
              <div class="mb-4 p-3 bg-[#f4f2f8] rounded-xl w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-terminal w-6 h-6 text-emerald-400"
                  aria-hidden="true"
                >
                  <path d="M12 19h8"></path>
                  <path d="m4 17 6-6-6-6"></path>
                </svg>
              </div>
              <h4 class="text-lg font-semibold text-[#1E1E2E] mb-2">Backend Integration</h4>
              <p class="text-sm text-slate-400">Connecting robust APIs using .NET Core and Node.js.</p>
            </div>

            <div
              class="p-10 bg-white border border-[#897daf] hover:border-[#6953b3]
                rounded-tl-[32px] rounded-tr-[64px] rounded-bl-[32px] rounded-br-[16px]
                transition-all hover:-translate-y-1 shadow-lg shadow-black/5"
            >
              <div class="mb-4 p-3 bg-[#f4f2f8] rounded-xl w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-panels-top-left w-6 h-6 text-blue-400"
                  aria-hidden="true"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M3 9h18"></path>
                  <path d="M9 21V9"></path>
                </svg>
              </div>
              <h4 class="text-lg font-semibold text-[#1E1E2E] mb-2">Responsive Layouts</h4>
              <p class="text-sm text-slate-400">Mobile-first approach using Tailwind CSS and modern CSS.</p>
            </div>
          </div>
        </div>

        <!-- Mobile (<768): Right first, then Left; cards redesigned -->
        <div class="md:hidden">
          <div class="grid grid-cols-1 gap-6 mb-10">
            <!-- Cards: 1 per row, icon beside title -->
            <div class="grid grid-cols-1 gap-4">
              <div class="p-4 sm:p-5 bg-white border border-[#897daf] rounded-2xl shadow-sm flex items-start gap-4">
                <div class="p-3 bg-[#f4f2f8] rounded-xl w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-code w-5 h-5 text-[#614BAC]"
                    aria-hidden="true"
                  >
                    <path d="m16 18 6-6-6-6"></path>
                    <path d="m8 6-6 6 6 6"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-base sm:text-lg font-semibold text-[#1E1E2E] mb-1">Frontend Development</h4>
                  <p class="text-sm text-slate-400">Responsive, interactive SPAs with Vue.js &amp; React.</p>
                </div>
              </div>

              <div class="p-4 sm:p-5 bg-white border border-[#897daf] rounded-2xl shadow-sm flex items-start gap-4">
                <div class="p-3 bg-[#f4f2f8] rounded-xl w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-pen-tool w-5 h-5 text-pink-400"
                    aria-hidden="true"
                  >
                    <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path>
                    <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path>
                    <path d="m2.3 2.3 7.286 7.286"></path>
                    <circle cx="11" cy="11" r="2"></circle>
                  </svg>
                </div>
                <div>
                  <h4 class="text-base sm:text-lg font-semibold text-[#1E1E2E] mb-1">UI/UX Design</h4>
                  <p class="text-sm text-slate-400">User flows, wireframes, and Figma prototypes.</p>
                </div>
              </div>

              <div class="p-4 sm:p-5 bg-white border border-[#897daf] rounded-2xl shadow-sm flex items-start gap-4">
                <div class="p-3 bg-[#f4f2f8] rounded-xl w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-terminal w-5 h-5 text-emerald-400"
                    aria-hidden="true"
                  >
                    <path d="M12 19h8"></path>
                    <path d="m4 17 6-6-6-6"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-base sm:text-lg font-semibold text-[#1E1E2E] mb-1">Backend Integration</h4>
                  <p class="text-sm text-slate-400">Robust APIs with .NET Core and Node.js.</p>
                </div>
              </div>

              <div class="p-4 sm:p-5 bg-white border border-[#897daf] rounded-2xl shadow-sm flex items-start gap-4">
                <div class="p-3 bg-[#f4f2f8] rounded-xl w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-panels-top-left w-5 h-5 text-blue-400"
                    aria-hidden="true"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M3 9h18"></path>
                    <path d="M9 21V9"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-base sm:text-lg font-semibold text-[#1E1E2E] mb-1">Responsive Layouts</h4>
                  <p class="text-sm text-slate-400">Mobile-first with Tailwind CSS &amp; modern CSS.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Mobile left copy -->
          <div class="text-center">
            <div class="space-y-6">
              <h3 class="text-2xl md:text-2xl font-semibold text-[#4B5563]">Focused on creating simple, user-friendly digital experiences</h3>
              <p class="text-[#4B5563] leading-relaxed text-base">
                I'm a Computer Science graduate and a UI/UX Developer.
              </p>
              <p class="text-[#4B5563] leading-relaxed text-base">
                I learned to design user-friendly interfaces and build responsive websites at ITI.
              </p>

              <a
                href="/Menna Allah Abd elhamed .pdf"
                download="Menna Allah abd elhamed CV.pdf"
                class="inline-flex items-center justify-center px-5 py-3 rounded-full border border-[#5B4B8A] text-[#5B4B8A] transition
                  hover:shadow-md hover:shadow-[#5B4B8A]/50 hover:scale-105 mt-4 w-full"
              >
                Download CV
                <i class="fas fa-download ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const PERSONAL_INFO = {
  about: 'I am a passionate Frontend Developer with a love for creating beautiful and functional user interfaces.'
}

const features = [
  {
    title: 'Frontend Development',
    desc: 'Building responsive and interactive web applications using modern technologies.',
    icon: 'i-fas fa-code'
  },
  {
    title: 'UI/UX Design',
    desc: 'Creating intuitive and visually appealing user experiences.',
    icon: 'i-fas fa-palette'
  },
  {
    title: 'Problem Solving',
    desc: 'Analyzing complex problems and implementing efficient solutions.',
    icon: 'i-fas fa-brain'
  },
  {
    title: 'Team Collaboration',
    desc: 'Working effectively with cross-functional teams to deliver projects.',
    icon: 'i-fas fa-users'
  }
]
</script>

