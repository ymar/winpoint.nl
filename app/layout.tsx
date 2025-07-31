import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Winpoint - Stop Your Deals From Going Quiet",
  description: "We create systematic deal progression engines that turn \"maybe later\" into \"yes.\" Most deals don't die from competition - they die from poor follow-up.",
  keywords: "deal progression, sales follow-up, sales automation, lead nurturing, sales pipeline, deal management, sales process, CRM optimization",
  authors: [{ name: "Winpoint" }],
  robots: "index, follow",
  openGraph: {
    title: "Winpoint - Stop Your Deals From Going Quiet",
    description: "We create systematic deal progression engines that turn \"maybe later\" into \"yes.\" Most deals don't die from competition - they die from poor follow-up.",
    type: "website",
    locale: "en_US",
    url: "https://winpoint.nl",
    siteName: "Winpoint",
    images: [
      {
        url: "https://winpoint.nl/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Winpoint - Stop Your Deals From Going Quiet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Winpoint - Stop Your Deals From Going Quiet",
    description: "We create systematic deal progression engines that turn \"maybe later\" into \"yes.\"",
    images: ["https://winpoint.nl/og-image.jpg"],
  },
  alternates: {
    canonical: "https://winpoint.nl",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Winpoint",
              "description": "We create systematic deal progression engines that turn \"maybe later\" into \"yes.\" Most deals don't die from competition - they die from poor follow-up.",
              "url": "https://winpoint.nl",
              "logo": "https://winpoint.nl/logo.svg",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": ["English", "Dutch"]
              },
              "areaServed": {
                "@type": "Country",
                "name": ["Netherlands", "Europe"]
              },
              "serviceType": [
                "Deal Progression",
                "Sales Follow-up Systems",
                "Sales Automation",
                "Lead Nurturing",
                "Sales Pipeline Optimization"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
