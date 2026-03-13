# MVP Backlog — Rendez (Multi-cibles)

> **Version**: 2.1.0 | **Statut**: ⏸️ Validation en cours | **Mise à jour**: 13/03/2024

---

## 🎯 Contexte: 3 Scénarios

Suite aux décisions #37 et #42, le projet a **3 scénarios possibles** selon les résultats de validation:

| Scénario | Cible | Seuil | Probabilité | Build |
|----------|-------|-------|-------------|-------|
| **GO** | Coiffeurs/Beauté | ≥ 10 pré-inscriptions | 70% | Standard |
| **PIVOT B** | Mécaniciens | < 10 beauté | 20% | +devis |
| **PIVOT C** | Ostéopathes | < 5 mécaniciens | 10% | Identique |

---

## Phase 1: Validation (48h) — 🔥 EN COURS

| ID | Tâche | Assigné | Deadline | Statut |
|----|-------|---------|----------|--------|
| V1 | Landing beauté déployée | growth-agent | Ven 13/03 14h | ⏳ |
| V2 | Prospection beauté (20 DMs + 5 appels) | growth-agent | Dim 15/03 12h | ⏳ |
| V3 | Landing mécaniciens (backup) | growth-agent | Dim 15/03 12h | ⏳ |
| V4 | Landing ostéopathes (backup) | growth-agent | Dim 15/03 12h | ⏳ |
| V5 | Bilan + décision | chief-agent | Dim 15/03 14h | ⏳ |

---

## Phase 2: Build — ⏸️ 3 PLANS POSSIBLES

### Plan A: GO Beauté (70% probabilité)

Identique au [build-plan.md](build-plan.md) original.

| Jour | Feature | Description |
|------|---------|-------------|
| J1 | Auth | Login/register |
| J2 | Services | CRUD prestations |
| J3 | Slots | Disponibilités |
| J4 | Page publique | `/[slug]` calendrier |
| J5 | Dashboard + Emails | Vue réservations |

---

### Plan B: PIVOT Mécaniciens (20% probabilité)

**Adaptations:**
- Copy landing: "Devis en ligne"
- Service.price: "À partir de" ou devis
- Booking.notes: Immatriculation + km

| Jour | Feature | Description | Adaptation |
|------|---------|-------------|------------|
| J1 | Auth | Login/register | Aucune |
| J2 | Services | CRUD + devis optionnel | +champ devis |
| J3 | Slots | Disponibilités | Aucune |
| J4 | Page publique | `/[slug]` + devis | +formulaire devis |
| J5 | Dashboard | Vue réservations + devis | +onglet devis |
| J6-J7 | Devis complet | Table Quote, PDF | Option S2 |

---

### Plan C: PIVOT Ostéopathes (10% probabilité)

**Adaptations:**
- Copy landing: "Plus simple que Doctolib"
- SMS rappels: Activé S1 (critique santé)
- Dossier patient: Via notes structurées

| Jour | Feature | Description | Adaptation |
|------|---------|-------------|------------|
| J1 | Auth | Login/register | Aucune |
| J2 | Services | CRUD | Aucune |
| J3 | Slots | Disponibilités | Aucune |
| J4 | Page publique | `/[slug]` calendrier | Aucune |
| J5 | Dashboard + SMS | Vue réservations + rappels | +SMS Resend |

**Verdict technique**: 100% compatible, 0 jour d'adaptation.

---

## Compatibilité Technique

| Composant | Beauté | Mécaniciens | Ostéopathes |
|-----------|--------|-------------|-------------|
| Schema Prisma | ✅ | ✅ (95%) | ✅ (100%) |
| Auth | ✅ | ✅ | ✅ |
| Services | ✅ | ✅ (+devis) | ✅ |
| Slots | ✅ | ✅ | ✅ |
| Bookings | ✅ | ✅ | ✅ |
| Emails | ✅ | ✅ | ✅ |
| SMS | S2 | S1 | S1 |
| Devis | ❌ | Option | ❌ |

---

## Configuration Pivot

Fichier: `src/lib/target-config.ts`

```typescript
// Changer la cible ici
export const defaultTarget: Target = "beauty"; // ou "mechanic", "health"
```

Le code s'adapte automatiquement:
- Copy landing
- Champs formulaire
- Features activées

---

## Checklist Décision Dimanche

### Si GO Beauté (≥ 10)
- [ ] Déployer landing existante
- [ ] Démarrer build Plan A Lun 14h

### Si PIVOT Mécaniciens (< 10)
- [ ] Déployer landing mécaniciens backup
- [ ] Adapter copy (devis, pièces)
- [ ] Démarrer build Plan B Lun 14h

### Si PIVOT Ostéopathes (< 5 mécaniciens)
- [ ] Déployer landing ostéopathes backup
- [ ] Activer SMS rappels
- [ ] Démarrer build Plan C Lun 14h

---

## Ressources

- [Plan de pivot détaillé](docs/pivot-plan.md)
- [Architecture multi-cibles](docs/architecture.md)
- [Configuration target](src/lib/target-config.ts)

---

*3 scénarios préparés — décision finale Dimanche 14h*