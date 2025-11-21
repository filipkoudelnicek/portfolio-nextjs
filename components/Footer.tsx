"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-zinc-400"
        >
          <p className="text-sm">
            Copyright © {currentYear} Filip Koudelníček | Všechna práva
            vyhrazena.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

