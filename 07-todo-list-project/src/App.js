import React, { useState } from 'react';
import Todo from './components/Todo';
import Form from './components/Form';
import './App.css';

function TodoApp(props) {
  const [todos, setTodos] = useState(props.tasks);
  const todoCount = todos.length > 1 ? 'tasks' : 'task';

  function addTask(name) {
    const newTodo = {
      name: name,
      completed: false,
      id: Date.now()
    }
    setTodos([...todos, newTodo])
  }

  function toggleTaskCompleted(id) {
    const updatedTodo = todos.map(todo => {
      if (id === todo.id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    });
    setTodos(updatedTodo);
  }

  function deleteTask(id) {
    const remainingTodos = todos.filter(todo => todo.id !== id);
    setTodos(remainingTodos);
  }

  function editTask(id, newName) {
    const editedTodo = todos.map(todo => {
      if (id === todo.id) {
        return { ...todo, name: newName }
      }
      return todo;
    });
    setTodos(editedTodo);
  }

    return (
      <div className="App">
        <div className='container'>
          <h1>TODO LIST</h1>
          <Form addTask={addTask} />
          <h3>{todos.length} {todoCount} remaining</h3>
          <ul>
            {todos.map(todo => (
              <Todo
                name={todo.name}
                completed={todo.completed}
                id={todo.id}
                key={todo.id}
                toggleTaskCompleted={toggleTaskCompleted}
                deleteTask={deleteTask}
                editTask={editTask}
              />
            ))
          }
          </ul>
        </div>
      </div>
    );
}

export default TodoApp;
