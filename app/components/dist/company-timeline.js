"use client";
"use strict";
exports.__esModule = true;
exports.CompanyTimeline = void 0;
var framer_motion_1 = require("framer-motion");
var milestones = [
    {
        year: 2018,
        title: "Ezzy Cartz Founded",
        description: "Our journey began with a vision to simplify ecommerce for everyone."
    },
    {
        year: 2019,
        title: "First 1,000 Customers",
        description: "We celebrated our first major milestone of 1,000 active stores."
    },
    {
        year: 2020,
        title: "AI-Powered Features Launch",
        description: "Introduced cutting-edge AI capabilities to enhance user experience."
    },
    {
        year: 2021,
        title: "Global Expansion",
        description: "Expanded our services to support businesses in over 50 countries."
    },
    {
        year: 2022,
        title: "1 Million Transactions",
        description: "Proudly facilitated over 1 million successful transactions for our users."
    },
];
function CompanyTimeline() {
    return (React.createElement("div", { className: "relative mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center" },
        React.createElement("div", { className: "absolute left-1/2 h-full w-0.5 bg-border transform -translate-x-1/2" }),
        milestones.map(function (milestone, index) { return (React.createElement(framer_motion_1.motion.div, { key: milestone.year, initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: index * 0.1 }, className: "relative mb-8 " + (index % 2 === 0 ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8") + " md:w-1/2" },
            React.createElement("div", { className: "flex items-center mb-2" },
                React.createElement("div", { className: "bg-primary text-primary-foreground rounded-full p-2 z-10" }, milestone.year),
                React.createElement("div", { className: "flex-grow border-t border-border" })),
            React.createElement("div", { className: "bg-card rounded-lg p-4 shadow-sm" },
                React.createElement("h3", { className: "text-lg font-semibold mb-2" }, milestone.title),
                React.createElement("p", { className: "text-muted-foreground" }, milestone.description)))); })));
}
exports.CompanyTimeline = CompanyTimeline;
