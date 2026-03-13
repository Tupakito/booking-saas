# Booking SaaS

Plateforme de réservation en ligne pour professionnels.

## Stack technique

- **Next.js 14** (App Router)
- **TypeScript** (strict)
- **Tailwind CSS** (v3.4)
- **Prisma** (ORM)
- **NextAuth v5** (Auth.js)
- **PostgreSQL**

## Structure du projet

```
src/
├── app/              # Routes Next.js (App Router)
├── components/       # Composants React réutilisables
└── lib/              # Utils, Prisma client, Auth config

prisma/
└── schema.prisma     # Schéma de base de données
```

## Installation

```bash
# 1. Installer les dépendances
npm install

# 2. Configurer les variables d'environnement
cp .env.example .env
# Éditer .env avec vos credentials

# 3. Générer le client Prisma et migrer
npm run db:generate
npm run db:migrate

# 4. Lancer le serveur de développement
npm run dev
```

## Variables d'environnement requises

```env
DATABASE_URL="postgresql://user:password@localhost:5432/booking_saas"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="votre-secret-32-caracteres-min"
```

## Scripts disponibles

- `npm run dev` - Développement
- `npm run build` - Build production
- `npm run db:migrate` - Créer/appliquer les migrations
- `npm run db:studio` - Ouvrir Prisma Studio

## Prochaines étapes

1. [ ] Setup Auth (NextAuth v5)
2. [ ] Créer les pages login/register
3. [ ] Implémenter le dashboard
4. [ ] Gestion des services
5. [ ] Système de réservation