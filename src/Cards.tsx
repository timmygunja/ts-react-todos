import "./Cards.css";
import Checkbox from "./Checkbox";
import { useEffect, useState } from "react";
import Todo from "./components/Todo";

function Cards() {
  const [menuActive, setMenuActive] = useState<"all" | "active" | "completed">(
    "all"
  );
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [reload, setReload] = useState<boolean>(false);

  function handleChange(event: any) {
    setTodo(event.target.value);
  }

  function addTodo(event: any) {
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

  function deleteTodo(id: string) {
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

  useEffect(() => {}, [reload]);

  return (
    <div className="cardbox">
      <form className="cardbox__input" onSubmit={addTodo}>
        <div className="cardbox__input__img centered">
          <img src="wishlist.png" />
        </div>
        <input
          type="text"
          placeholder="What needs to be done?"
          onChange={handleChange}
          value={todo}
        ></input>

        <div className="cardbox__input__sumbit centered">
          <img src="enter.png" />
          <button type="submit" disabled={todo ? false : true} />
        </div>
      </form>

      <div className="cardbox__list">
        {todoList
          ? todoList.map((item) => {
              if (menuActive === "completed" && !item.checked) {
                return;
              } else if (menuActive === "active" && item.checked) {
                return;
              }

              return (
                <Todo
                  key={item.id}
                  menuActive={menuActive}
                  todo={item}
                  reload={reload}
                  setReload={setReload}
                  deleteTodo={deleteTodo}
                />
              );
            })
          : null}
      </div>

      <div className="cardbox__tail">
        <div className="cardbox__tail__counter">
          {todoList.filter((item) => !item.checked).length} items left
        </div>
        <div className="cardbox__tail__buttons">
          <div
            onClick={() => setMenuActive("all")}
            className={menuActive === "all" ? "button_active" : ""}
          >
            All
          </div>
          <div
            onClick={() => setMenuActive("active")}
            className={menuActive === "active" ? "button_active" : ""}
          >
            Active
          </div>
          <div
            onClick={() => setMenuActive("completed")}
            className={menuActive === "completed" ? "button_active" : ""}
          >
            Completed
          </div>
        </div>
        <div className="cardbox__tail__clear" onClick={deleteCompleted}>
          Clear completed
        </div>
      </div>
    </div>
  );
}

export default Cards;
