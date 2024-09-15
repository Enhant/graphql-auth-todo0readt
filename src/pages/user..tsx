import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_TODOS, CREATE_TODO, TOGGLE_TODO_COMPLETION } from '../lib/mutations';

const Todo: React.FC = () => {
  const { data, loading, error, refetch } = useQuery(GET_TODOS);
  console.log(data);
  const [createTodo] = useMutation(CREATE_TODO);
  const [toggleTodoCompletion] = useMutation(TOGGLE_TODO_COMPLETION);
  const [title, setTitle] = useState('');

  const handleAddTodo = async () => {
    if (title.trim() !== '') {
      try {
        await createTodo({ variables: { input: { title } } });
        setTitle('');
        refetch();
      } catch (err) {
        console.error('Error creating todo', err);
      }
    }
  };

  const handleToggleCompletion = async (id: string) => {
    try {
      await toggleTodoCompletion({ variables: { id } });
      refetch();
    } catch (err) {
      console.error('Error toggling completion', err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full"
          placeholder="Add new todo"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white p-2 ml-2"
        >
          Add
        </button>
      </div>
      <ul>
        {data.todos.map((todo: any) => (
          <li key={todo.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleCompletion(todo.id)}
              className="mr-2"
            />
            <span className={todo.completed ? 'line-through' : ''}>
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;        