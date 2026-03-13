# Booking SaaS

Plateforme de réservation en ligne pour professionnels.

## ✅ Repo Initialisé et Fonctionnel

Le projet est créé avec Next.js 15, TypeScript, Tailwind CSS et shadcn/ui.

## Stack technique

- **Next.js 15.5.12** (App Router)
- **TypeScript 5** (strict)
- **Tailwind CSS 3.4.17**
- **shadcn/ui** (composants UI)
- **Prisma 6.5** (ORM)

## Structure complète

```
booking-saas/
├── next.config.ts              ✅
├── tsconfig.json               ✅
├── tailwind.config.ts          ✅
├── components.json             ✅ Config shadcn/ui
├── src/
│   ├── app/
│   │   ├── layout.tsx          ✅ Root layout
│   │   ├── page.tsx            ✅ Landing page
│   │   ├── login/page.tsx      ✅ Page connexion
│   │   ├── register/page.tsx   ✅ Page inscription
│   │   └── globals.css         ✅ Styles + CSS variables
│   ├── components/
│   │   └── ui/                 ✅ Composants shadcn/ui
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       └── label.tsx
│   └── lib/
│       ├── prisma.ts
│       ├── auth.ts
│       └── utils.ts
└── prisma/
    └── schema.prisma
```

## Démarrage rapide

```bash
npm install
npm run dev     # ✅ Fonctionnel - http://localhost:3000
```

## Pages disponibles

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/login` | Formulaire connexion |
| `/register` | Formulaire inscription |

## Composants shadcn/ui

- **Button** - Variants: default, outline, ghost, destructive, link
- **Card** - Card, CardHeader, CardContent, CardFooter
- **Input** - Champs de saisie
- **Label** - Étiquettes accessibles

## Git

- **Commits** :
  - `2d7274e` - Initial commit: Next.js + TypeScript + Tailwind + Prisma
  - `8ff7c1e` - Add shadcn/ui with base components