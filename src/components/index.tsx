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

  const removeTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <form className="todo-form" onSubmit={(e) => { e.preventDefault(); addTodo(); }}>
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
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index}>
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>{todo}</label>
                <button className="destroy" onClick={() => removeTodo(index)}></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <footer className="footer" style={{ display: todos.length ? 'block' : 'none' }}>
        <span className="todo-count"><strong>{todos.length}</strong> item{todos.length !== 1 ? 's' : ''} left</span>
        <ul className="filters">
          <li>
            <a className="selected" href="#/">All</a>
          </li>
          <li>
            <a href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    </div>
  );
};

export default TodoApp;
