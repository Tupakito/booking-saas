```markdown
# Booking SaaS

Plateforme de réservation en ligne pour professionnels (coiffeurs, artisans, commerçants locaux).

## 🚨 Configuration Vercel Requise

Pour éviter l'erreur 500 sur `/dashboard`, configurez ces variables d'environnement sur Vercel :

| Variable | Description | Où la trouver |
|----------|-------------|---------------|
| `DATABASE_URL` | URL PostgreSQL | Vercel Postgres ou Neon |
| `NEXTAUTH_SECRET` | Clé secrète JWT | `openssl rand -base64 32` |
| `NEXTAUTH_URL` | URL de l'app | `https://votre-app.vercel.app` |

### Étapes de configuration Vercel :

1. **Aller sur Vercel Dashboard** → Votre projet → Settings → Environment Variables

2. **Ajouter DATABASE_URL** :
   - Si vous utilisez Vercel Postgres : 
     - Storage → Connect Store → Create New → Postgres
     - Copier la chaîne de connexion Pooled
   - Si vous utilisez Neon : Copier l'URL de connexion avec `?sslmode=require`

3. **Générer NEXTAUTH_SECRET** :
   ```bash
   openssl rand -base64 32
   ```
   Copier le résultat dans la variable `NEXTAUTH_SECRET`

4. **Configurer NEXTAUTH_URL** :
   - Valeur : `https://votre-app.vercel.app` (votre URL de production)

5. **Redéployer** :
   - Deployments → Redeploy (avec Build Cache clear)

## 🚀 Démarrage rapide (Local)

```bash
# 1. Installer les dépendances
npm install

# 2. Copier et configurer les variables d'environnement
cp .env.example .env
# Éditer .env avec vos valeurs

# 3. Générer le client Prisma
npx prisma generate

# 4. Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

## 🛠 Stack technique

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Langage**: [TypeScript](https://www.typescriptlang.org/) (strict mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Authentification**: [NextAuth v5](https://authjs.dev/) (Auth.js)
- **Base de données**: [PostgreSQL](https://www.postgresql.org/) + [Prisma](https://www.prisma.io/)

## 📁 Structure du projet

```
booking-saas/
├── src/
│   ├── app/                    # App Router Next.js
│   │   ├── api/auth/          # Routes API NextAuth
│   │   ├── dashboard/         # Espace connecté (protégé)
│   │   ├── login/             # Page de connexion
│   │   ├── register/          # Page d'inscription
│   │   ├── globals.css        # Styles globaux
│   │   ├── layout.tsx         # Layout racine
│   │   └── page.tsx           # Landing page
│   ├── components/
│   │   ├── ui/                # Composants shadcn/ui
│   │   └── dashboard/         # Composants dashboard
│   ├── lib/
│   │   ├── auth.ts            # Configuration NextAuth
│   │   ├── prisma.ts          # Client Prisma (singleton)
│   │   └── utils.ts           # Utilitaires
│   └── types/
│       └── next-auth.d.ts     # Types étendus NextAuth
├── prisma/
│   └── schema.prisma          # Schéma de base de données
├── middleware.ts              # Protection des routes
├── auth.ts                    # Export NextAuth handlers
├── vercel.json                # Configuration build Vercel
├── .env.example               # Variables d'environnement
└── README.md                  # Ce fichier
```

## 📝 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Développement avec hot reload |
| `npm run build` | Build de production |
| `npm run start` | Démarrer le serveur de production |
| `npm run lint` | Linter le code |
| `npm run db:generate` | Générer le client Prisma |
| `npm run db:migrate` | Créer/appliquer les migrations |
| `npm run db:studio` | Ouvrir Prisma Studio |

## 🔒 Authentification

L'authentification utilise NextAuth v5 avec :
- **Credentials** : Email + mot de passe
- **JWT Strategy** : Sessions stockées dans des tokens signés
- **Middleware** : Protection des routes `/dashboard/*`

### Flux d'authentification :
1. Utilisateur se connecte sur `/login`
2. NextAuth vérifie les credentials via Prisma
3. Token JWT créé et stocké dans un cookie
4. Middleware vérifie le token sur chaque requête `/dashboard`
5. Si non authentifié → redirection vers `/login`

## 🐛 Dépannage Erreur 500

Si `/dashboard` retourne 500 :

| Cause | Solution |
|-------|----------|
| `DATABASE_URL` manquante | Vérifier les variables d'environnement Vercel |
| `NEXTAUTH_SECRET` trop courte | Générer avec `openssl rand -base64 32` |
| Prisma Client non généré | Vérifier `vercel.json` avec `prisma generate` |
| Erreur de connexion DB | Vérifier que l'URL contient `?sslmode=require` |

### Logs Vercel :
1. Vercel Dashboard → Deployments → Latest
2. Click sur "View Logs"
3. Chercher "Error" ou "Exception"

## 📄 Licence

Propriétaire - Tous droits réservés
```