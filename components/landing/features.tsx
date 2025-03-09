"use client";

import {motion} from "framer-motion";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent} from "@/components/ui/card";
import {Bell, CreditCard, Mail, PieChart, Shield, Zap} from "lucide-react";


export default function Features(){
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    }

    const features = [
        {
            title: "Smart Insights",
            description: "AI-powered financial insights that help you understand your spending patterns and save money.",
            icon: <Zap className="size-5" />,
        },
        {
            title: "Weekly Summaries",
            description: "Receive easy-to-understand weekly emails summarizing your financial activity.",
            icon: <Mail className="size-5" />,
        },
        {
            title: "Interactive Dashboard",
            description: "Track your finances with beautiful, interactive charts and spending breakdowns.",
            icon: <PieChart className="size-5" />,
        },
        {
            title: "Bank-Level Security",
            description: "Your financial data is protected with the highest level of encryption and security.",
            icon: <Shield className="size-5" />,
        },
        {
            title: "Account Integration",
            description: "Connect all your financial accounts for a complete picture of your finances.",
            icon: <CreditCard className="size-5" />,
        },
        {
            title: "Smart Alerts",
            description: "Get notified about unusual spending, upcoming bills, and saving opportunities.",
            icon: <Bell className="size-5" />,
        },
    ]

    return (
        <section id="features" className="w-full py-20 md:py-32">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
                >
                    <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100" variant="secondary">
                        Features
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Your Financial Copilot</h2>
                    <p className="max-w-[800px] text-muted-foreground md:text-lg">
                        Penny analyzes your financial data, provides personalized insights, and helps you build better money habits with minimal effort.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {features.map((feature, i) => (
                        <motion.div key={i} variants={item}>
                            <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                                <CardContent className="p-6 flex flex-col h-full">
                                    <div className="size-10 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center text-emerald-600 dark:text-emerald-300 mb-4">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
