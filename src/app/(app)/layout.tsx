import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import Link from "next/link";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login?callbackUrl=/app/dashboard");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/app/dashboard" className="text-xl font-bold text-blue-600">
              Rendez
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 hidden sm:block">
                {session.user.email}
              </span>
              <Link
                href="/api/auth/signout"
                className="text-sm text-red-600 hover:text-red-500"
              >
                Déconnexion
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 flex-shrink-0">
            <nav className="space-y-1">
              <Link
                href="/app/dashboard"
                className="block px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Tableau de bord
              </Link>
              <Link
                href="/app/services"
                className="block px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Mes prestations
              </Link>
              <Link
                href="/app/calendar"
                className="block px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Calendrier
              </Link>
              <Link
                href="/app/settings"
                className="block px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Paramètres
              </Link>
            </nav>
          </aside>

          <main className="flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
}