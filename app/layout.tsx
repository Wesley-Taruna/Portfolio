
import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Orb from '../components/background/Orb';


/* ================= FONT SETUP ================= */
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

/* ================= METADATA ================= */
export const metadata: Metadata = {
  title: "Wesley Taruna",
  description:
    "Blockchain systems, product design, and business analysis portfolio by Wesley Taruna.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

/* ================= ROOT LAYOUT ================= */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
    
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {/* Content wrapper stays above blockchain background */}
        <div className="relative z-10 min-h-screen overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  )
}
