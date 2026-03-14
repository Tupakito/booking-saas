# Booking SaaS

Plateforme de réservation en ligne pour professionnels.

## Stack technique

- **Framework**: Next.js 15 (App Router)
- **Authentification**: NextAuth v5 (Auth.js)
- **Base de données**: PostgreSQL + Prisma ORM
- **UI**: Tailwind CSS + shadcn/ui
- **Langage**: TypeScript

## Prérequis

- Node.js 18+
- PostgreSQL
- Compte Google Cloud Console (pour OAuth, optionnel)

## Installation

```bash
# 1. Cloner et installer les dépendances
npm install

# 2. Configurer les variables d'environnement
cp .env.example .env
# Éditer .env avec vos valeurs

# 3. Initialiser la base de données
npx prisma migrate dev
npx prisma generate

# 4. Lancer le serveur de développement
npm run dev
```

## Configuration OAuth Google (optionnel)

1. Aller sur [Google Cloud Console](https://console.cloud.google.com/)
2. Créer un projet ou sélectionner un existant
3. Activer l'API Google+ (ou People API)
4. Créer des identifiants OAuth 2.0 (type "Application web")
5. Ajouter `http://localhost:3000/api/auth/callback/google` dans les URI de redirection autorisées
6. Copier le Client ID et Client Secret dans `.env`

## Structure du projet

```
src/
├── app/                    # App Router Next.js
│   ├── api/auth/          # Routes API NextAuth
│   ├── dashboard/         # Espace protégé (nécessite connexion)
│   ├── login/             # Page de connexion
│   ├── register/          # Page d'inscription
│   ├── layout.tsx         # Layout racine
│   └── page.tsx           # Landing page
├── components/
│   └── ui/                # Composants shadcn/ui
├── lib/
│   ├── auth.ts            # Configuration NextAuth
│   ├── prisma.ts          # Client Prisma
│   └── utils.ts           # Utilitaires
├── types/
│   └── next-auth.d.ts     # Types étendus pour NextAuth
├── auth.ts                # Export NextAuth handlers
└── middleware.ts          # Protection des routes
prisma/
└── schema.prisma          # Schéma de base de données
```

## Scripts disponibles

- `npm run dev` - Développement
- `npm run build` - Build de production
- `npm run db:migrate` - Créer une migration Prisma
- `npm run db:studio` - Ouvrir Prisma Studio

## Fonctionnalités

- [x] Authentification (email/password + Google OAuth)
- [x] Protection des routes avec middleware
- [x] Dashboard avec navigation
- [ ] CRUD établissements
- [ ] Gestion des services
- [ ] Système de réservations
- [ ] Calendrier de disponibilités
```