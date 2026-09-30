"use client";

import { useState } from "react";
import { categories, projects, type ProjectCategory } from "@/data/projects";

const iconLink =
  "w-9 h-9 flex items-center justify-center rounded-full bg-white/80 backdrop-blur text-[#6B6FD6] hover:text-[#8B5CF6] transition";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | ProjectCategory>("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.categories.includes(selectedCategory));

  return (
    <section id="projects" className="py-40">
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E2E] mb-4">Featured Projects</h2>

            <div className="w-20 h-1 bg-gradient-to-r from-[#3488FD] to-[#e4defc] mx-auto rounded-full"></div>

            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-lg ${
                    selectedCategory === cat.value
                      ? "bg-[#5B4B8A] text-white"
                      : "bg-white text-[#7C58D3] border border-[#7C58D3] hover:text-white hover:bg-[#5B4B8A]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className="project-card group opacity-0 animate-fade-up rounded-2xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
                  <img
                    src={encodeURI(project.image)}
                    alt={project.title}
                    className="w-100 h-80 transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* soft overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6B6FD6]/40 via-transparent to-transparent"></div>
                  {/* icons */}
<div className="absolute top-4 right-4 flex gap-2">
                      {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={iconLink}
                        aria-label="View live demo"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square text-sm"></i>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={iconLink}
                        aria-label="View source code"
                      >
                        <i className="fa-brands fa-github text-sm"></i>
                      </a>
                    )}
                    {project.behanceUrl && (
                      <a
                        href={project.behanceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={iconLink}
                        aria-label="View Behance"
                      >
                        <i className="fa-brands fa-behance text-sm"></i>
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-semibold tracking-wider text-violet-500 uppercase">
                      {project.mainCategory}
                    </span>
                    <span className="text-xs text-slate-500">{project.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-violet-600 transition">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-5 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full mt-2 bg-[#E2EFFF] text-[#4F46E5]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
