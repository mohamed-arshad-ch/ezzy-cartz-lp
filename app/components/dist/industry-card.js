"use client";
"use strict";
exports.__esModule = true;
exports.IndustryCard = void 0;
var framer_motion_1 = require("framer-motion");
function IndustryCard(_a) {
    var Icon = _a.icon, title = _a.title, description = _a.description;
    return (React.createElement(framer_motion_1.motion.div, { whileHover: { scale: 1.05 }, className: "flex flex-col items-center p-6 space-y-4 rounded-lg border bg-card text-card-foreground shadow-sm" },
        React.createElement("div", { className: "p-2 rounded-full bg-primary text-primary-foreground" },
            React.createElement(Icon, { className: "h-6 w-6" })),
        React.createElement("h3", { className: "text-lg font-semibold" }, title),
        React.createElement("p", { className: "text-sm text-muted-foreground text-center" }, description)));
}
exports.IndustryCard = IndustryCard;
