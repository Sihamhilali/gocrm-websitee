import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GoCRM — Manage • Grow • Succeed | All-in-One CRM & ERP Platform",
  description:
    "GoCRM is the all-in-one CRM + ERP SaaS platform for SMEs, freelancers, and growing businesses. Manage customers, sales, invoices, inventory, projects, and analytics from one powerful platform.",
  keywords: [
    "GoCRM",
    "CRM",
    "ERP",
    "customer management",
    "sales pipeline",
    "invoicing",
    "inventory management",
    "project management",
    "business analytics",
    "SaaS",
    "small business software",
    "all-in-one platform",
  ],
  authors: [{ name: "GoCRM" }],
  icons: {
    icon: "/logo-gocrm.png",
  },
  openGraph: {
    title: "GoCRM — Manage • Grow • Succeed",
    description:
      "All-in-one CRM + ERP platform. Manage customers, sales, invoices, inventory, projects, and analytics from one place.",
    siteName: "GoCRM",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoCRM — Manage • Grow • Succeed",
    description:
      "All-in-one CRM + ERP platform for growing businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://gocrm.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "GoCRM",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "All-in-one CRM + ERP SaaS platform for SMEs, freelancers, and growing businesses.",
              offers: {
                "@type": "AggregateOffer",
                lowPrice: "0",
                highPrice: "99",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased bg-background text-foreground`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}