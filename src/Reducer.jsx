// import { useState, useReducer } from "react";
// import Todo from "./Todo";

// export const ACTION = {
//   ADD_TODO: "add-todo",
//   TOGGLE_TODO: "toggle-todo",
// };

// export default function Reducer() {
//   function reducer(state, action) {
//     switch (action.type) {
//       case ACTION.ADD_TODO:
//         return [...state, newTodo(action.payload.name)];
        
//       case ACTION.TOGGLE_TODO:
//         return state.map((todo) => {
//           if (todo.id === action.payload.id) {
//             return { ...todo, completed: !todo.completed };
//           }
//           return todo;
//         });

//       default:
//         return state;
//     }
//   }

//   function newTodo(name) {
//     return { id: Date.now(), name: name, completed: false };
//   }

//   const [todos, dispatch] = useReducer(reducer, []);
//   const [name, setName] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch({ type: ACTION.ADD_TODO, payload: { name: name } });
//     setName('');
//   };

//   return (
//     <>
//       <form action="" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//       {todos.map((todo) => {
//         return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
//       })}
//     </>
//   );
// }
import { useState, useReducer } from "react";
import Todo from "./Todo";

export const ACTION = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
};

export default function Reducer() {
  function reducer(state, action) {
    switch (action.type) {
      case ACTION.ADD_TODO:
        return [...state, newTodo(action.payload.name)];
        
      case ACTION.TOGGLE_TODO:
        return state.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        });

      default:
        return state;
    }
  }

  function newTodo(name) {
    return { id: Date.now(), name: name, completed: false };
  }

  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTION.ADD_TODO, payload: { name: name } });
    setName('');
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </>
  );
}
