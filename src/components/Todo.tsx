import { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import "./Todo.css";

interface Props {
  menuActive: string;
  todo: Todo;
  reload: boolean;
  setReload: (value: boolean) => void;
  deleteTodo: (id: string) => void;
}

export default function Todo({
  menuActive,
  todo,
  reload,
  setReload,
  deleteTodo,
}: Props) {
  const [test, setTest] = useState<boolean>(todo.checked);
  const [textClass, setTextClass] = useState<string>("");

  function handleCheckbox(event: any) {
    setTest(event.target.checked);
    todo.checked = event.target.checked;
    todo.checked ? setTextClass("text-checked") : setTextClass("");
    setReload(!reload);
  }

  useEffect(() => {
    todo.checked ? setTextClass("text-checked") : setTextClass("");
  }, [test, todo.checked]);

  return (
    <div className="cardbox__list__task">
      <div className="cardbox__list__task__checkbox centered">
        <input
          type="checkbox"
          name="checkbox"
          id={todo.id}
          className="checkbox"
          onChange={handleCheckbox}
          checked={todo.checked}
        />
      </div>
      <label
        className={`cardbox__list__task__text label ${textClass}`}
        htmlFor={todo.id}
      >
        {todo.text}
      </label>

      {menuActive === "completed" ? (
        <div className="centered">
          <MdDeleteOutline
            className="deleteIcon"
            onClick={() => deleteTodo(todo.id)}
          />
        </div>
      ) : null}
    </div>
  );
}
