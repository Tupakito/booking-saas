# Architecture Technique

## Stack

| Technologie | Version | Usage |
|-------------|---------|-------|
| Next.js | 15.5.12 | Framework React (App Router) |
| TypeScript | 5.x | Typage strict |
| Tailwind CSS | 3.4.17 | Styling utilitaire |
| shadcn/ui | 4.0.6 | Composants UI réutilisables |
| Prisma | 6.5 | ORM base de données |
| Auth.js | 5.0 | Authentification |

## Structure

```
src/
├── app/                    # Routes Next.js
├── components/ui/          # ✅ Composants shadcn/ui
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   └── label.tsx
├── lib/
│   └── utils.ts            # cn() pour merge classes
└── ...

components.json             # Config shadcn/ui
```

## Composants disponibles

| Composant | Usage |
|-----------|-------|
| Button | Actions utilisateur (variants: default, outline, ghost, destructive, link) |
| Card | Conteneurs de contenu (Card, CardHeader, CardContent, CardFooter) |
| Input | Champs de formulaire |
| Label | Étiquettes accessibles |

## Usage exemple

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

<Card>
  <CardContent>
    <Label>Email</Label>
    <Input type="email" />
    <Button>Envoyer</Button>
  </CardContent>
</Card>
```

## Build

✅ Production build fonctionnel
- Routes : `/`, `/login`, `/register`
- Zero vulnerabilities