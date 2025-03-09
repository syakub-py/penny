"use client"

import { cn } from "@/lib/utils"
import { useChat } from "ai/react"
import { ArrowUpIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { AutoResizeTextarea } from "@/components/chat/autoresize-textarea";
import { useEffect } from "react";

export default function ChatPage({ className, ...props }: React.ComponentProps<"form">) {
    const { messages, input, setInput, append, setMessages } = useChat({
        api: "/api/chat",
    })

    useEffect(() => {
        if (messages.length === 0) {
            setMessages([
                {
                    id: "1",
                    content: "Hi there! I'd like some help with managing my finances. I'm trying to save for a down payment on a house.",
                    role: "user"
                },
                {
                    id: "2",
                    content: "That's a great goal! To help you better, could you share some basic information about your current financial situation? Like your monthly income, expenses, current savings, and target amount for the down payment?",
                    role: "assistant"
                },
                {
                    id: "3",
                    content: "Sure. I make about $5,500 per month after taxes. My monthly expenses are around $3,200 (rent is $1,600, car payment $350, utilities $200, groceries $500, and misc expenses about $550). I have $12,000 saved so far and I'm aiming for a $60,000 down payment.",
                    role: "user"
                },
                {
                    id: "4",
                    content: "Thanks for sharing that information. Based on what you've told me:\n\n1. Your current monthly surplus is about $2,300 ($5,500 - $3,200)\n2. You need an additional $48,000 for your down payment goal\n3. At your current saving rate, it would take approximately 21 months to reach your target\n\nWould you like some suggestions to help you reach your goal faster?",
                    role: "assistant"
                },
                {
                    id: "5",
                    content: "Yes please! I was hoping to buy within the next 18 months if possible.",
                    role: "user"
                },
                {
                    id: "6",
                    content: "To reach your goal in 18 months, you'd need to save about $2,667 per month. Here are some strategies to help:\n\n1. Review your misc expenses to find potential savings - even $200/month would make a difference\n2. Consider a side income source for an extra $400-500/month\n3. Make sure your $12,000 is in a high-yield savings account (3-5% APY)\n4. Look into first-time homebuyer programs that might require smaller down payments\n\nWould you like me to elaborate on any of these options?",
                    role: "assistant"
                }
            ])
        }
    }, [messages.length, setMessages])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        void append({ content: input, role: "user" })
        setInput("")
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>)
        }
    }

    const header = (
        <header className="m-auto flex max-w-96 flex-col gap-5 text-center">
            <h1 className="text-2xl font-semibold leading-none tracking-tight">Financial Advisor AI</h1>
            <p className="text-muted-foreground text-sm">
                Get personalized guidance on budgeting, saving, investing, and achieving your financial goals.
            </p>
            <p className="text-muted-foreground text-sm">
                Ask any question about personal finance to get started.
            </p>
        </header>
    )

    const messageList = (
        <div className="my-4 flex h-fit min-h-full flex-col gap-4">
            {messages.map((message, index) => (
                <div
                    key={index}
                    data-role={message.role}
                    className="max-w-[80%] rounded-xl px-3 py-2 text-sm data-[role=assistant]:self-start data-[role=user]:self-end data-[role=assistant]:bg-gray-100 data-[role=user]:bg-emerald-500 data-[role=assistant]:text-black data-[role=user]:text-white"
                >
                    {message.content}
                </div>
            ))}
        </div>
    )

    return (
        <main
            className={cn(
                "ring-none mx-auto flex h-svh max-h-svh w-full max-w-[35rem] flex-col items-stretch border-none",
                className,
            )}
            {...props}
        >
            <div className="flex-1 content-center overflow-y-auto px-6">{messages.length ? messageList : header}</div>
            <form
                onSubmit={handleSubmit}
                className="border-input bg-background focus-within:ring-ring/10 relative mx-6 mb-6 flex items-center rounded-[16px] border px-3 py-1.5 pr-8 text-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-0"
            >
                <AutoResizeTextarea
                    onKeyDown={handleKeyDown}
                    onChange={(v) => setInput(v)}
                    value={input}
                    placeholder="Ask about budgeting, saving, investing..."
                    className="placeholder:text-muted-foreground flex-1 bg-transparent focus:outline-none"
                />
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="ghost" size="sm" className="absolute bottom-1 right-1 size-6 rounded-full">
                            <ArrowUpIcon size={16} />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent sideOffset={12}>Submit</TooltipContent>
                </Tooltip>
            </form>
        </main>
    )
}
