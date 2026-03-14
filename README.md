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
│   ├── app/
│   │   ├── dashboard/          # Espace connecté
│   │   │   ├── page.tsx       # Dashboard avec calendrier et réservations
│   │   │   ├── layout.tsx     # Layout dashboard avec navigation
│   │   │   ├── services/      # Gestion des services
│   │   │   └── settings/      # Paramètres
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
│   │       ├── calendar.tsx   # Calendrier 7 jours
│   │       ├── table.tsx      # Tableau de réservations
│   │       ├── dialog.tsx     # Modal nouveau RDV
│   │       └── badge.tsx      # Badges de statut
│   └── lib/
│       ├── auth.ts
│       ├── prisma.ts
│       └── utils.ts
├── prisma/
│   └── schema.prisma
└── ...
```

## 🎯 Fonctionnalités Dashboard

- **Header** avec nom du business et déconnexion
- **Vue calendrier** avec 7 jours glissants
- **Liste des réservations** du jour avec statuts (confirmé/en attente/annulé)
- **Bouton 'Nouveau RDV'** ouvrant un modal
- **Navigation** vers Settings et Services

## 📝 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Développement avec hot reload |
| `npm run build` | Build de production |
| `npm run start` | Démarrer le serveur de production |
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
   ```

4. Lancer l'application :
   ```bash
   npm run dev
   ```

## 📄 Licence

Propriétaire - Tous droits réservés
```