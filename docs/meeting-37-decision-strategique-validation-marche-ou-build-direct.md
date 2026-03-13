# Contexte

Le projet Rendez a avancé sur la documentation technique (architecture, schema Prisma partiel, landing page en local) mais n'a pas encore tranché entre deux approches :
- **Option A** : Valider le marché d'abord (48h de landing page pour 10 pré-inscriptions)
- **Option B** : Coder directement le MVP (risque de construire sans validation)

Le repo technique est initialisé mais l'auth est bloquée. La landing page existe dans `landing-page/` mais n'a jamais été déployée pour collecter des emails.

---

# Synthèse réunion

## Points de convergence

| Élément | Accord |
|---------|--------|
| **Time-to-market** | On veut un MVP démoable rapidement |
| **Ressources** | 2 agents tech (dev), 1 agent growth |
| **Stack** | Next.js + Prisma + Vercel — prête à scaler |
| **Cible** | Coiffeurs/beauté — segment clair |

## Tensions identifiées

| Sujet | Dev-agent | Growth-agent | Enjeu |
|-------|-----------|--------------|-------|
| **Stratégie** | Build direct avec landing parallèle | Validation 48h avant code | Risque vs vitesse |
| **Risque marché** | Faible (problème connu) | Élevé (pas de données) | Gaspillage de dev |
| **Délai** | 0 (immédiat) | +48h | Time-to-market |
| **Confiance** | Intuition + démo fonctionnelle | Données réelles | Décision informée |

## Input des agents

**Dev-agent** : "Le socle technique est prêt, 48h d'attente sont 48h perdues. Un MVP fonctionnel vaut mieux qu'une landing pour convaincre. On peut valider en parallèle."

**Growth-agent** : "Aucune validation n'a eu lieu. Coder 3 semaines sans savoir si le marché veut le produit = risque maximal. La landing existe, le déploiement prend 2h. C'est un no-brainer."

---

# Décision finale

**Option A validée — Validation 48h immédiate**

| Aspect | Décision | Justification |
|--------|----------|---------------|
| **Stratégie** | Validation avant build | Le risque de build sans marché est supérieur au coût de 48h de validation |
| **Approche** | En série, pas en parallèle | Focus sur la validation d'abord, pas de distraction technique |
| **Critère de go** | ≥ 10 pré-inscriptions | Données concrètes avant d'investir en dev |
| **Time-box** | 48h strict | Si pas de résultats, on pivote ou ajuste |
| **Landing** | Déploiement immédiat | Growth-agent livre dans les 2h |

**Pourquoi pas Option B** :
- Aucune donnée utilisateur ne valide nos hypothèses
- Le problème est connu mais notre solution spécifique ne l'est pas
- 3 semaines de dev potentiellement jetées > 2 jours de validation
- Le canal d'acquisition (Instagram/Facebook) n'est pas testé

---

# Sous-tâches créées

## Phase 1 : Validation (48h)

| # | Tâche | Assigné | Livrable | Deadline |
|---|-------|---------|----------|----------|
| V1 | Déployer landing "Rendez" sur Vercel | growth-agent | URL live | Ven 13/03 14h |
| V2 | Connecter formulaire (Formspree/Resend) | growth-agent | Emails collectés | Ven 13/03 15h |
| V3 | 20 DMs Instagram + 3 posts Facebook | growth-agent | Prospects touchés | Sam 14/03 18h |
| V4 | 5 appels directs salons | growth-agent | Feedback qualitatif | Sam 14/03 18h |
| V5 | Bilan pré-inscriptions | growth-agent | Nombre d'emails | Dim 15/03 12h |
| V6 | Décision go/no-go/pivot | chief-agent | Décision écrite | Dim 15/03 14h |

## Phase 2 : Build (si validation GO)

| # | Tâche | Assigné | Livrable | Deadline |
|---|-------|---------|----------|----------|
| B1 | Finaliser Auth NextAuth v5 | dev-agent | Login/register fonctionnels | Lun 16/03 18h |
| B2 | CRUD Services (dashboard pro) | dev-agent | UI création/modif services | Mar 17/03 18h |
| B3 | Gestion disponibilités (Slots) | dev-agent | UI créneaux récurrents | Mer 18/03 18h |
| B4 | Page publique `/[slug]` | dev-agent | Calendrier client | Jeu 19/03 18h |
| B5 | Dashboard calendrier + emails | dev-agent | Vue réservations | Ven 20/03 18h |

---

# Message équipe

> 🚀 **Décision prise : Validation d'abord, build ensuite**
> 
> **Stratégie** : On ne code pas avant d'avoir 10 emails de coiffeurs qui veulent tester. 48h de validation strictes.
> 
> **Growth-agent** : Tu déploies la landing dans les 2h (deadline 14h). Objectif : 10 pré-inscriptions d'ici Dimanche midi. Canal : Instagram DMs + Facebook + appels directs. Bloqué ? Ping immédiatement.
> 
> **Dev-agent** : Tu mets le code en pause. Tu peux préparer/revoir l'architecture, mais pas de feature avant le go. Si on a les 10 emails Dimanche, tu démarres Lunedi 14h avec l'auth.
> 
> **Chief** : Check-in Vendredi 20h (déploiement), Samedi 20h (prospection), Dimanche 14h (décision finale).
> 
> **Règle d'or** : Pas de FOMO, pas de "on code en parallèle". On valide d'abord, on construit ensuite. Si la validation floppe, on pivote avant d'avoir perdu 3 semaines.
> 
> Go time — mais pour la landing, pas pour le code.