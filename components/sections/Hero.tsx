"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { useRef, useState, useEffect, useLayoutEffect, startTransition } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const technologies = ["Laravel", "Tailwind", "WordPress", "JavaScript"];
  const [currentTech, setCurrentTech] = useState(0);

  useLayoutEffect(() => {
    // Optimalizace - použít startTransition pro non-urgent updates
    const interval = setInterval(() => {
      startTransition(() => {
        setCurrentTech((prev) => (prev + 1) % technologies.length);
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [technologies.length]);

  return (
    <section
      ref={ref}
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #000000 0%, #09090b 50%, #18181b 100%)",
      }}
    >
      {/* Animated background elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.15),transparent_50%)]"
      />
      
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Geometric shapes */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-purple-500/20 rounded-lg rotate-45"
        animate={{ rotate: [45, 225, 45] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-24 h-24 border-2 border-violet-500/20 rounded-full"
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 hero-content-wrapper"
        suppressHydrationWarning
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-animated-content"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 text-purple-400 font-medium mb-4 text-lg"
          >
            <Sparkles className="w-5 h-5" />
            Vítej na mém portfoliu
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.4] md:leading-[1.4] lg:leading-[1.4] bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent"
          >
            Ahoj, já jsem{" "}
            <motion.span
              className="bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent inline-block"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              Filip
            </motion.span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl md:text-4xl mb-8 font-light flex items-center justify-center gap-3"
          >
            <span className="text-zinc-400">Web Developer</span>
            <span className="text-zinc-600">•</span>
            <div className="relative h-[1.2em] w-32 md:w-40 overflow-hidden inline-block">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTech}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 top-0 whitespace-nowrap bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent font-medium"
                >
                  {technologies[currentTech]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Tvořím moderní webové aplikace s důrazem na funkčnost, výkon a
            vizuální prezentaci. Specializuji se na řešení na míru, CMS, Laravel a
            WordPress.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Pojďme spolupracovat</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

