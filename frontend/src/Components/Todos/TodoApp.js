import React from 'react';
import './Todo.css';
import TodoList from './TodoList';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

function TodoApp() {
  return (
    <div className='bg-custompink'>
      <Navbar />
      <div className='font-myfonts flex items-start justify-between'>
        <Sidebar />
        <div className='todo-app mx-auto my-auto mb-4 flex flex-col justify-start text-center'>
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
