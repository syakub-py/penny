import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import type React from "react"
import {ThemeToggle} from "@/components/theme-toggle";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "Penny Assistant",
    description: "A modern, responsive financial dashboard",
    generator: 'v0.dev'
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <TooltipProvider delayDuration={0}>
                {children}
                <div className="fixed bottom-4 right-4 z-50">
                    <ThemeToggle />
                </div>
            </TooltipProvider>
        </ThemeProvider>
        </body>
        </html>
    )
}
