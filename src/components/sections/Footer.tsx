"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin, ArrowUp } from "lucide-react";
import pkg from "../../../package.json";

const footerLinks = {
    services: [
        { name: "Sports Injury", href: "#services" },
        { name: "Pain Management", href: "#services" },
        { name: "Post-Surgery", href: "#services" },
        { name: "Strength Training", href: "#services" },
    ],
    company: [
        { name: "About Us", href: "#about" },
        { name: "Our Team", href: "#about" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "FAQ", href: "#faq" },
    ],
    resources: [
        { name: "Blog", href: "#" },
        { name: "Health Tips", href: "#" },
        { name: "Insurance", href: "#" },
        { name: "Careers", href: "#" },
    ],
};

const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleLinkClick = (href: string) => {
        if (href.startsWith("#")) {
            const element = document.querySelector(href);
            element?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="bg-foreground text-background relative">
            {/* Scroll to Top Button */}
            <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                onClick={scrollToTop}
                className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary hover:bg-primary/90 text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
                aria-label="Scroll to top"
            >
                <ArrowUp className="w-5 h-5" />
            </motion.button>

            <div className="container mx-auto px-6 lg:px-8 pt-20 pb-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-3xl font-display font-bold mb-4 text-primary">
                                PrimeMotion
                            </h3>
                            <p className="text-background/70 mb-6 leading-relaxed">
                                Your trusted partner in physiotherapy and rehabilitation.
                                Helping you move better and live better, one treatment at a
                                time.
                            </p>
                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="font-display font-semibold text-lg mb-4">
                            Services
                        </h4>
                        <ul className="space-y-2">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => handleLinkClick(link.href)}
                                        className="text-background/70 hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Company */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="font-display font-semibold text-lg mb-4">Company</h4>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => handleLinkClick(link.href)}
                                        className="text-background/70 hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Resources */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="font-display font-semibold text-lg mb-4">
                            Resources
                        </h4>
                        <ul className="space-y-2">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-background/70 hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4"
                >
                    <p className="text-background/60 text-sm">
                        © {new Date().getFullYear()} PrimeMotion. All rights reserved.
                    </p>
                    <p className="text-background/60 text-sm">
                        v.{pkg.version}
                    </p>
                    <div className="flex gap-6 text-sm">
                        <a
                            href="#"
                            className="text-background/60 hover:text-primary transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="text-background/60 hover:text-primary transition-colors"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="#"
                            className="text-background/60 hover:text-primary transition-colors"
                        >
                            Accessibility
                        </a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
