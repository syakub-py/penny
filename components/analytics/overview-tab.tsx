"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { OverviewCards } from "@/components/analytics/overview-cards"
import { RevenueChart } from "@/components/analytics/revenue-chart"
import { AccountGrowth } from "@/components/analytics/account-growth"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {RecentTransactions} from "@/components/recent-transactions";

export function OverviewTab() {
  const [comparisonPeriod, setComparisonPeriod] = useState("previous_month")

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-semibold">Dashboard Overview</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Compare to:</span>
          <Select value={comparisonPeriod} onValueChange={setComparisonPeriod}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="previous_month">Previous Month</SelectItem>
              <SelectItem value="previous_quarter">Previous Quarter</SelectItem>
              <SelectItem value="previous_year">Previous Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <OverviewCards/>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Revenue</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <RevenueChart />
          </CardContent>
        </Card>
        <div className="col-span-3">
          <RecentTransactions />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Account Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <AccountGrowth/>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

