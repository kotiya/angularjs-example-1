import React from 'react';

interface Todo {
  title: string;
  completed: boolean;
}

interface TodoProps {
  todo: Todo;
  toggleCompleted: (todo: Todo) => void;
  editTodo: (todo: Todo) => void;
  removeTodo: (todo: Todo) => void;
  saveEdits: (todo: Todo, action: string) => void;
  revertEdits: (todo: Todo) => void;
  todoFocus: (todo: Todo) => void;
}

const TodoItem: React.FC<TodoProps> = ({
  todo,
  toggleCompleted,
  editTodo,
  removeTodo,
  saveEdits,
  revertEdits,
  todoFocus,
}) => {
  const handleToggleCompleted = () => {
    toggleCompleted(todo);
  };

  const handleEditTodo = () => {
    editTodo(todo);
  };

  const handleRemoveTodo = () => {
    removeTodo(todo);
  };

  const handleSaveEdits = (action: string) => {
    saveEdits(todo, action);
  };

  const handleRevertEdits = () => {
    revertEdits(todo);
  };

  const handleTodoFocus = () => {
    todoFocus(todo);
  };

  return (
    <li
      className={`todo-item ${todo.completed ? 'completed' : ''} ${
        todo === editedTodo ? 'editing' : ''
      }`}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggleCompleted}
        />
        <label onDoubleClick={handleEditTodo}>{todo.title}</label>
        <button className="destroy" onClick={handleRemoveTodo}></button>
      </div>
      <form onSubmit={() => handleSaveEdits('submit')}>
        <input
          className="edit"
          value={todo.title}
          onChange={() => {}}
          onBlur={() => handleSaveEdits('blur')}
          onFocus={handleTodoFocus}
        />
      </form>
    </li>
  );
};

export default TodoItem;
