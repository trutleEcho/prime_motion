"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const contactInfo = [
    {
        icon: MapPin,
        title: "Visit Us",
        content: "123 Wellness Street, Downtown",
        detail: "City, State 12345",
    },
    {
        icon: Phone,
        title: "Call Us",
        content: "+1 (555) 123-4567",
        detail: "Mon-Fri: 8AM - 7PM",
    },
    {
        icon: Mail,
        title: "Email Us",
        content: "info@primemotion.com",
        detail: "We respond within 24hrs",
    },
    {
        icon: Clock,
        title: "Hours",
        content: "Mon-Fri: 8:00AM - 7:00PM",
        detail: "Sat: 9:00AM - 3:00PM",
    },
];

export default function Contact() {
    return (
        <section id="contact" className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                        Get in <span className="text-primary">Touch</span>
                    </h2>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                        Have questions or ready to start your recovery journey? We&apos;re here
                        to help.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Cards */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {contactInfo.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="p-6 bg-accent/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-full">
                                    <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                                        <item.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-foreground/80 font-medium mb-1">
                                        {item.content}
                                    </p>
                                    <p className="text-sm text-foreground/60">{item.detail}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl border border-border/50"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093703!2d144.9537353153167!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sau!4v1518652129595"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                            title="PrimeMotion Location"
                        />
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
