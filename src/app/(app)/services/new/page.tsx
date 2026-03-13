"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { createService } from "@/server/actions/services";
import { ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";

export default function NewServicePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    duration: 30,
    price: 2500,
    color: "#3b82f6",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await createService("temp-business-id", formData);

    if (result.success) {
      router.push("/dashboard/services");
    } else {
      setError(result.error || "Erreur lors de la création");
      setLoading(false);
    }
  };

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

      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Nouveau service
      </h1>

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
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Ex: Coupe homme"
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Décrivez votre prestation..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Durée (minutes)"
              type="number"
              required
              min={5}
              max={480}
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) })}
            />

            <Input
              label="Prix (€)"
              type="number"
              required
              min={0}
              step={0.01}
              value={(formData.price / 100).toFixed(2)}
              onChange={(e) => setFormData({ ...formData, price: Math.round(parseFloat(e.target.value) * 100) })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Couleur
            </label>
            <div className="flex items-center space-x-3">
              <input
                type="color"
                value={formData.color}
                onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                className="w-12 h-12 rounded cursor-pointer"
              />
              <span className="text-sm text-gray-600">{formData.color}</span>
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <Link href="/dashboard/services">
              <Button variant="secondary" type="button">
                Annuler
              </Button>
            </Link>
            <Button type="submit" isLoading={loading}>
              Créer le service
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}