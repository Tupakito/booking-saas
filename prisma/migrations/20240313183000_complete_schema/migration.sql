-- ============================================
-- Migration: Complete Schema for Booking Flow
-- ============================================

-- Create BusinessSettings table
CREATE TABLE IF NOT EXISTS "business_settings" (
    "id" TEXT NOT NULL,
    "business_id" TEXT NOT NULL,
    "email_notifications" BOOLEAN NOT NULL DEFAULT true,
    "sms_notifications" BOOLEAN NOT NULL DEFAULT false,
    "min_booking_notice" INTEGER NOT NULL DEFAULT 60,
    "max_booking_advance" INTEGER NOT NULL DEFAULT 30,
    "allow_same_day_booking" BOOLEAN NOT NULL DEFAULT true,
    "cancellation_policy" TEXT,
    "cancellation_hours" INTEGER NOT NULL DEFAULT 24,

    CONSTRAINT "business_settings_pkey" PRIMARY KEY ("id")
);

-- Create unique index on business_id
CREATE UNIQUE INDEX IF NOT EXISTS "business_settings_business_id_key" ON "business_settings"("business_id");

-- Add foreign key
ALTER TABLE "business_settings" 
    ADD CONSTRAINT "business_settings_business_id_fkey" 
    FOREIGN KEY ("business_id") REFERENCES "businesses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Add new columns to services
ALTER TABLE "services" 
    ADD COLUMN IF NOT EXISTS "buffer_time" INTEGER NOT NULL DEFAULT 0;

-- Add new columns to slots
ALTER TABLE "slots" 
    ADD COLUMN IF NOT EXISTS "specific_date" TIMESTAMP(3),
    ADD COLUMN IF NOT EXISTS "is_available" BOOLEAN NOT NULL DEFAULT true;

-- Add indexes for slots
CREATE INDEX IF NOT EXISTS "slots_specific_date_idx" ON "slots"("specific_date");

-- Add new columns to bookings
ALTER TABLE "bookings" 
    ADD COLUMN IF NOT EXISTS "currency" TEXT NOT NULL DEFAULT 'EUR',
    ADD COLUMN IF NOT EXISTS "payment_status" TEXT NOT NULL DEFAULT 'PENDING',
    ADD COLUMN IF NOT EXISTS "stripe_payment_intent_id" TEXT,
    ADD COLUMN IF NOT EXISTS "internal_notes" TEXT,
    ADD COLUMN IF NOT EXISTS "cancelled_at" TIMESTAMP(3),
    ADD COLUMN IF NOT EXISTS "cancel_reason" TEXT,
    ADD COLUMN IF NOT EXISTS "reminder_sent" BOOLEAN NOT NULL DEFAULT false;

-- Add index for customer email searches
CREATE INDEX IF NOT EXISTS "bookings_customer_email_idx" ON "bookings"("customer_email");

-- Update existing bookings to have currency and payment status
UPDATE "bookings" 
SET "currency" = 'EUR', 
    "payment_status" = 'PENDING' 
WHERE "currency" IS NULL OR "payment_status" IS NULL;

-- Add check constraint for payment status
ALTER TABLE "bookings" 
    ADD CONSTRAINT "bookings_payment_status_check" 
    CHECK ("payment_status" IN ('PENDING', 'PAID', 'REFUNDED', 'FAILED'));

-- Add comment for documentation
COMMENT ON TABLE "business_settings" IS 'Configuration and preferences for each business';
COMMENT ON TABLE "bookings" IS 'Customer appointments and reservations';
COMMENT ON COLUMN "bookings"."amount" IS 'Price in cents, copied from service at booking time to preserve historical pricing';