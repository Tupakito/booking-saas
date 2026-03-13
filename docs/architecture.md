# Architecture Technique

## Stack

| Technologie | Version | Usage |
|-------------|---------|-------|
| Next.js | 15.5.12 | Framework React (App Router) |
| TypeScript | 5.x | Typage strict |
| Tailwind CSS | 3.4.17 | Styling utilitaire |
| shadcn/ui | 4.0.6 | Composants UI |
| Prisma | 6.5 | ORM |

## Fichiers créés

| Fichier | Description |
|---------|-------------|
| `next.config.ts` | Config Next.js avec typedRoutes |
| `tsconfig.json` | TypeScript strict, paths `@/*` |
| `tailwind.config.ts` | Thème Tailwind |
| `src/app/layout.tsx` | Root layout avec font |
| `src/app/page.tsx` | Landing page |
| `src/components/ui/*` | Composants shadcn/ui |

## Composants UI disponibles

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
```

## Dev Server

✅ `npm run dev` fonctionnel
- Local: http://localhost:3000
- Ready in 2s