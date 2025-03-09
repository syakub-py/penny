"use client";

import {motion} from "framer-motion";
import {Badge} from "@/components/ui/badge";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

export default function Faq(){
    return (
        <section id="faq" className="w-full py-20 md:py-32">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
                >
                    <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100" variant="secondary">
                        FAQ
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Common Questions</h2>
                    <p className="max-w-[800px] text-muted-foreground md:text-lg">
                        Everything you need to know about Penny and how it can help your finances.
                    </p>
                </motion.div>

                <div className="mx-auto max-w-3xl">
                    <Accordion type="single" collapsible className="w-full">
                        {[
                            {
                                question: "Is my financial data secure with Penny?",
                                answer:
                                    "Absolutely. We use bank-level 256-bit encryption and never store your bank credentials. We're SOC 2 Type II certified and use read-only access to your accounts, meaning no one can move money through our platform.",
                            },
                            {
                                question: "How do I connect my bank accounts?",
                                answer:
                                    "Penny uses Plaid, a secure financial service used by major banks and financial apps, to connect to your accounts. The connection process takes less than 2 minutes and requires your online banking credentials. We never see or store these credentials.",
                            },
                            {
                                question: "How does the AI analyze my finances?",
                                answer:
                                    "Our AI analyzes your transaction patterns, spending categories, and income cycles to identify trends and opportunities. It compares your spending to your own history and provides personalized insights without sharing your data.",
                            },
                            {
                                question: "Can I cancel my subscription anytime?",
                                answer:
                                    "Yes, you can cancel your subscription at any time from your account settings. If you cancel during your 30-day free trial, you won't be charged at all.",
                            },
                            {
                                question: "Will Penny help me budget better?",
                                answer:
                                    "Yes! Penny identifies your spending patterns, highlights unusual expenses, and helps you track progress toward financial goals. The weekly summaries make it easy to stay on top of your finances without obsessing over every transaction.",
                            },
                            {
                                question: "Can I use Penny for business finances?",
                                answer:
                                    "Penny is currently designed for personal and family finances. While you can connect business accounts, our insights are optimized for personal financial management. We're working on a business-specific version for future release.",
                            },
                        ].map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                            >
                                <AccordionItem value={`item-${i}`} className="border-b border-border/40 py-2">
                                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
