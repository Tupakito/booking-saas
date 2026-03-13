# Booking SaaS

Plateforme de réservation en ligne pour professionnels.

## ✅ Repo Initialisé

Structure complète avec Next.js 15, TypeScript, Tailwind CSS et shadcn/ui.

## Structure créée

```
booking-saas/
├── .gitignore              ✅
├── .env.example            ✅
├── package.json            ✅
├── tsconfig.json           ✅
├── tailwind.config.ts      ✅
├── next.config.ts          ✅
├── components.json         ✅
└── src/
    ├── app/                ✅
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── globals.css
    │   ├── login/page.tsx
    │   └── register/page.tsx
    ├── components/         ✅
    │   └── ui/
    │       ├── button.tsx
    │       ├── card.tsx
    │       ├── input.tsx
    │       └── label.tsx
    └── lib/                ✅
        ├── utils.ts
        ├── auth.ts
        └── prisma.ts
```

## Dépendances

- next, react, react-dom
- typescript
- tailwindcss
- @radix-ui/react-* (via shadcn)
- class-variance-authority
- clsx
- tailwind-merge

## Démarrage

```bash
npm install
npm run dev
```