"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./Checkbox.css");
function Checkbox() {
    return ((0, jsx_runtime_1.jsx)("div", { className: "container", children: (0, jsx_runtime_1.jsxs)("div", { className: "round", children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", checked: true, id: "checkbox" }), (0, jsx_runtime_1.jsx)("label", { className: "checkbox" })] }) }));
}
exports.default = Checkbox;
