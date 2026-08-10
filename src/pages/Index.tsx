import { useEffect } from "react";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { RoundTours } from "@/components/RoundTours";
import { DayTours } from "@/components/DayTours";
import { Destinations } from "@/components/Destinations";
import { Activities } from "@/components/Activities";
import { RouteMap } from "@/components/RouteMap";
import { Testimonials } from "@/components/Testimonials";
import { BlogPreview } from "@/components/BlogPreview";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import GoogleTranslate from "@/components/GoogleTranslate";

export default function Index() {
  useEffect(() => {
    document.title = "Ceylon Voyage — Luxury Sri Lanka Tours & Bespoke Journeys";
  }, []);

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen">
      <SmoothScroll />
      <Navbar />
      <GoogleTranslate />
      <Hero />
      <RoundTours />
      <DayTours />
      <Destinations />
      <Activities />
      <RouteMap />
      <Testimonials />
      <BlogPreview />
      <CtaBanner />
      <Footer />
    </main>
  );
}
