<template>
  <section id="projects" class="py-40">
    <div style="opacity: 1; transform: none;">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-[#1E1E2E] mb-4">Featured Projects</h2>

        <div class="w-20 h-1 bg-gradient-to-r from-[#3488FD] to-[#e4defc] mx-auto rounded-full"></div>

          <div class="flex flex-wrap justify-center gap-2 mt-8">
            <button
              v-for="cat in categories"
              :key="cat.value"
              type="button"
              @click="selectedCategory = cat.value"
              class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-lg "
              :class="
                selectedCategory === cat.value
                  ? 'bg-[#5B4B8A] text-white'
                  : 'bg-white text-[#7C58D3] border border-[#7C58D3] hover:text-white hover:bg-[#5B4B8A]'
              "
            >
              {{ cat.label }}
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(project, index) in filteredProjects"
            :key="project.title"
            class="project-card group opacity-0 animate-fade-up rounded-2xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300"
            :style="{ animationDelay: `${0.2 + index * 0.1}s` }"
          >
            <!-- Image -->
            <div class="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
              <img
                :src="project.image"
                :alt="project.title"
               :class="[
              'w-100 h-80 transition-transform duration-500 group-hover:scale-110',
              
           
  ]"
              />
              <!-- soft overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-[#6B6FD6]/40 via-transparent to-transparent"></div>
              <!-- icons -->
              <div class="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                <a
                  v-if="project.liveDemoUrl"
                  :href="project.liveDemoUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-9 h-9 flex items-center justify-center rounded-full bg-white/80 backdrop-blur text-[#6B6FD6] hover:text-[#8B5CF6] transition"
                  aria-label="View live demo"
                >
                  <i class="fa-solid fa-arrow-up-right-from-square text-sm"></i>
                </a>
                <a
                  v-if="project.githubUrl"
                  :href="project.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-9 h-9 flex items-center justify-center rounded-full bg-white/80 backdrop-blur text-[#6B6FD6] hover:text-[#8B5CF6] transition"
                  aria-label="View source code"
                >
                  <i class="fa-brands fa-github text-sm"></i>
                </a>

<a
  v-if="project.behanceUrl"
  :href="project.behanceUrl"
  target="_blank"
  rel="noopener noreferrer"
  class="w-9 h-9 flex items-center justify-center rounded-full bg-white/80 backdrop-blur text-[#6B6FD6] hover:text-[#8B5CF6] transition"
  aria-label="View Behance"
>
  <i class="fa-brands fa-behance text-sm"></i>
</a>

              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <div class="flex justify-between items-start mb-3">
                <span class="text-xs font-semibold tracking-wider text-violet-500 uppercase">{{ project.mainCategory }}</span>
                <span class="text-xs text-slate-500">{{ project.year }}</span>
              </div>
              <h3 class="text-lg font-bold text-slate-800 mb-2 group-hover:text-violet-600 transition">{{ project.title }}</h3>
              <p class="text-slate-600 text-sm mb-5 line-clamp-3">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.technologies"
                  :key="tech.label"
                  class="text-xs px-3 py-1 rounded-full mt-2"
                  :class="tech.pillClass"
                >
                  {{ tech.label }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
  { label: 'UI/UX', value: 'uiux' },
  { label: 'Full Stack', value: 'fullstack' },
]

const selectedCategory = ref('all')

const projects = [
 


{
  title: 'ERP Web Application',
  year: '2026',
  description:
    'Responsive ERP system for CRM, project management, finance, accounting, messaging, reporting, and member management.',
  image: './erp.png',
  mainCategory: 'Frontend',
  categories: ['frontend'],
    liveDemoUrl: 'https://madarerpsystem.vercel.app',
    githubUrl: 'https://github.com/Menna-sultan/ERP-System',
  technologies: [
    { label: 'Vue.js 3', pillClass: 'bg-[#E2EFFF] text-[#4F46E5]' },
    { label: 'Tailwind CSS', pillClass: 'bg-[#E2EFFF] text-[#4F46E5]' },
    { label: 'Chart.js', pillClass: 'bg-[#E2EFFF] text-[#4F46E5]' },
    { label: 'ECharts', pillClass: 'bg-[#E2EFFF] text-[#4F46E5]' },
  ],
},




{
  title: 'Furniture E-Commerce Website',
  year: '2025',
  description:
    'Responsive furniture e-commerce website featuring an interactive product catalog and user authentication.',
  image: './funiro .png', 
  mainCategory: 'Frontend',
  categories: ['frontend'],
     liveDemoUrl: 'https://furniture-website-ff4d.vercel.app/',
    githubUrl: 'https://github.com/Menna-sultan/furniture-website',
  technologies: [
    { label: 'Vue.js 3', pillClass: 'bg-[#E2EFFF] text-[#4F46E5]' },
    { label: 'Tailwind CSS', pillClass: 'bg-[#E2EFFF] text-[#4F46E5]' },
  ],
},
 {
    title: 'E-commerce Store API',
    year: '2024',
    description:
      'Complete e-commerce platform API with Stripe payments, JWT authentication, and basket management.',
    image: './website.jpg ',
    mainCategory: 'Backend',
    categories: ['backend'],
      githubUrl: 'https://github.com/Menna-sultan/e-commerce',
    technologies: [
      { label: 'ASP.NET Core', pillClass: 'bg-[#E2EFFF] text-[#4F46E5]' },
      { label: 'Stripe', pillClass: 'bg-[#E2EFFF] text-[#4F46E5]' },
      { label: 'SQL', pillClass: 'bg-[#E2EFFF] text-[#4F46E5]' },
    ],
  },

  

   {
      title: 'Tashtebaty – Home Services Platform',
    year: '2025',
    description:
      'A full-stack home services platform connecting customers with technicians and companies. Features secure authentication, role-based dashboards, online payments, real-time order tracking, and an AI-powered assistant for service recommendations.',
 image: './ppppp.png',
    mainCategory: 'Full Stack',
    categories: ['fullstack', 'frontend', 'backend'],
    liveDemoUrl: 'https://tashtebaty.vercel.app',
    githubUrl: 'https://github.com/mah123K/Tashtebaty',
    technologies: [
      { label: 'Vue.js 3', pillClass: 'bg-[#E2EFFF] text-[#4F46E5]' },
      { label: 'Tailwind CSS', pillClass: 'bg-[#E2EFFF] text-[#4F46E5]' },
      { label: 'Firebase', pillClass: 'bg-[#E2EFFF] text-[#4F46E5]' },
      { label: 'Gemini API', pillClass: 'bg-[#E2EFFF] text-[#4F46E5]' },
      { label: 'PayMob', pillClass: 'bg-[#E2EFFF] text-[#4F46E5]' },
      { label: 'Chart.js', pillClass: 'bg-[#E2EFFF] text-[#4F46E5]' },
    ],
  },
{
    title: 'Ebook App Chatbot',
    year: '2024',
    description:
      'Integrated an AI-powered chatbot using NLP techniques (LSTM, Naive Bayes) to assist users with book queries.',
    image: './chatbot.jpg.jpg',
    mainCategory: 'Backend',
    categories: ['backend'],
    technologies: [
      { label: 'Python', pillClass: 'bg-[#E2EFFF] text-[#4F46E5]' },
      { label: 'NLP', pillClass: 'bg-[#E2EFFF] text-[#4F46E5]' },
      { label: 'Machine Learning', pillClass: 'bg-[#E2EFFF] text-[#4F46E5]' },
    ],
  },
 

  {
    title: 'Edraak Redesign',
    year: '2025',
    description:
      'Redesigned the Edraak website to improve UI/UX, focusing on accessibility and visual hierarchy.',
    image: './edrak.png',
    mainCategory: 'UI/UX',
    categories: ['uiux'],
    behanceUrl:'https://behance.net/mennaahmed156',
    technologies: [
      { label: 'Figma', pillClass: 'bg-[#E2EFFF] text-[#4F46E5]' },
      { label: 'UI/UX', pillClass: 'bg-[#E2EFFF] text-[#4F46E5]' },
      { label: 'Prototyping', pillClass: 'bg-[#E2EFFF] text-[#4F46E5]' },
    ],
  },
]

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'all') return projects
  return projects.filter((project) => project.categories.includes(selectedCategory.value))
})
</script>

