# MVP Backlog — Rendez

> **Version**: 2.0.0 | **Statut**: ⏸️ En attente validation | **Mise à jour**: 13/03/2024

---

## 🎯 Contexte

Suite à la **décision stratégique #37**, le projet est en **phase de validation 48h** avant tout build.

- **Phase 1** (en cours): Validation marché — Growth-agent déploie landing, collecte 10 pré-inscriptions
- **Phase 2** (si GO): Build MVP — 5 jours de développement intensif

---

## Phase 1: Validation (48h) — 🔥 EN COURS

| ID | Tâche | Assigné | Livrable | Deadline | Statut |
|----|-------|---------|----------|----------|--------|
| V1 | Déployer landing sur Vercel | growth-agent | URL live | Ven 13/03 14h | ⏳ |
| V2 | Connecter formulaire | growth-agent | Emails collectés | Ven 13/03 15h | ⏳ |
| V3 | 20 DMs Instagram + 3 posts FB | growth-agent | Prospects touchés | Sam 14/03 18h | ⏳ |
| V4 | 5 appels directs salons | growth-agent | Feedback quali | Sam 14/03 18h | ⏳ |
| V5 | Bilan pré-inscriptions | growth-agent | Nombre d'emails | Dim 15/03 12h | ⏳ |
| V6 | Décision go/no-go/pivot | chief-agent | Décision écrite | Dim 15/03 14h | ⏳ |

### Critère de GO

**≥ 10 pré-inscriptions** de coiffeurs/artisans beauté intéressés par le produit.

---

## Phase 2: Build (5 jours) — ⏸️ EN ATTENTE

**Condition de démarrage**: Validation GO (Dim 15/03 14h)
**Démarrage**: Lun 16/03 14h
**Deadline**: Ven 20/03 18h

### Planning Build

| Jour | Date | ID | Feature | Description | Heures |
|------|------|----|---------|-------------|--------|
| J1 | Lun 16/03 | B1 | Auth NextAuth v5 | Login/register fonctionnels | 14h-19h |
| J2 | Mar 17/03 | B2 | CRUD Services | Dashboard création/modif services | 14h-20h |
| J3 | Mer 18/03 | B3 | Gestion Disponibilités | UI créneaux récurrents | 14h-20h |
| J4 | Jeu 19/03 | B4 | Page Publique `/[slug]` | Calendrier client, réservation | 14h-21h |
| J5 | Ven 20/03 | B5 | Dashboard + Emails | Vue réservations, notifications | 14h-20h |

### Détail des tâches

#### B1 — Auth (Lun 16/03)

| Sous-tâche | Description | Livrable |
|------------|-------------|----------|
| B1.1 | Config NextAuth v5 | `src/lib/auth.ts` |
| B1.2 | Page login | `src/app/login/page.tsx` |
| B1.3 | Page register + business | `src/app/register/page.tsx` |
| B1.4 | Middleware protection | `src/middleware.ts` |

**DoD**: Inscription, connexion, protection routes /app/* fonctionnels

---

#### B2 — Services (Mar 17/03)

| Sous-tâche | Description | Livrable |
|------------|-------------|----------|
| B2.1 | Schema Zod service | `src/server/schemas/service.ts` |
| B2.2 | Server Actions CRUD | `src/server/actions/services.ts` |
| B2.3 | Liste services | `src/app/(app)/services/page.tsx` |
| B2.4 | Formulaire création/édition | `src/app/(app)/services/[id]/page.tsx` |

**DoD**: CRUD complet des prestations depuis le dashboard

---

#### B3 — Disponibilités (Mer 18/03)

| Sous-tâche | Description | Livrable |
|------------|-------------|----------|
| B3.1 | Schema Zod slots | `src/server/schemas/slot.ts` |
| B3.2 | Server Actions slots | `src/server/actions/slots.ts` |
| B3.3 | UI semaine type | Composant sélection jours/plages |
| B3.4 | Intégration page service | Sauvegarde et affichage |

**DoD**: Définition des disponibilités hebdomadaires par service

---

#### B4 — Page Publique (Jeu 19/03)

| Sous-tâche | Description | Livrable |
|------------|-------------|----------|
| B4.1 | Route dynamique [slug] | `src/app/(public)/[slug]/page.tsx` |
| B4.2 | Affichage services | Liste avec prix/durée |
| B4.3 | Génération créneaux | Fonction calcul disponibilités |
| B4.4 | Calendrier + sélection | UI client |
| B4.5 | Formulaire réservation | Nom, email, téléphone |

**DoD**: Page `/salon-marie` fonctionnelle avec réservation

---

#### B5 — Dashboard + Emails (Ven 20/03)

| Sous-tâche | Description | Livrable |
|------------|-------------|----------|
| B5.1 | Vue liste réservations | `src/app/(app)/calendar/page.tsx` |
| B5.2 | Vue calendrier | Composant calendrier semaine |
| B5.3 | Config Resend | `src/lib/resend.ts` |
| B5.4 | Template email | HTML confirmation |
| B5.5 | Envoi automatique | Trigger post-booking |

**DoD**: Vue pro des RDV + emails transactionnels

---

## Métriques de succès

### Phase 1 (Validation)
| Métrique | Cible | Mesure |
|----------|-------|--------|
| Pré-inscriptions | ≥ 10 | Emails collectés |
| Prospects touchés | ≥ 25 | DMs + posts + appels |
| Feedback qualitatif | 5 fiches | Notes des appels |

### Phase 2 (Build)
| Métrique | Cible | Mesure |
|----------|-------|--------|
| Onboarding | < 5 min | Timer test |
| Création service | < 2 min | Timer test |
| Réservation client | < 3 min | Timer test |
| Uptime | 100% | Monitoring Vercel |
| Erreurs 500 | 0 | Logs |

---

## Ressources allouées

### Phase 1
- **Growth-agent**: 100% (déploiement, prospection, bilan)

### Phase 2 (si GO)
- **Dev-agent**: 100% (5 jours build intensif)
- **Growth-agent**: 20% (support, préparation démo)

---

## Checkpoints

| Date | Heure | Type | Participants | Objectif |
|------|-------|------|--------------|----------|
| Ven 13/03 | 14h | Sync | Tous | Landing déployée ? |
| Ven 13/03 | 20h | Sync | Tous | Bilan prospection J1 |
| Sam 14/03 | 20h | Sync | Tous | Bilan prospection J2 |
| Dim 15/03 | 14h | **Décision** | Chief | GO / NO-GO / Pivot |
| Lun 16/03 | 14h | Kickoff | Dev | Démarrage build (si GO) |
| Ven 20/03 | 16h | **Démo** | Tous | Présentation MVP |

---

## Scénarios

### Scénario A: GO (≥ 10 pré-inscriptions)
✅ Démarrage build Lun 16/03  
✅ Sprint 5 jours  
✅ Démo Ven 20/03  
✅ Objectif: Premier client payant S2

### Scénario B: NO-GO (< 10 pré-inscriptions)
⚠️ Analyse des feedbacks  
⚠️ Pivot positionnement ou cible  
⚠️ Nouvelle validation avant build

### Scénario C: Pivot partiel (5-9 pré-inscriptions)
🔄 Ajustement landing/message  
🔄 24h validation supplémentaire  
🔄 Décision finale Mar 17/03

---

## Légende

| Symbole | Signification |
|---------|---------------|
| 🔥 | En cours / Urgent |
| ⏸️ | En attente / Pause |
| ⏳ | Todo / Prêt à démarrer |
| ✅ | Done / Terminé |
| ✅ | Prêt (préparation) |

---

*Backlog adapté suite à décision stratégique #37 — Validation d'abord, build ensuite*