"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
    const blur = useTransform(scrollYProgress, [0, 1], [0, 5]);

    return (
        <section
            ref={ref}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-accent via-background to-accent/50"
        >
            {/* Animated Background Elements with Magnetic Effect */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                <motion.div
                    style={{
                        scale,
                        filter: `blur(${blur}px)`
                    }}
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -20, 0],
                        rotate: [0, 5, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"
                />
                <motion.div
                    style={{ scale }}
                    animate={{
                        x: [0, -40, 0],
                        y: [0, 30, 0],
                        rotate: [0, -5, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mint/10 rounded-full blur-3xl"
                />
            </motion.div>

            <motion.div
                style={{ opacity, scale }}
                className="container mx-auto px-6 lg:px-8 py-20 relative z-10"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
                    >
                        <Activity className="w-4 h-4" />
                        <span className="text-sm font-medium tracking-wide">Expert Physiotherapy Care</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground mb-6 leading-tight tracking-tight"
                    >
                        Move Better,
                        <br />
                        <span className="text-primary">Live Better</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Personalized physiotherapy treatments to restore your mobility,
                        relieve pain, and enhance your quality of life.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 h-14 group"
                            onClick={() =>
                                document
                                    .querySelector("#booking")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                        >
                            Book Appointment
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 h-14"
                            onClick={() =>
                                document
                                    .querySelector("#services")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                        >
                            Explore Services
                        </Button>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2"
                    >
                        <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}