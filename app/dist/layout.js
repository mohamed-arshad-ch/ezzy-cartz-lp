"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
var utils_1 = require("@/lib/utils");
var providers_1 = require("./providers");
require("./globals.css");
var poppins = google_1.Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-poppins"
});
exports.metadata = {
    metadataBase: new URL('https://ezzycartz.com'),
    title: {
        "default": 'Ezzy Cartz - Build Ecommerce Stores With Ease',
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
                url: '/android-icon-192x192.png'
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                url: '/favicon-32x32.png'
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '96x96',
                url: '/favicon-96x96.png'
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                url: '/favicon-16x16.png'
            },
        ]
    },
    manifest: '/manifest.json',
    openGraph: {
        title: 'Ezzy Cartz - Build Ecommerce Stores With Ease',
        description: 'Create, deploy, and scale your online store without any coding knowledge.',
        url: 'https://ezzycartz.com',
        siteName: 'Ezzy Cartz',
        images: [
            {
                url: 'https://ezzycartz.com/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Ezzy Cartz Platform Preview'
            },
        ],
        locale: 'en_US',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ezzy Cartz - Build Ecommerce Stores With Ease',
        description: 'Create, deploy, and scale your online store without any coding knowledge.',
        images: ['https://ezzycartz.com/og-image.png']
    },
    other: {
        'msapplication-TileColor': '#ffffff',
        'msapplication-TileImage': '/ms-icon-144x144.png',
        'theme-color': '#ffffff'
    }
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en", suppressHydrationWarning: true },
        React.createElement("head", null,
            React.createElement("meta", { name: "theme-color", content: "#ffffff" }),
            React.createElement("meta", { name: "msapplication-TileColor", content: "#da532c" })),
        React.createElement("body", { className: utils_1.cn("min-h-screen bg-background font-sans antialiased", poppins.variable) },
            React.createElement(providers_1.Providers, null, children))));
}
exports["default"] = RootLayout;
require("./globals.css");
