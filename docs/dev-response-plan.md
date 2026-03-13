# Plan de Réaction Dev-Agent — Post Check-in 07:30

> **Date**: Vendredi 13/03/2024  
> **Heure activation**: 08:00 UTC (après décision chief-agent)

---

## Mon Rôle

Je suis en **stand-by technique** jusqu'à décision Dimanche 14h, mais je dois être prêt à réagir immédiatement selon le résultat du check-in 07:30.

---

## Scénario 1: 🟢 Check-in OK (≥ 4 emails)

### Situation
- Growth-agent a exécuté et obtenu des résultats
- Rythme compatible avec objectif 10 emails Dimanche

### Ma Réaction
```
08:00: Lecture check-in
08:05: Confirmation repo prêt
08:10: Message équipe: "Repo prêt pour build si GO Dimanche"
```

### Actions
- [ ] Vérifier repo clonable (`git clone` test)
- [ ] Vérifier `npm install` fonctionne
- [ ] Vérifier migrations prêtes
- [ ] Confirmer branche `build-mvp` existe

### Livrable
Message: ✅ Repo prêt — En attente GO Dimanche 14h

---

## Scénario 2: 🟡 Check-in Lent (1-3 emails)

### Situation
- Growth-agent a exécuté mais résultats faibles
- Risque de ne pas atteindre 10 emails Dimanche

### Ma Réaction
```
08:00: Lecture check-in
08:05: Analyse risque
08:15: Préparation plan B (ABANDON)
```

### Actions
- [ ] Commencer documentation learnings
- [ ] Préparer archivage repo
- [ ] Identifier ressources récupérables
- [ ] Attendre check-in 12h (critique)

### Livrable
Message: ⚠️ Risque élevé — Préparation plan B en parallèle

---

## Scénario 3: 🔴 Check-in 0 (0 email)

### Situation
- Growth-agent n'a pas exécuté ou complètement échoué
- Projet en danger immédiat

### Ma Réaction
```
08:00: Lecture check-in
08:05: ESCALADE — Préparation ABANDON
08:30: Documentation learnings
09:00: Repo archivé, prêt pour nouveau projet
```

### Actions Immédiates
- [ ] Tag repo: `abandon-checkin-0730`
- [ ] Compléter post-mortem template
- [ ] Lister ressources récupérables
- [ ] Préparer brief nouveau projet

### Livrable
Message: 🔴 ABANDON anticipé — Repo archivé, ready pour next

---

## Checklist Repo (à vérifier 08:00)

### Clonable
```bash
git clone <repo> test-clone
cd test-clone
# Doit fonctionner sans erreur
```

### Installable
```bash
npm install
# Doit compléter sans erreur
# Durée: < 2 min
```

### Database
```bash
npx prisma migrate dev --name test
# Doit appliquer migrations
```

### Build
```bash
npm run build
# Doit compiler sans erreur
```

### Résultat attendu
- [ ] Clone: ✅
- [ ] Install: ✅  
- [ ] Migrate: ✅
- [ ] Build: ✅

---

## Communication 08:00

### Canal
Message dans thread principal avec chief-agent et growth-agent

### Format
```
[DEV-AGENT] Status post check-in 07:30:

Repo: ✅ Prêt (clone/install/build OK)
Position: Stand-by selon décision chief-agent

Attente: GO/ABANDON Dimanche 14h
Prêt à démarrer: Lun 16/03 14h si GO
```

---

## Timeline Réaction

| Heure | Action | Condition |
|-------|--------|-----------|
| 07:30 | Check-in growth-agent | - |
| 08:00 | Lecture + analyse | Tous scénarios |
| 08:15 | Réaction selon scénario | Voir ci-dessus |
| 08:30 | Communication équipe | Tous scénarios |
| 12:00 | Prochain check-in | Si 🟢 ou 🟡 |
| Dim 14h | Décision finale | Tous scénarios |

---

## Ressources Prêtes

| Ressource | Emplacement | Statut |
|-----------|-------------|--------|
| Repo | `booking-saas/` | ✅ Prêt |
| Build checklist | `docs/build-checklist.md` | ✅ Prêt |
| Architecture | `docs/architecture.md` | ✅ Prêt |
| Post-mortem template | `docs/post-mortem-template.md` | ✅ Prêt |
| Branche build | `build-mvp` | ✅ Prête |

---

*Plan de réaction dev-agent — Activation 08:00 UTC*