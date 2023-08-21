import React, { useState } from 'react';

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const toggleCompleted = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = updatedTodos[index].startsWith('✅ ')
      ? updatedTodos[index].substring(2)
      : `✅ ${updatedTodos[index]}`;
    setTodos(updatedTodos);
  };

  const removeTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <form className="todo-form" onSubmit={addTodo}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            autoFocus
          />
        </form>
      </header>
      <section className="main" style={{ display: todos.length ? 'block' : 'none' }}>
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          onChange={() => {
            // Toggle all todos as completed or not completed
            const allCompleted = todos.every((todo) => todo.startsWith('✅ '));
            const updatedTodos = todos.map((todo) =>
              allCompleted ? todo.substring(2) : `✅ ${todo}`
            );
            setTodos(updatedTodos);
          }}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index} className={todo.startsWith('✅ ') ? 'completed' : ''}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={todo.startsWith('✅ ')}
                  onChange={() => toggleCompleted(index)}
                />
                <label>{todo}</label>
                <button className="destroy" onClick={() => removeTodo(index)}></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <footer className="footer" style={{ display: todos.length ? 'block' : 'none' }}>
        <span className="todo-count">
          <strong>{todos.filter((todo) => !todo.startsWith('✅ ')).length}</strong>{' '}
          {todos.filter((todo) => !todo.startsWith('✅ ')).length === 1 ? 'item' : 'items'} left
        </span>
        <button
          className="clear-completed"
          onClick={() => {
            const updatedTodos = todos.filter((todo) => !todo.startsWith('✅ '));
            setTodos(updatedTodos);
          }}
        >
          Clear completed
        </button>
      </footer>
    </div>
  );
};

export default TodoApp;
