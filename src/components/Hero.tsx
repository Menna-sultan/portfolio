"use client";

import { motion } from "motion/react";

const ROLE = "Frontend Developer & UI/UX Designer";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-10">
    



{/* Right Hero Visual */}
<motion.div 
  className="flex justify-center items-center order-1 lg:order-2 lg:-mt-10"
  initial={{ opacity: 0, x: 50 }} 
  animate={{ opacity: 1, x: 0 }} 
  transition={{ duration: 0.9, delay: 0.2 }} 
>
  <div className="relative w-[360px] h-[360px] lg:w-[470px] lg:h-[470px]">

    {/* Soft Glow */}
    <motion.div
      className="
        absolute
        inset-12
        rounded-full
        bg-gradient-to-br
        from-violet-300/30
        via-purple-200/20
        to-pink-200/30
        blur-3xl
      "
      animate={{
        scale: [1, 1.08, 1],
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {/* Rotating Ring */}
    <motion.div
      className="
        absolute
        inset-6
        rounded-full
        border
        border-violet-300/30
      "
      animate={{ rotate: 360 }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "linear",
      }}
    />

    {/* Small orbit dots */}
    <motion.div
      className="
        absolute
        top-8
        right-20
        w-3
        h-3
        rounded-full
        bg-violet-400
        shadow-lg
        shadow-violet-300
        z-30
      "
      animate={{
        y: [0, -10, 0],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    <motion.div
      className="
        absolute
        bottom-20
        left-10
        w-2.5
        h-2.5
        rounded-full
        bg-pink-300
        z-30
      "
      animate={{
        y: [0, 8, 0],
        x: [0, 5, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {/* Main Image */}
    <motion.div
      className="
        absolute
        inset-10
        rounded-full
        overflow-hidden
        shadow-[0_25px_70px_rgba(92,65,150,0.18)]
        border
        border-white
        z-20
      "
      animate={{
        y: [0, -7, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <img
        src="/hero.png"
        alt="Frontend Developer and UI/UX Designer"
        className="w-full h-full object-cover"
      />
    </motion.div>

    {/* Frontend Badge */}
    <motion.div
      className="
        absolute
        top-16
        -left-2
        lg:left-0
        px-4
        py-2
        rounded-full
        bg-white/90
        backdrop-blur-md
        border
        border-violet-100
        shadow-[0_10px_30px_rgba(80,60,130,0.12)]
        text-sm
        font-semibold
        text-[#5B4BB7]
        z-40
      "
      animate={{
        y: [0, -8, 0],
        rotate: [-2, 0, -2],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      Frontend Developer
    </motion.div>

    {/* UI/UX Badge */}
    <motion.div
      className="
        absolute
        bottom-20
        -right-2
        lg:right-0
        px-4
        py-2
        rounded-full
        bg-white/90
        backdrop-blur-md
        border
        border-pink-100
        shadow-[0_10px_30px_rgba(80,60,130,0.12)]
        text-sm
        font-semibold
        text-[#8B5CF6]
        z-40
      "
      animate={{
        y: [0, 8, 0],
        rotate: [2, 0, 2],
      }}
      transition={{
        duration: 3.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      UI/UX Designer
    </motion.div>

    {/* Design & Development Badge */}
    <motion.div
      className="
        absolute
        bottom-7
        left-20
        px-3
        py-1.5
        rounded-full
        bg-white/90
        backdrop-blur-sm
        border
        border-pink-300
        text-xs
        font-semibold
        text-pink-300
        z-40
      "
      animate={{
        x: [0, 5, 0],
        y: [0, -4, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
Design & Development
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
