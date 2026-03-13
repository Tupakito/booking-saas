"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Loader2, Trash2 } from "lucide-react";
import { updateService, deleteService } from "@/server/actions/services";

interface Service {
  id: string;
  name: string;
  description: string | null;
  duration: number;
  price: number;
  color: string | null;
}

export default function EditServicePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState("");
  const [service, setService] = useState<Service | null>(null);

  useEffect(() => {
    // Fetch service data
    fetch(`/api/services/${params.id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!service) return;
    
    setLoading(true);
    setError("");

    const result = await updateService(params.id, {
      name: service.name,
      description: service.description,
      duration: service.duration,
      price: service.price,
      color: service.color,
    });

    if (result.success) {
      router.push("/dashboard/services");
    } else {
      setError(result.error || "Erreur lors de la modification");
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer ce service ?")) return;
    
    setDeleting(true);
    const result = await deleteService(params.id);

    if (result.success) {
      router.push("/dashboard/services");
    } else {
      setError(result.error || "Erreur lors de la suppression");
      setDeleting(false);
    }
  };

  if (!service) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary-600" />
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <Link
          href="/dashboard/services"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Retour aux services
        </Link>
      </div>

      <div className="flex justify-between items-start mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Modifier le service</h1>
        <Button variant="danger" onClick={handleDelete} isLoading={deleting}>
          <Trash2 className="w-4 h-4 mr-2" />
          Supprimer
        </Button>
      </div>

      <Card className="max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <Input
            label="Nom du service"
            required
            value={service.name}
            onChange={(e) => setService({ ...service, name: e.target.value })}
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              rows={3}
              value={service.description || ""}
              onChange={(e) => setService({ ...service, description: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Durée (minutes)"
              type="number"
              required
              min={5}
              value={service.duration}
              onChange={(e) => setService({ ...service, duration: parseInt(e.target.value) })}
            />

            <Input
              label="Prix (€)"
              type="number"
              required
              min={0}
              step={0.01}
              value={(service.price / 100).toFixed(2)}
              onChange={(e) => setService({ ...service, price: Math.round(parseFloat(e.target.value) * 100) })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Couleur
            </label>
            <div className="flex items-center space-x-3">
              <input
                type="color"
                value={service.color || "#3b82f6"}
                onChange={(e) => setService({ ...service, color: e.target.value })}
                className="w-12 h-12 rounded cursor-pointer"
              />
              <span className="text-sm text-gray-600">{service.color}</span>
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t">
            <Link href={`/dashboard/services/${params.id}/slots`}>
              <Button variant="secondary" type="button">
                Gérer les créneaux →
              </Button>
            </Link>
            
            <div className="flex space-x-3">
              <Link href="/dashboard/services">
                <Button variant="secondary" type="button">
                  Annuler
                </Button>
              </Link>
              <Button type="submit" isLoading={loading}>
                Enregistrer
              </Button>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
}