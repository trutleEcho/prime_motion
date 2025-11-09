import type { Metadata } from "next";
import "./globals.css";
// import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
    title: "PrimeMotion | Expert Physiotherapy & Rehabilitation Services",
    description: "Professional physiotherapy clinic offering personalized treatment plans for sports injuries, pain management, post-surgery recovery, and more. Book your appointment today.",
    keywords: ["physiotherapy", "rehabilitation", "sports injury", "pain management", "physical therapy", "wellness"],
    authors: [{ name: "PrimeMotion" }],
    openGraph: {
        title: "PrimeMotion | Expert Physiotherapy Services",
        description: "Move better, live better with personalized physiotherapy treatments",
        type: "website",
        locale: "en_US",
        siteName: "PrimeMotion",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://primemotion.com",
        "name": "PrimeMotion Physiotherapy Clinic",
        "description": "Expert physiotherapy and rehabilitation services",
        "url": "https://primemotion.com",
        "telephone": "+1-555-123-4567",
        "email": "info@primemotion.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Wellness Street",
            "addressLocality": "Downtown",
            "addressRegion": "State",
            "postalCode": "12345",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "37.7749",
            "longitude": "-122.4194"
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "19:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "15:00"
            }
        ],
        "priceRange": "$$",
        "image": "https://primemotion.com/og-image.jpg",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "250"
        }
    };

    return (
        <html lang="en">
        <head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <meta name="apple-mobile-web-app-title" content="Prime Motion" />
        </head>
        <body className="antialiased">
        <ErrorReporter />
        <Script
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
            strategy="afterInteractive"
            data-target-origin="*"
            data-message-type="ROUTE_CHANGE"
            data-include-search-params="true"
            data-only-in-iframe="true"
            data-debug="true"
            data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        {/*<VisualEditsMessenger />*/}
        </body>
        </html>
    );
}