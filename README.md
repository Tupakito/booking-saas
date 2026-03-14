```markdown
# Booking SaaS

Plateforme de réservation en ligne pour professionnels.

## 🚀 Démarrage rapide (Local)

```bash
# 1. Installation des dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## ✅ Vérification installation

Le projet est initialisé et fonctionnel en local avec :
- [x] Next.js 15 (App Router)
- [x] TypeScript (strict mode)
- [x] Tailwind CSS
- [x] shadcn/ui
- [x] package.json
- [x] tsconfig.json
- [x] tailwind.config.ts
- [x] app/layout.tsx
- [x] app/page.tsx
- [x] Composants shadcn/ui (button, input, card)

## 🛠 Stack technique

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Langage**: [TypeScript](https://www.typescriptlang.org/) (strict mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)

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
│   │       ├── button.tsx     # Bouton
│   │       ├── card.tsx       # Card
│   │       ├── input.tsx      # Input
│   │       ├── label.tsx      # Label
│   │       ├── badge.tsx      # Badge
│   │       ├── calendar.tsx   # Calendrier
│   │       ├── dialog.tsx     # Dialog/Modal
│   │       └── table.tsx      # Tableau
│   └── lib/
│       └── utils.ts           # Utilitaires (cn)
├── .env.example               # Variables d'environnement
├── components.json            # Config shadcn/ui
├── next.config.ts             # Config Next.js
├── tailwind.config.ts         # Config Tailwind
├── tsconfig.json              # Config TypeScript
└── package.json               # Dépendances
```

## 🎨 Composants shadcn/ui

Les composants de base sont installés :

| Composant | Fichier | Description |
|-----------|---------|-------------|
| Button | `button.tsx` | Bouton avec variants |
| Card | `card.tsx` | Carte avec header/content/footer |
| Input | `input.tsx` | Champ de saisie |
| Label | `label.tsx` | Étiquette de formulaire |
| Badge | `badge.tsx` | Badge de statut |
| Calendar | `calendar.tsx` | Calendrier interactif |
| Dialog | `dialog.tsx` | Modal/Dialog |
| Table | `table.tsx` | Tableau de données |

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

## ⚙️ Configuration locale

1. Copier le fichier `.env.example` vers `.env` :
   ```bash
   cp .env.example .env
   ```

2. Lancer l'application :
   ```bash
   npm run dev
   ```

## 📄 Licence

Propriétaire - Tous droits réservés
```