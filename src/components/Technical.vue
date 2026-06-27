<template>
  <section id="technical" ref="section" class="py-40">
     <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-[#1E1E2E] mb-4">Skills </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-[#3488FD] to-[#e4defc] mx-auto rounded-full"></div>
    </div>
     
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-32">
      <div>
        <div class="flex items-center gap-4 mb-10  pl-0">
          <h3 class="text-2xl font-semibold text-[#232323] tracking-tight">Technical Proficiency</h3>
        </div>
        <div v-for="skill in technicalSkills" :key="skill.name" class="mb-8">
          <div class="flex justify-between items-center mb-2">
            <span class="text-lavender font-semibold text-sm md:text-base tracking-tight">{{ skill.name }}</span>
            <span class="text-thistle font-mono text-xs md:text-sm opacity-80">{{ Math.round(skill.progress) }}%</span>
          </div>
    <div class="h-2 w-full bg-white rounded-full overflow-hidden shadow-md ">
          <div class="h-full rounded-full shadow-[0_0_12px_rgba(170,161,200,0.4)]" :style="{ width: skill.progress + '%', background: 'linear-gradient(to right, #3488FD, #e4defc)' }"></div>
    </div>
        </div>
</div>
<div>
  <div class="flex items-center gap-4 mb-10   pl-0"> 
    <!-- border-l-4 border-l-[#5B4B8A] -->
    <h3 class="text-2xl font-semibold text-[#232323] tracking-tight">Software Engineering</h3>
  </div>
  <div v-for="skill in softwareSkills" :key="skill.name" class="mb-8">
    <div class="flex justify-between items-center mb-2">
      <span class="text-lavender font-semibold text-sm md:text-base tracking-tight">{{ skill.name }}</span>
      <span class="text-thistle font-mono text-xs md:text-sm opacity-80">{{ Math.round(skill.progress) }}%</span>
    </div>
    <div class="h-2 w-full bg-white rounded-full overflow-hidden shadow-md">
          <div class="h-full rounded-full shadow-[0_0_12px_rgba(170,161,200,0.4)]" :style="{ width: skill.progress + '%', background: 'linear-gradient(to right, #3488FD, #e4defc)' }"></div>
    </div>
  </div>
  </div>
    </div>
    <div class="text-center">
      <div class="inline-block relative mb-16">
        <h3 class="text-4xl font-semibold  bg-gradient-to-r from-[#b09def] to-[#3488FD] bg-clip-text text-transparent px-8 py-2  ">Technical Skills</h3>
      </div>


<!-- Tech Stack (Core cards + Additional chips) -->
<div class="mt-14 md:mt-20 lg:mt-4"></div>

<!-- 1) Core Technologies (premium feature cards) -->
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 z-20">
  <div
    v-for="tech in coreTechnologies"
    :key="tech.name"
    class="flex flex-col items-center justify-center p-6 bg-white/10 rounded-2xl border border-white/20 transition-all duration-300 group shadow-lg shadow-indigo-900/30 w-full max-w-[180px] h-[160px]"
    
  >
    <div class="p-4 rounded-2xl bg-indigo-200/20 mb-4 shadow-inner transition-all group-hover:scale-110">
      <i :class="[tech.iconClass,  'text-[#b09def]', 'text-2xl']"></i>
    </div>
    <span class="text-thistle text-xs md:text-sm font-bold tracking-widest uppercase opacity-70 group-hover:opacity-100">
      {{ tech.name }}
    </span>
  </div>
</div>

<!-- 2) Additional Technologies (chips list) -->
<div class="mt-8">
  <div class="flex flex-wrap gap-3 justify-center">
    <div
      v-for="chip in additionalTechnologies"
      :key="chip.name"
      class="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
    >
      <i v-if="chip.iconClass" :class="[chip.iconClass, 'text-[#b09def]', 'text-sm']"></i>
      <span class="text-thistle text-xs md:text-sm font-semibold opacity-80">{{ chip.name }}</span>
    </div>
  </div>
</div>

</div>




  </section>
</template>



<script>
import { onMounted, ref } from 'vue';
import { watch } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'Technical',
  data() {
    return {
      technicalSkills: [
        { name: 'Frontend ((React, Next.js,Vue.js, Tailwind)', percent: 95, progress: 0 },
        { name: 'Programming (C#, C++, JS, Python)', percent: 90, progress: 0 },
        { name: 'UI/UX Design (Figma, Adobe Suite)', percent: 85, progress: 0 },
        { name: 'Backend (.NET Core, Node.js, SQL)', percent: 80, progress: 0 }
      ],
      softwareSkills: [
        { name: 'Software Design (OOP, Patterns)', percent: 95, progress: 0 },
        { name: 'Problem Solving & Algorithms', percent: 95, progress: 0 },
        { name: 'Testing & Agile Methodology', percent: 80, progress: 0 },
        { name: 'Communication & Teamwork', percent: 90, progress: 0 }
      ],
      coreTechnologies: [
        { name: 'React', iconClass: 'fa-brands fa-react' },
        { name: 'Next.js', iconClass: 'fa-solid fa-diagram-project' },
        { name: 'Vue.js', iconClass: 'fa-brands fa-vuejs' },
        { name: 'JavaScript', iconClass: 'fa-brands fa-js' },
        { name: 'TypeScript', iconClass: 'fa-solid fa-code' },
        { name: 'tailwind', iconClass: 'fa-solid fa-wind'},
        { name: 'Node.js', iconClass: 'fa-brands fa-node-js' },
        { name: 'ASP.NET Core', iconClass: 'fa-solid fa-code' },
        { name: 'Git', iconClass: 'fa-brands fa-git-alt' },
        { name: 'Figma', iconClass: 'fa-brands fa-figma' }
      ],
      additionalTechnologies: [
        { name: 'HTML5', iconClass: 'fa-brands fa-html5' },
        { name: 'CSS3', iconClass: 'fa-brands fa-css3-alt' },
        { name: 'Bootstrap', iconClass: 'fa-brands fa-bootstrap' },
        { name: 'Sass (SCSS)', iconClass: 'fa-brands fa-sass' },
        { name: 'SQL Server', iconClass: 'fa-solid fa-database' },
        { name: 'GitHub', iconClass: 'fa-brands fa-github' },
      
        { name: 'Illustrator', iconClass: 'fa-solid fa-pen-nib' },
        { name: 'Postman', iconClass: 'fa-solid fa-paper-plane' },
        { name: 'Python', iconClass: 'fa-brands fa-python' },
        { name: 'C#', iconClass: 'fa-solid fa-hashtag' }
      ],
      section: ref(null)
    }
  },
  methods: {
    animateProgress(skill) {
      const target = skill.percent;
      const duration = 2000; // 2 seconds
      const step = target / (duration / 16); // approx 60fps
      const timer = setInterval(() => {
        if (skill.progress < target) {
          skill.progress += step;
          if (skill.progress > target) skill.progress = target;
        } else {
          clearInterval(timer);
        }
      }, 16);
    },
    animateAllSkills() {
      this.technicalSkills.forEach(skill => this.animateProgress(skill));
      this.softwareSkills.forEach(skill => this.animateProgress(skill));
    }
  },
  mounted() {
    this.$nextTick(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateAllSkills();
            observer.disconnect();
          }
        });
      }, { threshold: 0.1 });
      if (this.$refs.section) {
        observer.observe(this.$refs.section);
      }
    });
  }
}
</script>
<!-- Tailwind Custom CSS -->
<style>
/* Skill Tag Styles */
.skill-tag {
  padding: 0.375rem 0.75rem; /* px-3 py-1.5 */
  border-radius: 0.375rem;   /* rounded-md */
  background-color: rgba(97, 75, 172, 0.3); /* #614BAC/30 */
  color: #ffffff; /* text-white */
  font-size: 0.875rem; /* text-sm */
  border: 1px solid rgba(255, 255, 255, 0.2); /* border-white/20 */
  cursor: default;
  opacity: 0;
  animation: fadeIn 0.5s ease forwards;
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background-color: rgba(97, 75, 172, 0.7); /* #614BAC/70 */
  transform: scale(1.05);
  border-color: #814DDC;
  box-shadow: 0 4px 10px rgba(97, 75, 172, 0.3);
}

/* Card Animation */
.card {
  opacity: 0;
  transform: translateY(1.5rem); /* translate-y-6 */
  animation: fadeSlideUp 0.6s ease forwards;
}

.card:nth-child(1) { animation-delay: 0.1s; }
.card:nth-child(2) { animation-delay: 0.2s; }
.card:nth-child(3) { animation-delay: 0.3s; }
.card:nth-child(4) { animation-delay: 0.4s; }

@keyframes fadeSlideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

/* Gradient underline animation */
.animate-gradientShift {
  background-size: 200% 200%;
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

</style>