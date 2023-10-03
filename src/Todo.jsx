import React from 'react';
import { ACTION } from './Reducer';

export default function Todo({ todo, dispatch }) {
  const handleToggle = () => {
    dispatch({ type: ACTION.TOGGLE_TODO, payload: { id: todo.id } });
  };

  return (
    <div>
      <span style={{ color: todo.completed ? 'green' : 'red' }}>
        {todo.name}
      </span>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
}
