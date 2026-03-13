# Positionnement MVP — Rendez

> **Version** : 1.0.3 — LANDINGS BACKUP PRÊTES  
> **Dernière mise à jour** : 2026-03-13  
> **Statut** : 🚀 EXÉCUTION — Prospection + Backups prêts

---

## 🎯 Situation

**Plan A** : Validation coiffeurs en cours (48h)  
**Plans B/C** : Landings backup prêtes à déployer  
**Deadline décision** : Dimanche 15/03 14h

---

## 🎨 Matrice de décision

| Scénario | Critère | Action | Landing | Statut |
|----------|---------|--------|---------|--------|
| **GO** | ≥ 10 emails coiffeurs | Build MVP | [landing-copy.md](./landing-copy.md) | 🟡 En cours |
| **PIVOT B** | < 10 coiffeurs | Cible garages | [landing-copy-mecaniciens.md](./landing-copy-mecaniciens.md) | ✅ Prête |
| **PIVOT C** | < 5 mécaniciens | Cible santé | [landing-copy-osteopathes.md](./landing-copy-osteopathes.md) | ✅ Prête |

---

## 🚀 Déploiement rapide (si pivot)

### Plan B — Mécaniciens
```bash
cd landing-page-mecaniciens
npm install && npm run build && npx vercel --prod
```
**Temps** : 5 minutes

### Plan C — Ostéopathes
```bash
cd landing-page-sante
npm install && npm run build && npx vercel --prod
```
**Temps** : 5 minutes

---

## 📁 Structure repo

```
booking-saas/
├── landing-page/              # Plan A — Coiffeurs
├── landing-page-mecaniciens/  # Plan B — Prêt
├── landing-page-sante/        # Plan C — Prêt
└── docs/
    ├── deployment-backup.md   # Guide déploiement rapide
    ├── execution-guide.md     # Prospection
    └── tracking-prospection.md # Suivi
```

---

## 📞 Ressources

| Document | Usage |
|----------|-------|
| [execution-guide.md](./execution-guide.md) | Prospection active |
| [deployment-backup.md](./deployment-backup.md) | Déploiement pivot |
| [tracking-prospection.md](./tracking-prospection.md) | Suivi emails |

---

**Landings backup** : ✅ Prêtes à builder (5 min chacune)  
**Décision** : Dimanche 14h
