"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Laravel", level: 85, icon: "🚀", color: "from-red-500 to-orange-500" },
  { name: "Tailwind CSS", level: 90, icon: "💨", color: "from-cyan-500 to-blue-500" },
  { name: "Bootstrap", level: 88, icon: "🎨", color: "from-purple-500 to-pink-500" },
  { name: "WordPress", level: 85, icon: "📝", color: "from-blue-600 to-blue-800" },
  { name: "JavaScript", level: 85, icon: "⚙️", color: "from-yellow-400 to-yellow-600" },
  { name: "SEO", level: 80, icon: "🔍", color: "from-green-500 to-emerald-500" },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center"
      style={{
        background: "linear-gradient(to bottom, #18181b 0%, #000000 50%, #18181b 100%)",
      }}
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-violet-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
          >
            Mé dovednosti
          </motion.h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500 mx-auto rounded-full" />
          <motion.p
            className="text-zinc-400 mt-8 text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            Technologie, se kterými pracuji
          </motion.p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className="group relative"
              whileHover={{ y: -10, scale: 1.05 }}
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20 group-hover:border-purple-500/50 transition-all duration-500 h-full flex flex-col items-center">
                {/* Icon */}
                <div className="text-5xl mb-4 transition-transform duration-500 group-hover:scale-110">
                  {skill.icon}
                </div>
                
                {/* Name */}
                <h3 className="text-xl font-bold text-white mb-6">{skill.name}</h3>
                
                {/* Circular progress */}
                <div className="relative w-32 h-32 mb-4">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="rgba(139, 92, 246, 0.2)"
                      strokeWidth="8"
                    />
                    {/* Progress circle */}
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke={`url(#gradient-${index})`}
                      strokeWidth="8"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={isInView ? { 
                        pathLength: skill.level / 100,
                        opacity: 1
                      } : { 
                        pathLength: 0,
                        opacity: 0
                      }}
                      transition={{ 
                        pathLength: { duration: 1.5, delay: index * 0.1 + 0.3, ease: "easeOut" },
                        opacity: { duration: 0.3, delay: index * 0.1 + 0.3 }
                      }}
                    />
                    <defs>
                      <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Percentage */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                      className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ 
                        delay: index * 0.1 + 1,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      {skill.level}
                    </motion.span>
                  </div>
                </div>
                
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, rgba(139, 92, 246, 0.2), transparent 70%)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
