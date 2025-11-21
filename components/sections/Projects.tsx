"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Sparkles } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Pujcsikolo",
    category: "Tvorba webů",
    description: "Webová aplikace pro rezervace elektrokol a správu flotily.",
    outcomes: ["Rezervační systém", "SEO optimalizace", "Responzivní design"],
    link: "#",
    gradient: "from-emerald-500/20 to-cyan-500/20",
    stack: "WordPress",
    year: "2024",
    image: "/images/pujcsikolo.jpg",
  },
  {
    title: "xFrTyCz",
    category: "Tvorba webů",
    description: "Web pro Twitch streamera s custom CMS a integrací livestreamu.",
    outcomes: ["Integrace Twitch API", "E-shop s platební bránou", "Úpravy WordPressu na míru"],
    link: "https://xfrty.cz",
    gradient: "from-purple-500/20 to-pink-500/20",
    stack: "WordPress",
    year: "2023",
    image: "/images/xfrtycz.jpg",
  },
];

const stats = [
  { label: "Let zkušeností", value: "5+" },
  { label: "Dokončených projektů", value: "10+" },
  { label: "Klientů", value: "5+" },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #18181b 0%, #000000 50%, #18181b 100%)",
      }}
    >
      {/* Decorative background */}
      <motion.div
        className="absolute inset-0 opacity-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.15),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(236,72,153,0.15),_transparent_60%)]" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-violet-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
          >
            Portfolio
          </motion.h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500 mx-auto rounded-full" />
          <motion.p
            className="text-zinc-400 mt-8 text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            Každý projekt má jasný cíl, vlastní proces a měřitelný výsledek.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur"
            >
              <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/20 via-transparent to-purple-500/20" />

          <div className="space-y-16">
            {projects.map((project, index) => {
              const alignRight = index % 2 === 0;

              return (
                <motion.div
                  key={project.title}
                  initial={{
                    opacity: 0,
                    x: alignRight ? 100 : -100,
                    y: 50,
                  }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0, y: 0 }
                      : { opacity: 0, x: alignRight ? 100 : -100, y: 50 }
                  }
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  className="relative flex flex-col md:grid md:grid-cols-2 md:gap-12 items-stretch"
                >
                  <div
                    className={`order-2 ${
                      alignRight ? "md:order-1 md:pl-16" : "md:order-2 md:pr-16"
                    } text-left`}
                  >
                    <div className="text-sm text-purple-300 font-semibold uppercase tracking-[0.3em] mb-3">
                      {project.category}
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-4">{project.title}</h3>
                    <p className="text-zinc-300 mb-6">{project.description}</p>
                    <div className="space-y-3 mb-8">
                      {project.outcomes.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 text-sm text-zinc-300"
                        >
                          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500" />
                          {item}
                        </div>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-purple-300 font-semibold hover:text-purple-200 transition-colors"
                    >
                      Zobrazit projekt
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <div
                    className={`order-1 mt-8 md:mt-0 ${alignRight ? "md:order-2 md:pl-16" : "md:order-1 md:pr-16"}`}
                  >
                    <div
                      className={`relative bg-gradient-to-br ${project.gradient} rounded-3xl p-6 border border-white/10 backdrop-blur-lg`}
                    >
                      <div className="relative h-48 rounded-2xl overflow-hidden border border-white/5">
                        <Image
                          src={project.image}
                          alt={`${project.title} - Náhled projektu`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          loading="lazy"
                          quality={85}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-6 text-center">
                        <div className="bg-white/10 rounded-xl p-4">
                          <p className="text-xs uppercase tracking-[0.3em] text-zinc-300">
                            Technologie
                          </p>
                          <p className="text-lg text-white font-semibold mt-1">
                            {project.stack}
                          </p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-4">
                          <p className="text-xs uppercase tracking-[0.3em] text-zinc-300">
                            Rok
                          </p>
                          <p className="text-lg text-white font-semibold mt-1">
                            {project.year}
                          </p>
                        </div>
                      </div>
                    </div>
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

