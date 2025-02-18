"use strict";
exports.__esModule = true;
exports.FeatureChecklist = void 0;
var lucide_react_1 = require("lucide-react");
function FeatureChecklist(_a) {
    var title = _a.title, features = _a.features;
    return (React.createElement("div", { className: "space-y-4" },
        React.createElement("h3", { className: "text-2xl font-bold" }, title),
        React.createElement("ul", { className: "space-y-2" }, features.map(function (feature, index) { return (React.createElement("li", { key: index, className: "flex items-center" },
            React.createElement(lucide_react_1.Check, { className: "mr-2 h-5 w-5 text-primary" }),
            React.createElement("span", null, feature))); }))));
}
exports.FeatureChecklist = FeatureChecklist;
