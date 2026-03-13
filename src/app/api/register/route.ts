import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { z } from "zod";

const registerSchema = z.object({
  businessName: z.string().min(2),
  slug: z.string().min(3).regex(/^[a-z0-9-]+$/),
  email: z.string().email(),
  password: z.string().min(8),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = registerSchema.parse(body);

    // Check if email exists
    const existingBusiness = await prisma.business.findUnique({
      where: { email: data.email },
    });

    if (existingBusiness) {
      return NextResponse.json(
        { error: "Cet email est déjà utilisé" },
        { status: 400 }
      );
    }

    // Check if slug exists
    const existingSlug = await prisma.business.findUnique({
      where: { slug: data.slug },
    });

    if (existingSlug) {
      return NextResponse.json(
        { error: "Cette URL est déjà prise" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(data.password, 12);

    // Create business
    const business = await prisma.business.create({
      data: {
        name: data.businessName,
        slug: data.slug,
        email: data.email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { success: true, businessId: business.id },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Données invalides" },
        { status: 400 }
      );
    }

    console.error("Register error:", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}