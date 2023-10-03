import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import TodoForm from './TodoForm';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Typography } from '@mui/material';

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("todos"));
  if (!data) return [];
  return data;
};

export default function TodoList() {
  const [todos, setTodos] = useState(getInitialData());

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const addTodo = (text) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { text: text, id: new Date().getTime().toString(), completed: false }
    ]);
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection:"column", m:"5"}}>
      <Typography
        variant="h2"
        noWrap
        component="h1"
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
      >
        TODO List
      </Typography>
      <div>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {todos.map((todo) => {
            const labelId = `checkbox-list-label-${todo.id}`;

            return (
              <ListItem
                key={todo.id}
                secondaryAction={
                  <IconButton edge="end" aria-label="comments">
                    <DeleteIcon onClick={() => removeTodo(todo.id)} />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton role={undefined} dense>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={todo.completed}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                      onChange={() => toggleTodo(todo.id)}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={todo.text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        {/* Pass the addTodo function as a prop */}
        <TodoForm addTodo={addTodo} />
      </div>
    </Box>
  );
}
