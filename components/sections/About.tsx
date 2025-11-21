"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const photoRef = useRef<HTMLDivElement>(null);
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handlePhotoMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!photoRef.current) return;
    
    const rect = photoRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handlePhotoMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsPhotoHovered(false);
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center"
      style={{
        background: "linear-gradient(to bottom, #09090b 0%, #18181b 50%, #09090b 100%)",
      }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
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
            O mně
          </motion.h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo section */}
          <motion.div
            ref={photoRef}
            onMouseMove={handlePhotoMouseMove}
            onMouseLeave={handlePhotoMouseLeave}
            onMouseEnter={() => setIsPhotoHovered(true)}
            initial={{ opacity: 0, x: -100, rotateY: -15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -100, rotateY: -15 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:order-2"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-3xl blur-3xl"
              animate={isPhotoHovered ? {
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Photo container */}
            <div className="relative z-10">
              {/* Decorative border */}
              <motion.div
                className="absolute -inset-4 rounded-3xl border-2 border-purple-500/30"
                animate={isPhotoHovered ? {
                  rotate: [0, 5, -5, 0],
                } : {}}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-violet-500/20 border-2 border-purple-500/30">
                <Image
                  src="/images/filip.png"
                  alt="Filip Koudelníček"
                  fill
                  className="object-cover"
                  priority
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Floating particles around photo */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-purple-400 rounded-full"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: i % 2 === 0 ? '-10%' : '110%',
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2 + i * 0.3,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Content section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                5 let zkušeností s vývojem webů
              </h3>
            </motion.div>
            
            <div className="space-y-5">
              <motion.p
                className="text-zinc-300 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7 }}
              >
                Jsem student softwarového inženýrství na UTB a už pět let se
                věnuji tvorbě webových stránek. V současné době pracuji pro firmu{" "}
                <span className="text-purple-400 font-semibold relative">
                  Expert Dev
                  <motion.span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ delay: 1 }}
                  />
                </span>,
                kde získávám cenné zkušenosti s vývojem webových aplikací a řešení
                na míru.
              </motion.p>
              
              <motion.p
                className="text-zinc-300 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8 }}
              >
                Ovládám širokou škálu technologií od HTML, CSS a JavaScript přes
                Bootstrap a Tailwind až po Laravel a WordPress. Věřím, že klíčem k
                úspěchu je dobrá komunikace, transparentní proces práce a zaměření na
                detail.
              </motion.p>
            </div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 1 }}
              className="mt-8 space-y-5"
            >
              <h4 className="text-2xl font-semibold text-white mb-5">
                Má cesta k IT
              </h4>
              <div className="space-y-5">
                {[
                  { title: "Střední škola", desc: "První kroky v programování a zájem o IT technologie" },
                  { title: "Vysoká škola", desc: "Studium softwarového inženýrství se zaměřením na vývoj aplikací" },
                  { title: "Praxe v oboru", desc: "Vývoj webových aplikací a spolupráce v týmu na projektech" },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 1.1 + index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="relative flex-shrink-0">
                      <motion.div
                        className="w-4 h-4 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full"
                        animate={isInView ? {
                          scale: [1, 1.3, 1],
                        } : {}}
                        transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
                      />
                      {index < 2 && (
                        <motion.div
                          className="absolute top-4 left-1/2 w-0.5 h-16 bg-gradient-to-b from-purple-500/50 to-transparent"
                          initial={{ scaleY: 0 }}
                          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                          transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-semibold text-lg mb-1 group-hover:text-purple-400 transition-colors">
                        {item.title}
                      </p>
                      <p className="text-zinc-400">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

