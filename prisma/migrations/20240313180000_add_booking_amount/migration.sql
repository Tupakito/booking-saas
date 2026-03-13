-- Add amount column to bookings table
ALTER TABLE "bookings" ADD COLUMN IF NOT EXISTS "amount" INTEGER;

-- Update existing bookings with service price
UPDATE "bookings" 
SET "amount" = (
  SELECT "price" FROM "services" WHERE "services"."id" = "bookings"."serviceId"
)
WHERE "amount" IS NULL;