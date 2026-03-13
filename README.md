# Booking SaaS

Plateforme de réservation en ligne pour professionnels.

## ✅ Repo Initialisé

Le projet a été créé avec Next.js 15 (App Router), TypeScript et Tailwind CSS.

## Structure créée

```
booking-saas/
├── package.json              ✅ Dépendances Next.js, React, TypeScript
├── tsconfig.json             ✅ Config TypeScript strict
├── tailwind.config.ts        ✅ Config Tailwind CSS
├── next.config.ts            ✅ Config Next.js
├── src/
│   └── app/
│       ├── layout.tsx        ✅ Root layout
│       ├── page.tsx          ✅ Landing page
│       ├── login/page.tsx    ✅ Page connexion
│       ├── register/page.tsx ✅ Page inscription
│       └── globals.css       ✅ Styles Tailwind
├── src/lib/
│   ├── prisma.ts             ✅ Client Prisma
│   ├── auth.ts               ✅ Config Auth placeholder
│   └── utils.ts              ✅ Helpers
└── prisma/
    └── schema.prisma         ✅ Schéma DB
```

## Stack technique

- **Next.js 15.3.6** (App Router)
- **TypeScript 5** (strict)
- **Tailwind CSS 3.4.17**
- **Prisma 6.5** (ORM)

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

- **Commit** : `2d7274e` - Initial commit: Next.js 15 + TypeScript + Tailwind + Prisma setup
- **Status** : Working tree clean