import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { OverviewTab } from "@/components/analytics/overview-tab"
import { SettingsTab } from "@/components/analytics/settings-tab"

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
                        value="settings"
                        className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
                        Settings
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4">
                    <OverviewTab />
                </TabsContent>
                <TabsContent value="settings" className="space-y-4">
                    <SettingsTab />
                </TabsContent>
            </Tabs>
        </div>
    )
}
