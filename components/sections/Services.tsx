"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Globe, Search, Settings } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Řešení na míru",
    description:
      "Vytvářím customizované webové aplikace, které přesně naplní vaše byznysové cíle. Zajistím kompletní technickou implementaci, napojení na spolehlivý CMS systém pro snadnou správu obsahu a vývoj unikátních funkcí. Dodané grafické návrhy převedu na výkonné a bezchybné webové řešení.",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    icon: Globe,
    title: "WordPress řešení",
    description:
      "Specializuji se na rychlý a efektivní vývoj webů postavených na šablonách. Zajistím implementaci, funkční nastavení a optimalizaci celého systému s důrazem na vaši cílovou skupinu. Výsledkem je atraktivní, spolehlivá a snadno spravovatelná prezentace, která vyhovuje vašim specifickým potřebám.",
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: Search,
    title: "SEO a optimalizace",
    description:
      "Zajišťuji maximální dohledatelnost vašeho webu a zvýšení organické návštěvnosti. Provádím hloubkovou SEO analýzu, navrhuji strategické kroky a implementuji kompletní on-page optimalizaci (klíčová slova, meta data, technické úpravy). Přeměňte svůj web na výkonný marketingový nástroj.",
    gradient: "from-fuchsia-500 to-pink-500",
  },
  {
    icon: Settings,
    title: "Správa webů, domén a hostingu",
    description:
      "Postarám se o bezproblémový a nepřetržitý chod vašeho digitálního řešení. Nabízím kompletní péči zahrnující pravidelnou údržbu, robustní zálohování, komplexní zabezpečení a nepřetržité monitorování výkonu. Zajišťuji také technickou podporu, registraci domén a optimální nastavení hostingu.",
    gradient: "from-pink-500 to-purple-500",
  },
];

const serviceBackgroundOrbs = [
  { top: "5%", left: "10%", size: 260, delay: 0 },
  { top: "15%", left: "70%", size: 200, delay: 1 },
  { top: "60%", left: "15%", size: 220, delay: 1.5 },
  { top: "70%", left: "65%", size: 240, delay: 2 },
];

function ServiceCard({ service, index, isInView }: { service: typeof services[0], index: number, isInView: boolean }) {
  const Icon = service.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: isEven ? 60 : -60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: isEven ? 60 : -60 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
    >
      <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 h-full">
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`} />

        {/* Icon */}
        <div className="relative mb-6">
          <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-white text-2xl shadow-lg transition-transform duration-300 group-hover:scale-105`}>
            <Icon className="w-8 h-8" />
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {service.title}
        </h3>
        <p className="text-zinc-300 leading-relaxed text-lg">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center"
      style={{
        background: "linear-gradient(to bottom, #000000 0%, #09090b 50%, #18181b 100%)",
      }}
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-3xl"
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
        className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(139,92,246,0.15) 1px, transparent 1px)",
          backgroundSize: "200px 200px",
          animation: "grid-pan 30s linear infinite",
        }}
      />
      <motion.div className="absolute inset-0 pointer-events-none">
        {serviceBackgroundOrbs.map((orb, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-purple-500/30 to-transparent blur-3xl mix-blend-screen"
            style={{
              top: orb.top,
              left: orb.left,
              width: orb.size,
              height: orb.size,
            }}
            animate={{
              y: [0, -35, 0],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              delay: orb.delay,
            }}
          />
        ))}
      </motion.div>
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div
          ref={ref}
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
            Mé služby
          </motion.h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500 mx-auto rounded-full" />
          <motion.p
            className="text-zinc-400 mt-8 text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            Co pro tebe udělám
          </motion.p>
        </motion.div>

        {/* 3D Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
