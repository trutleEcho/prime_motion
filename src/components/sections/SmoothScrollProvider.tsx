"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScrollProvider({
                                                 children,
                                             }: {
    children: ReactNode;
}) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });

        // Add snap points for sections
        const snapToSection = () => {
            const sections = document.querySelectorAll('section');
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            let closestSection: HTMLElement | null = null;
            let minDistance = Infinity;

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                const sectionTop = rect.top + scrollY;
                const distance = Math.abs(scrollY - sectionTop);

                // Only snap if we're close to the section boundary
                if (distance < windowHeight * 0.3 && distance < minDistance) {
                    minDistance = distance;
                    closestSection = section as HTMLElement;
                }
            });

            if (closestSection) {
                lenis.scrollTo(closestSection, {
                    duration: 0.8,
                    easing: (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2,
                });
            }
        };

        let scrollTimeout: NodeJS.Timeout;
        const handleScrollEnd = () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                snapToSection();
            }, 150);
        };

        lenis.on('scroll', handleScrollEnd);

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            clearTimeout(scrollTimeout);
        };
    }, []);

    return <>{children}</>;
}