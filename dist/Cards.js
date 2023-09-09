"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./Cards.css");
const react_1 = require("react");
const Todo_1 = __importDefault(require("./components/Todo"));
function Cards() {
    const [menuActive, setMenuActive] = (0, react_1.useState)("all");
    const [todo, setTodo] = (0, react_1.useState)("");
    const [todoList, setTodoList] = (0, react_1.useState)([]);
    const [reload, setReload] = (0, react_1.useState)(false);
    function handleChange(event) {
        setTodo(event.target.value);
    }
    function addTodo(event) {
        event.preventDefault();
        var item = {
            id: Math.random().toString() + todo,
            text: todo,
            checked: false,
        };
        setTodoList((prev) => {
            return [...prev, item];
        });
        setTodo("");
    }
    function deleteTodo(id) {
        const remainingItems = todoList.filter((item) => {
            return item.id !== id;
        });
        setTodoList(remainingItems);
    }
    function deleteCompleted() {
        const remainingItems = todoList.filter((item) => {
            return item.checked !== true;
        });
        setTodoList(remainingItems);
        setMenuActive("all");
    }
    (0, react_1.useEffect)(() => { }, [reload]);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "cardbox" }, { children: [(0, jsx_runtime_1.jsxs)("form", Object.assign({ className: "cardbox__input", onSubmit: addTodo }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "cardbox__input__img centered" }, { children: (0, jsx_runtime_1.jsx)("img", { src: "wishlist.png" }) })), (0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: "What needs to be done?", onChange: handleChange, value: todo }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "cardbox__input__sumbit centered" }, { children: [(0, jsx_runtime_1.jsx)("img", { src: "enter.png" }), (0, jsx_runtime_1.jsx)("button", { type: "submit", disabled: todo ? false : true })] }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "cardbox__list" }, { children: todoList
                    ? todoList.map((item) => {
                        if (menuActive === "completed" && !item.checked) {
                            return;
                        }
                        else if (menuActive === "active" && item.checked) {
                            return;
                        }
                        return ((0, jsx_runtime_1.jsx)(Todo_1.default, { menuActive: menuActive, todo: item, reload: reload, setReload: setReload, deleteTodo: deleteTodo }, item.id));
                    })
                    : null })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "cardbox__tail" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "cardbox__tail__counter" }, { children: [todoList.filter((item) => !item.checked).length, " items left"] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "cardbox__tail__buttons" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ onClick: () => setMenuActive("all"), className: menuActive === "all" ? "button_active" : "" }, { children: "All" })), (0, jsx_runtime_1.jsx)("div", Object.assign({ onClick: () => setMenuActive("active"), className: menuActive === "active" ? "button_active" : "" }, { children: "Active" })), (0, jsx_runtime_1.jsx)("div", Object.assign({ onClick: () => setMenuActive("completed"), className: menuActive === "completed" ? "button_active" : "" }, { children: "Completed" }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "cardbox__tail__clear", onClick: deleteCompleted }, { children: "Clear completed" }))] }))] })));
}
exports.default = Cards;
//# sourceMappingURL=Cards.js.map