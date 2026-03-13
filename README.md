# Booking SaaS

Plateforme de réservation en ligne pour professionnels.

## ✅ Repo Initialisé avec shadcn/ui

Le projet a été créé avec Next.js 15, TypeScript, Tailwind CSS et **shadcn/ui**.

## Stack technique

- **Next.js 15.5.12** (App Router)
- **TypeScript 5** (strict)
- **Tailwind CSS 3.4.17**
- **shadcn/ui** (composants UI)
- **Prisma 6.5** (ORM)
- **NextAuth v5** (Auth.js)

## Structure du projet

```
booking-saas/
├── src/
│   ├── app/
│   │   ├── login/page.tsx      # Page connexion
│   │   ├── register/page.tsx   # Page inscription
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Landing page
│   │   └── globals.css         # Styles + CSS variables shadcn
│   ├── components/
│   │   └── ui/                 # ✅ Composants shadcn/ui
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       └── label.tsx
│   └── lib/
│       ├── prisma.ts
│       ├── auth.ts
│       └── utils.ts            # cn() helper pour shadcn
├── prisma/
│   └── schema.prisma
├── components.json             # Config shadcn/ui
├── package.json
└── ...
```

## Composants shadcn/ui installés

- `Button` - Boutons avec variants (default, destructive, outline, ghost, link)
- `Card` - Conteneurs avec header, content, footer
- `Input` - Champs de saisie
- `Label` - Étiquettes de formulaire

## Installation

```bash
npm install
npm run dev
```

## Build

```bash
npm run build  # ✅ Testé et fonctionnel
```

## Git

- **Commits** :
  - `2d7274e` - Initial commit: Next.js + TypeScript + Tailwind + Prisma
  - `8ff7c1e` - Add shadcn/ui with base components