import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Clean existing data
  await prisma.slot.deleteMany();
  await prisma.booking.deleteMany();
  await prisma.service.deleteMany();
  await prisma.business.deleteMany();

  // Create demo business
  const hashedPassword = await bcrypt.hash("demo123456", 12);
  
  const business = await prisma.business.create({
    data: {
      name: "Salon Demo",
      slug: "salon-demo",
      email: "demo@booking-saas.app",
      password: hashedPassword,
      description: "Un salon de coiffure moderne et accueillant",
      phone: "+33 1 23 45 67 89",
      address: "12 Rue de la Paix",
      city: "Paris",
    },
  });

  console.log(`✅ Created business: ${business.name}`);

  // Create services
  const coupeHomme = await prisma.service.create({
    data: {
      businessId: business.id,
      name: "Coupe Homme",
      description: "Coupe classique ou moderne, finition rasoir",
      duration: 30,
      price: 2500,
      color: "#3b82f6",
      slots: {
        create: [
          { dayOfWeek: 1, startTime: "09:00", endTime: "12:00" },
          { dayOfWeek: 1, startTime: "14:00", endTime: "18:00" },
          { dayOfWeek: 2, startTime: "09:00", endTime: "12:00" },
          { dayOfWeek: 2, startTime: "14:00", endTime: "18:00" },
          { dayOfWeek: 3, startTime: "09:00", endTime: "12:00" },
          { dayOfWeek: 3, startTime: "14:00", endTime: "18:00" },
          { dayOfWeek: 4, startTime: "09:00", endTime: "12:00" },
          { dayOfWeek: 4, startTime: "14:00", endTime: "18:00" },
          { dayOfWeek: 5, startTime: "09:00", endTime: "12:00" },
          { dayOfWeek: 5, startTime: "14:00", endTime: "17:00" },
        ],
      },
    },
  });

  const coupeFemme = await prisma.service.create({
    data: {
      businessId: business.id,
      name: "Coupe Femme",
      description: "Coupe, brushing et conseil personnalisé",
      duration: 45,
      price: 4500,
      color: "#ec4899",
      slots: {
        create: [
          { dayOfWeek: 1, startTime: "09:00", endTime: "12:00" },
          { dayOfWeek: 1, startTime: "14:00", endTime: "18:00" },
          { dayOfWeek: 2, startTime: "09:00", endTime: "12:00" },
          { dayOfWeek: 2, startTime: "14:00", endTime: "18:00" },
          { dayOfWeek: 3, startTime: "09:00", endTime: "12:00" },
          { dayOfWeek: 3, startTime: "14:00", endTime: "18:00" },
          { dayOfWeek: 4, startTime: "09:00", endTime: "12:00" },
          { dayOfWeek: 4, startTime: "14:00", endTime: "18:00" },
          { dayOfWeek: 5, startTime: "09:00", endTime: "12:00" },
          { dayOfWeek: 5, startTime: "14:00", endTime: "17:00" },
        ],
      },
    },
  });

  console.log(`✅ Created services: ${coupeHomme.name}, ${coupeFemme.name}`);

  // Create sample bookings
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(10, 0, 0, 0);

  await prisma.booking.create({
    data: {
      businessId: business.id,
      serviceId: coupeHomme.id,
      customerName: "Jean Martin",
      customerEmail: "jean@example.com",
      customerPhone: "+33 6 12 34 56 78",
      startTime: tomorrow,
      endTime: new Date(tomorrow.getTime() + 30 * 60000),
      status: "CONFIRMED",
    },
  });

  console.log("✅ Created sample booking");

  console.log("\n🎉 Seed completed!");
  console.log(`\nDemo credentials:`);
  console.log(`  Email: demo@booking-saas.app`);
  console.log(`  Password: demo123456`);
  console.log(`  URL: http://localhost:3000/${business.slug}`);
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });