//import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [ 
  { text: 'Texto de la tarea 1', completed: true},
  { text: 'Texto de la tarea 2', completed: false},
  { text: 'Texto de la tarea 3', completed: true},
  { text: 'Texto de la tarea 4', completed: false},
  { text: 'Texto de la tarea 5', completed: true}
]

function App() {
  return (
    <>
      <TodoCounter completed={3} total={5} />

      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (<TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;