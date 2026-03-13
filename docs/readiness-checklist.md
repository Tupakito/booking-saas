# Readiness Checklist — Build MVP

> **Date**: 13/03/2024 | **Statut**: ⏸️ En attente GO | **Deadline build**: Lun 16/03 14h

---

## ✅ Infrastructure — READY

| Item | Statut | Notes |
|------|--------|-------|
| Repo GitHub | ✅ | `booking-saas` initialisé |
| Next.js 14 | ✅ | App Router, TypeScript |
| Vercel | ✅ | Projet créé, prêt pour deploy |
| Neon PostgreSQL | ✅ | DB provisionnée |
| Prisma | ✅ | Schema complet, migrations prêtes |
| Domaine | ✅ | `rendez.co` (à configurer) |

---

## ✅ Architecture — READY

| Item | Statut | Notes |
|------|--------|-------|
| Schema DB | ✅ | 5 tables, relations, indexes |
| Multi-cibles | ✅ | 3 scénarios (beauté, méca, santé) |
| Auth design | ✅ | NextAuth v5, JWT, middleware |
| API design | ✅ | Server Actions pattern |
| Email design | ✅ | Resend, templates |

---

## ✅ Documentation — READY

| Document | Statut | Emplacement |
|----------|--------|-------------|
| Architecture | ✅ | `docs/architecture.md` |
| MVP Backlog | ✅ | `docs/mvp-backlog.md` |
| Plan de Pivot | ✅ | `docs/pivot-plan.md` |
| Product Strategy | ✅ | `docs/product-strategy.md` |
| Build Plan | ✅ | `docs/build-plan.md` |

---

## ⏸️ Code — STAND-BY

| Composant | Statut | Action si GO |
|-----------|--------|--------------|
| Auth | ⏸️ | Implémenter J1 |
| Services CRUD | ⏸️ | Implémenter J2 |
| Disponibilités | ⏸️ | Implémenter J3 |
| Page publique | ⏸️ | Implémenter J4 |
| Dashboard | ⏸️ | Implémenter J5 |
| Emails | ⏸️ | Implémenter J5 |

---

## ⏸️ Variables d'environnement — À CONFIGURER

```bash
# Obligatoires (tous scénarios)
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="openssl rand -base64 32"
NEXTAUTH_URL="https://rendez.co"

# Optionnel (Google OAuth)
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."

# Optionnel (Emails S1, obligatoire S2)
RESEND_API_KEY="re_..."

# Optionnel (Stripe S2)
STRIPE_SECRET_KEY="sk_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
```

---

## ✅ Landings — READY (3 versions)

| Cible | Statut | Emplacement |
|-------|--------|-------------|
| Beauté | ✅ | `landing-page/` |
| Mécaniciens | ✅ | `landing-page-mecaniciens/` |
| Ostéopathes | ✅ | `landing-page-sante/` |

---

## ⏸️ Prospection — EN COURS

| Canal | Objectif | Statut |
|-------|----------|--------|
| Instagram DMs | 20 messages | ⏳ En cours |
| Facebook posts | 3 posts | ⏳ En cours |
| Appels directs | 5 appels | ⏳ En cours |
| **Total emails** | **≥ 10** | **⏳ Attente** |

---

## Checklist GO/NO-GO Dimanche

### Si GO (≥ 10 emails)
- [ ] Déployer landing beauté en prod
- [ ] Configurer variables d'environnement
- [ ] Démarrer build Lun 16/03 14h
- [ ] Daily standup 10h
- [ ] Démo Vendredi 20/03 16h

### Si PIVOT B (< 5 emails beauté)
- [ ] Déployer landing mécaniciens
- [ ] Adapter copy (devis, pièces)
- [ ] Nouvelle validation 48h
- [ ] Prospection garages

### Si PIVOT C (0-2 emails)
- [ ] Déployer landing ostéopathes
- [ ] Adapter copy (santé, Doctolib)
- [ ] Nouvelle validation 48h
- [ ] Prospection cabinets santé

---

## Dépendances externes

| Service | Usage | Statut |
|---------|-------|--------|
| Neon | Database | ✅ Ready |
| Vercel | Hosting | ✅ Ready |
| Resend | Emails | ⏸️ S1/S2 |
| Stripe | Paiement | ⏸️ S2 |
| Google OAuth | Auth social | ⏸️ Optionnel |

---

## Risques techniques

| Risque | Probabilité | Mitigation |
|--------|-------------|------------|
| NextAuth v5 instable | Moyenne | Tests J1, fallback v4 si bloquant |
| Performance DB | Faible | Indexes, requêtes optimisées |
| Responsive | Faible | Mobile-first, tests device |
| Stripe complexité | Faible | S2 uniquement, pas bloquant S1 |

---

## Verdict

| Domaine | Readiness |
|---------|-----------|
| Infrastructure | ✅ 100% |
| Architecture | ✅ 100% |
| Documentation | ✅ 100% |
| Code | ⏸️ 0% (attente GO) |
| Prospection | ⏳ En cours |

**Prêt à build**: Dès réception GO Dimanche 14h

---

*Checklist de readiness — Dernier update: 13/03/2024 03:15*