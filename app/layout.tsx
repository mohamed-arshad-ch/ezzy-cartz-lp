import { Poppins } from "next/font/google";
import { Metadata } from 'next'

import { cn } from "@/lib/utils"
import { Providers } from "./providers"
import "./globals.css"
import type React from "react" // Import React

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ezzycartz.com'), // Replace with your domain
  title: {
    default: 'Ezzy Cartz - Build Ecommerce Stores With Ease',
    template: '%s | Ezzy Cartz'
  },
  description: 'Create, deploy, and scale your online store without any coding knowledge. Powerful ecommerce platform with Next.js, Tailwind CSS, MongoDB, and Supabase.',
  keywords: 'ecommerce platform, online store builder, ecommerce solution, digital storefront, website builder, online shop creator, ecommerce software, retail platform',
  icons: {
    icon: '/favicon.ico',
    apple: [
      { url: '/apple-icon-57x57.png', sizes: '57x57' },
      { url: '/apple-icon-60x60.png', sizes: '60x60' },
      { url: '/apple-icon-72x72.png', sizes: '72x72' },
      { url: '/apple-icon-76x76.png', sizes: '76x76' },
      { url: '/apple-icon-114x114.png', sizes: '114x114' },
      { url: '/apple-icon-120x120.png', sizes: '120x120' },
      { url: '/apple-icon-144x144.png', sizes: '144x144' },
      { url: '/apple-icon-152x152.png', sizes: '152x152' },
      { url: '/apple-icon-180x180.png', sizes: '180x180' },
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/android-icon-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        url: '/favicon-96x96.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Ezzy Cartz - Build Ecommerce Stores With Ease',
    description: 'Create, deploy, and scale your online store without any coding knowledge.',
    url: 'https://www.ezzycartz.com',
    siteName: 'Ezzy Cartz',
    images: [
      {
        url: 'https://www.ezzycartz.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ezzy Cartz Platform Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ezzy Cartz - Build Ecommerce Stores With Ease',
    description: 'Create, deploy, and scale your online store without any coding knowledge.',
    images: ['https://www.ezzycartz.com/og-image.png'],
  },
  other: {
    'msapplication-TileColor': '#ffffff',
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'theme-color': '#ffffff',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#da532c" />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", poppins.variable)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

import './globals.css'
