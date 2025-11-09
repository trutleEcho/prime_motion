"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Marathon Runner",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
        content:
            "After a knee injury, I thought my running days were over. The team at PrimeMotion not only got me back on track but helped me achieve a personal best. Their expertise and dedication are unmatched.",
        rating: 5,
    },
    {
        name: "Michael Chen",
        role: "Office Professional",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
        content:
            "Years of desk work led to chronic back pain. The personalized treatment plan and exercises have been life-changing. I'm finally pain-free and more productive than ever.",
        rating: 5,
    },
    {
        name: "Emma Williams",
        role: "Yoga Instructor",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
        content:
            "The holistic approach to recovery here is exceptional. They understand the importance of mobility and flexibility in my profession. Highly recommend to anyone seeking quality care.",
        rating: 5,
    },
    {
        name: "David Martinez",
        role: "Construction Worker",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
        content:
            "Shoulder injury from work was affecting my livelihood. The targeted treatment and strength program got me back to full capacity faster than expected. Professional and caring staff.",
        rating: 5,
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
    const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-3, 0, 3]);
    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            rotateY: direction > 0 ? 25 : -25,
            scale: 0.9,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            rotateY: 0,
            scale: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            rotateY: direction < 0 ? 25 : -25,
            scale: 0.9,
        }),
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) nextIndex = testimonials.length - 1;
            if (nextIndex >= testimonials.length) nextIndex = 0;
            return nextIndex;
        });
    };

    return (
        <section id="testimonials" ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
            {/* Animated background decoration */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y }}
            >
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"
                    style={{ scale, rotate }}
                    animate={{
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 tracking-tight"
                        initial={{ opacity: 0, scale: 0.9, rotateX: -45 }}
                        whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        viewport={{ once: true }}
                    >
                        Client <span className="text-primary">Success Stories</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-foreground/70 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Real results from real people who trusted us with their recovery.
                    </motion.p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    <div className="relative h-[400px] md:h-[350px] flex items-center justify-center" style={{ perspective: "1000px" }}>
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.3 },
                                    rotateY: { duration: 0.5 },
                                    scale: { duration: 0.3 },
                                }}
                                className="absolute inset-0"
                            >
                                <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-xl border border-border/50 h-full flex flex-col justify-between relative overflow-hidden">
                                    {/* Animated gradient background */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0"
                                        animate={{
                                            opacity: [0, 0.5, 0],
                                            scale: [1, 1.2, 1],
                                        }}
                                        transition={{
                                            duration: 8,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />

                                    <div className="relative z-10">
                                        <motion.div
                                            initial={{ scale: 0, rotate: -90 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{ delay: 0.2, type: "spring" }}
                                        >
                                            <Quote className="w-12 h-12 text-primary/20 mb-6" />
                                        </motion.div>
                                        <motion.p
                                            className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6 italic"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            &quot;{testimonials[currentIndex].content}&quot;
                                        </motion.p>
                                    </div>

                                    <motion.div
                                        className="flex items-center justify-between relative z-10"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <div className="flex items-center gap-4">
                                            <Avatar className="w-14 h-14 border-2 border-primary/20">
                                                <AvatarImage src={testimonials[currentIndex].avatar} />
                                                <AvatarFallback>
                                                    {testimonials[currentIndex].name.split(" ").map((n) => n[0]).join("")}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-semibold text-foreground">
                                                    {testimonials[currentIndex].name}
                                                </p>
                                                <p className="text-sm text-foreground/60">
                                                    {testimonials[currentIndex].role}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-1">
                                            {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ scale: 0, rotate: -90 }}
                                                    animate={{ scale: 1, rotate: 0 }}
                                                    transition={{ delay: 0.5 + i * 0.1 }}
                                                >
                                                    <Star className="w-5 h-5 fill-primary text-primary" />
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => paginate(-1)}
                            className="rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-white"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </Button>

                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => {
                                        setDirection(index > currentIndex ? 1 : -1);
                                        setCurrentIndex(index);
                                    }}
                                    className={`h-2 rounded-full transition-all ${
                                        index === currentIndex
                                            ? "bg-primary w-8"
                                            : "bg-primary/20 hover:bg-primary/40 w-2"
                                    }`}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => paginate(1)}
                            className="rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-white"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}