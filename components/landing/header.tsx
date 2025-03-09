"use client";

import {ChevronRight, Coins, Menu, X} from "lucide-react";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {motion} from "framer-motion";
import {useEffect, useState} from "react";


export default function Header(){
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
        <header
            className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"}`}
        >
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2 font-bold">
                    <div className="size-8 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-primary-foreground">
                        <Coins className="size-5" />
                    </div>
                    <span>Penny</span>
                </div>
                <nav className="hidden md:flex gap-8">
                    <Link
                        href="#features"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Features
                    </Link>
                    <Link
                        href="#testimonials"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Testimonials
                    </Link>
                    <Link
                        href="#faq"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                        FAQ
                    </Link>
                </nav>
                <div className="hidden md:flex gap-4 items-center">
                    <Link href="/login" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                        Log in
                    </Link>
                </div>
                <div className="flex items-center gap-4 md:hidden">
                    <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </div>
            </div>
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
                >
                    <div className="container py-4 flex flex-col gap-4">
                        <Link href="#features" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                            Features
                        </Link>
                        <Link href="#testimonials" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                            Testimonials
                        </Link>
                        <Link href="#faq" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                            FAQ
                        </Link>
                        <div className="flex flex-col gap-2 pt-2 border-t">
                            <Link href="/login" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                                Log in
                            </Link>
                        </div>
                    </div>
                </motion.div>
            )}
        </header>
    )
}
