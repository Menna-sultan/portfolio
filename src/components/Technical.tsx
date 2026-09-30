"use client";

import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  percent: number;
}

interface Tech {
  name: string;
  iconClass?: string;
}

const technicalSkills: Skill[] = [
  { name: "Frontend ((React, Next.js,Vue.js, Tailwind)", percent: 95 },
  { name: "Programming (C#, C++, JS, Python)", percent: 90 },
  { name: "UI/UX Design (Figma, Adobe Suite)", percent: 85 },
  { name: "Backend (.NET Core, Node.js, SQL)", percent: 80 },
];

const softwareSkills: Skill[] = [
  { name: "Software Design (OOP, Patterns)", percent: 95 },
  { name: "Problem Solving & Algorithms", percent: 95 },
  { name: "Testing & Agile Methodology", percent: 80 },
  { name: "Communication & Teamwork", percent: 90 },
];

const coreTechnologies: Tech[] = [
  { name: "React", iconClass: "fa-brands fa-react" },
  { name: "Next.js", iconClass: "fa-solid fa-diagram-project" },
  { name: "Vue.js", iconClass: "fa-brands fa-vuejs" },
  { name: "JavaScript", iconClass: "fa-brands fa-js" },
  { name: "TypeScript", iconClass: "fa-solid fa-code" },
  { name: "tailwind", iconClass: "fa-solid fa-wind" },
  { name: "Node.js", iconClass: "fa-brands fa-node-js" },
  { name: "ASP.NET Core", iconClass: "fa-solid fa-code" },
  { name: "Git", iconClass: "fa-brands fa-git-alt" },
  { name: "Figma", iconClass: "fa-brands fa-figma" },
];

const additionalTechnologies: Tech[] = [
  { name: "HTML5", iconClass: "fa-brands fa-html5" },
  { name: "CSS3", iconClass: "fa-brands fa-css3-alt" },
  { name: "Bootstrap", iconClass: "fa-brands fa-bootstrap" },
  { name: "Sass (SCSS)", iconClass: "fa-brands fa-sass" },
  { name: "SQL Server", iconClass: "fa-solid fa-database" },
  { name: "GitHub", iconClass: "fa-brands fa-github" },
  { name: "Illustrator", iconClass: "fa-solid fa-pen-nib" },
  { name: "Postman", iconClass: "fa-solid fa-paper-plane" },
  { name: "Python", iconClass: "fa-brands fa-python" },
  { name: "C#", iconClass: "fa-solid fa-hashtag" },
];

const ANIMATION_MS = 2000;
const FRAME_MS = 16;

function SkillColumn({ title, skills, progress }: { title: string; skills: Skill[]; progress: number[] }) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-10 pl-0">
        <h3 className="text-2xl font-semibold text-[#232323] tracking-tight">{title}</h3>
      </div>
      {skills.map((skill, i) => (
        <div key={skill.name} className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-lavender font-semibold text-sm md:text-base tracking-tight">
              {skill.name}
            </span>
            <span className="text-thistle font-mono text-xs md:text-sm opacity-80">
              {Math.round(progress[i])}%
            </span>
          </div>
          <div className="h-2 w-full bg-white rounded-full overflow-hidden shadow-md">
            <div
              className="h-full rounded-full shadow-[0_0_12px_rgba(170,161,200,0.4)]"
              style={{ width: `${progress[i]}%`, background: "linear-gradient(to right, #3488FD, #e4defc)" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Technical() {
  const sectionRef = useRef<HTMLElement>(null);
  const [technicalProgress, setTechnicalProgress] = useState<number[]>(() => technicalSkills.map(() => 0));
  const [softwareProgress, setSoftwareProgress] = useState<number[]>(() => softwareSkills.map(() => 0));

  // Animate the bars from 0 -> target (over ~2s) the first time the section scrolls into view.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let timer: ReturnType<typeof setInterval> | undefined;

    const advance = (skills: Skill[]) => (prev: number[]) =>
      prev.map((value, i) =>
        Math.min(value + skills[i].percent / (ANIMATION_MS / FRAME_MS), skills[i].percent),
      );

    const start = () => {
      const startedAt = performance.now();
      timer = setInterval(() => {
        setTechnicalProgress(advance(technicalSkills));
        setSoftwareProgress(advance(softwareSkills));
        if (performance.now() - startedAt > ANIMATION_MS + FRAME_MS * 4) clearInterval(timer);
      }, FRAME_MS);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          start();
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(section);

    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, []);

  return (
    <section id="technical" ref={sectionRef} className="py-40">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E2E] mb-4">Skills </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#3488FD] to-[#e4defc] mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-32">
        <SkillColumn title="Technical Proficiency" skills={technicalSkills} progress={technicalProgress} />
        <SkillColumn title="Software Engineering" skills={softwareSkills} progress={softwareProgress} />
      </div>

      <div className="text-center">
        <div className="inline-block relative mb-16">
          <h3 className="text-4xl font-semibold bg-gradient-to-r from-[#b09def] to-[#3488FD] bg-clip-text text-transparent px-8 py-2">
            Technical Skills
          </h3>
        </div>

        <div className="mt-14 md:mt-20 lg:mt-4"></div>

        {/* Core technologies (feature cards) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 z-20">
          {coreTechnologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center p-6 bg-white/10 rounded-2xl border border-white/20 transition-all duration-300 group shadow-lg shadow-indigo-900/30 w-full max-w-[180px] h-[160px]"
            >
              <div className="p-4 rounded-2xl bg-indigo-200/20 mb-4 shadow-inner transition-all group-hover:scale-110">
                <i className={`${tech.iconClass} text-[#b09def] text-2xl`}></i>
              </div>
              <span className="text-thistle text-xs md:text-sm font-bold tracking-widest uppercase opacity-70 group-hover:opacity-100">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Additional technologies (chips) */}
        <div className="mt-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {additionalTechnologies.map((chip) => (
              <div
                key={chip.name}
                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                {chip.iconClass && <i className={`${chip.iconClass} text-[#b09def] text-sm`}></i>}
                <span className="text-thistle text-xs md:text-sm font-semibold opacity-80">{chip.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
