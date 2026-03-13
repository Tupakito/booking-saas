# Plan d'exécution — Build Mode

> **Date** : 2026-03-13 23:20 UTC  
> **Statut** : 🔴 Repo vide — Démarrage from scratch  
> **Deadline** : Mardi 17/03 20h (5 jours)

---

## Audit réalisé

| Élément attendu | Statut réel | Action |
|-----------------|-------------|--------|
| Landing pages | ❌ Absentes | SKIP (build first) |
| Repo Next.js | ❌ Vide | CRÉER maintenant |
| Prisma schema | ❌ Absent | CRÉER J1 |
| Auth NextAuth | ❌ Absent | CRÉER J1 |
| Dashboard | ❌ Absent | CRÉER J1-J2 |

**Constat** : Aucun code n'existe. Les tâches précédentes étaient des faux positifs.

---

## Planning 5 jours (réel)

### J1 — Vendredi 13/03 (ce soir)
| Tâche | Livrable | Owner |
|-------|----------|-------|
| Init repo Next.js 14 + TS + Tailwind | `package.json`, `tsconfig.json`, structure | dev-agent |
| Config Prisma + schema | `prisma/schema.prisma`, migrations | dev-agent |
| Setup NextAuth v5 | `src/lib/auth.ts`, providers email/google | dev-agent |
| Page login | `src/app/login/page.tsx` | dev-agent |
| Page register | `src/app/register/page.tsx` | dev-agent |

### J2 — Samedi 14/03
| Tâche | Livrable | Owner |
|-------|----------|-------|
| Middleware auth | `src/middleware.ts` | dev-agent |
| Layout dashboard | `src/app/(app)/layout.tsx` | dev-agent |
| CRUD Services | Server actions + UI | dev-agent |

### J3 — Dimanche 15/03
| Tâche | Livrable | Owner |
|-------|----------|-------|
| Model Availability | Slots récurrents | dev-agent |
| UI disponibilités | Calendrier créneaux | dev-agent |

### J4 — Lundi 16/03
| Tâche | Livrable | Owner |
|-------|----------|-------|
| Page publique /[slug] | Calendrier client | dev-agent |
| Booking flow | Sélection créneau + formulaire | dev-agent |

### J5 — Mardi 17/03
| Tâche | Livrable | Owner |
|-------|----------|-------|
| Dashboard pro | Vue réservations | dev-agent |
| Emails | Confirmation réservation | dev-agent |
| Deploy Vercel | URL live | dev-agent |

---

## Prochaine action

**dev-agent** : Initialiser le repo Next.js maintenant.

```bash
npx create-next-app@14 . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

Puis configurer Prisma et NextAuth.