import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { OverviewTab } from "@/components/analytics/overview-tab"
import { NotificationsTab } from "@/components/analytics/notifications-tab"

export default function Dashboard() {
    return (
        <div className="space-y-6">

            <Tabs defaultValue="overview" className="space-y-4">
                <TabsList className="grid w-full grid-cols-3 bg-muted/80">
                    <TabsTrigger
                        value="overview"
                        className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
                        Overview
                    </TabsTrigger>
                    <TabsTrigger
                        value="notifications"
                        className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
                        Notifications
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4">
                    <OverviewTab />
                </TabsContent>
                <TabsContent value="notifications" className="space-y-4">
                    <NotificationsTab />
                </TabsContent>
            </Tabs>
        </div>
    )
}
