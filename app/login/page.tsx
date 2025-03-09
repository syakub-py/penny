"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import PublicLayout from "@/components/public-layout"
import { Coins } from "lucide-react"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
import Image from "next/image";
import {signInWithEmailAndPassword} from "@firebase/auth";
import {auth} from "@/utils/firebaseConfig";

export default function LoginPage() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        try {
            setIsLoading(true)
            await signInWithEmailAndPassword(auth, email, password)
            router.push("/dashboard")
            setIsLoading(false)
        }catch (e){
            alert(e)
            setIsLoading(false)
        }
    }

    return (
        <PublicLayout>
            <div className="flex items-center justify-center min-h-screen p-4 sm:p-6 md:p-10 bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950/20 dark:to-background">
                <div className={"flex flex-col gap-6"}>
                    <Card className="overflow-hidden border-emerald-100 dark:border-emerald-900/50 shadow-lg">
                        <CardContent className="grid p-0 md:grid-cols-2">
                            <form className="p-6 md:p-8" onSubmit={handleSubmit}>
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="flex items-center justify-center mb-4">
                                            <div className="size-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white">
                                                <Coins className="size-6" />
                                            </div>
                                        </div>
                                        <h1 className="text-2xl font-bold text-emerald-950 dark:text-emerald-50">Welcome back</h1>
                                        <p className="text-balance text-emerald-700 dark:text-emerald-300">Login to your Penny Assistant account</p>
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="email" className="text-emerald-900 dark:text-emerald-200">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="m@example.com"
                                            required
                                            className="border-emerald-200 dark:border-emerald-800 focus-visible:ring-emerald-500"
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <div className="flex items-center">
                                            <Label htmlFor="password" className="text-emerald-900 dark:text-emerald-200">Password</Label>
                                            <a href="#" className="ml-auto text-sm text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 underline-offset-2 hover:underline">
                                                Forgot your password?
                                            </a>
                                        </div>
                                        <Input
                                            id="password"
                                            type="password"
                                            required
                                            className="border-emerald-200 dark:border-emerald-800 focus-visible:ring-emerald-500"
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                                    >
                                        {isLoading ? "Logging in..." : "Login"}
                                    </Button>
                                    <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-emerald-200 dark:after:border-emerald-800">
                                        <span className="relative z-10 bg-background px-2 text-emerald-600 dark:text-emerald-400">Or continue with</span>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <Button
                                            type="button"
                                            variant="outline"
                                            className="w-full border-emerald-200 dark:border-emerald-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/50"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-5">
                                                <path
                                                    d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                            <span className="sr-only">Login with Apple</span>
                                        </Button>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            className="w-full border-emerald-200 dark:border-emerald-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/50"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-5">
                                                <path
                                                    d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                            <span className="sr-only">Login with Google</span>
                                        </Button>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            className="w-full border-emerald-200 dark:border-emerald-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/50"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-5">
                                                <path
                                                    d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                            <span className="sr-only">Login with Meta</span>
                                        </Button>
                                    </div>
                                    <div className="text-center text-sm text-emerald-800 dark:text-emerald-200">
                                        Don&apos;t have an account?{" "}
                                        <a href="/register" className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 underline underline-offset-4">
                                            Sign up
                                        </a>
                                    </div>
                                </div>
                            </form>
                            <div className="relative hidden bg-emerald-900 md:block">
                                <div className="absolute inset-0 opacity-20 bg-pattern-grid"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/80 to-emerald-900/90"></div>
                                <div className="absolute inset-0 flex items-center justify-center p-8">
                                    <div className="text-white space-y-4 z-10 max-w-md">
                                        <h2 className="text-2xl font-bold">Simplify Your Finances</h2>
                                        <p className="opacity-80">Get personalized insights, weekly summaries, and AI-powered recommendations to help you save money and build better financial habits.</p>
                                        <div className="flex items-center gap-4 pt-4">
                                            <div className="size-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                                                <svg viewBox="0 0 24 24" className="size-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M12 16V12L9 8M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5z" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </div>
                                            <div className="text-sm">
                                                <div className="font-medium">Weekly Email Summaries</div>
                                                <div className="opacity-70">Clear and actionable updates</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="size-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                                                <svg viewBox="0 0 24 24" className="size-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </div>
                                            <div className="text-sm">
                                                <div className="font-medium">Interactive Dashboard</div>
                                                <div className="opacity-70">Track your finances visually</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
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
                    <div className="text-balance text-center text-xs text-emerald-700 dark:text-emerald-400 [&_a]:text-emerald-600 dark:[&_a]:text-emerald-300 [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-emerald-700 dark:hover:[&_a]:text-emerald-200">
                        By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
                    </div>
                </div>
            </div>
        </PublicLayout>
    )
}
