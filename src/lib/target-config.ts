// Configuration multi-cibles pour pivot rapide
// Modifier la valeur de defaultTarget pour changer de cible

export type Target = "beauty" | "mechanic" | "health";

export interface TargetConfig {
  name: string;
  headline: string;
  subheadline: string;
  serviceExamples: string[];
  bookingFields: ("name" | "email" | "phone" | "notes")[];
  requiresQuote: boolean;
  requiresPhone: boolean;
  features: {
    quotes: boolean;
    smsReminders: boolean;
    recurringBookings: boolean;
    patientHistory: boolean;
  };
}

// Configuration par cible
export const targetConfigs: Record<Target, TargetConfig> = {
  beauty: {
    name: "Rendez",
    headline: "Vos clients réservent en ligne 24/7",
    subheadline: "Simple, rapide, sans compte client obligatoire",
    serviceExamples: ["Coupe homme", "Coloration", "Brushing", "Soin visage"],
    bookingFields: ["name", "email"],
    requiresQuote: false,
    requiresPhone: false,
    features: {
      quotes: false,
      smsReminders: false, // S2
      recurringBookings: false,
      patientHistory: false,
    },
  },

  mechanic: {
    name: "Rendez Pro",
    headline: "Devis et RDV en ligne pour votre garage",
    subheadline: "Vos clients réservent leur créneau en quelques clics",
    serviceExamples: ["Révision", "Freinage", "Climatisation", "Diagnostic"],
    bookingFields: ["name", "email", "phone", "notes"],
    requiresQuote: true,
    requiresPhone: true,
    features: {
      quotes: true, // S1 ou S2 selon option
      smsReminders: true,
      recurringBookings: false,
      patientHistory: false,
    },
  },

  health: {
    name: "Rendez Santé",
    headline: "RDV en ligne, sans les complexités",
    subheadline: "Une solution simple pour votre cabinet de santé",
    serviceExamples: ["Ostéopathie", "Kinésithérapie", "Suivi", "Première consultation"],
    bookingFields: ["name", "email", "phone"],
    requiresQuote: false,
    requiresPhone: true,
    features: {
      quotes: false,
      smsReminders: true, // Critique pour santé
      recurringBookings: true, // Suivi régulier
      patientHistory: true, // Dossier patient
    },
  },
};

// Cible active (modifier ici pour pivot)
export const defaultTarget: Target = "beauty";

// Helper pour récupérer la config active
export function getTargetConfig(target?: Target): TargetConfig {
  const t = target || defaultTarget;
  return targetConfigs[t];
}

// Helper pour vérifier si une feature est active
export function isFeatureEnabled(
  feature: keyof TargetConfig["features"],
  target?: Target
): boolean {
  const config = getTargetConfig(target);
  return config.features[feature];
}

// Helper pour les champs de formulaire
export function getBookingFields(target?: Target): TargetConfig["bookingFields"] {
  return getTargetConfig(target).bookingFields;
}