"use strict";
exports.__esModule = true;
function Contact() {
    return (React.createElement("section", { id: "contact", className: "py-20 bg-white" },
        React.createElement("div", { className: "container mx-auto px-4" },
            React.createElement("h2", { className: "text-4xl font-bold text-center mb-12" }, "Get in Touch"),
            React.createElement("div", { className: "max-w-lg mx-auto" },
                React.createElement("form", { className: "space-y-6" },
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "name", className: "block mb-2 font-semibold" }, "Name"),
                        React.createElement("input", { type: "text", id: "name", className: "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500", required: true })),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "email", className: "block mb-2 font-semibold" }, "Email"),
                        React.createElement("input", { type: "email", id: "email", className: "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500", required: true })),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "message", className: "block mb-2 font-semibold" }, "Message"),
                        React.createElement("textarea", { id: "message", rows: 4, className: "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500", required: true })),
                    React.createElement("button", { type: "submit", className: "w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-2 px-4 rounded-lg transition duration-300" }, "Send Message"))))));
}
exports["default"] = Contact;
