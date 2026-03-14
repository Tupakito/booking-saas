```markdown
# Booking SaaS

Plateforme de réservation en ligne pour professionnels.

## 🚀 Démarrage rapide

```bash
# Installation des dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## ✅ Vérification installation

Le projet est initialisé avec :
- [x] Next.js 15 (App Router)
- [x] TypeScript (strict mode)
- [x] Tailwind CSS
- [x] shadcn/ui
- [x] src/app/
- [x] src/lib/
- [x] src/components/
- [x] Git initialisé
- [x] Commit initial prêt

## 🛠 Stack technique

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Langage**: [TypeScript](https://www.typescriptlang.org/) (strict mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Versioning**: Git

## 📁 Structure du projet

```
booking-saas/
├── src/
│   ├── app/                    # App Router Next.js
│   │   ├── dashboard/         # Espace connecté
│   │   ├── login/             # Page de connexion
│   │   ├── register/          # Page d'inscription
│   │   ├── globals.css        # Styles globaux
│   │   ├── layout.tsx         # Layout racine
│   │   └── page.tsx           # Landing page
│   ├── components/
│   │   └── ui/                # Composants shadcn/ui
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── badge.tsx
│   │       ├── calendar.tsx
│   │       ├── dialog.tsx
│   │       └── table.tsx
│   ├── lib/
│   │   ├── auth.ts            # Config NextAuth
│   │   ├── prisma.ts          # Client Prisma
│   │   └── utils.ts           # Utilitaires
│   └── types/
│       └── next-auth.d.ts     # Types étendus
├── .git/                       # Repository Git
├── .env.example               # Variables d'environnement
├── components.json            # Config shadcn/ui
├── next.config.ts             # Config Next.js
├── tailwind.config.ts         # Config Tailwind
├── tsconfig.json              # Config TypeScript
└── package.json               # Dépendances
```

## 📝 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Développement avec hot reload |
| `npm run build` | Build de production |
| `npm run start` | Démarrer le serveur de production |
| `npm run lint` | Linter le code |

## 🔄 Git

Le repository Git est initialisé. Pour faire le commit initial :

```bash
# Voir les fichiers modifiés
git status

# Ajouter tous les fichiers
git add .

# Commit initial
git commit -m "Initial commit: Next.js + TypeScript + Tailwind + shadcn/ui"

# Pousser sur un remote (optionnel)
git remote add origin https://github.com/username/booking-saas.git
git push -u origin main
```

## 🎨 shadcn/ui

Le projet utilise shadcn/ui pour les composants UI. Pour ajouter un composant :
```bash
npx shadcn add <nom-du-composant>
```

## 📄 Licence

Propriétaire - Tous droits réservés
```