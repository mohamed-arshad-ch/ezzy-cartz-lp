"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var site_header_1 = require("../components/site-header");
var footer_1 = require("../components/footer");
var button_1 = require("@/components/ui/button");
var input_1 = require("@/components/ui/input");
var label_1 = require("@/components/ui/label");
var link_1 = require("next/link");
function Register() {
    var _a = react_1.useState(""), name = _a[0], setName = _a[1];
    var _b = react_1.useState(""), email = _b[0], setEmail = _b[1];
    var _c = react_1.useState(""), password = _c[0], setPassword = _c[1];
    var handleSubmit = function (e) {
        e.preventDefault();
        // Handle registration logic here
        console.log("Register with:", name, email, password);
    };
    return (React.createElement("div", { className: "relative flex min-h-screen flex-col" },
        React.createElement(site_header_1.SiteHeader, null),
        React.createElement("main", { className: "flex-1 pt-16 px-6" },
            React.createElement("section", { className: "container flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12" },
                React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "w-full max-w-md space-y-8" },
                    React.createElement("div", { className: "text-center" },
                        React.createElement("h2", { className: "mt-6 text-3xl font-bold tracking-tight" }, "Create a new account"),
                        React.createElement("p", { className: "mt-2 text-sm text-muted-foreground" },
                            "Or",
                            " ",
                            React.createElement(link_1["default"], { href: "/signin", className: "font-medium text-primary hover:underline" }, "sign in to your existing account"))),
                    React.createElement("form", { className: "mt-8 space-y-6", onSubmit: handleSubmit },
                        React.createElement("div", { className: "space-y-4 rounded-md shadow-sm" },
                            React.createElement("div", null,
                                React.createElement(label_1.Label, { htmlFor: "name" }, "Full Name"),
                                React.createElement(input_1.Input, { id: "name", name: "name", type: "text", autoComplete: "name", required: true, value: name, onChange: function (e) { return setName(e.target.value); }, className: "mt-1" })),
                            React.createElement("div", null,
                                React.createElement(label_1.Label, { htmlFor: "email-address" }, "Email address"),
                                React.createElement(input_1.Input, { id: "email-address", name: "email", type: "email", autoComplete: "email", required: true, value: email, onChange: function (e) { return setEmail(e.target.value); }, className: "mt-1" })),
                            React.createElement("div", null,
                                React.createElement(label_1.Label, { htmlFor: "password" }, "Password"),
                                React.createElement(input_1.Input, { id: "password", name: "password", type: "password", autoComplete: "new-password", required: true, value: password, onChange: function (e) { return setPassword(e.target.value); }, className: "mt-1" }))),
                        React.createElement(button_1.Button, { type: "submit", className: "w-full" }, "Register"))))),
        React.createElement(footer_1.Footer, null)));
}
exports["default"] = Register;
