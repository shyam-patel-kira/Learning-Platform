import React, { useRef } from 'react';

import axios from 'axios';
import { Todo } from './TodoList';
import Cookies from 'universal-cookie';

interface TodoFormProps {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}

const TodoForm = ({ todos, setTodos }: TodoFormProps) => {
  const [title, setTitle] = React.useState('');
  const inputRef = useRef(null);

  const cookies = new Cookies();
  let USER_TOKEN = cookies.get('token');
  let AuthStr = 'JWT '.concat(USER_TOKEN);
  const onSubmit = () => {
    if (title.length > 0) {
      axios
        .post(
          'http://localhost:8000/todos/todoslist',
          { title: title },
          { headers: { Authorization: AuthStr } }
        )
        .then(res => {
          if (res.status === 200) {
            let todo = res.data.todo;
            setTodos([...todos, todo]);
            setTitle('');
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  return (
    <div className='todo-form'>
      <input
        placeholder='Add a todo'
        name='text'
        className='todo-input'
        ref={inputRef}
        onChange={e => setTitle(e.target.value)}
        value={title}
      />
      <button onClick={onSubmit} className='todo-button'>
        Add todo
      </button>
    </div>
  );
};
export default TodoForm;
