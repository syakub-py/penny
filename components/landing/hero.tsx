"use client"
import {motion} from "framer-motion";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import useSendEmail from "@/hooks/use-send-email";


export default function Hero() {
    const { theme, resolvedTheme } = useTheme();
    const [dashboardImage, setDashboardImage] = useState(null);
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formMessage, setFormMessage] = useState({ type: "", text: "" });
    const { sendEmail } = useSendEmail();

    useEffect(() => {
        const currentTheme = resolvedTheme || theme;

        if (currentTheme === "light") {
            import("../../public/LightDashboard.png").then((image) => {
                setDashboardImage(image.default);
            }).catch(error => {
                console.error("Failed to load light dashboard image:", error);
            });
        } else {
            import("../../public/DarkDashboard.png").then((image) => {
                setDashboardImage(image.default);
            }).catch(error => {
                console.error("Failed to load dark dashboard image:", error);
            });
        }
    }, [theme, resolvedTheme]);

    const handleSubmit = async () => {

        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            setFormMessage({ type: "error", text: "Please enter a valid email address" });
            return;
        }

        setIsSubmitting(true);
        setFormMessage({ type: "", text: "" });

        try {
            const trimmedEmail = email.trim();

            await sendEmail(trimmedEmail);

            setFormMessage({ type: "success", text: "Preview newsletter sent! Check your inbox." });
            setEmail("");
        } catch (error) {
            console.error('Failed to send email:', error);
            setFormMessage({ type: "error", text: "Failed to send email. Please try again." });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleButtonClick = () => {
        if (!isSubmitting) {
            handleSubmit();
        }
    };

    return (
        <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden">
            <div className="container px-4 md:px-6 relative">
                <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100" variant="secondary">
                        Your Personal Finance Assistant
                    </Badge>
                    <div className="mb-5">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight inline bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-400">
                            Your Money, Made Simple
                        </h1>
                    </div>
                    <div className="mb-5 flex flex-row items-center justify-center gap-3">
                        <p className="text-muted-foreground font-medium">Powered by</p>
                        <Image
                            src={"https://upload.wikimedia.org/wikipedia/commons/9/98/Capital_One_logo.svg"}
                            alt="Capital One logo"
                            width={120}
                            height={30}
                            className="h-8 w-auto"
                        />
                    </div>
                    <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Penny analyzes your finances, sends personalized weekly summaries, and helps you save money with AI-powered insights. No spreadsheets required.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full max-w-lg mx-auto">
                            <div className="relative flex-grow">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full h-12 px-4 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={isSubmitting}
                                    required
                                />
                            </div>
                            <Button
                                type="submit"
                                onClick={handleButtonClick}
                                disabled={isSubmitting}
                                className="h-12 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 flex-shrink-0"
                            >
                                {isSubmitting ? "Sending..." : "Get preview newsletter"}
                                {!isSubmitting && <ArrowRight className="ml-2 size-4" />}
                            </Button>
                        </form>
                    </div>
                    {formMessage.text && (
                        <div className={`mt-3 text-sm ${formMessage.type === "error" ? "text-red-500" : "text-emerald-500"}`}>
                            {formMessage.text}
                        </div>
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative mx-auto max-w-5xl"
                >
                    <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
                        {dashboardImage && (
                            <Image
                                src={dashboardImage}
                                width={1280}
                                height={720}
                                alt="Penny financial dashboard showing spending insights and weekly summary"
                                className="w-full h-auto"
                                priority
                            />
                        )}
                        <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
                    </div>
                    <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-emerald-500/30 to-emerald-300/30 blur-3xl opacity-70"></div>
                    <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-emerald-300/30 to-emerald-500/30 blur-3xl opacity-70"></div>
                </motion.div>
            </div>
        </section>
    )
}
