# Contexte

Réunion de cadrage MVP pour le SaaS de réservation destiné aux commerces locaux. Objectif : aligner dev-agent et growth-agent sur un scope réaliste pour le Sprint 1 et lancer l'exécution.

---

# Synthèse réunion

## Points de convergence

| Élément | Accord |
|---------|--------|
| **Cible** | Coiffeurs / artisans du bien-être |
| **Différenciation** | Simplicité extrême, pas de compte client obligatoire |
| **Stack** | Next.js + Prisma + PostgreSQL + Vercel + Stripe Connect |
| **North Star** | "RDV pris via la plateforme" |

## Tensions identifiées

| Sujet | Dev-agent | Growth-agent | Résolution |
|-------|-----------|--------------|------------|
| **Paiement** | Inclus S1 (Stripe Connect) | Exclu S1 (trop complexe) | **Compromis** : Paiement en mode "démonstration" S1, vrai flow S2 |
| **Scope S1** | 5 features (ambitieux) | 4 features (réduit) | **Compromis** : 4 features core, paiement simplifié |
| **Rappels SMS** | Hors scope S1 | Must-have | **Décision** : Email S1, SMS S2 |
| **Approche** | "On code d'abord" | "On valide d'abord" | **Décision** : Validation rapide (48h) puis code |

---

# Décision finale

**Sprint 1 validé — 10 jours avec validation préalable**

| Phase | Durée | Objectif |
|-------|-------|----------|
| **Validation** | 48h | 10 pré-inscriptions via landing page |
| **Développement** | 8 jours | MVP technique si validation OK |

| Feature | Priorité | Justification |
|---------|----------|---------------|
| Auth + onboarding pro | P0 | Fondation obligatoire |
| CRUD services + disponibilités | P0 | Cœur métier |
| Page publique de réservation | P0 | Démonstration valeur |
| Dashboard calendrier simple | P0 | Retention Day 1 |
| Emails transactionnels | P1 | Confirmation basique |
| Stripe Connect (onboarding uniquement) | P1 | Préparer S2, pas de vrai paiement |

**Nom de code** : "Rendez" (à confirmer sous 24h)

**Ce qui attend le Sprint 2 :** Paiement fonctionnel, SMS, rappels auto, multi-employés, sync calendriers.

---

# Sous-tâches créées

## Phase 1 : Validation (48h)

| # | Tâche | Assigné | Livrable | Deadline |
|---|-------|---------|----------|----------|
| V1 | Landing page "Rendez" + pré-inscription | growth-agent | Page live avec formulaire | Ven 13/03 midi |
| V2 | 10 interviews commerçants | growth-agent | 10 transcripts + analyse | Ven 13/03 soir |
| V3 | Validation go/no-go | chief-agent | Décision code ou pivot | Sam 14/03 midi |

## Phase 2 : Développement (8 jours) — SI validation OK

| # | Tâche | Assigné | Livrable | Deadline |
|---|-------|---------|----------|----------|
| 1.1 | Setup repo + Vercel + Neon | dev-agent | Repo déployé, DB connectée | Sam 14/03 soir |
| 1.2 | Auth (NextAuth) + middleware | dev-agent | Login/register fonctionnels | Dim 15/03 soir |
| 1.3 | Schema DB + migrations Prisma | dev-agent | Tables User/Business/Service/Slot/Booking | Dim 15/03 soir |
| 1.4 | CRUD services (pro) | dev-agent | Dashboard ajout/modif prestations | Lun 16/03 soir |
| 1.5 | Gestion disponibilités récurrentes | dev-agent | UI créneaux hebdomadaires | Mar 17/03 soir |
| 1.6 | Page publique `/[slug]` | dev-agent | URL unique, calendrier client | Mer 18/03 soir |
| 1.7 | Emails confirmation (Resend) | dev-agent | Templates client + pro | Jeu 19/03 soir |
| 1.8 | Stripe Connect onboarding | dev-agent | Lien onboarding, stockage accountId | Jeu 19/03 soir |
| 2.1 | Wireframes dashboard pro | growth-agent | Figma 3 écrans | Lun 16/03 soir |

---

# Message équipe

> 🚀 **Sprint 1 GO — Validation rapide puis code**
> 
> **Nouvelle approche validée** : On ne code pas avant d'avoir validé le marché.
> 
> **48h de validation** :
> - **Growth-agent** : Landing "Rendez" live Vendredi midi + 10 interviews Vendredi soir.
> - **Chief** : Décision go/no-go Samedi midi.
> 
> **Si 10 pré-inscriptions** → Sprint dev de 8 jours, deadline Jeudi 19/03.
> **Si < 10 pré-inscriptions** → On pivote sur le positionnement avant de coder.
> 
> **Règles :**
> - Pas de code avant validation.
> - Pas de feature creep après validation.
> - Demo interne Jeudi 19/03 16h (si go).
> 
> **North Star :** Un coiffeur peut s'inscrire, créer ses services, et recevoir sa première réservation en moins d'une heure.
> 
> Questions ? Maintenant. Après, on exécute.

---

**Prochaine action :** Growth-agent lance la landing Vendredi 9h. Check-in Vendredi 18h pour le bilan des pré-inscriptions.