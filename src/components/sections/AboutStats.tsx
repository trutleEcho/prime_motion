"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Award, Users, Heart, TrendingUp } from "lucide-react";

const stats = [
    { icon: Users, value: 5000, suffix: "+", label: "Patients Treated" },
    { icon: Award, value: 15, suffix: "+", label: "Years Experience" },
    { icon: Heart, value: 98, suffix: "%", label: "Satisfaction Rate" },
    { icon: TrendingUp, value: 95, suffix: "%", label: "Recovery Success" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
        if (!isInView) return;

        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [isInView, value]);

    return (
        <span ref={ref} className="text-5xl md:text-6xl font-display font-bold text-primary">
      {count}
            {suffix}
    </span>
    );
}

export default function AboutStats() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 5]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

    return (
        <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-background relative overflow-hidden">
            {/* Animated background with depth */}
            <motion.div
                style={{ y, rotate }}
                className="absolute inset-0 z-0"
            >
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        x: [0, 50, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                        x: [0, -30, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
                />
            </motion.div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Content with parallax */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        style={{ y: useTransform(scrollYProgress, [0.2, 0.8], [30, -30]) }}
                    >
                        <motion.h2
                            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 tracking-tight"
                            initial={{ opacity: 0, rotateX: 45 }}
                            whileInView={{ opacity: 1, rotateX: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Your Partner in
                            <span className="text-primary"> Recovery</span>
                        </motion.h2>
                        <motion.p
                            className="text-lg text-foreground/70 mb-6 leading-relaxed"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            At PrimeMotion, we combine evidence-based treatments with
                            compassionate care to help you achieve your health goals. Our team
                            of expert physiotherapists uses the latest techniques to deliver
                            personalized treatment plans.
                        </motion.p>
                        <motion.p
                            className="text-lg text-foreground/70 leading-relaxed"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Whether you&apos;re recovering from injury, managing chronic pain, or
                            optimizing athletic performance, we&apos;re here to support you every
                            step of the way.
                        </motion.p>
                    </motion.div>

                    {/* Stats Grid */}
                    <div ref={ref} className="grid grid-cols-2 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                whileHover={{
                                    scale: 1.03,
                                    rotate: [0, -1, 1, 0],
                                    transition: { duration: 0.4 }
                                }}
                                style={{ scale }}
                                className="bg-gradient-to-br from-accent to-accent/50 p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
                            >
                                {/* Animated background on hover */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    animate={{
                                        rotate: [0, 360],
                                    }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />

                                <motion.div
                                    initial={{ rotate: -90, scale: 0 }}
                                    animate={isInView ? { rotate: 0, scale: 1 } : {}}
                                    transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                                    className="relative z-10"
                                >
                                    <stat.icon className="w-8 h-8 text-primary mb-4" />
                                </motion.div>
                                <div className="relative z-10">
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                    <p className="text-sm text-foreground/60 mt-2 font-medium">
                                        {stat.label}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}