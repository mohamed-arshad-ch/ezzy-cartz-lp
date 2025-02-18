"use client";
"use strict";
exports.__esModule = true;
exports.TeamMemberGrid = void 0;
var image_1 = require("next/image");
var framer_motion_1 = require("framer-motion");
var teamMembers = [
    {
        name: "John Doe",
        role: "CEO & Founder",
        image: "/placeholder.svg?height=200&width=200"
    },
    {
        name: "Jane Smith",
        role: "CTO",
        image: "/placeholder.svg?height=200&width=200"
    },
    {
        name: "Mike Johnson",
        role: "Head of Design",
        image: "/placeholder.svg?height=200&width=200"
    },
    {
        name: "Sarah Brown",
        role: "Head of Marketing",
        image: "/placeholder.svg?height=200&width=200"
    },
];
function TeamMemberGrid() {
    return (React.createElement("div", { className: "mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center grid gap-8 md:grid-cols-2 lg:grid-cols-4" }, teamMembers.map(function (member, index) { return (React.createElement(framer_motion_1.motion.div, { key: member.name, initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: index * 0.1 }, className: "flex flex-col items-center text-center" },
        React.createElement(image_1["default"], { src: member.image || "/placeholder.svg", alt: member.name, width: 200, height: 200, className: "rounded-full mb-4" }),
        React.createElement("h3", { className: "text-xl font-semibold" }, member.name),
        React.createElement("p", { className: "text-muted-foreground" }, member.role))); })));
}
exports.TeamMemberGrid = TeamMemberGrid;
