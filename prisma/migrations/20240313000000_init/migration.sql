-- ============================================
-- Migration: Initial Schema for Rendez MVP
-- Created: 2024-03-13
-- Description: Complete database setup with auth, business, services, slots, and bookings
-- ============================================

-- Create enums
CREATE TYPE "BookingStatus" AS ENUM ('CONFIRMED', 'CANCELLED', 'NO_SHOW');
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'PAID', 'REFUNDED', 'FAILED');

-- ============================================
-- AUTH TABLES (NextAuth.js v5)
-- ============================================

CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "email_verified" TIMESTAMP(3),
    "name" TEXT,
    "image" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "accounts" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "sessions" (
    "id" TEXT NOT NULL,
    "session_token" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "verificationtokens" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- ============================================
-- BUSINESS TABLE
-- ============================================

CREATE TABLE "businesses" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "phone" TEXT,
    "address" TEXT,
    "city" TEXT,
    "zip_code" TEXT,
    "logo_url" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "stripe_account_id" TEXT,
    "stripe_onboarding" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "businesses_pkey" PRIMARY KEY ("id")
);

-- ============================================
-- SERVICES TABLE
-- ============================================

CREATE TABLE "services" (
    "id" TEXT NOT NULL,
    "business_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "duration" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'EUR',
    "color" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "services_pkey" PRIMARY KEY ("id")
);

-- ============================================
-- SLOTS TABLE (Disponibilités récurrentes)
-- ============================================

CREATE TABLE "slots" (
    "id" TEXT NOT NULL,
    "service_id" TEXT NOT NULL,
    "day_of_week" INTEGER NOT NULL,
    "start_time" TEXT NOT NULL,
    "end_time" TEXT NOT NULL,

    CONSTRAINT "slots_pkey" PRIMARY KEY ("id")
);

-- ============================================
-- BOOKINGS TABLE (Réservations)
-- ============================================

CREATE TABLE "bookings" (
    "id" TEXT NOT NULL,
    "business_id" TEXT NOT NULL,
    "service_id" TEXT NOT NULL,
    "customer_name" TEXT NOT NULL,
    "customer_email" TEXT NOT NULL,
    "customer_phone" TEXT,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "status" "BookingStatus" NOT NULL DEFAULT 'CONFIRMED',
    "notes" TEXT,
    "payment_status" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bookings_pkey" PRIMARY KEY ("id")
);

-- ============================================
-- UNIQUE INDEXES
-- ============================================

CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
CREATE UNIQUE INDEX "accounts_provider_provider_account_id_key" ON "accounts"("provider", "provider_account_id");
CREATE UNIQUE INDEX "sessions_session_token_key" ON "sessions"("session_token");
CREATE UNIQUE INDEX "verificationtokens_token_key" ON "verificationtokens"("token");
CREATE UNIQUE INDEX "verificationtokens_identifier_token_key" ON "verificationtokens"("identifier", "token");
CREATE UNIQUE INDEX "businesses_user_id_key" ON "businesses"("user_id");
CREATE UNIQUE INDEX "businesses_slug_key" ON "businesses"("slug");
CREATE UNIQUE INDEX "businesses_stripe_account_id_key" ON "businesses"("stripe_account_id");

-- ============================================
-- PERFORMANCE INDEXES
-- ============================================

CREATE INDEX "businesses_slug_idx" ON "businesses"("slug");
CREATE INDEX "services_business_id_idx" ON "services"("business_id");
CREATE INDEX "slots_service_id_idx" ON "slots"("service_id");
CREATE INDEX "bookings_business_id_idx" ON "bookings"("business_id");
CREATE INDEX "bookings_start_time_idx" ON "bookings"("start_time");

-- ============================================
-- FOREIGN KEYS
-- ============================================

ALTER TABLE "accounts" ADD CONSTRAINT "accounts_user_id_fkey" 
    FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_fkey" 
    FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "businesses" ADD CONSTRAINT "businesses_user_id_fkey" 
    FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "services" ADD CONSTRAINT "services_business_id_fkey" 
    FOREIGN KEY ("business_id") REFERENCES "businesses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "slots" ADD CONSTRAINT "slots_service_id_fkey" 
    FOREIGN KEY ("service_id") REFERENCES "services"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "bookings" ADD CONSTRAINT "bookings_business_id_fkey" 
    FOREIGN KEY ("business_id") REFERENCES "businesses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "bookings" ADD CONSTRAINT "bookings_service_id_fkey" 
    FOREIGN KEY ("service_id") REFERENCES "services"("id") ON DELETE CASCADE ON UPDATE CASCADE;