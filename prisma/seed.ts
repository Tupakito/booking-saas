import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Create test user
  const user = await prisma.user.create({
    data: {
      email: "test@example.com",
      name: "Test User",
    },
  });

  console.log(`✅ Created user: ${user.email}`);

  // Create business for test user
  const business = await prisma.business.create({
    data: {
      userId: user.id,
      slug: "salon-demo",
      name: "Salon de Coiffure Demo",
      description: "Un super salon pour tester l'app",
      phone: "+33 1 23 45 67 89",
      city: "Paris",
    },
  });

  console.log(`✅ Created business: ${business.name}`);

  // Create sample service
  const service = await prisma.service.create({
    data: {
      businessId: business.id,
      name: "Coupe Homme",
      description: "Coupe classique + shampoing",
      duration: 30,
      price: 2500, // 25€
      color: "#3b82f6",
      slots: {
        create: [
          { dayOfWeek: 1, startTime: "09:00", endTime: "12:00" }, // Lundi matin
          { dayOfWeek: 1, startTime: "14:00", endTime: "18:00" }, // Lundi après-midi
          { dayOfWeek: 2, startTime: "09:00", endTime: "12:00" }, // Mardi
          { dayOfWeek: 3, startTime: "09:00", endTime: "12:00" }, // Mercredi
          { dayOfWeek: 4, startTime: "09:00", endTime: "12:00" }, // Jeudi
          { dayOfWeek: 5, startTime: "09:00", endTime: "12:00" }, // Vendredi
        ],
      },
    },
  });

  console.log(`✅ Created service: ${service.name}`);

  console.log("🎉 Seed completed!");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });