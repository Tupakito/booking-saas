# Booking-Saas — Squelette Renforcé 🚀

<p align="center">
  <img src="https://img.shields.io/badge/Status-Building-brightgreen?style=flat-square" alt="Building" />
  <img src="https://img.shields.io/badge/Stack-Next.js%2014%20%2B%20Prisma-blue?style=flat-square" alt="Stack" />
  <img src="img.shields.io/badge/Components-UI%20%2B%20Actions-orange?style=flat-square" alt="Components" />
</p>

<p align="center">
  <strong>SaaS de prise de rendez-vous</strong> pour commerces locaux • <strong>19€/mois</strong>
</p>

---

## ✅ Squelette Renforcé — Ce qui fonctionne

### 🎨 Composants UI
| Composant | Fichier | Usage |
|-----------|---------|-------|
| **Button** | `src/components/ui/button.tsx` | Boutons primaires, secondaires, danger |
| **Input** | `src/components/ui/input.tsx` | Champs formulaire avec validation |
| **Card** | `src/components/ui/card.tsx` | Conteneurs de contenu |

### ⚡ Server Actions
| Action | Fichier | Usage |
|--------|---------|-------|
| **Services** | `src/server/actions/services.ts` | CRUD services complets |
| **Slots** | `src/server/actions/slots.ts` | Gestion créneaux |

### 📐 Validations
| Schema | Fichier | Usage |
|--------|---------|-------|
| **Service** | `src/server/schemas/service.ts` | Validation Zod services |
| **Slot** | `src/server/schemas/service.ts` | Validation Zod créneaux |

### 🛠️ Utilitaires
| Utilitaire | Fichier | Fonctions |
|------------|---------|-----------|
| **Format** | `src/lib/utils.ts` | formatPrice, formatDuration, formatDate |

### 📄 Pages Fonctionnelles
| Page | Fichier | Statut |
|------|---------|--------|
| **Services liste** | `src/app/(app)/services/page.tsx` | ✅ Fonctionnelle |
| **Nouveau service** | `src/app/(app)/services/new/page.tsx` | ✅ Formulaire complet |
| **Dashboard** | `src/app/(app)/dashboard/page.tsx` | ✅ Layout + navigation |

### 🗄️ Database
| Fichier | Description |
|---------|-------------|
| **Seed** | `prisma/seed.ts` | Données de test complètes |

---

## 🚀 Démarrage Rapide

```bash
# 1. Clone & install
git clone <repo> booking-saas
cd booking-saas
npm install

# 2. Environment
cp .env.example .env.local
# Éditer DATABASE_URL

# 3. Database
npx prisma migrate dev --name init
npx prisma db seed

# 4. Dev server
npm run dev
```

**Credentials demo**:
- Email: `demo@booking-saas.app`
- Password: `demo123456`

---

## 📁 Structure du Projet

```
booking-saas/
├── src/
│   ├── app/
│   │   ├── (app)/              # Dashboard protégé
│   │   │   ├── dashboard/
│   │   │   ├── services/       # ✅ Liste + création
│   │   │   └── layout.tsx      # ✅ Sidebar + auth
│   │   ├── (public)/           # Pages publiques
│   │   ├── api/
│   │   ├── login.tsx           # ✅ Login
│   │   ├── register.tsx        # ✅ Register
│   │   └── page.tsx            # ✅ Landing
│   ├── components/
│   │   └── ui/                 # ✅ Button, Input, Card
│   ├── lib/
│   │   ├── auth.ts             # ✅ NextAuth config
│   │   ├── prisma.ts           # ✅ Database client
│   │   └── utils.ts            # ✅ Format helpers
│   └── server/
│       ├── actions/            # ✅ services.ts, slots.ts
│       └── schemas/            # ✅ service.ts (Zod)
├── prisma/
│   ├── schema.prisma           # ✅ Database schema
│   └── seed.ts                 # ✅ Test data
└── README.md                   # Ce fichier
```

---

## 🎯 Prochaines Étapes

### Sprint 0 — Foundation (En cours)
- [x] Auth (login/register)
- [x] Composants UI
- [x] Server Actions services
- [x] Pages services
- [ ] Édition service
- [ ] Gestion slots UI
- [ ] Page publique `/[slug]`

### Sprint 1 — Core
- [ ] Calendrier client
- [ ] Création réservation
- [ ] Emails confirmation
- [ ] Dashboard stats

### Sprint 2 — Polish
- [ ] Tests E2E
- [ ] Responsive mobile
- [ ] Déploiement production

---

## 🏗️ Architecture

- **Frontend**: Next.js 14 App Router + TypeScript + Tailwind CSS
- **UI**: Composants custom (Button, Input, Card)
- **Backend**: Next.js Server Actions
- **Validation**: Zod schemas
- **Database**: PostgreSQL + Prisma ORM
- **Auth**: NextAuth.js v5

---

## 💡 Règles de Code

1. **Composants UI** dans `src/components/ui/`
2. **Server Actions** dans `src/server/actions/`
3. **Validations Zod** dans `src/server/schemas/`
4. **Pages dashboard** dans `src/app/(app)/`
5. **Revalidation** après mutations avec `revalidatePath`

---

**Status**: 🏗️ Squelette renforcé — Composants UI + Actions + Pages fonctionnelles

*Booking-Saas — Prêt pour le développement des features métier*