"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register GSAP plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const galleryImages = [
    {
        url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
        alt: "Modern physiotherapy facility",
    },
    {
        url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
        alt: "Treatment room",
    },
    {
        url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
        alt: "Exercise area",
    },
    {
        url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
        alt: "Patient care",
    },
    {
        url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
        alt: "Therapy session",
    },
];

export default function Gallery() {
    const sectionRef = useRef<HTMLElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReducedMotion || !sectionRef.current || !scrollContainerRef.current) {
            return;
        }

        const isMobile = window.innerWidth < 768;

        // Skip horizontal scroll on mobile
        if (isMobile) {
            return;
        }

        const section = sectionRef.current;
        const scrollContainer = scrollContainerRef.current;
        const scrollWidth = scrollContainer.scrollWidth - window.innerWidth;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: () => `+=${scrollWidth}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            },
        });

        tl.to(scrollContainer, {
            x: -scrollWidth,
            ease: "none",
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative h-screen overflow-hidden bg-accent/30"
        >
            <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-6 lg:px-8 py-20">
                    <div className="mb-12">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
                            Our <span className="text-primary">Facility</span>
                        </h2>
                        <p className="text-lg text-foreground/70 max-w-xl">
                            State-of-the-art equipment and comfortable treatment spaces designed for your recovery.
                        </p>
                    </div>

                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 md:gap-8 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory md:snap-none"
                        style={{ scrollbarWidth: "thin" }}
                    >
                        {galleryImages.map((image, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[85vw] md:w-[40vw] lg:w-[30vw] snap-center"
                            >
                                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden group">
                                    <Image
                                        src={image.url}
                                        alt={image.alt}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 768px) 85vw, (max-width: 1024px) 40vw, 30vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="font-semibold">{image.alt}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
