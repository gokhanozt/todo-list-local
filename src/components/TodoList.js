import React from "react";

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            disabled="disabled"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div className="button-container">
            <button className="button-complete task-button">
              <i
                className="icons fa fa-check-circle"
                onClick={() => handleComplete(todo)}
              ></i>
            </button>
            <button className="button-edit task-button">
              <i
                className="icons fa fa-edit"
                onClick={() => handleEdit(todo)}
              ></i>
            </button>
            <button className="button-delete task-button">
              <i
                className="icons fa fa-trash"
                onClick={() => handleDelete(todo)}
              ></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
