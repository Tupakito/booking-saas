import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import { Calendar, LayoutDashboard, Settings, LogOut } from "lucide-react";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <Calendar className="w-8 h-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">Booking-Saas</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600 hidden sm:block">
                {session.user.email}
              </span>
              <Link
                href="/api/auth/signout"
                className="flex items-center space-x-1 text-sm text-red-600 hover:text-red-700"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Déconnexion</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <nav className="space-y-1">
              <Link
                href="/dashboard"
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <LayoutDashboard className="w-5 h-5" />
                <span>Tableau de bord</span>
              </Link>
              <Link
                href="/dashboard/services"
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Calendar className="w-5 h-5" />
                <span>Mes services</span>
              </Link>
              <Link
                href="/dashboard/settings"
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Settings className="w-5 h-5" />
                <span>Paramètres</span>
              </Link>
            </nav>

            <div className="mt-8 p-4 bg-primary-50 rounded-lg">
              <p className="text-sm text-primary-800 font-medium mb-2">
                Votre page publique
              </p>
              <p className="text-xs text-primary-600 mb-3">
                booking-saas.app/{session.user.slug}
              </p>
              <Link
                href={`/${session.user.slug}`}
                target="_blank"
                className="text-xs text-primary-700 underline hover:text-primary-800"
              >
                Voir ma page →
              </Link>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}