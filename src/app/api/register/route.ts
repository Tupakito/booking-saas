import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/password";
import { z } from "zod";

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  businessName: z.string().min(2),
  slug: z.string().min(3).regex(/^[a-z0-9-]+$/),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = registerSchema.parse(body);

    // Check if email exists
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
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
        { error: "Cette URL est déjà utilisée" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await hashPassword(data.password);

    // Create user and business in transaction
    const user = await prisma.$transaction(async (tx) => {
      const newUser = await tx.user.create({
        data: {
          name: data.name,
          email: data.email,
          password: hashedPassword,
        },
      });

      await tx.business.create({
        data: {
          userId: newUser.id,
          name: data.businessName,
          slug: data.slug,
        },
      });

      return newUser;
    });

    return NextResponse.json(
      { success: true, userId: user.id },
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
      { error: "Une erreur est survenue" },
      { status: 500 }
    );
  }
}