#!/bin/bash

# Setup script for Rendez MVP
# Usage: ./scripts/setup.sh

set -e

echo "🚀 Rendez MVP - Setup"
echo "====================="

# Check Node version
echo "📋 Checking Node.js..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js >= 18"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version must be >= 18. Found: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v)"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

# Setup environment
echo ""
echo "⚙️  Setting up environment..."
if [ ! -f .env.local ]; then
    cp .env.example .env.local
    echo "✅ Created .env.local from template"
    echo "⚠️  Please edit .env.local with your secrets"
else
    echo "✅ .env.local already exists"
fi

# Setup database
echo ""
echo "🗄️  Setting up database..."
echo "Make sure DATABASE_URL is set in .env.local"
read -p "Press enter to continue..."

echo "Running migrations..."
npx prisma migrate dev --name init

echo "Generating Prisma client..."
npx prisma generate

echo "Seeding database..."
npx prisma db seed

# Verify build
echo ""
echo "🔨 Verifying build..."
npm run build

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env.local with your secrets"
echo "2. Run: npm run dev"
echo "3. Open: http://localhost:3000"
echo ""
echo "For production deployment:"
echo "1. Push to GitHub"
echo "2. Connect to Vercel"
echo "3. Set environment variables in Vercel dashboard"