"use client";

import {motion} from "framer-motion";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent} from "@/components/ui/card";
import {Star} from "lucide-react";

export default function Testimonials(){
    return (
        <section id="testimonials" className="w-full py-20 md:py-32">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
                >
                    <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100" variant="secondary">
                        Testimonials
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What Our Users Say</h2>
                    <p className="max-w-[800px] text-muted-foreground md:text-lg">
                        Thousands of people are using Penny to take control of their finances. Here's what they think.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            quote:
                                "Penny helped me identify subscription services I'd forgotten about, saving me over $200 per month! The weekly emails are clear and actionable.",
                            author: "Sarah Johnson",
                            role: "Teacher, Saved $2,400/year",
                            rating: 5,
                        },
                        {
                            quote:
                                "As someone who dreads looking at my finances, Penny has been a game changer. The insights are genuinely useful, and I finally feel in control of my money.",
                            author: "Michael Chen",
                            role: "Graphic Designer",
                            rating: 5,
                        },
                        {
                            quote:
                                "The spending alerts have saved me countless times from going over budget. It's like having a financial advisor in my pocket all the time.",
                            author: "Emily Rodriguez",
                            role: "Marketing Specialist",
                            rating: 5,
                        },
                        {
                            quote:
                                "I've tried at least five budget apps before, but Penny is the only one I've stuck with. The weekly emails keep me accountable without making me feel guilty.",
                            author: "David Kim",
                            role: "Software Engineer",
                            rating: 5,
                        },
                        {
                            quote:
                                "As a freelancer with irregular income, Penny has been essential in helping me plan for taxes and save for leaner months. Absolutely worth the subscription.",
                            author: "Lisa Patel",
                            role: "Freelance Writer",
                            rating: 5,
                        },
                        {
                            quote:
                                "My wife and I were arguing about money constantly before Penny. Now we have a clear picture of our finances and can make decisions together. It's improved our relationship!",
                            author: "James Wilson",
                            role: "Small Business Owner",
                            rating: 5,
                        },
                    ].map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                        >
                            <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                                <CardContent className="p-6 flex flex-col h-full">
                                    <div className="flex mb-4">
                                        {Array(testimonial.rating)
                                            .fill(0)
                                            .map((_, j) => (
                                                <Star key={j} className="size-4 text-yellow-500 fill-yellow-500" />
                                            ))}
                                    </div>
                                    <p className="text-lg mb-6 flex-grow">{testimonial.quote}</p>
                                    <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/40">
                                        <div className="size-10 rounded-full bg-muted flex items-center justify-center text-foreground font-medium">
                                            {testimonial.author.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-medium">{testimonial.author}</p>
                                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
