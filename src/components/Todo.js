"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const md_1 = require("react-icons/md");
require("./Todo.css");
function Todo({ menuActive, todo, reload, setReload, deleteTodo, }) {
    const [test, setTest] = (0, react_1.useState)(todo.checked);
    const [textClass, setTextClass] = (0, react_1.useState)("");
    function handleCheckbox(event) {
        setTest(event.target.checked);
        todo.checked = event.target.checked;
        todo.checked ? setTextClass("text-checked") : setTextClass("");
        setReload(!reload);
    }
    (0, react_1.useEffect)(() => {
        todo.checked ? setTextClass("text-checked") : setTextClass("");
    }, [test, todo.checked]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "cardbox__list__task", children: [(0, jsx_runtime_1.jsx)("div", { className: "cardbox__list__task__checkbox centered", children: (0, jsx_runtime_1.jsx)("input", { type: "checkbox", name: "checkbox", id: todo.id, className: "checkbox", onChange: handleCheckbox, checked: todo.checked }) }), (0, jsx_runtime_1.jsx)("label", { className: `cardbox__list__task__text label ${textClass}`, htmlFor: todo.id, children: todo.text }), menuActive === "completed" ? ((0, jsx_runtime_1.jsx)("div", { className: "centered", children: (0, jsx_runtime_1.jsx)(md_1.MdDeleteOutline, { className: "deleteIcon", onClick: () => deleteTodo(todo.id) }) })) : null] }));
}
exports.default = Todo;
