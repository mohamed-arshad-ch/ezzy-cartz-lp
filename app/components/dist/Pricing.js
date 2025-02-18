"use strict";
exports.__esModule = true;
var lucide_react_1 = require("lucide-react");
var plans = [
    {
        name: "Basic",
        price: "$9",
        features: ["1 Bot", "100 Users", "Basic Commands", "Email Support"]
    },
    {
        name: "Pro",
        price: "$29",
        features: ["5 Bots", "Unlimited Users", "Advanced Commands", "Priority Support"]
    },
    {
        name: "Enterprise",
        price: "Custom",
        features: ["Unlimited Bots", "Unlimited Users", "Custom Features", "Dedicated Support"]
    },
];
function Pricing() {
    return (React.createElement("section", { id: "pricing", className: "py-20 bg-white" },
        React.createElement("div", { className: "container mx-auto px-4" },
            React.createElement("h2", { className: "text-4xl font-bold text-center mb-12" }, "Simple, Transparent Pricing"),
            React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8" }, plans.map(function (plan, index) { return (React.createElement("div", { key: index, className: "bg-gray-100 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300" },
                React.createElement("h3", { className: "text-2xl font-bold mb-4" }, plan.name),
                React.createElement("p", { className: "text-4xl font-bold mb-6" },
                    plan.price,
                    React.createElement("span", { className: "text-lg font-normal" }, "/mo")),
                React.createElement("ul", { className: "mb-8" }, plan.features.map(function (feature, i) { return (React.createElement("li", { key: i, className: "flex items-center mb-2" },
                    React.createElement(lucide_react_1.Check, { className: "w-5 h-5 mr-2 text-green-500" }),
                    React.createElement("span", null, feature))); })),
                React.createElement("button", { className: "w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-2 px-4 rounded transition duration-300" }, "Choose Plan"))); })))));
}
exports["default"] = Pricing;
