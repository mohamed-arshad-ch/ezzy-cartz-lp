"use client";
"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion");
var site_header_1 = require("../components/site-header");
var footer_1 = require("../components/footer");
var button_1 = require("@/components/ui/button");
var separator_1 = require("@/components/ui/separator");
var team_member_grid_1 = require("../components/team-member-grid");
var company_timeline_1 = require("../components/company-timeline");
var why_choose_us_card_1 = require("../components/why-choose-us-card");
var lucide_react_1 = require("lucide-react");
var whatsapp_button_1 = require("../components/whatsapp-button");
function AboutPage() {
    return (React.createElement("div", { className: "relative flex min-h-screen flex-col" },
        React.createElement(site_header_1.SiteHeader, null),
        React.createElement("main", { className: "flex-1 pt-16" },
            React.createElement("section", { className: "container px-6  py-12 md:py-24 lg:py-32" },
                React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center" },
                    React.createElement("h2", { className: "text-3xl font-bold leading-tight tracking-tighter md:text-5xl" }, "Our Mission"),
                    React.createElement("p", { className: "max-w-[85%] leading-normal text-muted-foreground sm:text-xl sm:leading-8" }, "At Ezzy Cartz, we're on a mission to democratize ecommerce by providing powerful, easy-to-use tools that enable businesses of all sizes to succeed in the digital marketplace. We believe that technology should empower, not complicate, and we're committed to making online selling accessible to everyone."))),
            React.createElement(separator_1.Separator, { className: "my-12" }),
            React.createElement("section", { className: "container px-6 py-12 md:py-24 lg:py-32" },
                React.createElement("h2", { className: "text-3xl font-bold text-center mb-12" }, "Meet Our Team"),
                React.createElement(team_member_grid_1.TeamMemberGrid, null)),
            React.createElement(separator_1.Separator, { className: "my-12" }),
            React.createElement("section", { className: "container px-6 py-12 md:py-24 lg:py-32" },
                React.createElement("h2", { className: "text-3xl font-bold text-center mb-12" }, "Our Journey"),
                React.createElement(company_timeline_1.CompanyTimeline, null)),
            React.createElement(separator_1.Separator, { className: "my-12" }),
            React.createElement("section", { className: "container px-6 py-12 md:py-24 lg:py-32" },
                React.createElement("h2", { className: "text-3xl font-bold text-center mb-12" }, "Why Choose Ezzy Cartz"),
                React.createElement("div", { className: "grid  md:grid-cols-2 lg:grid-cols-4 mx-auto  max-w-[68rem] flex-col items-center justify-center gap-4 text-center" },
                    React.createElement(why_choose_us_card_1.WhyChooseUsCard, { icon: lucide_react_1.Rocket, title: "Fast Setup", description: "Launch your online store in minutes, not days." }),
                    React.createElement(why_choose_us_card_1.WhyChooseUsCard, { icon: lucide_react_1.Shield, title: "Secure Platform", description: "Bank-grade security to protect your business and customers." }),
                    React.createElement(why_choose_us_card_1.WhyChooseUsCard, { icon: lucide_react_1.Zap, title: "Powerful Features", description: "Everything you need to grow your online business." }),
                    React.createElement(why_choose_us_card_1.WhyChooseUsCard, { icon: lucide_react_1.Users, title: "24/7 Support", description: "Our expert team is always here to help you succeed." }))),
            React.createElement(separator_1.Separator, { className: "my-12" }),
            React.createElement("section", { className: "container py-12 md:py-24 px-10 lg:py-32" },
                React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, className: "mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center" },
                    React.createElement("h2", { className: "text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl" }, "Ready to get started?"),
                    React.createElement("p", { className: "max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7" }, "Create your first ecommerce store in minutes. No credit card required."),
                    React.createElement(button_1.Button, { size: "lg", className: "mt-4" }, "Start Building Now")))),
        React.createElement(footer_1.Footer, null),
        React.createElement(whatsapp_button_1.WhatsAppButton, null)));
}
exports["default"] = AboutPage;
