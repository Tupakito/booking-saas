import Link from "next/link";
import { Calendar, Users, Clock, TrendingUp, Plus, Settings } from "lucide-react";

export default function DashboardPage() {
  // TODO: Connect to real data
  const stats = {
    bookingsToday: 5,
    bookingsWeek: 23,
    totalCustomers: 142,
    revenue: 2840,
  };

  const upcomingBookings = [
    { id: 1, customer: "Marie Dupont", service: "Coupe femme", time: "14:00", duration: "45min" },
    { id: 2, customer: "Jean Martin", service: "Coupe homme", time: "15:00", duration: "30min" },
    { id: 3, customer: "Sophie Bernard", service: "Coloration", time: "16:30", duration: "90min" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Calendar className="w-6 h-6 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">Booking-Saas</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Mon Salon</span>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <nav className="space-y-1">
              <Link href="/dashboard" className="flex items-center space-x-3 px-4 py-3 bg-primary-50 text-primary-700 rounded-lg font-medium">
                <TrendingUp className="w-5 h-5" />
                <span>Tableau de bord</span>
              </Link>
              <Link href="/dashboard/services" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Calendar className="w-5 h-5" />
                <span>Mes services</span>
              </Link>
              <Link href="/dashboard/calendar" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Clock className="w-5 h-5" />
                <span>Mon agenda</span>
              </Link>
              <Link href="/dashboard/customers" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Users className="w-5 h-5" />
                <span>Clients</span>
              </Link>
            </nav>

            <div className="mt-8 p-4 bg-primary-50 rounded-lg">
              <p className="text-sm text-primary-800 font-medium mb-2">Votre page publique</p>
              <p className="text-xs text-primary-600 mb-3">mon-salon.booking-saas.app</p>
              <Link href="/mon-salon" className="text-xs text-primary-700 underline">
                Voir ma page →
              </Link>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
              <p className="text-gray-600">Bienvenue dans votre espace de gestion</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="card">
                <p className="text-sm text-gray-600 mb-1">Aujourd'hui</p>
                <p className="text-3xl font-bold text-gray-900">{stats.bookingsToday}</p>
                <p className="text-xs text-gray-500">rendez-vous</p>
              </div>
              <div className="card">
                <p className="text-sm text-gray-600 mb-1">Cette semaine</p>
                <p className="text-3xl font-bold text-gray-900">{stats.bookingsWeek}</p>
                <p className="text-xs text-gray-500">rendez-vous</p>
              </div>
              <div className="card">
                <p className="text-sm text-gray-600 mb-1">Clients</p>
                <p className="text-3xl font-bold text-gray-900">{stats.totalCustomers}</p>
                <p className="text-xs text-gray-500">au total</p>
              </div>
              <div className="card">
                <p className="text-sm text-gray-600 mb-1">Revenus estimés</p>
                <p className="text-3xl font-bold text-gray-900">{stats.revenue}€</p>
                <p className="text-xs text-gray-500">ce mois</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/dashboard/services/new" className="inline-flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                <Plus className="w-5 h-5" />
                <span>Nouveau service</span>
              </Link>
              <Link href="/dashboard/calendar" className="inline-flex items-center space-x-2 bg-white text-gray-700 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <Calendar className="w-5 h-5" />
                <span>Voir mon agenda</span>
              </Link>
            </div>

            {/* Upcoming Bookings */}
            <div className="card">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Prochains rendez-vous</h2>
              <div className="space-y-4">
                {upcomingBookings.map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{booking.customer}</p>
                      <p className="text-sm text-gray-600">{booking.service}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">{booking.time}</p>
                      <p className="text-sm text-gray-600">{booking.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/dashboard/calendar" className="block text-center text-primary-600 mt-4 hover:underline">
                Voir tous les rendez-vous →
              </Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}