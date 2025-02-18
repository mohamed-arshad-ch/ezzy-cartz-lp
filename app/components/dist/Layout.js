"use strict";
exports.__esModule = true;
var Header_1 = require("./Header");
var Footer_1 = require("./Footer");
function Layout(_a) {
    var children = _a.children;
    return (React.createElement("div", { className: "flex flex-col min-h-screen" },
        React.createElement(Header_1["default"], null),
        React.createElement("main", { className: "flex-grow" }, children),
        React.createElement(Footer_1["default"], null)));
}
exports["default"] = Layout;
