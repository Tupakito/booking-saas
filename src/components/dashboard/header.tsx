```typescript
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Bell } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sidebar } from "./sidebar"
import { UserNav } from "./user-nav"

interface HeaderProps {
  user?: {
    name?: string | null
    email?: string | null
    image?: string | null
  }
}

const breadcrumbMap: Record<string, string> = {
  "dashboard": "Tableau de bord",
  "bookings": "Réservations",
  "services": "Services",
  "calendar": "Calendrier",
  "settings": "Paramètres",
  "profile": "Profil",
}

export function Header({ user }: HeaderProps) {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean)
  
  // Construire les breadcrumbs
  const breadcrumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/")
    const label = breadcrumbMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1)
    const isLast = index === segments.length - 1
    
    return { href, label, isLast }
  })

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <Sidebar className="w-auto" />
      </div>

      {/* Breadcrumb */}
      <nav className="hidden md:flex items-center gap-2 text-sm text-muted-foreground flex-1">
        <Link href="/dashboard" className="hover:text-foreground transition-colors">
          Rendez
        </Link>
        {breadcrumbs.map((crumb, index) => (
          <div key={crumb.href} className="flex items-center gap-2">
            <ChevronRight className="h-4 w-4" />
            {crumb.isLast ? (
              <span className="font-medium text-foreground">{crumb.label}</span>
            ) : (
              <Link 
                href={crumb.href} 
                className="hover:text-foreground transition-colors"
              >
                {crumb.label}
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* Mobile Title */}
      <div className="md:hidden flex-1">
        <span className="font-semibold">
          {breadcrumbs.length > 0 
            ? breadcrumbs[breadcrumbs.length - 1]?.label 
            : "Tableau de bord"}
        </span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <Badge 
            variant="destructive" 
            className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px]"
          >
            3
          </Badge>
          <span className="sr-only">Notifications</span>
        </Button>

        {/* User Menu */}
        <UserNav user={user} />
      </div>
    </header>
  )
}
```