"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import {
    Activity,
    Zap,
    Heart,
    Dumbbell,
    UserCheck,
    Sparkles,
    Plus,
    Minus,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
    {
        icon: Activity,
        title: "Sports Injury Rehabilitation",
        description:
            "Specialized treatment for athletes recovering from sports-related injuries.",
        details:
            "Our sports rehabilitation program combines manual therapy, exercise prescription, and performance optimization to get you back to peak condition safely and efficiently.",
        color: "from-primary/20 to-primary/5",
    },
    {
        icon: Zap,
        title: "Pain Management",
        description:
            "Effective solutions for chronic and acute pain relief.",
        details:
            "Using evidence-based techniques including dry needling, manual therapy, and therapeutic exercises to address the root cause of your pain and provide lasting relief.",
        color: "from-secondary/20 to-secondary/5",
    },
    {
        icon: Heart,
        title: "Post-Surgery Recovery",
        description:
            "Comprehensive rehabilitation following orthopedic surgeries.",
        details:
            "Personalized post-operative care plans designed to restore function, reduce pain, and accelerate your return to daily activities with optimal outcomes.",
        color: "from-primary/20 to-primary/5",
    },
    {
        icon: Dumbbell,
        title: "Strength & Conditioning",
        description:
            "Tailored programs to enhance physical performance.",
        details:
            "Customized strength training and conditioning programs designed to improve your functional movement, prevent injuries, and enhance overall physical performance.",
        color: "from-secondary/20 to-secondary/5",
    },
    {
        icon: UserCheck,
        title: "Postural Assessment",
        description:
            "Detailed analysis and correction of postural imbalances.",
        details:
            "Comprehensive postural evaluations using advanced assessment techniques to identify and correct imbalances that may be causing pain or limiting your movement.",
        color: "from-primary/20 to-primary/5",
    },
    {
        icon: Sparkles,
        title: "Manual Therapy",
        description:
            "Hands-on techniques for mobility and pain relief.",
        details:
            "Expert manual therapy techniques including joint mobilization, soft tissue work, and myofascial release to restore optimal movement and reduce discomfort.",
        color: "from-secondary/20 to-secondary/5",
    },
];

export default function Services() {
    const [expandedCard, setExpandedCard] = useState<number | null>(null);
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [3, 0, -3]);

    return (
        <section id="services" ref={sectionRef} className="py-20 md:py-32 bg-accent/30 relative overflow-hidden">
            <motion.div
                style={{ y, rotate }}
                className="absolute inset-0 z-0 opacity-50"
            >
                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-40 left-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, -80, 0],
                        y: [0, 60, 0],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-40 right-10 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl"
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
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        viewport={{ once: true }}
                    >
                        Our <span className="text-primary">Services</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-foreground/70 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Comprehensive physiotherapy solutions tailored to your unique needs
                        and goals.
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 50, rotateX: -10 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 100
                            }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -8,
                                rotateY: 3,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <Card
                                className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-xl bg-gradient-to-br ${service.color} border-border/50 hover:border-primary/50 h-full relative overflow-hidden group`}
                                onClick={() =>
                                    setExpandedCard(expandedCard === index ? null : index)
                                }
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    animate={{
                                        x: ["-100%", "200%"],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        repeatDelay: 5,
                                        ease: "easeInOut"
                                    }}
                                />

                                <div className="flex items-start justify-between mb-4 relative z-10">
                                    <motion.div
                                        className="p-3 bg-primary/10 rounded-xl"
                                        whileHover={{
                                            rotate: 360,
                                            scale: 1.1,
                                            backgroundColor: "rgba(31, 111, 139, 0.2)"
                                        }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <service.icon className="w-6 h-6 text-primary" />
                                    </motion.div>
                                    <motion.div
                                        animate={{ rotate: expandedCard === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {expandedCard === index ? (
                                            <Minus className="w-5 h-5 text-primary" />
                                        ) : (
                                            <Plus className="w-5 h-5 text-primary" />
                                        )}
                                    </motion.div>
                                </div>

                                <h3 className="text-xl font-display font-semibold text-foreground mb-3 relative z-10">
                                    {service.title}
                                </h3>

                                <p className="text-foreground/70 text-sm mb-4 relative z-10">
                                    {service.description}
                                </p>

                                <AnimatePresence>
                                    {expandedCard === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden relative z-10"
                                        >
                                            <div className="pt-4 border-t border-border/50">
                                                <p className="text-foreground/60 text-sm leading-relaxed">
                                                    {service.details}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}