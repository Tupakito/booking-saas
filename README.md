# Booking SaaS

Plateforme de réservation en ligne pour professionnels.

## ✅ Repo Initialisé et poussé sur Git

Le projet a été créé avec Next.js 15 (App Router), TypeScript et Tailwind CSS.

## Stack technique

- **Next.js 15.3.6** (App Router)
- **TypeScript 5** (strict)
- **Tailwind CSS 3.4.17**
- **Prisma 6.5** (ORM)
- **NextAuth v5** (Auth.js)
- **PostgreSQL**

## Structure du projet

```
booking-saas/
├── src/
│   ├── app/                    # Routes Next.js (App Router)
│   │   ├── login/page.tsx      # Page connexion
│   │   ├── register/page.tsx   # Page inscription
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Landing page
│   │   └── globals.css         # Styles Tailwind
│   ├── components/             # Composants React
│   └── lib/                    # Utils & config
│       ├── prisma.ts           # Client Prisma
│       ├── auth.ts             # Config Auth.js
│       └── utils.ts            # Helpers (cn)
├── prisma/
│   └── schema.prisma           # Schéma DB complet
├── package.json                # Dépendances
├── tsconfig.json               # Config TypeScript
├── tailwind.config.ts          # Config Tailwind
└── next.config.ts              # Config Next.js
```

## Installation rapide

```bash
npm install
npm run dev
```

## Build

```bash
npm run build  # ✅ Build production testé et fonctionnel
```

## Pages disponibles

| Route | Description |
|-------|-------------|
| `/` | Landing page avec CTA |
| `/login` | Formulaire de connexion |
| `/register` | Formulaire d'inscription |

## Scripts

- `npm run dev` - Développement (port 3000)
- `npm run build` - Build production
- `npm run db:migrate` - Migrations Prisma
- `npm run db:studio` - Prisma Studio

## Git

- **Commit initial** : `2d7274e` - Initial commit: Next.js 15 + TypeScript + Tailwind + Prisma setup
- **Branche** : master
- **Status** : Working tree clean

## Prochaines étapes

1. [ ] Configurer `.env` avec DATABASE_URL
2. [ ] Setup NextAuth v5 (authentification fonctionnelle)
3. [ ] Créer le dashboard
4. [ ] Implémenter la gestion des services