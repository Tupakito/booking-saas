```markdown
# Booking SaaS

Plateforme de réservation en ligne pour professionnels.

## 🚀 Démarrage rapide

```bash
# Installation des dépendances
npm install

# Générer le client Prisma
npx prisma generate

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
- [x] Prisma
- [x] package.json
- [x] tsconfig.json
- [x] tailwind.config.ts
- [x] app/layout.tsx
- [x] lib/prisma.ts
- [x] schema.prisma
- [x] .env.example

## 🛠 Stack technique

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Langage**: [TypeScript](https://www.typescriptlang.org/) (strict mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Authentification**: [NextAuth v5](https://authjs.dev/) (Auth.js)
- **Base de données**: [PostgreSQL](https://www.postgresql.org/) + [Prisma](https://www.prisma.io/)

## 📁 Structure du projet

```
booking-saas/
├── src/
│   ├── app/                    # App Router Next.js
│   │   ├── dashboard/         # Espace connecté (prêt pour auth)
│   │   ├── login/             # Page de connexion
│   │   ├── register/          # Page d'inscription
│   │   ├── globals.css        # Styles globaux
│   │   ├── layout.tsx         # Layout racine
│   │   └── page.tsx           # Landing page
│   ├── components/
│   │   └── ui/                # Composants shadcn/ui
│   ├── lib/
│   │   ├── auth.ts            # Config NextAuth
│   │   ├── prisma.ts          # Client Prisma (singleton)
│   │   └── utils.ts           # Utilitaires
│   └── types/
│       └── next-auth.d.ts     # Types étendus
├── prisma/
│   └── schema.prisma          # Schéma de base de données
├── .env.example               # Variables d'environnement
├── components.json            # Config shadcn/ui
├── next.config.ts             # Config Next.js
├── tailwind.config.ts         # Config Tailwind
└── tsconfig.json              # Config TypeScript
```

## 🗄 Prisma

Le client Prisma est configuré en singleton dans `src/lib/prisma.ts` pour éviter les problèmes en développement.

### Modèles disponibles :

- **User** - Utilisateurs (auth + rôle)
- **Account** - Comptes OAuth
- **Session** - Sessions utilisateur
- **Business** - Établissements
- **Service** - Services proposés
- **Booking** - Réservations
- **Availability** - Disponibilités

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

3. Initialiser la base de données :
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

4. Lancer l'application :
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

## 🔐 Prêt pour Auth et Dashboard

La base est prête pour :
- Authentification avec NextAuth v5 (Prisma adapter inclus)
- Dashboard avec protection de routes
- Gestion des réservations
- Gestion des services

## 📄 Licence

Propriétaire - Tous droits réservés
```