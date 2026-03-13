import Link from "next/link";
import { Calendar } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-2xl shadow-lg">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Calendar className="w-12 h-12 text-primary-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Connexion</h1>
          <p className="mt-2 text-gray-600">
            Accédez à votre espace professionnel
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="vous@exemple.fr"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Se connecter
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Pas encore de compte ?{" "}
          <Link href="/register" className="text-primary-600 hover:underline font-medium">
            Créer un compte
          </Link>
        </p>
      </div>
    </div>
  );
}