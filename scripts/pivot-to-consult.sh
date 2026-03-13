#!/bin/bash

# Pivot Rapide Rendez → Consult
# Usage: ./scripts/pivot-to-consult.sh
# Durée: ~6h de travail

set -e

echo "🚀 Pivot Rendez → Consult"
echo "=========================="

# 1. Créer branche pivot
echo "📦 Création branche pivot-consult..."
git checkout -b pivot-consult

# 2. Rebranding automatique
echo "📝 Rebranding automatique..."
find src -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i 's/Rendez/Consult/g' {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i 's/rendez/consult/g' {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i 's/Salon de coiffure/Cabinet de consulting/g' {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i 's/salon/consultant/g' {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i 's/coiffure/consulting/g' {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i 's/Coiffure/Consulting/g' {} \;

# 3. Copier landing
echo "🌐 Préparation landing..."
cp -r landing-page landing-consult
echo "⚠️  Modifier manuellement la copy dans landing-consult/"

# 4. Mettre à jour package.json
echo "📦 Mise à jour package.json..."
sed -i 's/booking-saas/consult-saas/g' package.json
sed -i 's/Rendez/Consult/g' package.json

# 5. Commit
echo "💾 Commit des changements..."
git add .
git commit -m "pivot: Rendez → Consult (rebranding automatique)"

echo ""
echo "✅ Rebranding automatique terminé!"
echo ""
echo "Prochaines étapes manuelles:"
echo "1. Modifier prisma/seed.ts avec données consultants"
echo "2. Modifier landing-consult/ avec copy consulting"
echo "3. Vérifier tous les textes"
echo "4. Deploy: vercel --prod"
echo ""
echo "Temps estimé total: ~6h (2h auto + 4h manuel)"