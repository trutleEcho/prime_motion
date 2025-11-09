"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ClipboardList, Users, Activity, TrendingUp, Target, ArrowRight } from "lucide-react";
import Image from "next/image";

const journeySteps = [
    {
        step: "01",
        icon: ClipboardList,
        title: "Initial Assessment",
        description:
            "Comprehensive evaluation of your condition, medical history, and movement patterns to understand your unique needs.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
        color: "from-primary/20 to-primary/5",
    },
    {
        step: "02",
        icon: Target,
        title: "Custom Treatment Plan",
        description:
            "Development of a personalized treatment strategy tailored to your specific goals and recovery timeline.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
        color: "from-secondary/20 to-secondary/5",
    },
    {
        step: "03",
        icon: Activity,
        title: "Active Treatment",
        description:
            "Hands-on therapy sessions combining manual techniques, exercise therapy, and advanced modalities.",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
        color: "from-primary/20 to-primary/5",
    },
    {
        step: "04",
        icon: TrendingUp,
        title: "Progress Monitoring",
        description:
            "Regular assessments to track improvements and adjust your treatment plan for optimal results.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
        color: "from-secondary/20 to-secondary/5",
    },
    {
        step: "05",
        icon: Users,
        title: "Recovery & Maintenance",
        description:
            "Ongoing support and exercise programs to maintain gains and prevent future injuries.",
        image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600&q=80",
        color: "from-primary/20 to-primary/5",
    },
];

export default function TreatmentJourney() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const backgroundRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

    return (
        <section id="journey" ref={sectionRef} className="py-20 md:py-32 bg-background relative overflow-hidden">
            {/* Animated background decoration */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y: backgroundY }}
            >
                <motion.div
                    className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
                    style={{ rotate: backgroundRotate }}
                />
                <motion.div
                    className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 8,
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
                    className="text-center mb-20"
                >
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 tracking-tight"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                        viewport={{ once: true }}
                    >
                        Your Treatment <span className="text-primary">Journey</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-foreground/70 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        A structured, evidence-based approach to your recovery and wellness.
                    </motion.p>
                </motion.div>

                <motion.div ref={ref} className="max-w-6xl mx-auto space-y-24">
                    {journeySteps.map((item, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 60 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.2,
                                    type: "spring",
                                    stiffness: 50
                                }}
                                className="relative"
                            >
                                <div className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${!isEven ? 'md:grid-flow-dense' : ''}`}>
                                    {/* Image side with advanced animations */}
                                    <motion.div
                                        className={`relative ${!isEven ? 'md:col-start-2' : ''}`}
                                        whileHover={{ scale: 1.03 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <motion.div
                                            className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
                                            initial={{ rotateY: isEven ? -15 : 15, opacity: 0 }}
                                            animate={isInView ? { rotateY: 0, opacity: 1 } : {}}
                                            transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                                            style={{
                                                transformStyle: "preserve-3d",
                                                perspective: "1000px"
                                            }}
                                        >
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />

                                            {/* Gradient overlay */}
                                            <motion.div
                                                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20`}
                                                whileHover={{ opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            />

                                            {/* Floating step number */}
                                            <motion.div
                                                className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-display font-bold text-2xl shadow-2xl z-10"
                                                initial={{ scale: 0, rotate: -90 }}
                                                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                                                transition={{
                                                    duration: 0.6,
                                                    delay: index * 0.2 + 0.4,
                                                    type: "spring",
                                                    stiffness: 200
                                                }}
                                                whileHover={{
                                                    scale: 1.15,
                                                    rotate: 180,
                                                    transition: { duration: 0.5 }
                                                }}
                                            >
                                                {item.step}
                                            </motion.div>
                                        </motion.div>

                                        {/* Decorative elements */}
                                        <motion.div
                                            className={`absolute -z-10 ${isEven ? '-right-4 -bottom-4' : '-left-4 -bottom-4'} w-full h-full rounded-3xl bg-gradient-to-br ${item.color} opacity-30`}
                                            initial={{ scale: 0.9, opacity: 0 }}
                                            animate={isInView ? { scale: 1, opacity: 0.3 } : {}}
                                            transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                                        />
                                    </motion.div>

                                    {/* Content side */}
                                    <motion.div
                                        className={!isEven ? 'md:col-start-1 md:row-start-1' : ''}
                                        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                                    >
                                        <motion.div
                                            className="inline-flex items-center gap-3 mb-6"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                                            transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                                        >
                                            <motion.div
                                                className="p-3 bg-primary/10 rounded-xl"
                                                whileHover={{
                                                    rotate: 360,
                                                    scale: 1.1,
                                                    backgroundColor: "rgba(31, 111, 139, 0.2)"
                                                }}
                                                transition={{ duration: 0.6 }}
                                            >
                                                <item.icon className="w-6 h-6 text-primary" />
                                            </motion.div>
                                        </motion.div>

                                        <motion.h3
                                            className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 tracking-tight"
                                            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                                        >
                                            {item.title}
                                        </motion.h3>

                                        <motion.p
                                            className="text-lg text-foreground/70 leading-relaxed mb-6"
                                            initial={{ opacity: 0 }}
                                            animate={isInView ? { opacity: 1 } : {}}
                                            transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
                                        >
                                            {item.description}
                                        </motion.p>

                                        {/* Progress indicator */}
                                        <motion.div
                                            className="flex items-center gap-2"
                                            initial={{ opacity: 0, width: 0 }}
                                            animate={isInView ? { opacity: 1, width: "auto" } : {}}
                                            transition={{ duration: 0.8, delay: index * 0.2 + 0.8 }}
                                        >
                                            <div className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full flex-1 max-w-[200px]" />
                                            <span className="text-sm text-primary font-semibold">
                        Step {index + 1} of {journeySteps.length}
                      </span>
                                        </motion.div>
                                    </motion.div>
                                </div>

                                {/* Connecting line (except for last item) */}
                                {index < journeySteps.length - 1 && (
                                    <motion.div
                                        className="absolute left-1/2 -bottom-12 w-0.5 h-24 bg-gradient-to-b from-primary to-secondary hidden md:block"
                                        initial={{ scaleY: 0 }}
                                        animate={isInView ? { scaleY: 1 } : {}}
                                        transition={{ duration: 0.8, delay: index * 0.2 + 1 }}
                                        style={{ originY: 0 }}
                                    />
                                )}
                            </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mt-20"
                >
                    <motion.button
                        onClick={() =>
                            document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.03, gap: "1rem" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Start Your Journey Today
                        <ArrowRight className="w-5 h-5" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}