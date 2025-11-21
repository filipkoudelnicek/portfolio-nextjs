"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Palette, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Konzultace",
    description:
      "Probereme tvoje potřeby, cíle a představy. Společně definujeme rozsah projektu a očekávání.",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Palette,
    title: "Návrh",
    description:
      "Vytvořím návrh designu a struktury webu. Probereme všechny detaily a upravíme podle tvých představ.",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: Code2,
    title: "Vývoj",
    description:
      "Pustím se do vývoje s důrazem na kvalitu kódu, výkon a responzivitu. Průběžně ti budu ukazovat pokrok.",
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "Otestujeme vše do detailu, spustíme web a zajistím, aby vše fungovalo perfektně. Jsem tu i po spuštění.",
    color: "from-pink-500 to-purple-500",
  },
];

const processBackgroundOrbs = [
  { top: "8%", left: "15%", size: 220, delay: 0 },
  { top: "35%", left: "75%", size: 260, delay: 0.5 },
  { top: "65%", left: "20%", size: 200, delay: 1 },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="process"
      ref={ref}
      className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center"
      style={{
        background: "linear-gradient(to bottom, #18181b 0%, #09090b 100%)",
      }}
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(100deg, rgba(139,92,246,0.15) 1px, transparent 1px)",
          backgroundSize: "180px 180px",
          animation: "grid-pan 28s linear infinite",
        }}
      />
      <motion.div className="absolute inset-0 pointer-events-none">
        {processBackgroundOrbs.map((orb, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-purple-400/25 to-transparent blur-3xl mix-blend-screen"
            style={{
              top: orb.top,
              left: orb.left,
              width: orb.size,
              height: orb.size,
            }}
            animate={{
              y: [0, 35, 0],
              opacity: [0.2, 0.45, 0.2],
            }}
            transition={{
              duration: 14 + i * 3,
              repeat: Infinity,
              delay: orb.delay,
            }}
          />
        ))}
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
            Jak pracuji
          </motion.h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500 mx-auto rounded-full" />
          <motion.p
            className="text-zinc-400 mt-8 text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            Transparentní proces od konzultace po spuštění
          </motion.p>
        </motion.div>

        {/* Timeline with curved path */}
        <div className="relative">
          {/* Curved connecting line */}
          <svg className="absolute top-0 left-0 w-full h-full overflow-visible" style={{ height: "100%" }}>
            <motion.path
              d="M 100 100 Q 400 200, 700 100 T 1300 100"
              fill="none"
              stroke="rgba(139, 92, 246, 0.2)"
              strokeWidth="3"
              strokeDasharray="10 5"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <motion.path
              d="M 100 100 Q 400 200, 700 100 T 1300 100"
              fill="none"
              stroke="url(#gradient-line)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <defs>
              <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: isEven ? -100 : 100, scale: 0 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: isEven ? -100 : 100, scale: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="relative"
                >
                  {/* Step card */}
                  <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 h-full group">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Step number */}
                    <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center border-4 border-zinc-950 shadow-2xl">
                      <motion.span
                        className="text-2xl font-bold text-white"
                        animate={isInView ? {
                          scale: [1, 1.2, 1],
                        } : {}}
                        transition={{
                          delay: index * 0.2 + 0.5,
                          duration: 0.5,
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </motion.span>
                    </div>
                    
                    {/* Icon */}
                    <div className="relative mb-6 mt-4">
                      <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-violet-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {step.title}
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
