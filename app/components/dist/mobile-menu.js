"use client";
"use strict";
exports.__esModule = true;
exports.MobileMenu = void 0;
var framer_motion_1 = require("framer-motion");
var link_1 = require("next/link");
var button_1 = require("@/components/ui/button");
var lucide_react_1 = require("lucide-react");
function MobileMenu(_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose;
    var menuItems = [
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/pricing", label: "Pricing" },
    ];
    return (React.createElement(framer_motion_1.AnimatePresence, null, isOpen && (React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.2 }, className: "fixed px-6 inset-0 z-50 bg-background" },
        React.createElement("div", { className: "container h-full flex flex-col" },
            React.createElement("div", { className: "flex justify-between items-center py-4" },
                React.createElement(link_1["default"], { href: "/", className: "text-2xl font-bold", onClick: onClose }, "Ezzy Cartz"),
                React.createElement(button_1.Button, { variant: "ghost", size: "icon", onClick: onClose },
                    React.createElement(lucide_react_1.X, { className: "h-6 w-6" }))),
            React.createElement("nav", { className: "flex pt-10 flex-col bg-black items-center justify-center flex-grow" },
                React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1, duration: 0.3 }, className: "space-y-6 text-center" }, menuItems.map(function (item, index) { return (React.createElement(framer_motion_1.motion.div, { key: item.href, initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 * (index + 1), duration: 0.3 } },
                    React.createElement(link_1["default"], { href: item.href, className: "text-2xl font-semibold hover:text-primary transition-colors", onClick: onClose }, item.label))); })),
                React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.4, duration: 0.3 }, className: "mt-12 space-y-4 w-full max-w-xs" },
                    React.createElement(button_1.Button, { variant: "outline", size: "lg", asChild: true, className: "w-full" },
                        React.createElement(link_1["default"], { href: "/signin", onClick: onClose }, "Log in")),
                    React.createElement(button_1.Button, { size: "lg", asChild: true, className: "w-full" },
                        React.createElement(link_1["default"], { href: "/register", onClick: onClose }, "Get Started")))))))));
}
exports.MobileMenu = MobileMenu;
