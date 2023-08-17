import React from 'react';

const MyTemplate: React.FC = () => {
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <form className="todo-form" onSubmit={addTodo}>
          <input className="new-todo" placeholder="What needs to be done?" value={newTodo} onChange={handleNewTodoChange} disabled={saving} autoFocus />
        </form>
      </header>
      <section className="main" style={{ display: todos.length ? 'block' : 'none' }}>
        <input id="toggle-all" className="toggle-all" type="checkbox" checked={allChecked} onChange={handleToggleAll} />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index} className={todo.completed ? 'completed' : ''}>
              <div className="view">
                <input className="toggle" type="checkbox" checked={todo.completed} onChange={() => toggleCompleted(todo)} />
                <label onDoubleClick={() => editTodo(todo)}>{todo.title}</label>
                <button className="destroy" onClick={() => removeTodo(todo)}></button>
              </div>
              <form onSubmit={(e) => saveEdits(e, todo, 'submit')}>
                <input className="edit" value={todo.title} onChange={(e) => handleTodoTitleChange(e, todo)} onBlur={(e) => saveEdits(e, todo, 'blur')} />
              </form>
            </li>
          ))}
        </ul>
      </section>
      <footer className="footer" style={{ display: todos.length ? 'block' : 'none' }}>
        <span className="todo-count">
          <strong>{remainingCount}</strong> {remainingCount === 1 ? 'item left' : 'items left'}
        </span>
        <ul className="filters">
          <li>
            <a className={status === '' ? 'selected' : ''} href="#/">All</a>
          </li>
          <li>
            <a className={status === 'active' ? 'selected' : ''} href="#/active">Active</a>
          </li>
          <li>
            <a className={status === 'completed' ? 'selected' : ''} href="#/completed">Completed</a>
          </li>
        </ul>
        <button className="clear-completed" onClick={clearCompletedTodos} style={{ display: completedCount ? 'block' : 'none' }}>
          Clear completed
        </button>
      </footer>
    </section>
  );
};

export default MyTemplate;
