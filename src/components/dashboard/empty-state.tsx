```typescript
"use client"

import Link from "next/link"
import { CalendarPlus, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function EmptyState() {
  return (
    <Card className="border-dashed">
      <CardContent className="flex flex-col items-center justify-center py-12 px-4 text-center">
        {/* Illustration */}
        <div className="relative mb-6">
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
            <CalendarPlus className="w-12 h-12 text-primary" />
          </div>
          <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-yellow-600" />
          </div>
        </div>

        {/* Text */}
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Aucune réservation pour le moment
        </h3>
        <p className="text-sm text-muted-foreground max-w-sm mb-6">
          Commencez à recevoir des réservations en partageant votre lien de réservation 
          avec vos clients ou en créant manuellement votre première réservation.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/dashboard/bookings/new">
            <Button size="lg">
              <CalendarPlus className="mr-2 h-4 w-4" />
              Créer ma première réservation
            </Button>
          </Link>
          <Link href="/dashboard/settings">
            <Button variant="outline" size="lg">
              Configurer mes services
            </Button>
          </Link>
        </div>

        {/* Tips */}
        <div className="mt-8 pt-6 border-t w-full">
          <p className="text-xs text-muted-foreground mb-3">Conseils pour démarrer :</p>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Ajoutez vos services et tarifs dans les paramètres</li>
            <li>• Définissez vos horaires d&apos;ouverture</li>
            <li>• Partagez votre lien de réservation sur vos réseaux sociaux</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
```