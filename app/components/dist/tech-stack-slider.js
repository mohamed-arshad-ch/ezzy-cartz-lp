"use client";
"use strict";
exports.__esModule = true;
exports.TechStackSlider = void 0;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var button_1 = require("@/components/ui/button");
var techStack = [
    { name: "Next.js", description: "React framework for production-grade applications" },
    { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development" },
    { name: "MongoDB", description: "Flexible NoSQL database for modern applications" },
    { name: "Supabase", description: "Open source Firebase alternative with powerful features" },
];
function TechStackSlider() {
    var _a = react_1.useState(0), currentIndex = _a[0], setCurrentIndex = _a[1];
    var nextSlide = function () {
        setCurrentIndex(function (prevIndex) { return (prevIndex + 1) % techStack.length; });
    };
    var prevSlide = function () {
        setCurrentIndex(function (prevIndex) { return (prevIndex - 1 + techStack.length) % techStack.length; });
    };
    return (React.createElement("div", { className: "relative max-w-2xl mx-auto" },
        React.createElement(framer_motion_1.AnimatePresence, { mode: "wait" },
            React.createElement(framer_motion_1.motion.div, { key: currentIndex, initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 }, transition: { duration: 0.3 }, className: "text-center" },
                React.createElement("h3", { className: "text-2xl font-bold mb-2" }, techStack[currentIndex].name),
                React.createElement("p", { className: "text-muted-foreground" }, techStack[currentIndex].description))),
        React.createElement("div", { className: "flex justify-between mt-8" },
            React.createElement(button_1.Button, { variant: "outline", size: "icon", onClick: prevSlide },
                React.createElement(lucide_react_1.ChevronLeft, { className: "h-4 w-4" })),
            React.createElement(button_1.Button, { variant: "outline", size: "icon", onClick: nextSlide },
                React.createElement(lucide_react_1.ChevronRight, { className: "h-4 w-4" })))));
}
exports.TechStackSlider = TechStackSlider;
