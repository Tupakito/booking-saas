import Link from "next/link";
import { Calendar, Clock, Shield, Zap, CheckCircle, Star } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Calendar className="w-8 h-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">Booking-Saas</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
                Dashboard
              </Link>
              <Link href="/login" className="btn-secondary text-sm">
                Connexion
              </Link>
              <Link href="/register" className="btn-primary text-sm">
                Essai gratuit
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Star className="w-4 h-4" />
            <span>Nouveau — Lancement offre spéciale</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            La prise de rendez-vous{" "}
            <span className="text-primary-600">simplifiée</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Permettez à vos clients de réserver en ligne 24/7. Gérez votre agenda, 
            vos services et vos disponibilités en quelques clics.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/register" className="btn-primary text-lg">
              Commencer gratuitement
            </Link>
            <Link href="/demo" className="btn-secondary text-lg">
              Voir la démo
            </Link>
          </div>
          
          <p className="mt-4 text-sm text-gray-500">
            Sans engagement • 14 jours d'essai gratuit • Puis 19€/mois
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tout ce qu'il faut pour gérer vos rendez-vous
            </h2>
            <p className="text-gray-600 text-lg">
              Une solution complète, simple et élégante
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Réservation en ligne
              </h3>
              <p className="text-gray-600">
                Vos clients réservent 24/7 sans appeler. Page publique personnalisée.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Gestion intelligente
              </h3>
              <p className="text-gray-600">
                Définissez vos disponibilités une fois. Le système gère le reste.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Sécurisé & fiable
              </h3>
              <p className="text-gray-600">
                Données sécurisées, sauvegardes automatiques, disponibilité 99.9%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Un prix simple, sans surprise
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            Tout inclus, sans engagement
          </p>
          
          <div className="card max-w-md mx-auto border-2 border-primary-500 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
              Offre de lancement
            </div>
            
            <div className="pt-4">
              <span className="text-5xl font-bold text-gray-900">19€</span>
              <span className="text-gray-600">/mois</span>
            </div>
            
            <p className="text-gray-600 mt-2">Par commerce, sans limite de RDV</p>
            
            <ul className="mt-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Réservation en ligne illimitée</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Page publique personnalisée</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Gestion des services et disponibilités</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Emails de confirmation automatiques</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Support par email</span>
              </li>
            </ul>
            
            <Link href="/register" className="btn-primary w-full mt-8 block text-center">
              Commencer l'essai gratuit
            </Link>
            
            <p className="text-sm text-gray-500 mt-4">
              14 jours gratuits, sans carte bancaire
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à simplifier vos rendez-vous ?
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            Rejoignez les commerces qui gagnent du temps chaque jour.
          </p>
          <Link href="/register" className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            Créer mon compte gratuit
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Calendar className="w-6 h-6 text-primary-400" />
            <span className="text-white font-semibold">Booking-Saas</span>
          </div>
          <p className="text-sm">
            © 2024 Booking-Saas. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}