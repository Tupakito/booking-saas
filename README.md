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
- [x] Structure src/app/
- [x] Structure src/components/
- [x] Structure src/lib/
- [x] Structure src/types/
- [x] Fichiers de base (layout.tsx, page.tsx, globals.css)

## 🛠 Stack technique

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Langage**: [TypeScript](https://www.typescriptlang.org/) (strict mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Authentification**: [NextAuth v5](https://authjs.dev/) (Auth.js)

## 📁 Structure du projet

```
booking-saas/
├── src/
│   ├── app/                    # App Router Next.js
│   │   ├── dashboard/         # Espace connecté
│   │   ├── login/             # Page de connexion
│   │   ├── register/          # Page d'inscription
│   │   ├── globals.css        # Styles globaux Tailwind
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
│   ├── lib/
│   │   ├── auth.ts            # Config NextAuth
│   │   ├── prisma.ts          # Client Prisma
│   │   └── utils.ts           # Utilitaires (cn)
│   └── types/
│       └── next-auth.d.ts     # Types étendus NextAuth
├── prisma/
│   └── schema.prisma          # Schéma de base de données
├── .env.example               # Variables d'environnement
├── components.json            # Config shadcn/ui
├── next.config.ts             # Config Next.js
├── tailwind.config.ts         # Config Tailwind
└── tsconfig.json              # Config TypeScript
```

## 📝 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Développement avec hot reload |
| `npm run build` | Build de production |
| `npm run start` | Démarrer le serveur de production |
| `npm run lint` | Linter le code |
| `npm run db:generate` | Générer le client Prisma |
| `npm run db:migrate` | Créer/appliquer les migrations |
| `npm run db:studio` | Ouvrir Prisma Studio |

## ⚙️ Configuration

1. Copier le fichier `.env.example` vers `.env` :
   ```bash
   cp .env.example .env
   ```

2. Configurer les variables d'environnement :
   - `DATABASE_URL` : URL de connexion PostgreSQL
   - `NEXTAUTH_SECRET` : Clé secrète pour JWT (min 32 caractères)
   - `NEXTAUTH_URL` : URL de l'application

3. Lancer l'application :
   ```bash
   npm run dev
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

## 📄 Licence

Propriétaire - Tous droits réservés
```