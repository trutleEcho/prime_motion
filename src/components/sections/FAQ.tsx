"use client";

import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Do I need a referral to see a physiotherapist?",
        answer:
            "No referral is necessary. You can book directly with us. However, some insurance plans may require a doctor's referral for coverage, so we recommend checking with your provider.",
    },
    {
        question: "What should I bring to my first appointment?",
        answer:
            "Please bring comfortable clothing suitable for movement, any relevant medical records or imaging results, a list of current medications, and your insurance information if applicable.",
    },
    {
        question: "How long does each treatment session last?",
        answer:
            "Initial assessments typically take 60 minutes, while follow-up treatment sessions are usually 45 minutes. The duration may vary based on your specific treatment plan and needs.",
    },
    {
        question: "Will my insurance cover physiotherapy?",
        answer:
            "Many insurance plans provide coverage for physiotherapy services. We accept most major insurance providers and can help verify your coverage. We also offer direct billing for your convenience.",
    },
    {
        question: "How many sessions will I need?",
        answer:
            "The number of sessions varies depending on your condition, goals, and response to treatment. After your initial assessment, we'll provide a personalized treatment plan with an estimated timeline.",
    },
    {
        question: "What types of conditions do you treat?",
        answer:
            "We treat a wide range of conditions including sports injuries, chronic pain, post-surgical rehabilitation, postural problems, arthritis, work-related injuries, and more. Contact us if you're unsure whether we can help with your specific condition.",
    },
    {
        question: "Do you offer direct billing to insurance companies?",
        answer:
            "Yes, we offer direct billing to most major insurance providers. This means we'll submit claims on your behalf, and you'll only pay any applicable deductibles or co-payments at the time of service.",
    },
    {
        question: "Can I continue my regular exercise routine during treatment?",
        answer:
            "This depends on your specific condition and treatment plan. We'll assess your situation and provide clear guidance on which activities are safe to continue and which should be modified or avoided during your recovery.",
    },
];

export default function FAQ() {
    return (
        <section id="faq" className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                        Frequently Asked <span className="text-primary">Questions</span>
                    </h2>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                        Got questions? We&apos;ve got answers. Find everything you need to know
                        about our services.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-accent/50 border border-border/50 rounded-2xl px-6 hover:border-primary/50 transition-colors"
                            >
                                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-foreground/70 leading-relaxed pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}
