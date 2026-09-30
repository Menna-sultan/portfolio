"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const CV_HREF = "/Menna Allah Abd elhamed .pdf";
const CV_FILENAME = "Menna Allah abd elhamed CV.pdf";

const NAV_LINKS = [
  { label: "Home", hash: "home" },
  { label: "About", hash: "about" },
  { label: "Skills", hash: "technical" },
  { label: "Projects", hash: "projects" },
  { label: "Experience", hash: "experience" },
];

const SOCIAL_LINKS = [
  { platform: "GitHub", url: "https://github.com/Menna-sultan", icon: "fab fa-github text-xl" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/menna-dev", icon: "fab fa-linkedin text-xl" },
  {
    platform: "Mail",
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=mennasultan84@gmail.com",
    icon: "fas fa-envelope text-xl",
  },
];

const logoGradient =
  "bg-gradient-to-r from-pink-200 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent text-3xl";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md">
      <div className="flex items-center justify-between px-4 lg:px-8 h-20">
        {/* Logo on the far left */}
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl">
          <span className={`${logoGradient} font-bold`}>M A</span>
          <img src="/star.png" alt="" className="w-5 h-5" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-16 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black font-medium">
          {NAV_LINKS.map((link) => (
            <Link key={link.hash} href={`/#${link.hash}`}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social icons (desktop only) */}
        <div className="hidden md:flex items-center gap-6 mr-24">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.platform}
              className="text-[#6B7280] hover:scale-105"
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-black/5 transition"
          aria-label="Open navigation menu"
          onClick={() => setIsDrawerOpen(true)}
        >
          <span className="sr-only">Open menu</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile drawer + backdrop */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-[60]">
          <button
            type="button"
            className="absolute inset-0 w-full h-full bg-black/40"
            aria-label="Close navigation drawer"
            onClick={closeDrawer}
          />

          <aside className="absolute right-0 top-0 h-full w-full bg-white shadow-2xl border-l border-white/40 transform transition-transform transition-opacity duration-300 ease-out translate-x-0 opacity-100">
            <div className="flex items-center justify-between px-6 py-5">
              <Link href="/" className="flex items-center gap-2 font-bold text-2xl" onClick={closeDrawer}>
                <span className={logoGradient}>M A</span>
                <img src="/star.png" alt="" className="w-5 h-5" />
              </Link>

              <button
                type="button"
                className="rounded-md p-2 text-black hover:bg-black/5 transition"
                aria-label="Close navigation drawer"
                onClick={closeDrawer}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="h-full flex flex-col bg-white">
              {/* Menu */}
              <nav className="px-4 py-4 flex-1 bg-white">
                <div className="space-y-2">
                  {NAV_LINKS.map((link) => {
                    // Original Vue router-link marked every "/#hash" link except Home as
                    // active while on "/" (router-link ignores the hash), so it's kept.
                    const active = pathname === "/" && link.hash !== "home";
                    return (
                      <Link
                        key={link.hash}
                        href={`/#${link.hash}`}
                        onClick={closeDrawer}
                        className={`group w-full inline-flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium text-black/80 bg-black/0 hover:bg-[#6B4DFF]/10 hover:text-[#6B4DFF] transition ${
                          active ? "bg-[#6B4DFF]/15 text-[#6B4DFF]" : ""
                        }`}
                      >
                        <span>{link.label}</span>
                        <span className="opacity-0 group-hover:opacity-100 transition">→</span>
                      </Link>
                    );
                  })}
                </div>
              </nav>

              {/* Resume */}
              <div className="px-4 pb-4 bg-white">
                <a
                  href={CV_HREF}
                  download={CV_FILENAME}
                  className="mt-4 w-full inline-flex items-center justify-center px-4 py-3 rounded-2xl bg-[#2F2F4F] text-white hover:bg-[#6D5FA6] transition"
                  onClick={closeDrawer}
                >
                  Resume
                </a>
              </div>

              {/* Social */}
              <div className="px-4 pb-6 bg-white">
                <div className="h-px bg-black/10" />
                <div className="flex items-center justify-center gap-8 mt-4 text-[#6B7280]">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.platform}
                      className="hover:text-[#6B4DFF] transition"
                    >
                      <i className={link.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
