"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ServiceSelector } from "@/components/booking/service-selector";
import { DatePicker } from "@/components/booking/date-picker";
import { TimeSlotPicker } from "@/components/booking/time-slot-picker";
import { CustomerForm } from "@/components/booking/customer-form";
import { BookingSummary } from "@/components/booking/booking-summary";
import { Calendar, MapPin, Phone, Star, Clock, CheckCircle } from "lucide-react";
import { formatPrice } from "@/lib/utils";

interface Business {
  id: string;
  name: string;
  description: string | null;
  address: string | null;
  city: string | null;
  phone: string | null;
  logoUrl: string | null;
}

interface Service {
  id: string;
  name: string;
  description: string | null;
  duration: number;
  price: number;
  color: string | null;
}

interface TimeSlot {
  startTime: string;
  endTime: string;
}

export default function PublicBookingPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [business, setBusiness] = useState<Business | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState(true);
  const [bookingComplete, setBookingComplete] = useState(false);

  useEffect(() => {
    fetchBusinessAndServices();
  }, [slug]);

  const fetchBusinessAndServices = async () => {
    try {
      const res = await fetch(`/api/business/${slug}`);
      const data = await res.json();
      setBusiness(data.business);
      setServices(data.services);
    } catch (error) {
      console.error("Error fetching business:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchAvailableSlots = async (serviceId: string, date: Date) => {
    try {
      const res = await fetch(
        `/api/availability?serviceId=${serviceId}&date=${date.toISOString()}`
      );
      const data = await res.json();
      setAvailableSlots(data.slots);
    } catch (error) {
      console.error("Error fetching slots:", error);
    }
  };

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setStep(2);
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    if (selectedService) {
      fetchAvailableSlots(selectedService.id, date);
    }
    setStep(3);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep(4);
  };

  const handleCustomerSubmit = async (customerData: {
    name: string;
    email: string;
    phone: string;
    notes: string;
  }) => {
    if (!selectedService || !selectedDate || !selectedTime) return;

    const [hours, minutes] = selectedTime.split(":").map(Number);
    const startTime = new Date(selectedDate);
    startTime.setHours(hours, minutes, 0, 0);

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceId: selectedService.id,
          startTime: startTime.toISOString(),
          ...customerData,
        }),
      });

      if (res.ok) {
        setBookingComplete(true);
        setStep(5);
      }
    } catch (error) {
      console.error("Error creating booking:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600" />
      </div>
    );
  }

  if (!business) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Commerce non trouvé
          </h1>
          <p className="text-gray-600">
            Cette page n'existe pas ou a été supprimée.
          </p>
        </Card>
      </div>
    );
  }

  if (bookingComplete) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-md mx-auto">
          <Card className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Réservation confirmée !
            </h1>
            <p className="text-gray-600 mb-6">
              Votre rendez-vous chez <strong>{business.name}</strong> a été réservé avec succès.
            </p>
            <p className="text-sm text-gray-500">
              Un email de confirmation vous a été envoyé.
            </p>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-2">
            <Calendar className="w-6 h-6 text-primary-600" />
            <span className="font-semibold text-gray-900">Booking-Saas</span>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Business Info */}
        <Card className="mb-6">
          <div className="flex items-start space-x-4">
            {business.logoUrl ? (
              <img
                src={business.logoUrl}
                alt={business.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
            ) : (
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-600">
                  {business.name.charAt(0)}
                </span>
              </div>
            )}
            <div className="flex-1">
              <h1 className="text-xl font-bold text-gray-900">{business.name}</h1>
              <p className="text-gray-600 text-sm mt-1">{business.description}</p>
              
              <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span>4.8 (127 avis)</span>
                </div>
                {business.phone && (
                  <div className="flex items-center space-x-1">
                    <Phone className="w-4 h-4" />
                    <span>{business.phone}</span>
                  </div>
                )}
              </div>

              {(business.address || business.city) && (
                <div className="flex items-center space-x-1 mt-2 text-sm text-gray-500">
                  <MapPin className="w-4 h-4" />
                  <span>
                    {[business.address, business.city].filter(Boolean).join(", ")}
                  </span>
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-8">
          {[
            { num: 1, label: "Service" },
            { num: 2, label: "Date" },
            { num: 3, label: "Horaire" },
            { num: 4, label: "Infos" },
          ].map((s, i) => (
            <div key={s.num} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= s.num
                    ? "bg-primary-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {s.num}
              </div>
              <span
                className={`ml-2 text-sm hidden sm:block ${
                  step >= s.num ? "text-gray-900" : "text-gray-500"
                }`}
              >
                {s.label}
              </span>
              {i < 3 && (
                <div
                  className={`w-12 h-0.5 mx-2 sm:mx-4 ${
                    step > s.num ? "bg-primary-600" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <Card className="p-6">
          {step === 1 && (
            <ServiceSelector
              services={services}
              onSelect={handleServiceSelect}
            />
          )}

          {step === 2 && selectedService && (
            <DatePicker
              service={selectedService}
              onSelect={handleDateSelect}
              onBack={() => setStep(1)}
            />
          )}

          {step === 3 && selectedService && selectedDate && (
            <TimeSlotPicker
              service={selectedService}
              date={selectedDate}
              slots={availableSlots}
              onSelect={handleTimeSelect}
              onBack={() => setStep(2)}
            />
          )}

          {step === 4 && selectedService && selectedDate && selectedTime && (
            <>
              <BookingSummary
                service={selectedService}
                date={selectedDate}
                time={selectedTime}
              />
              <div className="mt-6 pt-6 border-t">
                <CustomerForm
                  onSubmit={handleCustomerSubmit}
                  onBack={() => setStep(3)}
                />
              </div>
            </>
          )}
        </Card>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Propulsé par <span className="font-medium text-primary-600">Booking-Saas</span>
        </p>
      </main>
    </div>
  );
}