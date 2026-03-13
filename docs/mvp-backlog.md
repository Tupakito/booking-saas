# MVP Backlog — Rendez

> **Version**: 2.3.0 | **Date**: 13/03/2024 | **Statut**: ⏸️ Attente décision #55

---

## 🎯 Contexte

Suite à la décision #55, le projet est en **stand-by technique** jusqu'à Dimanche 15/03 14h.

- **Phase 1** (en cours): Validation 48h — Growth-agent prospecte
- **Phase 2** (conditionnelle): Build MVP — 5 jours si GO
- **Décision**: Dimanche 14h selon nombre d'emails collectés

---

## Phase 1: Validation (48h) — 🔥 EN COURS

| ID | Tâche | Assigné | Priorité | Deadline | Statut |
|----|-------|---------|----------|----------|--------|
| V1 | Déployer landing beauté | growth-agent | P0 | Ven 13/03 14h | ⏳ |
| V2 | Configurer Formspree/Resend | growth-agent | P0 | Ven 13/03 15h | ⏳ |
| V3 | 20 DMs Instagram | growth-agent | P0 | Sam 14/03 18h | ⏳ |
| V4 | 3 posts Facebook | growth-agent | P0 | Sam 14/03 18h | ⏳ |
| V5 | 5 appels directs | growth-agent | P1 | Sam 14/03 18h | ⏳ |
| V6 | Landing backup mécaniciens | growth-agent | P1 | Dim 15/03 12h | ⏳ |
| V7 | Landing backup ostéopathes | growth-agent | P1 | Dim 15/03 12h | ⏳ |
| V8 | **Bilan emails** | growth-agent | P0 | Dim 15/03 12h | ⏳ |
| V9 | **Décision GO/PIVOT** | chief-agent | P0 | Dim 15/03 14h | ⏳ |

---

## Phase 2: Build MVP (5 jours) — ⏸️ CONDITIONNEL

**Condition**: ≥ 10 emails collectés  
**Démarrage**: Lun 16/03 14h (si GO)  
**Deadline**: Ven 20/03 18h

### Sprint Planning

| Jour | Date | Feature | Stories | DoD |
|------|------|---------|---------|-----|
| J1 | Lun 16/03 | Auth | S1.1-S1.5 | Login/register OK |
| J2 | Mar 17/03 | Services | S2.1-S2.5 | CRUD prestations |
| J3 | Mer 18/03 | Slots | S3.1-S3.4 | Disponibilités |
| J4 | Jeu 19/03 | Page publique | S4.1-S4.6 | `/[slug]` calendrier |
| J5 | Ven 20/03 | Dashboard + Emails | S5.1-S5.5, S6.1-S6.2 | Vue pro, notifs |

### Stories détaillées

#### S1 — Auth (1 jour)

| ID | Story | Points | Critères d'acceptation |
|----|-------|--------|------------------------|
| S1.1 | Config NextAuth v5 | 2 | Prisma adapter, JWT, providers |
| S1.2 | Page /login | 2 | Email + Google, design responsive |
| S1.3 | Page /register | 2 | 2 étapes: compte + business |
| S1.4 | Middleware auth | 1 | Protection /app/*, redirect login |
| S1.5 | API /register | 1 | Hash password, création business |

**DoD S1**: Un utilisateur peut s'inscrire et se connecter

---

#### S2 — Services (1 jour)

| ID | Story | Points | Critères d'acceptation |
|----|-------|--------|------------------------|
| S2.1 | Schema Zod service | 1 | Validation nom, durée, prix |
| S2.2 | Server Actions services | 2 | Create, update, delete |
| S2.3 | Liste services | 2 | Table avec statut, actions |
| S2.4 | Création service | 2 | Formulaire avec validation |
| S2.5 | Édition service | 2 | Pré-remplissage, update |

**DoD S2**: Un pro peut gérer ses prestations

---

#### S3 — Disponibilités (1 jour)

| ID | Story | Points | Critères d'acceptation |
|----|-------|--------|------------------------|
| S3.1 | Schema Zod slots | 1 | Jour, heure début/fin |
| S3.2 | Server Actions slots | 2 | CRUD créneaux |
| S3.3 | UI semaine type | 3 | Sélection jours, plages horaires |
| S3.4 | Intégration service | 2 | Affichage, sauvegarde |

**DoD S3**: Un pro peut définir ses disponibilités hebdomadaires

---

#### S4 — Page Publique (1.5 jour)

| ID | Story | Points | Critères d'acceptation |
|----|-------|--------|------------------------|
| S4.1 | Route /[slug] | 2 | Résolution business, 404 si inconnu |
| S4.2 | Affichage services | 2 | Cards avec prix, durée |
| S4.3 | Génération créneaux | 4 | Calcul slots libres, conflits |
| S4.4 | Calendrier client | 4 | Vue mois/semaine, sélection |
| S4.5 | Formulaire réservation | 2 | Nom, email, téléphone |
| S4.6 | Création booking | 2 | Validation, email confirmation |

**DoD S4**: Un client peut réserver un créneau via URL publique

---

#### S5 — Dashboard (1 jour)

| ID | Story | Points | Critères d'acceptation |
|----|-------|--------|------------------------|
| S5.1 | Vue dashboard | 3 | Stats, prochains RDV, actions |
| S5.2 | Vue calendrier | 3 | Vue semaine, liste RDV |
| S5.3 | Config Resend | 1 | API key, templates |
| S5.4 | Email confirmation | 2 | Template, envoi client |
| S5.5 | Email notification pro | 2 | Template, envoi pro |

**DoD S5**: Un pro voit ses réservations et reçoit des notifications

---

#### S6 — Stripe Connect (0.5 jour) — P2

| ID | Story | Points | Critères d'acceptation |
|----|-------|--------|------------------------|
| S6.1 | Lien onboarding Stripe | 2 | Connect Express, redirection |
| S6.2 | Stockage accountId | 1 | Champ business, statut |

**DoD S6**: Un pro peut connecter son compte Stripe (préparation S2)

---

## Estimations

| Phase | Stories | Points | Jours |
|-------|---------|--------|-------|
| S1 Auth | 5 | 8 | 1 |
| S2 Services | 5 | 9 | 1 |
| S3 Slots | 4 | 8 | 1 |
| S4 Page publique | 6 | 16 | 1.5 |
| S5 Dashboard | 5 | 11 | 1 |
| S6 Stripe | 2 | 3 | 0.5 |
| **Total** | **27** | **55** | **5** |

---

## Définition of Done (globale)

Une story est DONE quand:
1. [ ] Code écrit et fonctionnel
2. [ ] Tests manuels passés
3. [ ] Responsive mobile OK
4. [ ] Pas d'erreur console
5. [ ] Déployé sur Vercel
6. [ ] Review rapide (pair ou self)

---

## Scénarios alternatifs

### Si PIVOT B (Mécaniciens)

| Modification | Impact | Jours supp. |
|--------------|--------|-------------|
| Copy landing | 2h | 0 |
| Champs booking (immatriculation) | 2h | 0 |
| Feature devis (Option S2) | 2j | +2 |

### Si PIVOT C (Ostéopathes)

| Modification | Impact | Jours supp. |
|--------------|--------|-------------|
| Copy landing | 2h | 0 |
| Activation SMS | 4h | 0 |
| **Total** | **6h** | **0** |

---

## Ressources

- [Product Strategy](./product-strategy.md)
- [Architecture](./architecture.md)
- [Plan de Pivot](./pivot-plan.md)
- [Readiness Checklist](./readiness-checklist.md)

---

**Prochaine mise à jour**: Dimanche 15/03 après décision

*Backlog MVP — Prêt pour exécution*