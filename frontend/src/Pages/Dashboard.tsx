import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import TodoForm from "../Components/todo/TodoForm";
import axios from "axios";
import TodoList, { Todo } from "../Components/todo/TodoList";
import Cookies from 'universal-cookie';
import Sidebar from "../Components/Sidebar/Sidebar";

const Dashboard = () => {
  const [todoList, setTodoList] = React.useState<Todo[]>([]);
  const cookies = new Cookies();
  let USER_TOKEN = cookies.get('token');
  let AuthStr = 'JWT '.concat(USER_TOKEN);
  React.useEffect(() => {
    axios.get('http://localhost:6545/todos/todoslist', { headers: { Authorization: AuthStr}})
      .then(res => {
        if (res.status === 200) {
          console.log(res.data);
          
          setTodoList(res.data.todos);
        }
        else {
          console.log(res.data.error);
          
        }
      })
  }, [])

  return(
    <>
      <div className='bg-custompink'>
      <Navbar />
        <div className='font-myfonts flex items-start justify-between'>
          <Sidebar />
            <div className='todo-app mx-auto my-auto mb-4 flex flex-col justify-start text-center'>
              <h1 className='text-2xl text-white my-4'>What's the Plan for Today?</h1>
                <TodoForm todos={todoList} setTodos={setTodoList}/>
                <TodoList todos={todoList} setTodos={setTodoList} />
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Dashboard;