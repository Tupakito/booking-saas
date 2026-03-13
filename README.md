# Rendez — SaaS de réservation pour commerces locaux

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js" alt="Next.js 14" />
  <img src="https://img.shields.io/badge/TypeScript-5.3-blue?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Prisma-5.7-2D3748?style=flat-square&logo=prisma" alt="Prisma" />
  <img src="https://img.shields.io/badge/PostgreSQL-15-4169E1?style=flat-square&logo=postgresql" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-black?style=flat-square&logo=vercel" alt="Vercel" />
</p>

<p align="center">
  <strong>Version</strong>: 0.1.0-alpha | <strong>Statut</strong>: 🔧 Setup technique | <strong>Node</strong>: ≥18.0.0
</p>

---

## 🚀 Quickstart (5 minutes)

```bash
# 1. Cloner
git clone <repo>
cd booking-saas

# 2. Installer
npm install

# 3. Variables d'environnement
cp .env.example .env.local
# → Éditer .env.local (voir section Configuration)

# 4. Database (option A: Docker local)
docker-compose up -d postgres

# 5. Database (option B: Neon cloud)
# → Copier DATABASE_URL depuis console Neon

# 6. Initialiser la DB
npx prisma migrate dev --name init
npx prisma db seed

# 7. Lancer le dev server
npm run dev
# → http://localhost:3000
```

---

## 📋 Prérequis

| Outil | Version | Installation |
|-------|---------|--------------|
| Node.js | ≥18.0.0 | [nodejs.org](https://nodejs.org) |
| npm | ≥9.0.0 | Inclus avec Node |
| Docker | ≥24.0 | [docker.com](https://docker.com) (optionnel) |
| Git | ≥2.40 | [git-scm.com](https://git-scm.com) |

---

## ⚙️ Configuration

### 1. Database (obligatoire)

**Option A: Docker (recommandé pour le dev)**
```bash
docker-compose up -d postgres
# DATABASE_URL="postgresql://postgres:postgres@localhost:5432/booking_saas?schema=public"
```

**Option B: Neon (recommandé pour la prod)**
1. Créer compte sur [neon.tech](https://neon.tech)
2. Nouveau projet → Copier `DATABASE_URL`
3. Coller dans `.env.local`

### 2. Authentification (obligatoire)

```bash
# Générer NEXTAUTH_SECRET
openssl rand -base64 32
# → Copier dans .env.local
```

### 3. OAuth Google (optionnel)

1. [Google Cloud Console](https://console.cloud.google.com) → APIs & Services → Credentials
2. Créer OAuth 2.0 Client ID (Web application)
3. Autoriser `http://localhost:3000/api/auth/callback/google`
4. Copier `GOOGLE_CLIENT_ID` et `GOOGLE_CLIENT_SECRET`

### 4. Email Resend (optionnel pour S1)

1. [resend.com](https://resend.com) → API Keys
2. Copier `RESEND_API_KEY`

---

## 📁 Structure du projet

```
booking-saas/
├── 📁 .github/
│   └── workflows/
│       └── ci.yml              # CI/CD GitHub Actions
├── 📁 prisma/
│   ├── schema.prisma           # Modèles de données
│   ├── migrations/             # Migrations versionnées
│   └── seed.ts                 # Données de test
├── 📁 src/
│   ├── 📁 app/                 # Next.js App Router
│   │   ├── (marketing)/        # Landing, pricing (public)
│   │   ├── (auth)/             # Login, register
│   │   ├── (app)/              # Dashboard (auth requis)
│   │   └── (public)/           # Pages réservation client
│   ├── 📁 components/
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── forms/              # Formulaires métier
│   │   └── calendar/           # Composants calendrier
│   ├── 📁 lib/
│   │   ├── prisma.ts           # Client Prisma (singleton)
│   │   ├── auth.ts             # Config Auth.js
│   │   ├── db.ts               # Queries complexes
│   │   └── utils.ts            # Helpers
│   ├── 📁 server/
│   │   ├── actions/            # Server Actions
│   │   └── schemas/            # Zod validations
│   └── 📁 types/               # Types globaux
├── 📁 docs/                    # Documentation
│   ├── architecture.md         # Architecture détaillée
│   ├── database.md             # Documentation DB
│   ├── mvp-backlog.md          # Backlog sprint
│   └── sprint-1.md             # Plan d'exécution
├── 📁 public/                  # Assets statiques
├── .env.example                # Template variables
├── docker-compose.yml          # Dev local
└── package.json                # Dépendances
```

---

## 🛠️ Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Dev server avec hot reload |
| `npm run build` | Build production |
| `npm run start` | Serveur production |
| `npm run lint` | ESLint |
| `npm run type-check` | Vérification TypeScript |
| `npm run db:migrate` | Nouvelle migration Prisma |
| `npm run db:deploy` | Déployer migrations (prod) |
| `npm run db:studio` | GUI Prisma Studio |
| `npm run db:seed` | Seed données de test |
| `npm run db:reset` | Reset DB (dev uniquement) |
| `npm run test` | Tests (à implémenter) |

---

## 🏗️ Stack technique

| Couche | Technologie | Version | Rôle |
|--------|-------------|---------|------|
| **Framework** | Next.js | 14.x | App Router, SSR, API |
| **Langage** | TypeScript | 5.3.x | Type safety |
| **Styling** | Tailwind CSS | 3.4.x | Utility-first CSS |
| **UI** | shadcn/ui | latest | Composants accessibles |
| **Database** | PostgreSQL | 15.x | Données relationnelles |
| **ORM** | Prisma | 5.7.x | Type-safe queries |
| **Auth** | Auth.js | 5.0.0-beta | NextAuth v5 |
| **Validation** | Zod | 3.22.x | Schema validation |
| **Email** | Resend | 2.x | Transactional emails |
| **Payment** | Stripe | 14.x | Connect + Checkout |
| **Hosting** | Vercel | - | Edge deployment |

---

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [Architecture MVP](./docs/architecture.md) | Stack, patterns, flux utilisateurs |
| [Database](./docs/database.md) | Schéma, requêtes, migrations |
| [MVP Backlog](./docs/mvp-backlog.md) | Features, priorités, statuts |
| [Sprint 1](./docs/sprint-1.md) | Plan d'exécution détaillé |

---

## 🚦 Health Checks

```bash
# Vérifier l'installation
npm run type-check    # TypeScript OK ?
npm run lint          # ESLint OK ?

# Vérifier la database
npx prisma validate   # Schema OK ?
npx prisma db pull    # Connexion OK ?

# Vérifier le build
npm run build         # Build production OK ?
```

---

## 🚀 Déploiement

### Vercel (recommandé)

```bash
# CLI
npm i -g vercel
vercel link
vercel --prod

# Ou Git Integration
# 1. Push sur GitHub
# 2. Import repo dans Vercel
# 3. Configurer variables d'environnement
# 4. Deploy auto sur chaque push
```

### Variables d'environnement (Production)

| Variable | Source | Obligatoire |
|----------|--------|-------------|
| `DATABASE_URL` | Neon | ✅ |
| `NEXTAUTH_SECRET` | `openssl rand -base64 32` | ✅ |
| `NEXTAUTH_URL` | `https://votre-domaine.vercel.app` | ✅ |
| `GOOGLE_CLIENT_ID` | Google Cloud | ❌ |
| `GOOGLE_CLIENT_SECRET` | Google Cloud | ❌ |
| `RESEND_API_KEY` | Resend | ❌ |
| `STRIPE_SECRET_KEY` | Stripe Dashboard | ❌ (S2) |

---

## 🎯 Prochaines étapes

### Sprint 1 (En cours)

- [x] Setup repo + Vercel + Neon
- [x] Schema Prisma + migrations
- [ ] Auth NextAuth (login/register)
- [ ] CRUD Services (pro)
- [ ] Gestion disponibilités
- [ ] Page publique `/[slug]`
- [ ] Dashboard calendrier
- [ ] Emails transactionnels
- [ ] Stripe Connect onboarding

### Sprint 2 (À planifier)

- [ ] Paiement Stripe fonctionnel
- [ ] SMS de rappel
- [ ] Annulation/modification RDV
- [ ] Multi-employés

---

## 👥 Équipe

| Rôle | Responsable | Focus |
|------|-------------|-------|
| **Chief-agent** | - | Cadrage, priorisation, décisions |
| **Dev-agent** | - | Implémentation technique, architecture |
| **Growth-agent** | - | Validation marché, acquisition |

---

## 📄 Licence

Propriétaire — Startup en cours de création.

---

<p align="center">
  <sub>Built with ❤️ by the Rendez team</sub>
</p>