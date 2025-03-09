"use client"
import PublicLayout from "@/components/public-layout"
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import Testimonials from "@/components/landing/testimonials";
import Faq from "@/components/landing/faq";
import Footer from "@/components/landing/footer";

export default function LandingPage() {
  return (
      <PublicLayout>
        <div className="flex min-h-[100dvh] flex-col">
          <Header />
          <main className="flex-1">
            <Hero/>
            <Features />
            <Testimonials/>
            <Faq/>
          </main>
          <Footer />
        </div>
      </PublicLayout>
  )
}
