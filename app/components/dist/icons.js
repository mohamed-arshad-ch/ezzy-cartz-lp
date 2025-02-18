"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.Scale = exports.Command = exports.Zap = void 0;
function Zap(props) {
    return (React.createElement("svg", __assign({}, props, { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" })));
}
exports.Zap = Zap;
function Command(props) {
    return (React.createElement("svg", __assign({}, props, { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" })));
}
exports.Command = Command;
function Scale(props) {
    return (React.createElement("svg", __assign({}, props, { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" }),
        React.createElement("path", { d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" }),
        React.createElement("path", { d: "M7 21h10" }),
        React.createElement("path", { d: "M12 3v18" }),
        React.createElement("path", { d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" })));
}
exports.Scale = Scale;
