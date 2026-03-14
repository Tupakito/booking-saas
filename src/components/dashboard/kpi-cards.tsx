```typescript
"use client"

import { 
  Calendar, 
  CalendarRange, 
  TrendingUp, 
  Euro,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface KPIData {
  label: string
  value: string
  change: number
  changeLabel: string
  icon: string
}

interface KPICardsProps {
  data: {
    today: KPIData
    thisWeek: KPIData
    thisMonth: KPIData
    revenue: KPIData
  }
}

const iconMap = {
  calendar: Calendar,
  "calendar-range": CalendarRange,
  trending: TrendingUp,
  euro: Euro,
}

export function KPICards({ data }: KPICardsProps) {
  const kpiEntries = Object.entries(data) as [keyof typeof data, KPIData][]

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {kpiEntries.map(([key, kpi]) => {
        const Icon = iconMap[kpi.icon as keyof typeof iconMap] || Calendar
        const isPositive = kpi.change >= 0

        return (
          <Card key={key}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {kpi.label}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <div className="flex items-center text-xs mt-1">
                <span
                  className={cn(
                    "flex items-center font-medium",
                    isPositive ? "text-green-600" : "text-red-600"
                  )}
                >
                  {isPositive ? (
                    <ArrowUpRight className="mr-1 h-3 w-3" />
                  ) : (
                    <ArrowDownRight className="mr-1 h-3 w-3" />
                  )}
                  {Math.abs(kpi.change)}%
                </span>
                <span className="text-muted-foreground ml-1">
                  {kpi.changeLabel}
                </span>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
```