import { notFound } from "next/navigation";
import { Calendar, Clock, MapPin, Phone, Star } from "lucide-react";

// TODO: Fetch from database
async function getBusiness(slug: string) {
  // Placeholder data
  const businesses: Record<string, any> = {
    "mon-salon": {
      name: "Mon Salon",
      description: "Salon de coiffure moderne au cœur de la ville",
      address: "12 Rue de la Paix, 75002 Paris",
      phone: "+33 1 42 00 00 00",
      rating: 4.8,
      reviews: 127,
      services: [
        { id: 1, name: "Coupe homme", duration: 30, price: 25 },
        { id: 2, name: "Coupe femme", duration: 45, price: 45 },
        { id: 3, name: "Coloration", duration: 90, price: 75 },
      ],
    },
  };
  
  return businesses[slug] || null;
}

export default async function BookingPage({ params }: { params: { slug: string } }) {
  const business = await getBusiness(params.slug);
  
  if (!business) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-2">
            <Calendar className="w-6 h-6 text-primary-600" />
            <span className="font-semibold text-gray-900">Booking-Saas</span>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Business Info */}
        <div className="card mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{business.name}</h1>
          <p className="text-gray-600 mb-4">{business.description}</p>
          
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="font-medium">{business.rating}</span>
              <span>({business.reviews} avis)</span>
            </div>
          </div>
          
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>{business.address}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>{business.phone}</span>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="card mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Choisissez votre prestation</h2>
          <div className="space-y-3">
            {business.services.map((service: any) => (
              <button
                key={service.id}
                className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors text-left"
              >
                <div>
                  <p className="font-medium text-gray-900">{service.name}</p>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration} min</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{service.price}€</p>
                  <p className="text-xs text-primary-600">Choisir →</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Calendar Placeholder */}
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Choisissez une date</h2>
          <div className="p-8 bg-gray-100 rounded-lg text-center text-gray-600">
            <Calendar className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <p>Calendrier de réservation</p>
            <p className="text-sm mt-2">Sélectionnez d'abord un service</p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Propulsé par <span className="font-medium text-primary-600">Booking-Saas</span>
        </p>
      </main>
    </div>
  );
}