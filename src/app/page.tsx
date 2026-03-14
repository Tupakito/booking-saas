```typescript
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Users, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Simplifiez vos{" "}
            <span className="text-primary-600">réservations</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            La plateforme tout-en-un pour gérer vos rendez-vous et vos clients.
            Parfaite pour les coiffeurs, artisans et commerçants locaux.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="gap-2">
                Commencer gratuitement
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" size="lg">
                Se connecter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Fonctionnalités principales
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={Calendar}
            title="Gestion des réservations"
            description="Acceptez des réservations 24/7. Vos clients peuvent réserver selon vos disponibilités en temps réel."
          />
          <FeatureCard
            icon={Clock}
            title="Calendrier intelligent"
            description="Visualisez votre planning d'un coup d'œil. Gérez vos disponibilités et vos congés facilement."
          />
          <FeatureCard
            icon={Users}
            title="Gestion des clients"
            description="Gardez une trace de vos clients, leurs préférences et leur historique de réservations."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à simplifier votre planning ?
          </h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Rejoignez les professionnels qui gagnent du temps chaque jour avec notre solution de réservation.
          </p>
          <Link href="/register">
            <Button size="lg" variant="secondary" className="gap-2">
              Créer mon compte gratuit
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 Booking SaaS. Tous droits réservés.</p>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-primary-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
```