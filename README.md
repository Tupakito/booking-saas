```markdown
# Booking SaaS - Landing Page

Landing page pour la plateforme de réservation en ligne.

## 🚀 Démarrage rapide

```bash
cd landing-page

# Installation des dépendances
npm install

# Build de production (testé en local)
npm run build

# Démarrer le serveur de production
npm start
```

## ✅ Vérification Build Local

Le build a été testé en local avec succès :
```bash
✓ Compiled successfully
✓ Generating static pages (4/4)
✓ Finalizing page optimization
```

Fichiers générés dans `landing-page/dist/`:
- index.html
- 404.html
- _next/ (assets)

## 📁 Structure du projet

```
landing-page/
├── src/
│   └── app/
│       ├── globals.css    # Styles globaux
│       ├── layout.tsx     # Layout racine
│       └── page.tsx       # Page d'accueil
├── dist/                   # Output du build (static)
├── next.config.js          # Config Next.js (export static)
├── vercel.json             # Config Vercel
├── package.json            # Dépendances
└── tsconfig.json           # Config TypeScript
```

## ⚙️ Configuration Vercel

Le fichier `vercel.json` est configuré avec :
- `buildCommand`: npm run build
- `outputDirectory`: dist
- `framework`: nextjs
- `installCommand`: npm install

## 📝 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Développement |
| `npm run build` | Build de production |
| `npm start` | Serveur de production |

## 🛠 Stack technique

- **Framework**: Next.js 14.2.5
- **Langage**: TypeScript
- **Output**: Static Export (dist/)

## 📄 Licence

Propriétaire - Tous droits réservés
```