# Architecture Technique

## Structure des dossiers

```
src/
├── app/              # Routes Next.js App Router
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Landing page
│   ├── globals.css   # Styles Tailwind + CSS variables
│   ├── login/        # Page connexion
│   └── register/     # Page inscription
├── components/       # Composants React
│   └── ui/           # Composants shadcn/ui
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── label.tsx
└── lib/              # Utils et config
    ├── utils.ts      # cn() helper
    ├── auth.ts       # Auth config
    └── prisma.ts     # Prisma client
```

## Fichiers de configuration

| Fichier | Description |
|---------|-------------|
| `.gitignore` | Exclut node_modules, .next, .env |
| `.env.example` | Template variables d'environnement |
| `package.json` | Dépendances et scripts |
| `tsconfig.json` | Config TypeScript |
| `tailwind.config.ts` | Config Tailwind |
| `components.json` | Config shadcn/ui |