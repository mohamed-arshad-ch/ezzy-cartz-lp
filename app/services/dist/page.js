"use client";
"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion");
var site_header_1 = require("../components/site-header");
var footer_1 = require("../components/footer");
var button_1 = require("@/components/ui/button");
var separator_1 = require("@/components/ui/separator");
var lucide_react_1 = require("lucide-react");
var service_card_1 = require("../components/service-card");
var portfolio_grid_1 = require("../components/portfolio-grid");
var tech_icons_1 = require("../components/tech-icons");
var whatsapp_button_1 = require("../components/whatsapp-button");
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
function ServicesPage() {
    return (React.createElement("div", { className: "relative flex min-h-screen flex-col" },
        React.createElement(site_header_1.SiteHeader, null),
        React.createElement("main", { className: "flex-1 pt-16 px-6" },
            React.createElement("section", { className: "container mx-auto px-6 flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center py-12 md:py-24 lg:py-32" },
                React.createElement("h2", { className: "text-3xl font-bold text-center mb-12" }, "Ecommerce Solutions"),
                React.createElement("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3" },
                    React.createElement(service_card_1.ServiceCard, { icon: lucide_react_1.ShoppingCart, title: "Custom Ecommerce Development", description: "Tailored online stores built to your specific needs and brand identity." }),
                    React.createElement(service_card_1.ServiceCard, { icon: lucide_react_1.Search, title: "SEO Optimization", description: "Boost your visibility and attract more customers with our expert SEO services." }),
                    React.createElement(service_card_1.ServiceCard, { icon: lucide_react_1.BarChart, title: "Analytics and Reporting", description: "Gain valuable insights into your store's performance with advanced analytics." }),
                    React.createElement(service_card_1.ServiceCard, { icon: lucide_react_1.Code, title: "API Integration", description: "Seamlessly connect your store with third-party services and platforms." }),
                    React.createElement(service_card_1.ServiceCard, { icon: lucide_react_1.Zap, title: "Performance Optimization", description: "Enhance your store's speed and efficiency for a better user experience." }),
                    React.createElement(service_card_1.ServiceCard, { icon: lucide_react_1.Shield, title: "Security Solutions", description: "Protect your store and customers with robust security measures." }))),
            React.createElement(separator_1.Separator, { className: "my-12" }),
            React.createElement("section", { className: "container  px-6 space-y-12 py-12 md:py-24 lg:py-32" },
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
            React.createElement("section", { className: "container px-6 py-12 md:py-24 lg:py-32" },
                React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, className: "mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center" },
                    React.createElement("h2", { className: "text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl" }, "Our Portfolio"),
                    React.createElement("p", { className: "max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7" }, "Let's create an exceptional ecommerce experience together.")),
                React.createElement(portfolio_grid_1.PortfolioGrid, null)),
            React.createElement(separator_1.Separator, { className: "my-12" }),
            React.createElement("section", { className: "container py-12 md:py-24 px-10 lg:py-32" },
                React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, className: "mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center" },
                    React.createElement("h2", { className: "text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl" }, "Ready to get started?"),
                    React.createElement("p", { className: "max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7" }, "Create your first ecommerce store in minutes. No credit card required."),
                    React.createElement(button_1.Button, { size: "lg", className: "mt-4" }, "Start Building Now")))),
        React.createElement(footer_1.Footer, null),
        React.createElement(whatsapp_button_1.WhatsAppButton, null)));
}
exports["default"] = ServicesPage;
