```typescript
import { auth } from "@/auth"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Plus, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { KPICards } from "@/components/dashboard/kpi-cards"
import { BookingsTable } from "@/components/dashboard/bookings-table"
import { EmptyState } from "@/components/dashboard/empty-state"
import { mockKPIs, mockBookings, emptyBookings } from "@/lib/mock-data"

// Toggle this to test empty state
const HAS_BOOKINGS = true

export default async function DashboardPage() {
  const session = await auth()

  if (!session) {
    redirect("/login")
  }

  const bookings = HAS_BOOKINGS ? mockBookings : emptyBookings
  const hasBookings = bookings.length > 0

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Tableau de bord
          </h1>
          <p className="text-muted-foreground mt-1">
            Bienvenue, {session.user?.name || session.user?.email}. Voici l&apos;activité de votre établissement.
          </p>
        </div>
        <Link href="/dashboard/bookings/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nouvelle réservation
          </Button>
        </Link>
      </div>

      {/* KPI Cards */}
      <KPICards data={mockKPIs} />

      {/* Bookings Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Réservations récentes</h2>
          {hasBookings && (
            <Link href="/dashboard/bookings">
              <Button variant="ghost" size="sm">
                Voir tout
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>

        {hasBookings ? (
          <BookingsTable bookings={bookings} />
        ) : (
          <EmptyState />
        )}
      </div>

      {/* Quick Actions */}
      {hasBookings && (
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Prochaines étapes</CardTitle>
              <CardDescription>
                Optimisez votre activité avec ces actions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <StepItem 
                  label="Configurer vos horaires d'ouverture" 
                  href="/dashboard/settings/availability"
                />
                <StepItem 
                  label="Personnaliser votre page de réservation" 
                  href="/dashboard/settings/appearance"
                />
                <StepItem 
                  label="Inviter votre équipe" 
                  href="/dashboard/settings/team"
                />
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Performance</CardTitle>
              <CardDescription>
                Aperçu de votre activité ce mois-ci
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Taux de remplissage</span>
                  <span className="font-medium">78%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "78%" }} />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Clients satisfaits</span>
                  <span className="font-medium text-green-600">96%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Réservations récurrentes</span>
                  <span className="font-medium">42%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

interface StepItemProps {
  label: string
  href: string
}

function StepItem({ label, href }: StepItemProps) {
  return (
    <li>
      <Link 
        href={href}
        className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
      >
        <span className="text-sm font-medium">{label}</span>
        <ArrowRight className="h-4 w-4 text-muted-foreground" />
      </Link>
    </li>
  )
}
```