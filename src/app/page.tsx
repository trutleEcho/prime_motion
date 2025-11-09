"use client";

import SmoothScrollProvider from "@/components/sections/SmoothScrollProvider";
import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import AboutStats from "@/components/sections/AboutStats";
import Services from "@/components/sections/Services";
import TreatmentJourney from "@/components/sections/TreatmentJourney";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import BookingForm from "@/components/sections/BookingForm";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
    return (
        <SmoothScrollProvider>
            <div className="smooth-scroll">
                <Navigation />
                <Hero />
                <AboutStats />
                <Services />
                <TreatmentJourney />
                <Gallery />
                <Testimonials />
                <FAQ />
                <BookingForm />
                <Contact />
                <Footer />
            </div>
        </SmoothScrollProvider>
    );
}