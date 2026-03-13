#!/bin/bash

# Quick start for Rendez MVP (assumes setup already done)
# Usage: ./scripts/quick-start.sh

set -e

echo "🚀 Rendez MVP - Quick Start"
echo "============================"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "❌ node_modules not found. Running setup first..."
    ./scripts/setup.sh
    exit 0
fi

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "❌ .env.local not found. Creating from template..."
    cp .env.example .env.local
    echo "⚠️  Please edit .env.local with your secrets before continuing"
    exit 1
fi

# Check database
echo "🗄️  Checking database..."
if ! npx prisma db pull > /dev/null 2>&1; then
    echo "⚠️  Database not set up. Running migrations..."
    npx prisma migrate dev
fi

# Start dev server
echo ""
echo "🚀 Starting development server..."
echo "================================"
npm run dev