# Sprint 1 — Plan d'exécution

## Contexte

**Approche** : Validation-first (48h) puis développement (8 jours)

**Condition de démarrage** : 10 pré-inscriptions validées sur la landing

---

## Phase 1 : Validation (48h)

| Tâche | Assigné | Livrable | Deadline |
|-------|---------|----------|----------|
| V1 | Landing page "Rendez" + formulaire pré-inscription | growth-agent | Page live sur Vercel | Ven 13/03 12h |
| V2 | 10 interviews commerçants | growth-agent | 10 transcripts + analyse | Ven 13/03 18h |
| V3 | Décision go/no-go | chief-agent | Décision écrite | Sam 14/03 12h |

**Critère GO** : ≥ 10 pré-inscriptions OU feedback ultra-positif des interviews

---

## Phase 2 : Développement (8 jours)

Si validation GO, démarrage immédiat Sam 14/03 après-midi.

### Planning détaillé

#### Jour 1 — Sam 14/03 : Setup & Fondations

| Tâche | Description | Livrable |
|-------|-------------|----------|
| 1.1 | Setup repo Next.js + shadcn/ui | Repo initialisé, push GitHub |
| 1.2 | Config Vercel + Neon | Projet Vercel lié, DB provisionnée |
| 1.3 | Variables d'environnement | `.env.local` template + documentation |

**Definition of Done** : `npm run dev` fonctionne, déploiement Vercel OK

---

#### Jour 2 — Dim 15/03 : Auth & Database

| Tâche | Description | Livrable |
|-------|-------------|----------|
| 2.1 | Schema Prisma complet | `schema.prisma` avec toutes les tables |
| 2.2 | Migrations & seed | `migrate dev` + seed données test |
| 2.3 | Config Auth.js | `auth.ts` avec providers credentials + Google |
| 2.4 | Middleware auth | Protection routes `/app/*` |
| 2.5 | UI auth | Pages `/login`, `/register` fonctionnelles |

**Definition of Done** : Inscription + connexion fonctionnelles en local et sur Vercel

---

#### Jour 3 — Lun 16/03 : Services (CRUD)

| Tâche | Description | Livrable |
|-------|-------------|----------|
| 3.1 | Server Action createService | Création prestation avec validation Zod |
| 3.2 | Server Action updateService | Modification prestation |
| 3.3 | Server Action deleteService | Suppression (soft delete) |
| 3.4 | Server Action listServices | Liste paginée |
| 3.5 | UI dashboard services | Table + formulaire création/édition |

**Definition of Done** : Pro peut créer, modifier, supprimer ses services

---

#### Jour 4 — Mar 17/03 : Disponibilités

| Tâche | Description | Livrable |
|-------|-------------|----------|
| 4.1 | Schema Slot (disponibilités) | Table `Slot` liée à Service |
| 4.2 | UI créneaux récurrents | Sélecteur jour + plages horaires |
| 4.3 | Server Action saveSlots | Sauvegarde créneaux par service |
| 4.4 | Génération créneaux disponibles | Fonction calcul slots libres |

**Definition of Done** : Pro peut définir ses disponibilités hebdomadaires par service

---

#### Jour 5 — Mer 18/03 : Page Publique

| Tâche | Description | Livrable |
|-------|-------------|----------|
| 5.1 | Route dynamique `/[slug]` | Résolution Business par slug |
| 5.2 | UI calendrier client | Vue mois/semaine avec créneaux libres |
| 5.3 | Sélection service + créneau | Flow réservation step-by-step |
| 5.4 | Formulaire client (nom, email) | Validation Zod |
| 5.5 | Server Action createBooking | Création réservation (mode démo) |

**Definition of Done** : Client peut réserver un créneau via URL publique

---

#### Jour 6 — Jeu 19/03 : Emails & Stripe Connect

| Tâche | Description | Livrable |
|-------|-------------|----------|
| 6.1 | Config Resend | `lib/resend.ts` avec API key |
| 6.2 | Template email confirmation client | HTML responsive |
| 6.3 | Template email notification pro | HTML responsive |
| 6.4 | Intégration envoi emails | Trigger après création booking |
| 6.5 | Stripe Connect onboarding | Lien onboarding, stockage `stripeAccountId` |

**Definition of Done** : Emails envoyés à chaque réservation, lien Stripe visible

---

#### Jour 7 — Ven 20/03 : Dashboard Calendrier

| Tâche | Description | Livrable |
|-------|-------------|----------|
| 7.1 | Vue calendrier pro | Liste/semaine des réservations |
| 7.2 | Détails réservation | Modal avec infos client |
| 7.3 | Stats basiques | Nombre réservations, revenus estimés |
| 7.4 | Responsive | Mobile OK pour toutes les vues |

**Definition of Done** : Pro voit ses réservations dans un calendrier clair

---

#### Jour 8 — Sam 21/03 : Polish & Démo

| Tâche | Description | Livrable |
|-------|-------------|----------|
| 8.1 | Tests E2E critiques | Flow inscription → réservation |
| 8.2 | Fix bugs bloquants | Liste priorisée |
| 8.3 | Optimisations perf | Images, fonts, chargement |
| 8.4 | Préparation démo | Scénario 5 minutes |
| 8.5 | Déploiement prod | Production stable |

**Definition of Done** : Démo fluide, 0 erreur 500, prod accessible

---

## Livrables Sprint 1

| Livrable | Date | Responsable |
|----------|------|-------------|
| Repo GitHub public/privé | Sam 14/03 | dev-agent |
| App déployée sur Vercel | Sam 14/03 | dev-agent |
| Démo interne (scénario 5 min) | Sam 21/03 16h | dev-agent |
| Documentation technique | Sam 21/03 | dev-agent |
| Wireframes Figma dashboard | Lun 16/03 | growth-agent |

---

## Métriques de succès

| Métrique | Cible | Mesure |
|----------|-------|--------|
| Temps onboarding | < 5 min | Timer test utilisateur |
| Temps création service | < 2 min | Timer test utilisateur |
| Temps réservation client | < 3 min | Timer test utilisateur |
| Uptime | 100% | Vercel monitoring |
| Erreurs 500 | 0 | Sentry/Vercel logs |

---

## Risques & Mitigations

| Risque | Probabilité | Impact | Mitigation |
|--------|-------------|--------|------------|
| Validation échoue (< 10 pré-inscrits) | Moyenne | Élevé | Pivot positionnement avant de coder |
| Stripe Connect complexité | Moyenne | Moyen | Mode démo S1, vrai flow S2 |
| Conflits réservation (race condition) | Faible | Élevé | Transactions Prisma + tests |
| Retard livraison | Faible | Moyen | Scope figé, pas de nouvelles features |

---

## Checkpoints

| Date | Heure | Format | Participants | Objectif |
|------|-------|--------|--------------|----------|
| Ven 13/03 | 18h | Sync 15min | Tous | Bilan pré-inscriptions |
| Sam 14/03 | 12h | Décision | Chief | Go/no-go développement |
| Mar 17/03 | 18h | Demo 10min | Tous | Review services + dispos |
| Jeu 19/03 | 18h | Demo 10min | Tous | Review page publique |
| Sam 21/03 | 16h | Demo finale | Tous + advisors | Présentation S1 |

---

## Communication

- **Daily** : Message async dans le channel (3 bullet points)
- **Blocage** : Tag @chief-agent immédiatement
- **Décision technique** : Documenter dans `docs/decisions/`

---

**Ready to execute** 🚀