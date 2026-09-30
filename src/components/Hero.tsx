"use client";

import { motion } from "motion/react";

const ROLE = "Frontend Developer & UI/UX Designer";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
      <motion.div
        className="hidden lg:flex justify-center items-center order-2 lg:order-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="relative w-[350px] h-[350px] flex items-center justify-center">
          <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl z-20">
            <img src="/girl2.png" alt="Menna Allah" className="w-full h-110 object-cover" />
          </div>

          <motion.div className="absolute inset-0 rounded-full border border-violet-500/30 z-10 -translate-x-4" />

          <motion.div
            className="absolute -right-16 top-2 w-8 h-8 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 opacity-80 shadow-xl pointer-events-none"
            animate={{ x: [0, -6, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute -right-8 top-16 w-4 h-4 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 opacity-80 shadow-xl pointer-events-none"
            animate={{ x: [0, -6, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute -left-8 -bottom-6 w-8 h-8 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 shadow-sm pointer-events-none"
            animate={{ y: [0, -6, 0], x: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute -bottom-8 right-14 w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-lg border border-gray-200 z-20"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <i className="fa-brands fa-figma text-2xl"></i>
          </motion.div>

          <motion.div
            className="absolute -top-5 right-16 w-14 h-14 rounded-full bg-white/95 flex items-center justify-center shadow-xl border border-gray-200 z-20"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src="/ps.png" alt="ps" className="w-7 h-7" />
          </motion.div>

          <motion.div
            className="absolute top-25 -left-8 w-14 h-14 rounded-full bg-white/95 flex items-center justify-center shadow-xl border border-gray-200 z-20"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src="/program.png" alt="ps" className="w-7 h-7" />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="lg:hidden flex justify-center items-center order-1"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="relative w-[320px] h-[320px] flex items-center justify-center">
          <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl z-20">
            <img src="/girl2.png" alt="Menna Allah" className="w-full h-110 object-cover" />
          </div>

          <motion.div className="absolute inset-0 rounded-full border border-violet-500/30 z-10 -translate-x-2" />

          <motion.div
            className="absolute -right-10 top-2 w-7 h-7 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 opacity-80 shadow-xl pointer-events-none"
            animate={{ x: [0, -6, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-6 top-16 w-4 h-4 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 opacity-80 shadow-xl pointer-events-none"
            animate={{ x: [0, -6, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -left-8 -bottom-6 w-7 h-7 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 shadow-sm pointer-events-none"
            animate={{ y: [0, -6, 0], x: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute -bottom-6 right-16 w-14 h-14 rounded-full bg-white/95 flex items-center justify-center shadow-lg border border-gray-200 z-20"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <i className="fa-brands fa-figma text-2xl"></i>
          </motion.div>

          <motion.div
            className="absolute -top-4 right-10 w-12 h-12 rounded-full bg-white/95 flex items-center justify-center shadow-xl border border-gray-200 z-20"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src="/ps.png" alt="ps" className="w-6 h-6" />
          </motion.div>

          <motion.div className="absolute top-20 -left-6 w-12 h-12 rounded-full bg-white/95 flex items-center justify-center shadow-xl border border-gray-200 z-20">
            <img src="/program.png" alt="program" className="w-6 h-6" />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center lg:text-left order-2 lg:order-1"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-[#2F2F4F] mb-4"
          >
            Hello, I&apos;m
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold text-[#8B5CF6] mb-4"
          >
            Menna Allah
          </motion.div>

          <p className="text-xl text-[#4B5563] mb-8 max-w-lg mt-6">
            {ROLE} <br />
            creating modern,user-friendly interfaces <br />
            and responsive digital experiences
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-left">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#2F2F4F] hover:bg-[#6D5FA6] hover:shadow-lg hover:shadow-[#4A3E73]/40 text-white transition hover:scale-105 w-full sm:w-auto"
            >
              View Projects
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
