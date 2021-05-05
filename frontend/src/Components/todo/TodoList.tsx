import axios from "axios";
import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import Cookies from 'universal-cookie';


export interface Todo {
  _id: string;
  title: string;
  isCompleted: boolean;
}

interface TodoListProps {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}




const TodoList = ({todos, setTodos}: TodoListProps) => {
  
  const cookies = new Cookies();
  let USER_TOKEN = cookies.get('token');
  let AuthStr = 'JWT '.concat(USER_TOKEN);
  const markCompleted = (todo: Todo) => {
    axios.put(`http://localhost:6545/todos/todoslist/${todo._id}`, {}, {headers: { Authorization: AuthStr}})
      .then(res => {
        if (res.status === 200) {
        let _todos = todos;
        setTodos(_todos.filter(todo => res.data.todo._id !== todo._id));
        }
        else {
          console.log(res.data.error);
        }
      })
      .catch(err => {
        console.log("Error : " + err);
        
      });
  }

  return(
    <>
      {todos && todos.filter(todo => !todo.isCompleted).map((todo) => (
        <div className={todo.isCompleted ? 'todo-row complete' : 'todo-row'} key={todo._id}>
          <div className=''>
            {String(new Date(parseInt(todo._id.substring(0, 8), 16) * 1000).getDate())}/
            {String(new Date(parseInt(todo._id.substring(0, 8), 16) * 1000).getMonth())}/
            {String(new Date(parseInt(todo._id.substring(0, 8), 16) * 1000).getFullYear())}:
          </div>
          <div className=''>
            {todo.title}
          </div>   
          <div className='icons'>
            <RiCloseCircleLine
            onClick={() => markCompleted(todo)}
            className='delete-icon'
            />
          </div>
        </div>
      ))}
    </>
  )
}

export default TodoList;