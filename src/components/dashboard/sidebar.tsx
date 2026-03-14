```typescript
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Calendar, LayoutDashboard, Settings, Briefcase, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { SidebarNav } from "./sidebar-nav"

interface SidebarProps {
  className?: string
}

const navItems = [
  {
    title: "Aperçu",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Réservations",
    href: "/dashboard/bookings",
    icon: Calendar,
  },
  {
    title: "Services",
    href: "/dashboard/services",
    icon: Briefcase,
  },
  {
    title: "Calendrier",
    href: "/dashboard/calendar",
    icon: Clock,
  },
  {
    title: "Paramètres",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className={cn("flex flex-col h-full", className)}>
      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="outline" size="icon" className="shrink-0">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Ouvrir le menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col w-[260px] p-0">
          <MobileSidebarContent pathname={pathname} />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-col h-full w-[260px] border-r bg-sidebar">
        <DesktopSidebarContent pathname={pathname} />
      </div>
    </div>
  )
}

function MobileSidebarContent({ pathname }: { pathname: string }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          <Calendar className="h-5 w-5 text-primary" />
          <span className="text-lg">Rendez</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <SidebarNav items={navItems} pathname={pathname} />
      </div>
    </div>
  )
}

function DesktopSidebarContent({ pathname }: { pathname: string }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex h-14 items-center border-b border-sidebar-border px-4">
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold text-sidebar-foreground">
          <Calendar className="h-5 w-5 text-primary" />
          <span className="text-lg">Rendez</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <SidebarNav items={navItems} pathname={pathname} />
      </div>
    </div>
  )
}
```