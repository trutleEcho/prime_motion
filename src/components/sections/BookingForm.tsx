"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function BookingForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: "",
                email: "",
                phone: "",
                service: "",
                date: "",
                time: "",
                message: "",
            });
        }, 3000);
    };

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <section id="booking" className="py-20 md:py-32 bg-gradient-to-br from-accent/30 via-background to-accent/50">
            <div className="container mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                        Book Your <span className="text-primary">Appointment</span>
                    </h2>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                        Take the first step towards recovery. Fill out the form below and
                        we&apos;ll get back to you shortly.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-xl border border-border/50"
                    >
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="flex items-center gap-2 text-foreground">
                                    <User className="w-4 h-4 text-primary" />
                                    Full Name
                                </Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={(e) => handleChange("name", e.target.value)}
                                    required
                                    className="border-border/50 focus:border-primary"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email" className="flex items-center gap-2 text-foreground">
                                    <Mail className="w-4 h-4 text-primary" />
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={(e) => handleChange("email", e.target.value)}
                                    required
                                    className="border-border/50 focus:border-primary"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-2">
                                <Label htmlFor="phone" className="flex items-center gap-2 text-foreground">
                                    <Phone className="w-4 h-4 text-primary" />
                                    Phone Number
                                </Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    placeholder="+1 (555) 000-0000"
                                    value={formData.phone}
                                    onChange={(e) => handleChange("phone", e.target.value)}
                                    required
                                    className="border-border/50 focus:border-primary"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="service" className="flex items-center gap-2 text-foreground">
                                    <MessageSquare className="w-4 h-4 text-primary" />
                                    Service Type
                                </Label>
                                <Select
                                    value={formData.service}
                                    onValueChange={(value) => handleChange("service", value)}
                                    required
                                >
                                    <SelectTrigger id="service" className="border-border/50 focus:border-primary">
                                        <SelectValue placeholder="Select a service" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="sports-injury">Sports Injury Rehabilitation</SelectItem>
                                        <SelectItem value="pain-management">Pain Management</SelectItem>
                                        <SelectItem value="post-surgery">Post-Surgery Recovery</SelectItem>
                                        <SelectItem value="strength-conditioning">Strength & Conditioning</SelectItem>
                                        <SelectItem value="postural-assessment">Postural Assessment</SelectItem>
                                        <SelectItem value="manual-therapy">Manual Therapy</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-2">
                                <Label htmlFor="date" className="flex items-center gap-2 text-foreground">
                                    <Calendar className="w-4 h-4 text-primary" />
                                    Preferred Date
                                </Label>
                                <Input
                                    id="date"
                                    type="date"
                                    value={formData.date}
                                    onChange={(e) => handleChange("date", e.target.value)}
                                    required
                                    min={new Date().toISOString().split("T")[0]}
                                    className="border-border/50 focus:border-primary"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="time" className="flex items-center gap-2 text-foreground">
                                    <Clock className="w-4 h-4 text-primary" />
                                    Preferred Time
                                </Label>
                                <Select
                                    value={formData.time}
                                    onValueChange={(value) => handleChange("time", value)}
                                    required
                                >
                                    <SelectTrigger id="time" className="border-border/50 focus:border-primary">
                                        <SelectValue placeholder="Select time" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="9am">9:00 AM</SelectItem>
                                        <SelectItem value="10am">10:00 AM</SelectItem>
                                        <SelectItem value="11am">11:00 AM</SelectItem>
                                        <SelectItem value="1pm">1:00 PM</SelectItem>
                                        <SelectItem value="2pm">2:00 PM</SelectItem>
                                        <SelectItem value="3pm">3:00 PM</SelectItem>
                                        <SelectItem value="4pm">4:00 PM</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="space-y-2 mb-8">
                            <Label htmlFor="message" className="flex items-center gap-2 text-foreground">
                                <MessageSquare className="w-4 h-4 text-primary" />
                                Additional Notes (Optional)
                            </Label>
                            <Textarea
                                id="message"
                                placeholder="Tell us about your condition or any specific concerns..."
                                value={formData.message}
                                onChange={(e) => handleChange("message", e.target.value)}
                                rows={4}
                                className="border-border/50 focus:border-primary resize-none"
                            />
                        </div>

                        <Button
                            type="submit"
                            disabled={isSubmitting || isSubmitted}
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-14 text-lg font-semibold group"
                        >
                            {isSubmitted ? (
                                "Booking Submitted! ✓"
                            ) : isSubmitting ? (
                                "Submitting..."
                            ) : (
                                <>
                                    Submit Booking Request
                                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </Button>

                        {isSubmitted && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center text-sm text-secondary mt-4 font-medium"
                            >
                                We&apos;ll contact you shortly to confirm your appointment!
                            </motion.p>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
