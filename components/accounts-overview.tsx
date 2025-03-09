"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet } from "lucide-react"

const initialAccounts = [
  { name: "Checking", balance: 7500 },
  { name: "Savings", balance: 560000 },
  { name: "Investment", balance: 5879000 },
]

export function AccountsOverview() {
  const totalBalance = initialAccounts.reduce((sum, account) => sum + account.balance, 0)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Accounts Overview</CardTitle>
        <Wallet className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">${totalBalance.toLocaleString()}</div>
        <p className="text-xs text-muted-foreground">Total balance across all accounts</p>
        <div className="mt-4 space-y-2">
          {initialAccounts.map((account) => (
            <div key={account.name} className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">{account.name}</span>
              <span className="text-sm font-medium">${account.balance.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

