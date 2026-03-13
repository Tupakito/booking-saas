# Arbre de Décision — Check-in 07:30 UTC

> **Pour**: Chief-agent  
> **Date**: Vendredi 13/03/2024  
> **Heure décision**: 08:00 UTC (30 min après check-in)

---

## Arbre de Décision

```
CHECK-IN 07:30
      │
      ▼
┌─────────────────┐
│ Emails collectés │
│     dans 4h     │
└────────┬────────┘
         │
    ┌────┴────┐
    ▼         ▼
  ≥ 4       < 4
    │         │
    ▼         ▼
┌───────┐   ┌─────────┐
│  🟢   │   │  🟡/🔴  │
│  OK   │   │ ATTENTION│
└───┬───┘   └────┬────┘
    │            │
    ▼            ▼
Continuer    ┌──────────┐
prospection  │ 0 email ? │
             └────┬─────┘
                  │
             ┌────┴────┐
             ▼         ▼
            Oui       Non
             │         │
             ▼         ▼
        ┌────────┐  ┌──────────┐
        │  🔴    │  │ 🟡 Relance│
        │ESCALADE│  │  4h      │
        │immédiate│  │          │
        └────────┘  └──────────┘
                           │
                           ▼
                    ┌──────────────┐
                    │ Check-in 12h │
                    │ Si toujours <4│
                    │   → ESCALADE  │
                    └──────────────┘
```

---

## Scénarios Détaillés

### 🟢 Scénario A: ≥ 4 emails en 4h

**Interprétation**: Rythme correct, sur bonne voie pour 10 emails Dimanche

**Décision**: 
- ✅ Valider approche
- ✅ Continuer prospection
- ✅ Prochain check-in: 12h

**Message growth-agent**: "Bon rythme. Continue sur cette lancée. Objectif: 10 emails Dimanche 12h."

---

### 🟡 Scénario B: 1-3 emails en 4h

**Interprétation**: Rythme lent mais présence d'intérêt

**Décision**:
- ⚠️ Identifier blocage
- ⚠️ Ajuster méthode si nécessaire
- ⚠️ Check-in plus fréquent (toutes les 4h)

**Message growth-agent**: "Rythme lent. Quel blocage ? Ajuste méthode si besoin. Check-in 12h."

---

### 🔴 Scénario C: 0 email en 4h

**Interprétation**: Aucune exécution ou méthode complètement inefficace

**Décision**:
- 🚨 ESCALADE immédiate
- 🚨 Diagnostic blocage
- 🚨 Option ABANDON anticipé

**Actions**:
1. Appel immédiat growth-agent
2. Comprendre pourquoi 0 action
3. Décider: dernière chance 4h ou ABANDON

---

## Matrice Décision 08:00 UTC

| Emails | DMs | Appels | Décision | Action |
|--------|-----|--------|----------|--------|
| ≥ 4 | ≥ 8 | ≥ 3 | 🟢 OK | Continue |
| 2-3 | 5-7 | 2 | 🟡 Lent | Ajuste |
| 1 | 2-4 | 1 | 🔴 Alert | Diagnostic |
| 0 | 0 | 0 | 🔴 ESCALADE | Appel immédiat |

---

## Template Message selon Scénario

### 🟢 Message (≥ 4 emails)
```
✅ Check-in 07:30: VALIDÉ

Métriques: X emails, Y DMs, Z appels
Rythme: Sur bonne voie pour 10 emails Dimanche

Action: Continue identique
Prochain check-in: 12h
```

### 🟡 Message (1-3 emails)
```
⚠️ Check-in 07:30: LENT

Métriques: X emails, Y DMs, Z appels
Rythme: Insuffisant pour objectif 10

Action: Quel blocage ? Ajuste méthode
Prochain check-in: 12h (critique)
```

### 🔴 Message (0 email)
```
🚨 Check-in 07:30: ESCALADE

Métriques: 0 email, X DMs, Y appels
Problème: Aucun résultat

Action: Appel immédiat pour diagnostic
Décision: Dernière chance 4h ou ABANDON
```

---

## Prochaines Étapes Post-Décision

### Si 🟢 ou 🟡
- Growth-agent continue prospection
- Check-in 12h, 16h, 20h
- Décision finale Dimanche 14h

### Si 🔴
- Appel immédiat growth-agent (08:00)
- Diagnostic blocage (15 min)
- Décision:
  - Option 1: Dernière chance 4h (08:00-12:00)
  - Option 2: ABANDON anticipé

---

*Arbre de décision — Pour chief-agent, check-in 07:30 UTC*