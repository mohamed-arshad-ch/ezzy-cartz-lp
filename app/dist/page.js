"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var site_header_1 = require("./components/site-header");
var button_1 = require("@/components/ui/button");
var separator_1 = require("@/components/ui/separator");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var tech_icons_1 = require("./components/tech-icons");
var lucide_react_2 = require("lucide-react");
var industry_card_1 = require("./components/industry-card");
var lucide_react_3 = require("lucide-react");
var footer_1 = require("./components/footer");
var whatsapp_button_1 = require("./components/whatsapp-button");
function Home() {
    var schemaData = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Ezzy Cartz',
        applicationCategory: 'ECommerce Platform',
        offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'USD',
            lowPrice: '29',
            highPrice: '299',
            offerCount: '3'
        },
        description: 'Create, deploy, and scale your online store without any coding knowledge.',
        operatingSystem: 'Web-based',
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '1250'
        }
    };
    return (React.createElement("div", { className: "relative flex min-h-screen flex-col" },
        React.createElement("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(schemaData) } }),
        React.createElement("header", null,
            React.createElement(site_header_1.SiteHeader, null)),
        React.createElement("main", { className: "flex-1 pt-16 px-6", role: "main" },
            React.createElement("section", { className: "flex min-h-screen flex-col items-center justify-center space-y-10 py-24", "aria-label": "Hero section" },
                React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "container flex flex-col items-center justify-center gap-6 text-center" },
                    React.createElement(framer_motion_1.motion.a, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.3 }, href: "#", className: "inline-flex items-center rounded-full bg-muted px-4 py-1.5 text-sm font-medium" },
                        "\uD83C\uDF89 ",
                        React.createElement(separator_1.Separator, { className: "mx-2 h-4", orientation: "vertical" }),
                        " Introducing Ezzy Cartz"),
                    React.createElement(framer_motion_1.motion.h1, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.4 }, className: "text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl lg:leading-[1.1]" },
                        "Build Ecommerce Stores",
                        React.createElement("br", null),
                        "With Ease"),
                    React.createElement(framer_motion_1.motion.span, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.5 }, className: "max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl" }, "Create, deploy, and scale your online store without any coding knowledge."),
                    React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.6 }, className: "flex gap-4" },
                        React.createElement(button_1.Button, { size: "lg", className: "h-12 px-8" }, "Start Building"),
                        React.createElement(button_1.Button, { size: "lg", variant: "outline", className: "h-12 px-8" }, "View Demo")))),
            React.createElement(separator_1.Separator, { className: "my-12" }),
            React.createElement("section", { className: "container space-y-12 px-6 py-12 md:py-24 lg:py-32" },
                React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, className: "mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center" },
                    React.createElement("h2", { className: "text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl" }, "Powerful Technologies"),
                    React.createElement("p", { className: "max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7" }, "Ezzy Cartz leverages cutting-edge technologies to provide a robust and scalable platform for ecommerce store creation.")),
                React.createElement("div", { className: "mx-auto grid gap-8 sm:max-w-3xl sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-2" }, features.map(function (feature, index) { return (React.createElement(framer_motion_1.motion.div, { key: index, initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: index * 0.1 }, whileHover: {
                        scale: 1.05,
                        transition: { duration: 0.3 }
                    }, className: "relative overflow-hidden rounded-lg border bg-background p-2" },
                    React.createElement("div", { className: "flex h-[180px] flex-col justify-between rounded-md p-6" },
                        React.createElement(feature.icon, { className: "h-12 w-12 text-primary" }),
                        React.createElement("div", { className: "space-y-2" },
                            React.createElement("h3", { className: "font-bold" }, feature.name),
                            React.createElement("p", { className: "text-sm text-muted-foreground" }, feature.description))))); }))),
            React.createElement(separator_1.Separator, { className: "my-12" }),
            React.createElement("section", { className: "container  px-6 space-y-12 py-12 md:py-24 lg:py-32" },
                React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, className: "mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center" },
                    React.createElement("h2", { className: "text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl" }, "Industries We Serve"),
                    React.createElement("p", { className: "max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7" }, "Ezzy Cartz caters to a wide range of industries, providing tailored ecommerce solutions for various sectors.")),
                React.createElement("div", { className: "mx-auto grid gap-8 sm:max-w-3xl sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-3" }, industries.map(function (industry, index) { return (React.createElement(framer_motion_1.motion.div, { key: index, initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: index * 0.1 } },
                    React.createElement(industry_card_1.IndustryCard, __assign({}, industry)))); }))),
            React.createElement(separator_1.Separator, { className: "my-12" }),
            React.createElement("section", { className: "container px-6 space-y-12 py-12 md:py-24 lg:py-32" },
                React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, className: "mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center" },
                    React.createElement("h2", { className: "text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl" }, "How It Works"),
                    React.createElement("p", { className: "max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7" }, "Get your ecommerce store up and running in just a few simple steps.")),
                React.createElement("div", { className: "mx-auto grid gap-8 sm:max-w-3xl sm:grid-cols-2 lg:max-w-6xl lg:grid-cols-4" }, steps.map(function (step, index) { return (React.createElement(framer_motion_1.motion.div, { key: index, initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: index * 0.1 }, className: "relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg hover:-translate-y-1" },
                    React.createElement("div", { className: "flex h-full flex-col items-center justify-between rounded-md p-6 text-center" },
                        React.createElement("div", { className: "mb-4" },
                            React.createElement(step.icon, { className: "h-16 w-16 text-primary" })),
                        React.createElement("div", { className: "space-y-2" },
                            React.createElement("h3", { className: "text-xl font-bold" }, step.name),
                            React.createElement("p", { className: "text-sm text-muted-foreground" }, step.description))))); }))),
            React.createElement(separator_1.Separator, { className: "my-12" }),
            React.createElement("section", { id: "pricing", className: "container px-6 py-12 md:py-24 lg:py-32" },
                React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, className: "mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center" },
                    React.createElement("h2", { className: "text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl" }, "Simple, transparent pricing"),
                    React.createElement("p", { className: "max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7" }, "Choose the plan that's right for you and start building your ecommerce empire today.")),
                React.createElement("div", { className: "mx-auto grid gap-8 sm:max-w-3xl sm:grid-cols-3 lg:max-w-6xl lg:grid-cols-3 pt-10" }, pricingPlans.map(function (plan, index) { return (React.createElement(framer_motion_1.motion.div, { key: index, initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: index * 0.1 }, className: "relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg hover:-translate-y-1" },
                    React.createElement("div", { className: "p-6" },
                        React.createElement("h3", { className: "text-2xl font-bold" }, plan.name),
                        React.createElement("div", { className: "mt-4 flex items-baseline text-3xl font-bold" },
                            "$",
                            plan.price,
                            React.createElement("span", { className: "ml-1 text-xl font-normal text-muted-foreground" }, "/month")),
                        React.createElement("p", { className: "mt-4 text-muted-foreground" }, plan.description)),
                    React.createElement("div", { className: "flex flex-1 flex-col justify-between p-6" },
                        React.createElement("ul", { className: "space-y-4" }, plan.features.map(function (feature, featureIndex) { return (React.createElement("li", { key: featureIndex, className: "flex items-start" },
                            React.createElement(lucide_react_1.Check, { className: "mr-2 h-5 w-5 text-primary" }),
                            React.createElement("span", null, feature))); })),
                        React.createElement(button_1.Button, { className: "mt-8 w-full" }, plan.buttonText)))); }))),
            React.createElement(separator_1.Separator, { className: "my-12" }),
            React.createElement("section", { className: "container py-12 md:py-24 px-10 lg:py-32" },
                React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, className: "mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center" },
                    React.createElement("h2", { className: "text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl" }, "Ready to get started?"),
                    React.createElement("p", { className: "max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7" }, "Create your first ecommerce store in minutes. No credit card required."),
                    React.createElement(button_1.Button, { size: "lg", className: "mt-4" }, "Start Building Now")))),
        React.createElement(whatsapp_button_1.WhatsAppButton, null),
        React.createElement(footer_1.Footer, null)));
}
exports["default"] = Home;
var features = [
    {
        name: "Next.js",
        description: "React framework for building fast and scalable web applications.",
        icon: tech_icons_1.NextjsIcon
    },
    {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework for rapid UI development.",
        icon: tech_icons_1.TailwindIcon
    },
    {
        name: "MongoDB",
        description: "Flexible NoSQL database for modern applications.",
        icon: tech_icons_1.MongoDBIcon
    },
    {
        name: "Supabase",
        description: "Open source Firebase alternative with powerful features.",
        icon: tech_icons_1.SupabaseIcon
    },
];
var industries = [
    {
        icon: lucide_react_3.FootprintsIcon,
        title: "Footwear",
        description: "From sneakers to formal shoes, we've got your feet covered."
    },
    {
        icon: lucide_react_3.Palette,
        title: "Cosmetics",
        description: "Showcase your beauty products with stunning visuals."
    },
    {
        icon: lucide_react_3.ShirtIcon,
        title: "Fashion",
        description: "Create a trendsetting online boutique for all styles."
    },
    {
        icon: lucide_react_3.Utensils,
        title: "Food & Beverage",
        description: "Serve up delicious ecommerce solutions for culinary businesses."
    },
    {
        icon: lucide_react_3.Dumbbell,
        title: "Fitness",
        description: "Energize your fitness equipment and supplement sales."
    },
    {
        icon: lucide_react_3.Laptop,
        title: "Electronics",
        description: "Power up your tech store with our ecommerce platform."
    },
];
var steps = [
    {
        name: "Choose Template",
        description: "Select from our pre-built store templates or start from scratch.",
        icon: lucide_react_2.Store
    },
    {
        name: "Customize",
        description: "Tailor your store's design and functionality to your brand.",
        icon: lucide_react_2.Code
    },
    {
        name: "Add Products",
        description: "Easily upload and manage your product catalog.",
        icon: lucide_react_2.Rocket
    },
    {
        name: "Launch",
        description: "Go live with your store and start selling to customers.",
        icon: lucide_react_2.Zap
    },
];
var pricingPlans = [
    {
        name: "Starter",
        price: 29,
        description: "Perfect for small businesses just getting started.",
        features: ["Up to 100 products", "Basic analytics", "24/7 support", "Custom domain"],
        buttonText: "Get Started"
    },
    {
        name: "Growth",
        price: 79,
        description: "Ideal for growing businesses with expanding needs.",
        features: [
            "Up to 1,000 products",
            "Advanced analytics",
            "Priority support",
            "Custom domain",
            "Multiple payment gateways",
            "Abandoned cart recovery",
        ],
        buttonText: "Upgrade to Growth"
    },
    {
        name: "Enterprise",
        price: 299,
        description: "For large-scale operations and custom needs.",
        features: [
            "Unlimited products",
            "Advanced analytics with AI insights",
            "Dedicated account manager",
            "Custom domain",
            "Multiple payment gateways",
            "Advanced marketing tools",
            "API access",
        ],
        buttonText: "Contact Sales"
    },
];
var featureComparison = [
    { name: "Number of Products", availability: [true, true, true] },
    { name: "Custom Domain", availability: [true, true, true] },
    { name: "24/7 Support", availability: [true, true, true] },
    { name: "Advanced Analytics", availability: [false, true, true] },
    { name: "Multiple Payment Gateways", availability: [false, true, true] },
    { name: "Abandoned Cart Recovery", availability: [false, true, true] },
    { name: "API Access", availability: [false, false, true] },
    { name: "Dedicated Account Manager", availability: [false, false, true] },
];
