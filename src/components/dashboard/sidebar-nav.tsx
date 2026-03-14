```typescript
"use client"

import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarNavProps {
  items: {
    title: string
    href: string
    icon: LucideIcon
  }[]
  pathname: string
}

export function SidebarNav({ items, pathname }: SidebarNavProps) {
  return (
    <nav className="grid gap-1 px-2">
      {items.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
        const Icon = item.icon
        
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
              isActive
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            )}
          >
            <Icon className={cn("h-4 w-4", isActive ? "text-primary" : "text-sidebar-foreground")} />
            <span>{item.title}</span>
          </Link>
        )
      })}
    </nav>
  )
}
```