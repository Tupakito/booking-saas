# Architecture Technique

## Stack

| Technologie | Version | Usage |
|-------------|---------|-------|
| Next.js | 15.3.6 | Framework React (App Router) |
| TypeScript | 5.x | Typage strict |
| Tailwind CSS | 3.4.17 | Styling utilitaire |
| Prisma | 6.5 | ORM base de données |

## Fichiers créés

| Fichier | Description |
|---------|-------------|
| `package.json` | Dépendances : next, react, typescript, tailwindcss, prisma |
| `tsconfig.json` | TypeScript strict mode, paths `@/*` |
| `tailwind.config.ts` | Thème personnalisé avec couleurs primary |
| `next.config.ts` | Config Next.js avec typedRoutes |
| `src/app/layout.tsx` | Root layout avec metadata |
| `src/app/page.tsx` | Landing page avec hero section |

## Build

✅ Production build fonctionnel
- Routes : `/`, `/login`, `/register`
- Zero vulnerabilities