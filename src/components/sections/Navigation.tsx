"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Journey", href: "#journey" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
];

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = (href: string) => {
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? "bg-background/95 backdrop-blur-md shadow-sm"
                        : "bg-transparent"
                }`}
            >
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <motion.a
                            href="#"
                            className="text-2xl font-display font-bold text-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Image src="/banner.png" alt="Banner" height={100} width={220} className="lg:ml-5"/>
                        </motion.a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link, i) => (
                                <motion.button
                                    key={link.name}
                                    onClick={() => handleLinkClick(link.href)}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-foreground/80 hover:text-primary transition-colors font-medium"
                                    whileHover={{ y: -2 }}
                                >
                                    {link.name}
                                </motion.button>
                            ))}
                            <Button
                                onClick={() => handleLinkClick("#booking")}
                                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                            >
                                Book Now
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-foreground"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-background md:hidden"
                    >
                        <div className="flex flex-col items-center justify-center h-full space-y-8">
                            {navLinks.map((link) => (
                                <motion.button
                                    key={link.name}
                                    onClick={() => handleLinkClick(link.href)}
                                    className="text-3xl font-display text-foreground hover:text-primary transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {link.name}
                                </motion.button>
                            ))}
                            <Button
                                onClick={() => handleLinkClick("#booking")}
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                            >
                                Book Now
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
