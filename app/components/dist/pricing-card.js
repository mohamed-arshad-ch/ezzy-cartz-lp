"use client";
"use strict";
exports.__esModule = true;
exports.PricingCard = void 0;
var framer_motion_1 = require("framer-motion");
var button_1 = require("@/components/ui/button");
var lucide_react_1 = require("lucide-react");
function PricingCard(_a) {
    var title = _a.title, price = _a.price, description = _a.description, features = _a.features, buttonText = _a.buttonText, _b = _a.highlighted, highlighted = _b === void 0 ? false : _b;
    return (React.createElement(framer_motion_1.motion.div, { whileHover: { scale: 1.05 }, className: "flex flex-col overflow-hidden rounded-lg border " + (highlighted ? "border-primary" : "border-border") + " bg-background p-6" },
        React.createElement("div", { className: "mb-4" },
            React.createElement("h3", { className: "text-2xl font-bold" }, title),
            React.createElement("div", { className: "mt-4 flex items-baseline text-3xl font-bold" },
                "$",
                price,
                React.createElement("span", { className: "ml-1 text-xl font-normal text-muted-foreground" }, "/month"))),
        React.createElement("p", { className: "mb-6 text-muted-foreground" }, description),
        React.createElement("ul", { className: "mb-6 space-y-4 flex-grow" }, features.map(function (feature, index) { return (React.createElement("li", { key: index, className: "flex items-center" },
            React.createElement(lucide_react_1.Check, { className: "mr-2 h-5 w-5 text-primary" }),
            React.createElement("span", null, feature))); })),
        React.createElement(button_1.Button, { className: "w-full " + (highlighted ? "bg-primary text-primary-foreground" : ""), variant: highlighted ? "default" : "outline" }, buttonText)));
}
exports.PricingCard = PricingCard;
