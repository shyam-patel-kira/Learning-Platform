import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import TodoForm from '../Components/todo/TodoForm';
import axios from 'axios';
import TodoList, { Todo } from '../Components/todo/TodoList';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import Error_401 from '../Components/401-Error.jpg';

const Dashboard = () => {
  const [todoList, setTodoList] = React.useState<Todo[]>([]);
  const [error, setError] = React.useState('');
  const cookies = new Cookies();
  let USER_TOKEN = cookies.get('token');
  let AuthStr = 'JWT '.concat(USER_TOKEN);
  React.useEffect(() => {
    axios
      .get('http://localhost:6545/todos/todoslist', {
        headers: { Authorization: AuthStr },
      })
      .then(res => {
        if (res.data.error) {
          setError(res.data.error);
        }
        if (res.status === 200) {
          setTodoList(res.data.todos);
        }
      })
      .catch(error => {
        console.log(error.status);
      });
  }, []); //eslint-disable-line

  if (error) {
    return (
      <div className='flex flex-row'>
        <div>
          <img className='' src={Error_401} alt='' />
        </div>
        <div className='bg-custompink shadow-2xl w-1/2 my-40 mx-auto mr-4 border-2 '>
          <h1 className='text-5xl text-center text-customblack mt-6 font-myfonts'>
            {error}
          </h1>
          <p className='text-2xl text-center text-customblack my-3'>
            Please{' '}
            <Link className='text-blue-500' to='/login'>
              Login
            </Link>{' '}
            first.
          </p>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className='bg-customwhite'>
        <Navbar />
        <div className='font-myfonts flex items-start justify-between mt-8'>
          <div className='todo-app mx-auto mt-0 mb-8 flex flex-col justify-start text-center'>
            <h1 className='text-2xl text-white my-4'>
              What's the Plan for Today?
            </h1>
            <TodoForm todos={todoList} setTodos={setTodoList} />
            <TodoList todos={todoList} setTodos={setTodoList} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
