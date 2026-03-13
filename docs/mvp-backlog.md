# MVP Backlog — Rendez

> **Version**: 1.0.0 | **Sprint**: 1 | **Deadline**: 21/03/2024

## Sprint 1 — Progression

### ✅ Done

| ID | Feature | Description | Date |
|----|---------|-------------|------|
| S1-001 | Setup repo + Vercel + Neon | Initialisation projet, config CI/CD, DB provisionnée | 14/03 |
| S1-003 | Schema DB + migrations | Tables complètes avec relations et indexes | 14/03 |
| S1-002 | Auth NextAuth v5 | Login/register email + Google, middleware protection | 15/03 |

### 🔄 In Progress

| ID | Feature | Description | Dépendances | Estimation |
|----|---------|-------------|-------------|------------|
| S1-004 | CRUD Services | Dashboard pro: créer, modifier, supprimer prestations | S1-002 | 1j |

### ⏳ Todo — P0

| ID | Feature | Description | Estimation |
|----|---------|-------------|------------|
| S1-005 | Gestion disponibilités | UI créneaux récurrents par service | 1j |
| S1-006 | Page publique `/[slug]` | URL unique, calendrier client, réservation | 1.5j |
| S1-007 | Dashboard calendrier | Vue pro des réservations | 1j |

### ⏳ Todo — P1

| ID | Feature | Description | Estimation |
|----|---------|-------------|------------|
| S1-008 | Emails transactionnels | Confirmation réservation (Resend) | 0.5j |
| S1-009 | Stripe Connect onboarding | Lien onboarding, stockage accountId | 0.5j |

## Auth Implementation — ✅ Complete

### Features livrées

- ✅ Configuration Auth.js v5 avec Prisma adapter
- ✅ Provider Credentials (email/password)
- ✅ Provider Google OAuth
- ✅ Page `/login` avec design responsive
- ✅ Page `/register` avec création business intégrée
- ✅ API `/api/register` pour inscription
- ✅ Middleware de protection routes `/app/*`
- ✅ Layout dashboard avec navigation
- ✅ Hashing passwords avec bcryptjs

### Fichiers créés

```
src/
├── lib/
│   ├── auth.ts              # Config NextAuth
│   └── password.ts          # Hashing bcrypt
├── app/
│   ├── (app)/
│   │   ├── layout.tsx       # Layout protégé
│   │   └── dashboard/
│   │       └── page.tsx     # Dashboard
│   ├── login/
│   │   └── page.tsx         # Page login
│   ├── register/
│   │   └── page.tsx         # Page register
│   ├── api/
│   │   ├── auth/
│   │   │   └── [...nextauth]/
│   │   │       └── route.ts # API auth
│   │   └── register/
│   │       └── route.ts     # API register
└── middleware.ts            # Protection routes
```

### Variables d'environnement requises

```bash
# Obligatoires
NEXTAUTH_SECRET="openssl rand -base64 32"
NEXTAUTH_URL="http://localhost:3000"

# Optionnel (Google OAuth)
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
```

### Test de l'auth

```bash
# 1. Démarrer le serveur
npm run dev

# 2. Créer un compte
# → http://localhost:3000/register

# 3. Se connecter
# → http://localhost:3000/login

# 4. Accéder au dashboard protégé
# → http://localhost:3000/app/dashboard
```

### Points d'attention

1. **Password hashing** — Utilise bcryptjs avec salt rounds 12
2. **Session JWT** — Stratégie JWT pour compatibilité Edge
3. **Middleware** — Protège toutes les routes `/app/*`
4. **Google OAuth** — Crée automatiquement un business à la première connexion
5. **Slug unique** — Généré automatiquement depuis l'email pour Google, manuel pour credentials

---

## Légende

- ✅ Done — Livré et testé
- 🔄 In Progress — En cours de développement
- ⏳ Todo — Priorisé, prêt à démarrer
- ❌ Blocked — Bloqué par dépendance