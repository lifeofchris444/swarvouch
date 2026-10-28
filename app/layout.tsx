import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
})

const SITE_URL = "https://www.swarovskidiscounts.com"
const SITE_NAME = "Swarovski Discounts"
const TITLE = "The Swarovski Discounts They Don't Advertise"
const DESCRIPTION =
  "Discover how shoppers are unlocking hidden discount codes on crystal necklaces, earrings, bracelets, watches, and gifts. Complete 5+ deals in five simple steps and get your discount delivered straight to your inbox."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Swarovski discount code",
    "Swarovski promo code",
    "Swarovski discounts",
    "Swarovski deals",
    "Swarovski crystal jewelry",
    "crystal necklace deals",
    "crystal earrings deals",
    "bracelet and ring deals",
    "crystal watch deals",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "shopping",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: SITE_NAME,
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1024,
        height: 1024,
        alt: "A crystal pendant necklace, drop earrings, a tennis bracelet, a cocktail ring, a crystal-set watch, and a crystal swan figurine on black velvet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  other: {
    "apple-mobile-web-app-title": SITE_NAME,
  },
}

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
