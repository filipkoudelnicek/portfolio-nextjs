# Portfolio - Filip Koudelníček

Moderní, responzivní portfolio web vytvořený s Next.js 14, TypeScript, Tailwind CSS a Framer Motion.

## 🚀 Technologie

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animace)
- **Lucide React** (ikony)

## 📦 Instalace

1. Nainstaluj závislosti:
```bash
npm install
```

2. Spusť vývojový server:
```bash
npm run dev
```

3. Otevři [http://localhost:3000](http://localhost:3000) v prohlížeči.

## 🏗️ Struktura projektu

```
portfolio/
├── app/
│   ├── globals.css      # Globální styly
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Hlavní stránka
├── components/
│   ├── sections/        # Sekce portfolia
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── Process.tsx
│   │   └── Contact.tsx
│   ├── Navigation.tsx   # Navigační menu
│   └── Footer.tsx       # Footer
└── package.json
```

## 🎨 Design Features

- **Dark mode by default** - Moderní tmavý design
- **Smooth animations** - Framer Motion animace pro scroll reveal
- **Responsive design** - Optimalizováno pro všechna zařízení
- **Modern UI elements** - Glassmorphism, gradienty, hover efekty
- **Microinteractions** - Jemné interakce pro lepší UX

## 📝 Sekce

1. **Hero** - Úvodní sekce s představením
2. **O mně** - Informace o zkušenostech a cestě k IT
3. **Dovednosti** - Technologie a úrovně znalostí
4. **Služby** - Nabízené služby
5. **Projekty** - Portfolio projektů
6. **Proces práce** - Jak probíhá spolupráce
7. **Kontakt** - Kontaktní formulář

## 🔧 Build pro produkci

```bash
npm run build
npm start
```

## 📄 License

Všechna práva vyhrazena © 2024 Filip Koudelníček

