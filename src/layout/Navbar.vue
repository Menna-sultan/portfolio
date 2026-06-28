<template>
<header class="fixed top-0 z-50 w-full backdrop-blur-md">
  <div class="flex items-center justify-between px-4 lg:px-8 h-20">
    <!-- Logo on the far left -->
    <RouterLink to="/" class="flex items-center gap-2 font-bold text-2xl">
      <span class="bg-gradient-to-r from-pink-200 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent font-bold text-3xl">
        M A
      </span>
      <img src="/star.png" class="w-5 h-5" />
    </RouterLink>

    <!-- Desktop nav (unchanged) -->
    <nav class="hidden md:flex items-center gap-16 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black font-medium">
      <RouterLink :to="{ path: '/', hash: '#home' }">Home</RouterLink>
      <RouterLink :to="{ path: '/', hash: '#about' }">About</RouterLink>
      <RouterLink :to="{ path: '/', hash: '#technical' }">Skills</RouterLink>
      <RouterLink :to="{ path: '/', hash: '#projects' }">Projects</RouterLink>
      <RouterLink :to="{ path: '/', hash: '#experience' }">Experience</RouterLink>
    </nav>

    <!-- Social icons (desktop only to match existing layout) -->
    <div class="hidden md:flex items-center gap-6 mr-24">
      <a
        v-for="link in SOCIAL_LINKS"
        :key="link.platform"
        :href="link.url"
        target="_blank"
        class="text-[#6B7280] hover:scale-105"
      >
        <i :class="getIcon(link.icon)"></i>
      </a>
    </div>

    <!-- Mobile hamburger -->
    <button
      type="button"
      class="md:hidden inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-black/5 transition"
      aria-label="Open navigation menu"
      @click="isDrawerOpen = true"
    >
      <span class="sr-only">Open menu</span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M4 7H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <path d="M4 12H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <path d="M4 17H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>
  </div>

  <!-- Mobile drawer + backdrop -->
  <div v-if="isDrawerOpen" class="fixed inset-0 z-[60]" @click.self="isDrawerOpen = false">
   
   
   
   
   
    <button
      type="button"
      class="absolute inset-0 w-full h-full bg-black/40 "
      aria-label="Close navigation drawer"
      @click="isDrawerOpen = false"
    />

    <aside
      class="absolute right-0 top-0 h-full w-full bg-white shadow-2xl border-l border-white/40 transform transition-transform transition-opacity duration-300 ease-out"
      :class="isDrawerOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'"
    >
<div class="flex items-center justify-between px-6 py-5  ">
 
 
  <RouterLink
    to="/"
    class="flex items-center gap-2 font-bold text-2xl"
    @click="closeDrawer"
  >
    <span class="bg-gradient-to-r from-pink-200 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent text-3xl">
      M A
    </span>
    <img src="/star.png" class="w-5 h-5" />
  </RouterLink>

        
        
        
        
        <button
          type="button"
          class="rounded-md p-2 text-black hover:bg-black/5 transition"
          aria-label="Close navigation drawer"
          @click="closeDrawer"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>

      <div class="h-full flex flex-col bg-white ">
        <!-- Menu -->
        <nav class="px-4 py-4 flex-1 bg-white ">
          <div class="space-y-2">
            <RouterLink
              :to="{ path: '/', hash: '#home' }"
              class="group w-full inline-flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium text-black/80 bg-black/0 hover:bg-[#6B4DFF]/10 hover:text-[#6B4DFF] transition active:bg-[#6B4DFF]/15 active:text-[#6B4DFF]"
              @click="closeDrawer"
            >
              <span>Home</span>
              <span class="opacity-0 group-hover:opacity-100 transition">→</span>
            </RouterLink>

            <RouterLink
              :to="{ path: '/', hash: '#about' }"
              class="group w-full inline-flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium text-black/80 bg-black/0 hover:bg-[#6B4DFF]/10 hover:text-[#6B4DFF] transition"
              active-class="bg-[#6B4DFF]/15 text-[#6B4DFF]"
              @click="closeDrawer"
            >
              <span>About</span>
              <span class="opacity-0 group-hover:opacity-100 transition">→</span>
            </RouterLink>

            <RouterLink
              :to="{ path: '/', hash: '#technical' }"
              class="group w-full inline-flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium text-black/80 bg-black/0 hover:bg-[#6B4DFF]/10 hover:text-[#6B4DFF] transition"
              active-class="bg-[#6B4DFF]/15 text-[#6B4DFF]"
              @click="closeDrawer"
            >
              <span>Skills</span>
              <span class="opacity-0 group-hover:opacity-100 transition">→</span>
            </RouterLink>

            <RouterLink
              :to="{ path: '/', hash: '#projects' }"
              class="group w-full inline-flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium text-black/80 bg-black/0 hover:bg-[#6B4DFF]/10 hover:text-[#6B4DFF] transition"
              active-class="bg-[#6B4DFF]/15 text-[#6B4DFF]"
              @click="closeDrawer"
            >
              <span>Projects</span>
              <span class="opacity-0 group-hover:opacity-100 transition">→</span>
            </RouterLink>

            <RouterLink
              :to="{ path: '/', hash: '#experience' }"
              class="group w-full inline-flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium text-black/80 bg-black/0 hover:bg-[#6B4DFF]/10 hover:text-[#6B4DFF] transition"
              active-class="bg-[#6B4DFF]/15 text-[#6B4DFF]"
              @click="closeDrawer"
            >
              <span>Experience</span>
              <span class="opacity-0 group-hover:opacity-100 transition">→</span>
            </RouterLink>
          </div>
        </nav>

        <!-- Resume -->
        <div class="px-4 pb-4 bg-white ">
         
          <a
            href="/Menna Allah Abd elhamed .pdf"
            download="Menna Allah abd elhamed CV.pdf"
            class="mt-4 w-full inline-flex items-center justify-center px-4 py-3 rounded-2xl bg-[#2F2F4F] text-white hover:bg-[#6D5FA6] transition"
            @click="closeDrawer"
          >
            Resume
          </a>
        </div>

        <!-- Social -->
        <div class="px-4 pb-6 bg-white ">
          <div class="h-px bg-black/10" />
          <div class="flex items-center justify-center gap-8 mt-4 text-[#6B7280]">
            <a
              v-for="link in SOCIAL_LINKS"
              :key="link.platform"
              :href="link.url"
              target="_blank"
              class="hover:text-[#6B4DFF] transition"
            >
              <i :class="getIcon(link.icon)"></i>
            </a>
          </div>
        </div>
      </div>
    </aside>
  </div>
</header>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";

const isDrawerOpen = ref(false);


const SOCIAL_LINKS = [
  { platform: 'GitHub', url: 'https://github.com/Menna-sultan', icon: 'github' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/menna-dev', icon: 'linkedin' },
  { platform: 'Mail', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=mennasultan84@gmail.com', icon: 'mail' }
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

const closeDrawer = () => {
  isDrawerOpen.value = false;
}


</script>
