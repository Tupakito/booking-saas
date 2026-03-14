```typescript
import Link from "next/link";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import bcrypt from "bcryptjs";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Inscription</CardTitle>
          <CardDescription>
            Créez votre compte gratuitement
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            action={async (formData) => {
              "use server";
              const name = formData.get("name") as string;
              const email = formData.get("email") as string;
              const password = formData.get("password") as string;

              try {
                // Vérifier si l'email existe déjà
                const existingUser = await prisma.user.findUnique({
                  where: { email },
                });

                if (existingUser) {
                  redirect("/register?error=EmailExists");
                }

                // Hasher le mot de passe
                const hashedPassword = await bcrypt.hash(password, 10);

                // Créer l'utilisateur
                await prisma.user.create({
                  data: {
                    name,
                    email,
                    password: hashedPassword,
                  },
                });

                // Rediriger vers login
                redirect("/login?registered=true");
              } catch (error) {
                console.error("Registration error:", error);
                redirect("/register?error=Unknown");
              }
            }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Nom</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Votre nom"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="vous@exemple.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                required
                minLength={6}
              />
            </div>
            <Button type="submit" className="w-full">
              Créer mon compte
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <p className="text-sm text-muted-foreground text-center">
            Déjà un compte ?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Se connecter
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
```