import { useEffect } from "react";
import ClearButton from "./ClearButton";
import { useSelector, useDispatch } from "react-redux";
import {
  changeActiveFilter,
  clearCompletedAsync,
  selectTodos,
  selectItemsCompleted
} from "../Redux/todos/todosSlice";

function ContentFooter() {
  const itemsCompleted = useSelector(selectItemsCompleted)
  const dispatch = useDispatch();
  const items = useSelector(selectTodos);
  const itemsLeft = items.filter((item) => !item.completed).length;

  const activeFilter = useSelector((state) => state.todos.activeFilter);

  const handleClear = () => {
    dispatch(clearCompletedAsync())
  }

  useEffect(() => {
    localStorage.setItem('activeFilter', activeFilter)
  }, [activeFilter])

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft}</strong>
        item{itemsLeft > 1 && "s"} left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            className={activeFilter === "all" ? "selected" : ""}
            onClick={() => dispatch(changeActiveFilter("all"))}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={activeFilter === "active" ? "selected" : ""}
            onClick={() => dispatch(changeActiveFilter("active"))}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={activeFilter === "completed" ? "selected" : ""}
            onClick={() => dispatch(changeActiveFilter("completed"))}
          >
            Completed
          </a>
        </li>
      </ul>

      <ClearButton />
    </footer>
  );
}

export default ContentFooter;
