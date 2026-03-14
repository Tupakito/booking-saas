```typescript
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { 
  Plus, 
  Calendar, 
  Users, 
  TrendingUp,
  ArrowRight,
  AlertCircle
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Données mockées pour éviter les erreurs si la DB n'est pas connectée
const mockKPIs = {
  today: { label: "Aujourd'hui", value: "0", change: 0 },
  week: { label: "Cette semaine", value: "0", change: 0 },
  month: { label: "Ce mois-ci", value: "0", change: 0 },
  revenue: { label: "Revenus", value: "0 €", change: 0 },
};

export default async function DashboardPage() {
  let session;
  
  try {
    session = await auth();
  } catch (error) {
    console.error("Auth error:", error);
    redirect("/login");
  }

  if (!session) {
    redirect("/login");
  }

  // Vérifier si les variables d'environnement sont configurées
  const hasDatabaseUrl = !!process.env.DATABASE_URL;
  const hasNextAuthSecret = !!process.env.NEXTAUTH_SECRET;

  return (
    <div className="space-y-6">
      {/* Alertes de configuration */}
      {!hasDatabaseUrl && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Configuration requise</AlertTitle>
          <AlertDescription>
            La variable d&apos;environnement DATABASE_URL n&apos;est pas configurée. 
            Configurez-la dans les paramètres Vercel.
          </AlertDescription>
        </Alert>
      )}

      {!hasNextAuthSecret && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Configuration requise</AlertTitle>
          <AlertDescription>
            La variable d&apos;environnement NEXTAUTH_SECRET n&apos;est pas configurée.
            Générez une clé sécurisée et configurez-la dans Vercel.
          </AlertDescription>
        </Alert>
      )}

      {/* Welcome Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Tableau de bord
          </h1>
          <p className="text-muted-foreground mt-1">
            Bienvenue, {session.user?.name || session.user?.email}
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
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KPICard
          title={mockKPIs.today.label}
          value={mockKPIs.today.value}
          icon={Calendar}
          description="Réservations aujourd'hui"
        />
        <KPICard
          title={mockKPIs.week.label}
          value={mockKPIs.week.value}
          icon={Users}
          description="Cette semaine"
        />
        <KPICard
          title={mockKPIs.month.label}
          value={mockKPIs.month.value}
          icon={TrendingUp}
          description="Ce mois-ci"
        />
        <KPICard
          title={mockKPIs.revenue.label}
          value={mockKPIs.revenue.value}
          icon={TrendingUp}
          description="Revenus estimés"
        />
      </div>

      {/* Empty State */}
      <Card className="border-dashed">
        <CardContent className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Calendar className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-2">
            Aucune réservation pour le moment
          </h3>
          <p className="text-sm text-muted-foreground max-w-sm mb-6">
            Commencez à recevoir des réservations en partageant votre lien 
            ou en créant manuellement votre première réservation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/dashboard/bookings/new">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Créer une réservation
              </Button>
            </Link>
            <Link href="/dashboard/settings">
              <Button variant="outline">
                Configurer mes services
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Prochaines étapes</CardTitle>
            <CardDescription>
              Complétez ces étapes pour configurer votre compte
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <StepItem label="Créer votre compte" completed />
              <StepItem label="Ajouter vos services" href="/dashboard/services" />
              <StepItem label="Configurer vos horaires" href="/dashboard/settings" />
              <StepItem label="Partager votre lien" href="/dashboard/settings" />
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Configuration système</CardTitle>
            <CardDescription>
              État de la configuration
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center justify-between">
                <span>Base de données</span>
                <StatusBadge ok={hasDatabaseUrl} />
              </li>
              <li className="flex items-center justify-between">
                <span>Auth Secret</span>
                <StatusBadge ok={hasNextAuthSecret} />
              </li>
              <li className="flex items-center justify-between">
                <span>Authentification</span>
                <StatusBadge ok={!!session} />
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function KPICard({ 
  title, 
  value, 
  icon: Icon, 
  description 
}: { 
  title: string; 
  value: string; 
  icon: React.ElementType; 
  description: string;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function StepItem({ 
  label, 
  completed, 
  href 
}: { 
  label: string; 
  completed?: boolean; 
  href?: string;
}) {
  const content = (
    <li className="flex items-center gap-3 py-2">
      <span className={cn(
        "flex h-5 w-5 items-center justify-center rounded-full text-xs",
        completed ? "bg-green-500 text-white" : "bg-muted text-muted-foreground"
      )}>
        {completed ? "✓" : "○"}
      </span>
      <span className={cn("text-sm", completed && "text-muted-foreground line-through")}>
        {label}
      </span>
      {href && !completed && <ArrowRight className="ml-auto h-3 w-3 text-muted-foreground" />}
    </li>
  );

  if (href && !completed) {
    return <Link href={href} className="block hover:bg-muted/50 rounded-md">{content}</Link>;
  }

  return content;
}

function StatusBadge({ ok }: { ok: boolean }) {
  return (
    <span className={cn(
      "px-2 py-1 rounded-full text-xs font-medium",
      ok ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
    )}>
      {ok ? "OK" : "Manquant"}
    </span>
  );
}

import { cn } from "@/lib/utils";
```