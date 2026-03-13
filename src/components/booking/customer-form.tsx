import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, Loader2 } from "lucide-react";

interface CustomerFormProps {
  onSubmit: (data: {
    name: string;
    email: string;
    phone: string;
    notes: string;
  }) => void;
  onBack: () => void;
}

export function CustomerForm({ onSubmit, onBack }: CustomerFormProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await onSubmit(formData);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="font-medium text-gray-900 mb-4">Vos informations</h3>

      <Input
        label="Nom complet"
        required
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Jean Dupont"
      />

      <Input
        label="Email"
        type="email"
        required
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="jean@example.com"
      />

      <Input
        label="Téléphone"
        type="tel"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        placeholder="+33 6 12 34 56 78"
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Notes (optionnel)
        </label>
        <textarea
          className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
          rows={3}
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          placeholder="Précisions sur votre demande..."
        />
      </div>

      <div className="flex gap-3 pt-4">
        <Button variant="secondary" type="button" onClick={onBack}>
          <ChevronLeft className="w-4 h-4 mr-1" />
          Retour
        </Button>
        <Button type="submit" isLoading={loading} className="flex-1">
          Confirmer la réservation
        </Button>
      </div>
    </form>
  );
}