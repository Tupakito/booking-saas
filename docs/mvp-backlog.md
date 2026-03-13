# MVP Backlog — Rendez

> **Version**: 2.2.0 | **Dernière mise à jour**: 13/03/2024 | **Statut**: ⏸️ Phase validation

---

## 🎯 Vue d'ensemble

| Phase | Durée | Objectif | Statut |
|-------|-------|----------|--------|
| **Phase 1** | 48h | Valider le marché (10 pré-inscriptions) | 🔥 En cours |
| **Phase 2** | 5 jours | Builder le MVP (selon scénario retenu) | ⏸️ En attente |
| **Phase 3** | 3 jours | Polish + démo + premier client | ⏸️ Planifié |

**Date clé**: Dimanche 15/03 14h — Décision GO / PIVOT

---

## Phase 1: Validation (48h) — 🔥 EN COURS

### Objectif
Collecter **≥ 10 pré-inscriptions** de coiffeurs/artisans beauté.

### Tâches

| ID | Tâche | Assigné | Priorité | Deadline | Statut |
|----|-------|---------|----------|----------|--------|
| V1 | Déployer landing beauté sur Vercel | growth-agent | P0 | Ven 13/03 14h | ⏳ |
| V2 | Configurer formulaire (Formspree/Resend) | growth-agent | P0 | Ven 13/03 15h | ⏳ |
| V3 | 20 DMs Instagram ciblés | growth-agent | P0 | Sam 14/03 18h | ⏳ |
| V4 | 3 posts Facebook groupes coiffeurs | growth-agent | P0 | Sam 14/03 18h | ⏳ |
| V5 | 5 appels directs salons | growth-agent | P1 | Sam 14/03 18h | ⏳ |
| V6 | Préparer landing backup mécaniciens | growth-agent | P1 | Dim 15/03 12h | ⏳ |
| V7 | Préparer landing backup ostéopathes | growth-agent | P1 | Dim 15/03 12h | ⏳ |
| V8 | Bilan pré-inscriptions | growth-agent | P0 | Dim 15/03 12h | ⏳ |
| V9 | **Décision go/no-go/pivot** | chief-agent | P0 | Dim 15/03 14h | ⏳ |

### Definition of Done Phase 1
- [ ] Landing en ligne avec formulaire fonctionnel
- [ ] ≥ 10 emails collectés OU données de rejet claires
- [ ] Feedback qualitatif de 3+ prospects
- [ ] Landings backup prêtes (mécaniciens, ostéopathes)

---

## Phase 2: Build MVP (5 jours) — ⏸️ EN ATTENTE

**Démarrage**: Lundi 16/03 14h (si GO)  
**Deadline**: Vendredi 20/03 18h

### Scénario A: GO Beauté (70% probabilité)

#### Sprint Backlog

| ID | Feature | Priorité | Estimation | Dépendances | Assigné |
|----|---------|----------|------------|-------------|---------|
| **S1** | **Auth complète** | P0 | 1j | - | dev-agent |
| S1.1 | Config NextAuth v5 + Prisma adapter | P0 | 2h | - | dev-agent |
| S1.2 | Page /login (email + Google) | P0 | 2h | S1.1 | dev-agent |
| S1.3 | Page /register (2 étapes: compte + business) | P0 | 2h | S1.1 | dev-agent |
| S1.4 | Middleware protection /app/* | P0 | 1h | S1.1 | dev-agent |
| S1.5 | API /register | P0 | 1h | S1.1 | dev-agent |
| **S2** | **CRUD Services** | P0 | 1j | S1 | dev-agent |
| S2.1 | Schema Zod service | P0 | 1h | - | dev-agent |
| S2.2 | Server Actions (create, update, delete) | P0 | 2h | S2.1 | dev-agent |
| S2.3 | Page /app/services (liste) | P0 | 2h | S2.2 | dev-agent |
| S2.4 | Page /app/services/new (création) | P0 | 2h | S2.2 | dev-agent |
| S2.5 | Page /app/services/[id] (édition) | P0 | 2h | S2.2 | dev-agent |
| **S3** | **Gestion Disponibilités** | P0 | 1j | S2 | dev-agent |
| S3.1 | Schema Zod slots | P0 | 1h | - | dev-agent |
| S3.2 | Server Actions slots | P0 | 2h | S3.1 | dev-agent |
| S3.3 | Composant UI semaine type | P0 | 3h | S3.2 | dev-agent |
| S3.4 | Intégration page service | P0 | 2h | S3.3 | dev-agent |
| **S4** | **Page Publique** | P0 | 1.5j | S3 | dev-agent |
| S4.1 | Route /[slug] dynamique | P0 | 2h | - | dev-agent |
| S4.2 | Affichage services actifs | P0 | 2h | S4.1 | dev-agent |
| S4.3 | Fonction génération créneaux | P0 | 4h | S4.2 | dev-agent |
| S4.4 | Calendrier + sélection créneau | P0 | 4h | S4.3 | dev-agent |
| S4.5 | Formulaire réservation (nom, email, téléphone) | P0 | 2h | S4.4 | dev-agent |
| S4.6 | Création booking (mode démo S1) | P0 | 2h | S4.5 | dev-agent |
| **S5** | **Dashboard + Emails** | P1 | 1j | S4 | dev-agent |
| S5.1 | Page /app/dashboard (stats + prochains RDV) | P1 | 3h | S4.6 | dev-agent |
| S5.2 | Page /app/calendar (vue calendrier) | P1 | 3h | S4.6 | dev-agent |
| S5.3 | Config Resend | P1 | 1h | - | dev-agent |
| S5.4 | Template email confirmation | P1 | 2h | S5.3 | dev-agent |
| S5.5 | Envoi automatique post-booking | P1 | 2h | S5.4 | dev-agent |
| **S6** | **Stripe Connect** | P2 | 0.5j | S5 | dev-agent |
| S6.1 | Lien onboarding Stripe | P2 | 2h | - | dev-agent |
| S6.2 | Stockage stripeAccountId | P2 | 1h | S6.1 | dev-agent |

### Planning Journalier

| Jour | Date | Focus | Livrables clés |
|------|------|-------|----------------|
| J1 | Lun 16/03 | Auth | Login, register, middleware OK |
| J2 | Mar 17/03 | Services | CRUD prestations fonctionnel |
| J3 | Mer 18/03 | Disponibilités | UI créneaux récurrents |
| J4 | Jeu 19/03 | Page publique | `/[slug]` avec calendrier |
| J5 | Ven 20/03 | Dashboard + Emails | Vue pro, notifications |

---

### Scénario B: PIVOT Mécaniciens (20% probabilité)

**Adaptations par rapport au scénario A:**

| Feature | Modification | Impact |
|---------|--------------|--------|
| Landing | Copy "devis en ligne" | 2h |
| Service.price | "À partir de" ou 0 | 1h |
| Booking.notes | Immatriculation + km | 1h |
| Page publique | Option "demande de devis" | 4h |
| Table Quote | (Option S2, pas S1) | - |

**Planning**: Identique + 0.5j si features devis S1

---

### Scénario C: PIVOT Ostéopathes (10% probabilité)

**Adaptations**: Aucune ! 100% compatible.

| Composant | Statut |
|-----------|--------|
| Schema Prisma | ✅ Identique |
| Auth | ✅ Identique |
| Services | ✅ Identique |
| Slots | ✅ Identique |
| Bookings | ✅ Identique |
| Emails | ✅ Identique |
| Dashboard | ✅ Identique |

**Planning**: Identique scénario A

---

## Phase 3: Polish & Lancement (3 jours) — ⏸️ PLANIFIÉ

**Semaine du 23/03** (si démo positive)

| ID | Tâche | Priorité | Description |
|----|-------|----------|-------------|
| P1 | Tests E2E | P0 | Flow complet inscription → réservation |
| P2 | Responsive | P0 | Mobile-first validation |
| P3 | Performance | P1 | Lighthouse > 90 |
| P4 | Onboarding first user | P0 | Accompagner 1er coiffeur |
| P5 | Collecte feedback | P0 | Interview 3 utilisateurs |
| P6 | Itération rapide | P1 | Fix critiques |
| P7 | Démo investisseurs | P2 | Présentation pitch |

---

## Métriques de succès

### Phase 1 (Validation)
- [ ] ≥ 10 pré-inscriptions
- [ ] Taux de conversion landing > 5%
- [ ] Feedback qualitatif de 3+ prospects

### Phase 2 (Build)
- [ ] Onboarding < 5 min
- [ ] Création service < 2 min
- [ ] Réservation client < 3 min
- [ ] 0 erreur 500 sur flow critique
- [ ] Démo fluide Vendredi 20/03

### Phase 3 (Lancement)
- [ ] 1er client actif
- [ ] 10 réservations réelles
- [ ] NPS > 50

---

## Définition of Done globale

Une feature est DONE quand:
1. [ ] Code écrit et reviewé
2. [ ] Tests manuels passés
3. [ ] Responsive mobile OK
4. [ ] Pas d'erreur console
5. [ ] Intégration Vercel OK

---

## Ressources

- [Architecture technique](./architecture.md)
- [Plan de pivot](./pivot-plan.md)
- [Configuration cibles](./../src/lib/target-config.ts)

---

**Prochaine mise à jour**: Dimanche 15/03 après décision GO/PIVOT

*Backlog MVP — Prêt pour exécution*