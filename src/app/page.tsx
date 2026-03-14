```typescript
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Simplifiez vos réservations
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              La plateforme tout-en-un pour gérer vos rendez-vous et vos clients
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/register"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
              >
                Commencer gratuitement
              </Link>
              <Link
                href="/login"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                Se connecter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Fonctionnalités principales
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Gestion des services"
              description="Créez et personnalisez vos services avec prix, durée et disponibilités."
            />
            <FeatureCard
              title="Réservations en ligne"
              description="Vos clients peuvent réserver 24/7 selon vos disponibilités."
            />
            <FeatureCard
              title="Tableau de bord"
              description="Suivez vos réservations, revenus et statistiques en temps réel."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
```