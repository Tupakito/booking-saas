# Rendez — SaaS de réservation pour commerces locaux

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js" alt="Next.js 14" />
  <img src="https://img.shields.io/badge/TypeScript-5.3-blue?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Prisma-5.7-2D3748?style=flat-square&logo=prisma" alt="Prisma" />
  <img src="https://img.shields.io/badge/PostgreSQL-15-4169E1?style=flat-square&logo=postgresql" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/NextAuth-v5-green?style=flat-square" alt="NextAuth" />
</p>

<p align="center">
  <strong>Version</strong>: 0.1.0-alpha | <strong>Statut</strong>: 🔧 Sprint 1 en cours | <strong>Node</strong>: ≥18.0.0
</p>

---

## 🚀 Quickstart

```bash
# 1. Cloner et installer
git clone <repo>
cd booking-saas
npm install

# 2. Variables d'environnement
cp .env.example .env.local
# Éditer avec vos secrets (voir ci-dessous)

# 3. Database
npx prisma migrate dev
npx prisma db seed

# 4. Lancer
npm run dev
# → http://localhost:3000
```

---

## ⚙️ Configuration

### Variables d'environnement

```bash
# Obligatoires
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="openssl rand -base64 32"
NEXTAUTH_URL="http://localhost:3000"

# Optionnel (Google OAuth)
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
```

---

## ✅ Features implémentées

| Feature | Statut | Description |
|---------|--------|-------------|
| Auth | ✅ | Login/register email + Google OAuth |
| Database | ✅ | Schema complet avec Prisma |
| Dashboard | ✅ | Vue protégée avec navigation |
| Services | 🔄 | CRUD en cours |
| Disponibilités | ⏳ | À implémenter |
| Page publique | ⏳ | À implémenter |

---

## 📁 Structure

```
src/
├── app/
│   ├── (app)/           # Dashboard protégé
│   ├── login/           # Page login
│   ├── register/        # Page register
│   └── api/
│       ├── auth/        # NextAuth API
│       └── register/    # API inscription
├── lib/
│   ├── auth.ts          # Config auth
│   ├── prisma.ts        # Database client
│   └── password.ts      # Hashing
└── middleware.ts        # Protection routes
```

---

## 📚 Documentation

- [MVP Backlog](./docs/mvp-backlog.md)
- [Architecture](./docs/architecture.md)

---

*Projet en développement actif*