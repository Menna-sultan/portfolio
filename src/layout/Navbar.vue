<template>
<header class="fixed top-0 z-50 w-full  backdrop-blur-md">
  <div class="flex items-center justify-between px-4 lg:px-8 h-20">
<!-- bg-[#2F2F4F] -->
 <!-- border-b border-gray-200  -->
    <!-- Logo on the far left -->
    <RouterLink to="/" class="flex items-center gap-2 font-bold text-2xl">
      

<span class="bg-gradient-to-r from-pink-200 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent font-bold text-3xl">
  M A
</span>

      <img src="/star.png"  class="w-5 h-5" />
    </RouterLink>
    <nav class="hidden md:flex items-center gap-16 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black font-medium">
     <RouterLink :to="{ path: '/', hash: '#home' }">Home</RouterLink>
  <RouterLink :to="{ path: '/', hash: '#about' }">About</RouterLink>
  <RouterLink :to="{ path: '/', hash: '#technical' }">Skills</RouterLink>
  <RouterLink :to="{ path: '/', hash: '#projects' }">Projects</RouterLink>
  <RouterLink :to="{ path: '/', hash: '#experience' }">Experience</RouterLink>


    </nav>

    <!-- Hire Me button on the right -->
   
         <div class="flex items-center gap-6 mr-24 ">
            <a
              v-for="link in SOCIAL_LINKS"
              :key="link.platform"
              :href="link.url"
              target="_blank"
             class="text-[#6B7280]  hover:scale-105"
            >
              <i :class="getIcon(link.icon)"></i>
            </a>
          </div>

  </div>


</header>
</template>

<script setup>
import { RouterLink, useRoute } from "vue-router";
import { ref } from "vue";
import { Motion } from 'motion-v'
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
const route = useRoute();


</script>
