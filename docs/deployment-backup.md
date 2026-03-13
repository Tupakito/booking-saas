# Déploiement Rapide Landings Backup

> **Version** : 1.0.0  
> **Date** : 2026-03-13  
> **Statut** : ✅ Landings prêtes — Build en attente  
> **Objectif** : Déploiement en < 1h si pivot Dimanche

---

## 📁 Structure des landings backup

```
booking-saas/
├── landing-page/              # Plan A — Coiffeurs (déjà buildé)
├── landing-page-mecaniciens/  # Plan B — Mécaniciens (prêt à builder)
└── landing-page-sante/        # Plan C — Ostéopathes (prêt à builder)
```

---

## 🚀 Commandes de déploiement rapide

### Plan B — Mécaniciens (si pivot Dimanche 14h)

```bash
# 1. Builder (2 min)
cd landing-page-mecaniciens
npm install
npm run build

# 2. Déployer (2 min)
npx vercel --prod
# OU
# https://app.netlify.com/drop (glisser dist/)

# 3. URL attendue
# https://rendez-mecaniciens.vercel.app
```

### Plan C — Ostéopathes (si pivot nécessaire)

```bash
# 1. Builder (2 min)
cd landing-page-sante
npm install
npm run build

# 2. Déployer (2 min)
npx vercel --prod
# OU
# https://app.netlify.com/drop (glisser dist/)

# 3. URL attendue
# https://rendez-sante.vercel.app
```

---

## ⚡ Déploiement ultra-rapide (Netlify Drop)

Si Vercel pose problème, utiliser Netlify Drop (pas d'auth) :

1. Ouvrir https://app.netlify.com/drop
2. Glisser-déposer le dossier `dist/`
3. Récupérer l'URL instantanément

**Temps total** : < 2 minutes

---

## 📊 Différences entre les 3 landings

| Élément | Coiffeurs | Mécaniciens | Ostéopathes |
|---------|-----------|-------------|-------------|
| **Couleur** | Bleu | Bleu | Teal |
| **Headline** | "Arrêtez de répondre au téléphone" | "Arrêtez de jouer au téléphone" | "Moins de temps sur l'agenda" |
| **Pain point** | 10h/semaine au téléphone | 2h/jour au téléphone | Coût/complexité Doctolib |
| **Solution clé** | Sans compte client | Photos + devis | Sans compte + moins cher |
| **Pricing** | 29€/mois | 39€/mois | 25€/mois |
| **Formulaire** | Email simple | Email + nom garage | Email + profession |
| **Source tracking** | landing-rendez | landing-mecaniciens | landing-sante |

---

## 🎯 Scénarios de déploiement

### Scénario 1 : GO Coiffeurs (≥ 10 pré-inscriptions)
- ✅ Landing coiffeurs déjà déployée
- 🚫 Pas besoin des landings backup

### Scénario 2 : PIVOT Mécaniciens (< 10 coiffeurs)
```bash
cd landing-page-mecaniciens && npm install && npm run build && npx vercel --prod
```
- ⏱️ Temps : 5 minutes
- 📅 Déploiement : Dimanche 14h-15h
- 🎯 Prospection : Lundi matin

### Scénario 3 : PIVOT Ostéopathes (< 5 mécaniciens)
```bash
cd landing-page-sante && npm install && npm run build && npx vercel --prod
```
- ⏱️ Temps : 5 minutes
- 📅 Déploiement : Lundi si nécessaire
- 🎯 Prospection : Mardi matin

---

## 📋 Checklist pré-déploiement

### Pour chaque landing backup
- [x] Page.tsx créée avec copy adapté
- [x] Formulaire Formspree configuré (même endpoint, source différente)
- [x] Couleurs adaptées à la cible
- [ ] Build testé localement
- [ ] Déploiement Vercel configuré

### À faire Dimanche si pivot
- [ ] Builder la landing choisie
- [ ] Déployer sur Vercel/Netlify
- [ ] Tester le formulaire (1 email)
- [ ] Noter l'URL
- [ ] Lancer la prospection immédiatement

---

## 🔗 URLs et Dashboards

### Formspree (même pour les 3)
- **Endpoint** : https://formspree.io/f/xnqevwdr
- **Dashboard** : https://formspree.io/forms/xnqevwdr/submissions
- **Filtrage** : Par champ `source` (landing-rendez / landing-mecaniciens / landing-sante)

### Landings backup
| Plan | Dossier | URL cible |
|------|---------|-----------|
| B | landing-page-mecaniciens | rendez-mecaniciens.vercel.app |
| C | landing-page-sante | rendez-sante.vercel.app |

---

## 📝 Notes techniques

### Stack identique pour les 3 landings
- Next.js 16
- React + TypeScript
- Tailwind CSS
- shadcn/ui (Button, Input)
- Lucide React (icônes)
- Formspree (formulaires)

### Différences uniquement visuelles/copy
- Pas de changement technique entre les 3
- Même structure, même composants
- Adaptation couleurs et texte uniquement

---

**Statut** : ✅ Landings backup prêtes à builder  
**Temps de déploiement** : < 5 minutes chacune  
**Action requise** : Builder + déployer si pivot Dimanche
