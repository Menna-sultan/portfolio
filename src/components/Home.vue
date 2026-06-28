<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center pt-30 overflow-hidden ">
    <!-- Background blobs -->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div class="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-[#F5F3FF] rounded-full blur-[120px]" />
      <div class="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-[#e0ebf9] rounded-full blur-[100px]" />
    </div>

    <div class="max-w-7xl mx-auto px-4 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
        <!-- Right Section (desktop unchanged) -->
        <Motion
          class="hidden lg:flex justify-center items-center order-2 lg:order-2"
          :initial="{ opacity: 0, scale: 0.8 }"
          :animate="{ opacity: 1, scale: 1 }"
          :transition="{ duration: 1, delay: 0.2 }"
        >
          <div class="relative w-[350px] h-[350px] flex items-center justify-center">
            <div class="absolute inset-2 rounded-full overflow-hidden shadow-2xl z-20">
              <img src="/girl2.png" class="w-full h-110 object-cover" />
            </div>

            <Motion class="absolute inset-0 rounded-full border border-violet-500/30 z-10 -translate-x-4" />

            <Motion
              class="absolute -right-16 top-2 w-8 h-8 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 opacity-80 shadow-xl pointer-events-none"
              :animate="{ x: [0, -6, 0], rotate: [0, 10, 0] }"
              :transition="{ duration: 2, repeat: Infinity, ease: 'easeInOut' }"
            />

            <Motion
              class="absolute -right-8 top-16 w-4 h-4 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 opacity-80 shadow-xl pointer-events-none"
              :animate="{ x: [0, -6, 0], rotate: [0, 10, 0] }"
              :transition="{ duration: 2, repeat: Infinity, ease: 'easeInOut' }"
            />

            <Motion
              class="absolute -left-8 -bottom-6 w-8 h-8 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 shadow-sm pointer-events-none"
              :animate="{ y: [0, -6, 0], x: [0, 4, 0] }"
              :transition="{ duration: 2, repeat: Infinity, ease: 'easeInOut' }"
            />

            <Motion
              class="absolute -bottom-8 right-14 w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-lg border border-gray-200 z-20"
              :animate="{ y: [0, -6, 0] }"
              :transition="{ duration: 2, repeat: Infinity, ease: 'easeInOut' }"
            >
              <i class="fa-brands fa-figma text-2xl"></i>
            </Motion>

            <Motion
              class="absolute -top-5 right-16 w-14 h-14 rounded-full bg-white/95 flex items-center justify-center shadow-xl border border-gray-200 z-20"
              :animate="{ y: [0, 6, 0] }"
              :transition="{ duration: 2, repeat: Infinity, ease: 'easeInOut' }"
            >
              <img src="/ps.png" alt="ps" class="w-7 h-7" />
            </Motion>

            <Motion
              class="absolute top-25 -left-8 w-14 h-14 rounded-full bg-white/95 flex items-center justify-center shadow-xl border border-gray-200 z-20"
              :animate="{ y: [0, 6, 0] }"
              :transition="{ duration: 2, repeat: Infinity, ease: 'easeInOut' }"
            >
              <img src="/program.png" alt="ps" class="w-7 h-7" />
            </Motion>
          </div>
        </Motion>
        <!-- Right Section (mobile first) -->
        <Motion
          class="lg:hidden flex justify-center items-center order-1"
          :initial="{ opacity: 0, scale: 0.8 }"
          :animate="{ opacity: 1, scale: 1 }"
          :transition="{ duration: 1, delay: 0.2 }"
        >
          <div class="relative w-[320px] h-[320px] flex items-center justify-center">
            <div class="absolute inset-2 rounded-full overflow-hidden shadow-2xl z-20">
              <img src="/girl2.png" class="w-full h-110 object-cover" />
            </div>

            <Motion class="absolute inset-0 rounded-full border border-violet-500/30 z-10 -translate-x-2" />

            <Motion
              class="absolute -right-10 top-2 w-7 h-7 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 opacity-80 shadow-xl pointer-events-none"
              :animate="{ x: [0, -6, 0], rotate: [0, 10, 0] }"
              :transition="{ duration: 2, repeat: Infinity, ease: 'easeInOut' }"
            />
            <Motion
              class="absolute -right-6 top-16 w-4 h-4 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 opacity-80 shadow-xl pointer-events-none"
              :animate="{ x: [0, -6, 0], rotate: [0, 10, 0] }"
              :transition="{ duration: 2, repeat: Infinity, ease: 'easeInOut' }"
            />
            <Motion
              class="absolute -left-8 -bottom-6 w-7 h-7 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 shadow-sm pointer-events-none"
              :animate="{ y: [0, -6, 0], x: [0, 4, 0] }"
              :transition="{ duration: 2, repeat: Infinity, ease: 'easeInOut' }"
            />

            <Motion
              class="absolute -bottom-6 right-16 w-14 h-14 rounded-full bg-white/95 flex items-center justify-center shadow-lg border border-gray-200 z-20"
              :animate="{ y: [0, -6, 0] }"
              :transition="{ duration: 2, repeat: Infinity, ease: 'easeInOut' }"
            >
              <i class="fa-brands fa-figma text-2xl"></i>
            </Motion>

            <Motion
              class="absolute -top-4 right-10 w-12 h-12 rounded-full bg-white/95 flex items-center justify-center shadow-xl border border-gray-200 z-20"
              :animate="{ y: [0, 6, 0] }"
              :transition="{ duration: 2, repeat: Infinity, ease: 'easeInOut' }"
            >
              <img src="/ps.png" alt="ps" class="w-6 h-6" />
            </Motion>

            <Motion
              class="absolute top-20 -left-6 w-12 h-12 rounded-full bg-white/95 flex items-center justify-center shadow-xl border border-gray-200 z-20"
            >
              <img src="/program.png" alt="program" class="w-6 h-6" />
            </Motion>
          </div>
        </Motion>

        <!-- Left Section -->
        <Motion
          :initial="{ opacity: 0, x: -50 }"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.8, ease: 'easeOut' }"
          class="text-center lg:text-left order-2 lg:order-1"
        >
          <div>
            <Motion
              :initial="{ opacity: 0, y: 20 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.8, delay: 0.2 }"
              class="text-4xl md:text-6xl font-bold text-[#2F2F4F] mb-4"
            >
              Hello, I'm
            </Motion>

            <Motion
              :initial="{ opacity: 0, y: 20 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.8, delay: 0.4 }"
              class="text-4xl md:text-6xl font-bold text-[#8B5CF6] mb-4"
            >
              Menna Allah
            </Motion>

            <p class="text-xl text-[#4B5563] mb-8 max-w-lg mt-6">
              {{ PERSONAL_INFO.role }} <br />
              creating modern,user-friendly interfaces <br />and responsive digital experiences
            </p>

            <div class="flex flex-col sm:flex-row gap-4 mb-6 justify-left">
              <a
                href="#projects"
                class="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#2F2F4F] hover:bg-[#6D5FA6] hover:shadow-lg hover:shadow-[#4A3E73]/40 text-white transition hover:scale-105 w-full sm:w-auto"
              >
                View Projects
                <i class="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            <!-- Social Links (kept commented like original) -->
            <!-- <div class="flex items-center gap-6">
              <a
                v-for="link in SOCIAL_LINKS"
                :key="link.platform"
                :href="link.url"
                target="_blank"
                class="text-[#6B7280] hover:text-[#EE6D6B] transition-all duration-300 hover:scale-110"
              >
                <i :class="getIcon(link.icon)"></i>
              </a>
            </div> -->
          </div>
        </Motion>

      
      </div>

      <About />
      <Technical />
      <Projects />
      <Experience />
      <Contact />
    </div>
  </section>
</template>

<script setup>
import { Motion } from 'motion-v'
import About from "@/components/About.vue"
import Technical from "@/components/Technical.vue"
import Projects from "@/components/Projects.vue"
import Experience from '@/components/Experience.vue'
import Contact from '@/components/Contact.vue'

const PERSONAL_INFO = {
  role: 'Frontend Developer & UI/UX Designer'
}

const SOCIAL_LINKS = [
  { platform: 'GitHub', url: '#', icon: 'github' },
  { platform: 'LinkedIn', url: '#', icon: 'linkedin' },
  { platform: 'Mail', url: '#', icon: 'mail' }
]

const getIcon = (icon) => {
  switch (icon) {
    case 'github':
      return 'fab fa-github text-xl'
    case 'linkedin':
      return 'fab fa-linkedin text-xl'
    case 'mail':
      return 'fas fa-envelope text-xl'
    default:
      return 'fas fa-arrow-right'
  }
}
</script>

