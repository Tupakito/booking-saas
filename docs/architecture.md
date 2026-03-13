# Architecture Technique

## Stack

| Technologie | Version |
|-------------|---------|
| Next.js | 15.3.6 |
| React | 18.3.1 |
| TypeScript | 5.9.3 |
| Tailwind CSS | 3.4.17 |
| shadcn/ui | 4.0.6 |

## Dépendances clés

- **next** - Framework React
- **react/react-dom** - UI library
- **typescript** - Typage
- **tailwindcss** - Styling
- **@radix-ui/react-*** - Primitives UI (via shadcn)
- **class-variance-authority** - Variants de composants
- **clsx** - Merge conditionnel de classes
- **tailwind-merge** - Merge sans conflits Tailwind

## Fichiers de config

| Fichier | Usage |
|---------|-------|
| `package.json` | Dépendances et scripts |
| `tsconfig.json` | TypeScript strict mode |
| `tailwind.config.ts` | Thème Tailwind |
| `next.config.ts` | Config Next.js |
| `components.json` | Config shadcn/ui |

## Structure src/

```
src/
├── app/              # Routes Next.js App Router
├── components/ui/    # Composants shadcn/ui
└── lib/              # Utils (cn, prisma, auth)
```