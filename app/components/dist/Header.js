"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
function Header() {
    return (React.createElement("header", { className: "bg-gray-900 text-white py-4" },
        React.createElement("div", { className: "container mx-auto px-4 flex justify-between items-center" },
            React.createElement(link_1["default"], { href: "/", className: "text-2xl font-bold" }, "Quinx"),
            React.createElement("nav", null,
                React.createElement("ul", { className: "flex space-x-6" },
                    React.createElement("li", null,
                        React.createElement(link_1["default"], { href: "#features", className: "hover:text-sky-400 transition-colors" }, "Features")),
                    React.createElement("li", null,
                        React.createElement(link_1["default"], { href: "#pricing", className: "hover:text-sky-400 transition-colors" }, "Pricing")),
                    React.createElement("li", null,
                        React.createElement(link_1["default"], { href: "#about", className: "hover:text-sky-400 transition-colors" }, "About")),
                    React.createElement("li", null,
                        React.createElement(link_1["default"], { href: "#contact", className: "hover:text-sky-400 transition-colors" }, "Contact")))))));
}
exports["default"] = Header;
