# Positionnement MVP — Rendez

> **Version** : 1.0.1  
> **Dernière mise à jour** : 2026-03-13  
> **Statut** : 🚨 EN COURS — Déploiement + Prospection

---

## 🎯 Situation actuelle

**Phase** : Validation 48h en cours  
**Deadline** : Dimanche 15/03 12h (bilan) / 14h (décision)  
**Objectif** : 10 pré-inscriptions

### Statut immédiat

| Élément | Statut | Action requise |
|---------|--------|----------------|
| Landing page | ✅ Build prêt | Déploiement Vercel/Netlify |
| Formulaire | ✅ Formspree configuré | Test après déploiement |
| Prospection | 🔴 Pas commencée | Lancer IMMÉDIATEMENT |
| Tracking | ✅ Tableau prêt | [tracking-prospection.md](./tracking-prospection.md) |

---

## 🚀 Plan d'action immédiat (Vendredi 13/03)

### 14h — Déploiement (15 min)
Option A : Vercel
```bash
cd landing-page/
npx vercel login
npx vercel --prod
```

Option B : Netlify Drop (plus rapide)
- Aller sur https://app.netlify.com/drop
- Glisser-déposer le dossier `landing-page/dist/`
- Récupérer l'URL (ex: rendez-landing-abc123.netlify.app)

### 14h15 — Test (5 min)
- [ ] Landing accessible
- [ ] Formulaire fonctionnel
- [ ] Email reçu sur Formspree

### 15h — Lancement prospection (3h)
- [ ] 10 DMs Instagram (coiffeurs Lyon/Marseille)
- [ ] 1 post Facebook groupes coiffeurs
- [ ] 3 appels salons locaux

### 20h — Premier bilan
- Combien d'emails collectés ?
- Quels feedbacks reçus ?

---

## 🎨 Plan de pivot (si besoin Dimanche)

| Scénario | Critère | Action | Landing prête |
|----------|---------|--------|---------------|
| **GO beauté** | ≥ 10 pré-inscriptions | Build MVP | ✅ |
| **PIVOT mécaniciens** | < 10 beauté | Nouvelle cible | ✅ [landing-copy-mecaniciens.md](./landing-copy-mecaniciens.md) |
| **PIVOT ostéopathes** | < 5 mécaniciens | Santé | ✅ [landing-copy-osteopathes.md](./landing-copy-osteopathes.md) |

---

## 📊 North Star Metric
**"RDV pris via la plateforme"** — mais d'abord : **10 emails collectés**

---

## 📞 Contacts et ressources

### Dashboard
- **Formspree** : https://formspree.io/forms/xnqevwdr/submissions
- **Tracking** : [tracking-prospection.md](./tracking-prospection.md)

### Templates prospection
- [Prospection Plan](./prospection-plan.md)

### Landings
- [Coiffeurs](./landing-copy.md)
- [Mécaniciens](./landing-copy-mecaniciens.md)
- [Ostéopathes](./landing-copy-osteopathes.md)

---

**⚠️ URGENCE** : Chaque heure perdue = -2% de chances d'atteindre 10 pré-inscriptions.  
**Action immédiate** : Déployer maintenant, prospection dans l'heure qui suit.
