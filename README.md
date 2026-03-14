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
- [x] shadcn/ui (CLI)
- [x] Structure src/app/
- [x] Structure src/components/
- [x] Git initialisé

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
│   │       ├── calendar.tsx
│   │       ├── table.tsx
│   │       ├── dialog.tsx
│   │       └── badge.tsx
│   └── lib/
│       └── utils.ts           # Utilitaires
├── .git/                       # Repository Git
├── components.json            # Config shadcn/ui
├── next.config.ts             # Config Next.js
├── tailwind.config.ts         # Config Tailwind
├── tsconfig.json              # Config TypeScript
└── package.json               # Dépendances
```

## 🎨 shadcn/ui

Le projet utilise shadcn/ui initialisé avec le CLI :
```bash
npx shadcn@latest init
```

Pour ajouter un composant :
```bash
npx shadcn add <nom-du-composant>
```

## 📝 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Développement avec hot reload |
| `npm run build` | Build de production |
| `npm run start` | Démarrer le serveur de production |
| `npm run lint` | Linter le code |

## 🔄 Git

Le repository Git est initialisé. Pour pousser sur un remote :

```bash
# Ajouter un remote (exemple GitHub)
git remote add origin https://github.com/username/booking-saas.git

# Pousser le code
git add .
git commit -m "Initial commit: Next.js + TypeScript + Tailwind + shadcn/ui"
git push -u origin main
```

## 📄 Licence

Propriétaire - Tous droits réservés
```