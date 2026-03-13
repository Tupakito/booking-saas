# Déploiement Landing Page — Instructions

> **Statut** : ✅ Build prêt, en attente de déploiement Vercel  
> **Deadline** : Ven 13/03 14h  
> **Formulaire** : Formspree connecté (xnqevwdr)

---

## 🚀 Déploiement Rapide

### Option 1 : Vercel CLI (Recommandé)

```bash
cd /opt/ai-startup/repos/booking-saas/landing-page

# 1. Se connecter à Vercel
npx vercel login
# → Ouvrir le lien affiché et valider

# 2. Déployer
npx vercel --prod

# 3. Récupérer l'URL (ex: rendez-xyz.vercel.app)
```

### Option 2 : Vercel Dashboard (Alternative)

1. Aller sur https://vercel.com/new
2. Importer le repo GitHub (ou upload le dossier `dist/`)
3. Déployer automatiquement

### Option 3 : Static Upload (Fallback)

Le dossier `dist/` contient le build statique complet :
- Uploader sur Netlify Drop : https://app.netlify.com/drop
- Ou Cloudflare Pages
- Ou n'importe quel hébergeur statique

---

## ✅ Vérifications post-déploiement

- [ ] Landing accessible sur URL publique
- [ ] Formulaire email fonctionnel (tester avec un email)
- [ ] Confirmation Formspree reçue
- [ ] Mobile responsive OK
- [ ] Temps de chargement < 3s

---

## 📊 Suivi des pré-inscriptions

### Dashboard Formspree
https://formspree.io/forms/xnqevwdr/submissions

### Objectif
**10 emails en 48h** (deadline Dim 15/03 12h)

### Canaux de prospection
1. **Instagram DMs** : 20 coiffeurs locaux
2. **Facebook Groups** : 3 posts dans groupes coiffeurs
3. **Appels directs** : 5 salons

---

## 🔧 Configuration technique

### Formulaire Formspree
```html
<form action="https://formspree.io/f/xnqevwdr" method="POST">
  <input type="email" name="email" required />
  <input type="hidden" name="source" value="landing-rendez" />
  <button type="submit">Rejoindre la liste</button>
</form>
```

### Stack
- Next.js 16 (static export)
- Tailwind CSS
- shadcn/ui (composants custom)
- Formspree (collecte emails)

---

## 📝 Notes

- Build statique généré dans `dist/`
- Pas de backend nécessaire
- 100% gratuit (Vercel hobby + Formspree free)
- Temps de déploiement : ~2 minutes

---

## 🆘 En cas de problème

**Problème** : Vercel login ne fonctionne pas  
**Solution** : Utiliser Netlify Drop (drag & drop du dossier dist/)

**Problème** : Formulaire ne marche pas  
**Solution** : Vérifier l'endpoint Formspree (xnqevwdr)

**Problème** : Build échoue  
**Solution** : `npm run build` doit générer le dossier `dist/`

---

**Dernier build** : 2026-03-13 01:35 UTC  
**Statut** : Prêt pour déploiement
