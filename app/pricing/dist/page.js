"use client";
"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion");
var site_header_1 = require("../components/site-header");
var footer_1 = require("../components/footer");
var button_1 = require("@/components/ui/button");
var separator_1 = require("@/components/ui/separator");
var pricing_card_1 = require("../components/pricing-card");
var whatsapp_button_1 = require("../components/whatsapp-button");
function PricingPage() {
    return (React.createElement("div", { className: "relative flex min-h-screen flex-col" },
        React.createElement(site_header_1.SiteHeader, null),
        React.createElement("main", { className: "flex-1 pt-16 px-6" },
            React.createElement("section", { className: "container px-6 py-12 md:py-24 lg:py-32" },
                React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center" },
                    React.createElement("h1", { className: "text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl lg:leading-[1.1]" }, "Choose Your Plan"),
                    React.createElement("p", { className: "max-w-[85%] leading-normal text-muted-foreground sm:text-xl sm:leading-8" }, "Select the perfect plan to grow your ecommerce business with Ezzy Cartz"))),
            React.createElement(separator_1.Separator, { className: "my-12" }),
            React.createElement("section", { className: "container py-12 md:py-24 lg:py-32" },
                React.createElement("div", { className: "grid  md:grid-cols-3 mx-auto  max-w-[88rem] flex-col items-center justify-center gap-4 text-center" },
                    React.createElement(pricing_card_1.PricingCard, { title: "Basic", price: 29, description: "Perfect for small businesses just getting started", features: ["Up to 100 products", "Basic analytics", "24/7 support", "Custom domain"], buttonText: "Get Started" }),
                    React.createElement(pricing_card_1.PricingCard, { title: "Advanced", price: 79, description: "Ideal for growing businesses with expanding needs", features: [
                            "Up to 1,000 products",
                            "Advanced analytics",
                            "Priority support",
                            "Custom domain",
                            "Multiple payment gateways",
                            "Abandoned cart recovery",
                        ], buttonText: "Upgrade to Advanced", highlighted: true }),
                    React.createElement(pricing_card_1.PricingCard, { title: "Premium", price: 299, description: "For large-scale operations and custom needs", features: [
                            "Unlimited products",
                            "Advanced analytics with AI insights",
                            "Dedicated account manager",
                            "Custom domain",
                            "Multiple payment gateways",
                            "Advanced marketing tools",
                            "API access",
                        ], buttonText: "Contact Sales" }))),
            React.createElement(separator_1.Separator, { className: "my-12" }),
            React.createElement("section", { className: "container py-12 md:py-24 px-10 lg:py-32" },
                React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, className: "mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center" },
                    React.createElement("h2", { className: "text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl" }, "Ready to get started?"),
                    React.createElement("p", { className: "max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7" }, "Create your first ecommerce store in minutes. No credit card required."),
                    React.createElement(button_1.Button, { size: "lg", className: "mt-4" }, "Start Building Now")))),
        React.createElement(whatsapp_button_1.WhatsAppButton, null),
        React.createElement(footer_1.Footer, null)));
}
exports["default"] = PricingPage;
