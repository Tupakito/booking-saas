"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Plus, Trash2, Loader2 } from "lucide-react";
import { createSlot, deleteSlot, getSlotsByService } from "@/server/actions/slots";
import { daysOfWeek } from "@/lib/utils";

interface Slot {
  id: string;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
}

export default function ManageSlotsPage({ params }: { params: { id: string } }) {
  const [slots, setSlots] = useState<Slot[]>([]);
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);

  const [newSlot, setNewSlot] = useState({
    dayOfWeek: 1,
    startTime: "09:00",
    endTime: "17:00",
  });

  useEffect(() => {
    loadSlots();
  }, [params.id]);

  const loadSlots = async () => {
    const result = await getSlotsByService(params.id);
    if (result.success) {
      setSlots(result.data || []);
    }
    setLoading(false);
  };

  const handleAdd = async () => {
    setAdding(true);
    const result = await createSlot(params.id, newSlot);
    if (result.success) {
      await loadSlots();
      setNewSlot({ dayOfWeek: 1, startTime: "09:00", endTime: "17:00" });
    }
    setAdding(false);
  };

  const handleDelete = async (slotId: string) => {
    if (!confirm("Supprimer ce créneau ?")) return;
    const result = await deleteSlot(slotId);
    if (result.success) {
      await loadSlots();
    }
  };

  if (loading) {
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
          href={`/dashboard/services/${params.id}`}
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Retour au service
        </Link>
      </div>

      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Gérer les créneaux
      </h1>

      <Card className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Ajouter un créneau</h3>
        <div className="grid grid-cols-4 gap-4 items-end">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Jour
            </label>
            <select
              className="block w-full px-3 py-2 border border-gray-300 rounded-lg"
              value={newSlot.dayOfWeek}
              onChange={(e) => setNewSlot({ ...newSlot, dayOfWeek: parseInt(e.target.value) })}
            >
              {daysOfWeek.map((day) => (
                <option key={day.value} value={day.value}>
                  {day.label}
                </option>
              ))}
            </select>
          </div>
          
          <Input
            label="Début"
            type="time"
            value={newSlot.startTime}
            onChange={(e) => setNewSlot({ ...newSlot, startTime: e.target.value })}
          />
          
          <Input
            label="Fin"
            type="time"
            value={newSlot.endTime}
            onChange={(e) => setNewSlot({ ...newSlot, endTime: e.target.value })}
          />
          
          <Button onClick={handleAdd} isLoading={adding}>
            <Plus className="w-4 h-4 mr-2" />
            Ajouter
          </Button>
        </div>
      </Card>

      <div className="space-y-4">
        {daysOfWeek.map((day) => {
          const daySlots = slots.filter((s) => s.dayOfWeek === day.value);
          
          return (
            <Card key={day.value} className={daySlots.length === 0 ? "opacity-60" : ""}>
              <h3 className="font-semibold text-gray-900 mb-3">{day.label}</h3>
              
              {daySlots.length === 0 ? (
                <p className="text-sm text-gray-500">Aucun créneau</p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {daySlots.map((slot) => (
                    <div
                      key={slot.id}
                      className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm"
                    >
                      <span>{slot.startTime} - {slot.endTime}</span>
                      <button
                        onClick={() => handleDelete(slot.id)}
                        className="hover:text-red-600"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}

import { Input } from "@/components/ui/input";