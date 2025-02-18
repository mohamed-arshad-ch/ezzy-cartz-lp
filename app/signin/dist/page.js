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
function SignIn() {
    var _a = react_1.useState(""), email = _a[0], setEmail = _a[1];
    var _b = react_1.useState(""), password = _b[0], setPassword = _b[1];
    var handleSubmit = function (e) {
        e.preventDefault();
        // Handle sign in logic here
        console.log("Sign in with:", email, password);
    };
    return (React.createElement("div", { className: "relative flex min-h-screen flex-col" },
        React.createElement(site_header_1.SiteHeader, null),
        React.createElement("main", { className: "flex-1 pt-16 px-6" },
            React.createElement("section", { className: "container px-8 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12" },
                React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "w-full max-w-md space-y-8" },
                    React.createElement("div", { className: "text-center" },
                        React.createElement("h2", { className: "mt-6 text-3xl font-bold tracking-tight" }, "Sign in to your account"),
                        React.createElement("p", { className: "mt-2 text-sm text-muted-foreground" },
                            "Or",
                            " ",
                            React.createElement(link_1["default"], { href: "/register", className: "font-medium text-primary hover:underline" }, "create a new account"))),
                    React.createElement("form", { className: "mt-8 space-y-6", onSubmit: handleSubmit },
                        React.createElement("div", { className: "space-y-4 rounded-md shadow-sm" },
                            React.createElement("div", null,
                                React.createElement(label_1.Label, { htmlFor: "email-address" }, "Email address"),
                                React.createElement(input_1.Input, { id: "email-address", name: "email", type: "email", autoComplete: "email", required: true, value: email, onChange: function (e) { return setEmail(e.target.value); }, className: "mt-1" })),
                            React.createElement("div", null,
                                React.createElement(label_1.Label, { htmlFor: "password" }, "Password"),
                                React.createElement(input_1.Input, { id: "password", name: "password", type: "password", autoComplete: "current-password", required: true, value: password, onChange: function (e) { return setPassword(e.target.value); }, className: "mt-1" }))),
                        React.createElement("div", { className: "flex items-center justify-between" },
                            React.createElement("div", { className: "flex items-center" },
                                React.createElement("input", { id: "remember-me", name: "remember-me", type: "checkbox", className: "h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" }),
                                React.createElement("label", { htmlFor: "remember-me", className: "ml-2 block text-sm text-muted-foreground" }, "Remember me")),
                            React.createElement("div", { className: "text-sm" },
                                React.createElement(link_1["default"], { href: "#", className: "font-medium text-primary hover:underline" }, "Forgot your password?"))),
                        React.createElement(button_1.Button, { type: "submit", className: "w-full" }, "Sign in"))))),
        React.createElement(footer_1.Footer, null)));
}
exports["default"] = SignIn;
