import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {DollarSign, Users, CreditCard, TrendingUp, LucideIcon, BarChart2, TrendingDown} from "lucide-react"

const cards = [
  {
    title: "Net Worth",
    icon: BarChart2,
    amount: "$45,231.89",
    description: "+20.1% from last month",
    trend: "up",
  },
  {
    title: "Income",
    icon: DollarSign,
    amount: "$2,350.00",
    description: "+18.1% from last month",
    trend: "up",
  },
  {
    title: "Expenses",
    icon: CreditCard,
    amount: "$1,234.50",
    description: "-5.2% from last month",
    trend: "down",
  },
  {
    title: "Debt",
    icon: TrendingDown,
    amount: "$4,567.21",
    description: "-2.4% from last month",
    trend: "down",
  },
]

export function OverviewCards() {
  return (
    <>
      {cards.map((card) => (
        <Card key={card.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            <card.icon className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.amount}</div>
            <p className="text-xs text-muted-foreground">{card.description}</p>
            <div
              className={`mt-2 flex items-center text-xs ${card.trend === "up" ? "text-emerald-600" : "text-red-500"}`}
            >
              {card.trend === "up" ? (
                <TrendingUp className="mr-1 h-3 w-3" />
              ) : (
                <TrendingUp className="mr-1 h-3 w-3 transform rotate-180" />
              )}
              {card.description.split(" ")[0]}
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  )
}
