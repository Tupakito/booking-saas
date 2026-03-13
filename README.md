# Rendez — MVP Build Ready 🚀

<p align="center">
  <img src="https://img.shields.io/badge/Status-Build%20Ready-brightgreen?style=flat-square" alt="Build Ready" />
  <img src="https://img.shields.io/badge/Decision-Pending-orange?style=flat-square" alt="Decision Pending" />
  <img src="https://img.shields.io/badge/Start-Lun%2016%2F03%2014h-blue?style=flat-square" alt="Start Date" />
</p>

<p align="center">
  <strong>Condition</strong>: GO validation Dim 15/03 14h | <strong>Duration</strong>: 5 days | <strong>Demo</strong>: Ven 20/03 18h
</p>

---

## ⚡ Quick Start (5 minutes)

```bash
# 1. Clone
git clone <repo> booking-saas
cd booking-saas

# 2. Checkout build branch
git checkout build-mvp

# 3. Setup (automated)
./scripts/setup.sh

# 4. Or manual:
npm install
cp .env.example .env.local
# Edit .env.local with your secrets
npx prisma migrate dev
npx prisma db seed
npm run dev
```

**Done!** → http://localhost:3000

---

## 🎯 Build Plan (5 Days)

| Day | Focus | Key Deliverable | Hours |
|-----|-------|-----------------|-------|
| **J1** | Auth | Login/register functional | 14h-19h |
| **J2** | Services | CRUD prestations | 14h-20h |
| **J3** | Slots | Weekly availability UI | 14h-20h |
| **J4** | Public Page | `/[slug]` with calendar | 14h-21h |
| **J5** | Dashboard + Emails | Pro view, notifications | 14h-21h |

**Demo**: Friday 20/03 18h

---

## ✅ Pre-Build Checklist

### Infrastructure (DONE)
- [x] Next.js 14 + TypeScript
- [x] Prisma + PostgreSQL schema
- [x] NextAuth v5 configured
- [x] Vercel ready
- [x] Branch `build-mvp` created

### Documentation (DONE)
- [x] [Build Checklist](docs/build-checklist.md) — Hour-by-hour plan
- [x] [MVP Backlog](docs/mvp-backlog.md) — Detailed stories
- [x] [Architecture](docs/architecture.md) — Technical patterns

### Scripts (READY)
- [x] `scripts/setup.sh` — Full setup
- [x] `scripts/quick-start.sh` — Fast start
- [x] `.env.example` — Environment template

---

## 🚀 Démarrage Lun 16/03 14h

### 14h00 — Kickoff
```bash
git checkout build-mvp
npm install
npx prisma migrate dev
npm run dev
```

### 14h05 — First Commit
Start coding Auth (S1.1)

### 18h00 — J1 Done
Auth complete, test login/register flow

---

## 📁 Repo Structure

```
booking-saas/
├── scripts/
│   ├── setup.sh           # Full setup
│   └── quick-start.sh     # Fast start
├── src/
│   ├── lib/
│   │   ├── auth.ts        # ✅ NextAuth config ready
│   │   ├── prisma.ts      # ✅ Database client
│   │   └── utils.ts       # Helpers
│   ├── app/               # Routes (to implement)
│   └── server/            # Actions (to implement)
├── prisma/
│   ├── schema.prisma      # ✅ Complete schema
│   └── migrations/        # ✅ Ready
├── docs/
│   ├── build-checklist.md # Hour-by-hour plan
│   ├── mvp-backlog.md     # Stories
│   └── architecture.md    # Patterns
└── .env.example           # Environment template
```

---

## 🎯 Success Criteria

| Metric | Target | How to measure |
|--------|--------|----------------|
| Onboarding | < 5 min | Timer test |
| Create service | < 2 min | Timer test |
| Book appointment | < 3 min | Timer test |
| Demo flow | 0 errors | Manual test |
| Mobile responsive | Works | Device test |

---

## 🚨 Emergency Contacts

| Issue | Contact | When |
|-------|---------|------|
| Technical blocker > 1h | chief-agent | Immediately |
| Scope creep | chief-agent | Refuse |
| Delay > 2h | chief-agent | End of day |

---

## Resources

- [Build Checklist](docs/build-checklist.md) — Detailed hour-by-hour
- [MVP Backlog](docs/mvp-backlog.md) — All stories
- [Architecture](docs/architecture.md) — Technical decisions

---

**Status**: 🟢 Build Ready — Awaiting GO signal Sunday 14h

*Repo prepared for immediate build start*