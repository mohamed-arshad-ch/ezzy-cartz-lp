"use client";
"use strict";
exports.__esModule = true;
exports.WhatsAppButton = void 0;
var lucide_react_1 = require("lucide-react");
var framer_motion_1 = require("framer-motion");
function WhatsAppButton() {
    var phoneNumber = "+1234567890"; // Replace with your actual WhatsApp number
    var message = "Hi! I'm interested in Ezzy Cartz services."; // Your default message
    var handleClick = function () {
        var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
        window.open(url, '_blank');
    };
    return (React.createElement(framer_motion_1.motion.button, { initial: { scale: 0 }, animate: { scale: 1 }, whileHover: { scale: 1.1 }, className: "fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-green-500 p-4 text-white shadow-lg hover:bg-green-600", onClick: handleClick, "aria-label": "Contact on WhatsApp" },
        React.createElement(lucide_react_1.Phone, { className: "h-6 w-6" })));
}
exports.WhatsAppButton = WhatsAppButton;
