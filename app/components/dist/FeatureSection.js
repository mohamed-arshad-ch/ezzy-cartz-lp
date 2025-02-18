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
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var features = [
    { icon: lucide_react_1.Bot, title: "Easy Bot Creation", description: "Build complex bots with a simple interface" },
    { icon: lucide_react_1.Zap, title: "Lightning Fast", description: "Deploy your bots in seconds, not hours" },
    { icon: lucide_react_1.Shield, title: "Secure & Reliable", description: "Bank-grade security for your Discord community" },
    { icon: lucide_react_1.Sparkles, title: "AI-Powered", description: "Leverage cutting-edge AI for smarter bots" },
    { icon: lucide_react_1.Cpu, title: "Advanced Automation", description: "Automate tasks with powerful workflows" },
    { icon: lucide_react_1.Globe, title: "Global Scaling", description: "Scale your bots to millions of users effortlessly" },
];
function FeatureSection() {
    return (React.createElement(framer_motion_1.motion.section, { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 }, className: "mt-24" },
        React.createElement("h2", { className: "text-4xl font-bold text-center mb-12" }, "Powerful Features"),
        React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" }, features.map(function (feature, index) { return (React.createElement(framer_motion_1.motion.div, { key: index, initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: index * 0.1 + 1.2 } },
            React.createElement(FeatureCard, __assign({}, feature)))); }))));
}
exports["default"] = FeatureSection;
function FeatureCard(_a) {
    var Icon = _a.icon, title = _a.title, description = _a.description;
    return (React.createElement(framer_motion_1.motion.div, { whileHover: { scale: 1.05, rotateY: 5 }, whileTap: { scale: 0.95 }, className: "relative overflow-hidden rounded-xl bg-gradient-to-br from-sky-500/10 to-blue-500/10 p-px group" },
        React.createElement("div", { className: "relative z-10 bg-gray-900 p-8 rounded-xl h-full" },
            React.createElement("div", { className: "mb-4 text-sky-400" },
                React.createElement(Icon, { className: "w-8 h-8" })),
            React.createElement("h3", { className: "text-xl font-semibold mb-2" }, title),
            React.createElement("p", { className: "text-gray-400" }, description)),
        React.createElement("div", { className: "absolute inset-0 bg-gradient-to-br from-sky-500 to-blue-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 ease-in-out" }),
        React.createElement("div", { className: "absolute inset-0 backdrop-blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out" })));
}
