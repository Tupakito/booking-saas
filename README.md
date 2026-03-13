# Booking SaaS

Plateforme de réservation en ligne pour professionnels.

## ✅ Repo Initialisé

Le projet est créé avec Next.js 15, TypeScript, Tailwind CSS et shadcn/ui.

## Dépendances installées

| Package | Version |
|---------|---------|
| next | 15.3.6 |
| react | 18.3.1 |
| typescript | 5.9.3 |
| tailwindcss | 3.4.17 |
| @radix-ui/react-* | via shadcn |
| class-variance-authority | 0.7.1 |
| clsx | 2.1.1 |
| tailwind-merge | 3.5.0 |

## Structure

```
booking-saas/
├── package.json              ✅
├── tsconfig.json             ✅
├── tailwind.config.ts        ✅
├── next.config.ts            ✅
├── components.json           ✅ shadcn config
├── src/
│   ├── app/
│   │   ├── layout.tsx        ✅
│   │   ├── page.tsx          ✅
│   │   ├── login/page.tsx    ✅
│   │   ├── register/page.tsx ✅
│   │   └── globals.css       ✅
│   ├── components/ui/        ✅ shadcn components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── label.tsx
│   └── lib/
│       ├── utils.ts          ✅ cn() helper
│       ├── prisma.ts
│       └── auth.ts
└── prisma/
    └── schema.prisma
```

## Démarrage

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # Build production
```