import React, { useState } from 'react';

const TodoMVC: React.FC = () => {
  const [newTodo, setNewTodo] = useState<string>('');
  const [todos, setTodos] = useState<Array<any>>([]);
  const [allChecked, setAllChecked] = useState<boolean>(false);
  const [statusFilter, setStatusFilter] = useState<string>('');

  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form className="todo-form" onSubmit={(e) => { e.preventDefault(); /* call addTodo() here */ }}>
            <input className="new-todo" placeholder="What needs to be done?" value={newTodo} disabled={false} autoFocus />
          </form>
        </header>

        {/* Remaining parts of TODO MVC app */}

      </section>

      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>Credits:
          <a href="http://twitter.com/cburgdorf">Christoph Burgdorf</a>,
          <a href="http://ericbidelman.com">Eric Bidelman</a>,
          <a href="http://jacobmumm.com">Jacob Mumm</a> and
          <a href="http://blog.igorminar.com">Igor Minar</a>
        </p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    </div>
  )
}

export default TodoMVC;