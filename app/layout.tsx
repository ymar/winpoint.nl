import type React from "react"
import type { Metadata } from "next"
import { Inter, Merriweather } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const merriweather = Merriweather({ 
  subsets: ["latin"],
  weight: ['300', '400', '700'],
  variable: '--font-merriweather',
})

export const metadata: Metadata = {
  title: "Winpoint - Revenue Performance Excellence",
  description: "Creating the future of revenue performance through strategic CRM and ABM transformation. We architect unified revenue systems that deliver measurable results.",
  keywords: "revenue performance, CRM transformation, ABM strategy, revenue operations, sales automation, marketing automation, revenue systems, strategic consulting",
  authors: [{ name: "Winpoint" }],
  robots: "index, follow",
  openGraph: {
    title: "Winpoint - Revenue Performance Excellence",
    description: "Creating the future of revenue performance through strategic CRM and ABM transformation. We architect unified revenue systems that deliver measurable results.",
    type: "website",
    locale: "en_US",
    url: "https://winpoint.nl",
    siteName: "Winpoint",
    images: [
      {
        url: "https://winpoint.nl/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Winpoint - Revenue Performance Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Winpoint - Revenue Performance Excellence",
    description: "Creating the future of revenue performance through strategic CRM and ABM transformation.",
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
              "description": "Creating the future of revenue performance through strategic CRM and ABM transformation. We architect unified revenue systems that deliver measurable results.",
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
                "Revenue Performance",
                "CRM Transformation",
                "ABM Strategy",
                "Revenue Operations",
                "Strategic Revenue Consulting"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${merriweather.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
