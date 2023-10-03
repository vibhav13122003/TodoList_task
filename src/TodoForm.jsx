import React, { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Create from '@mui/icons-material/Create';

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <div>
      <ListItem>
        <form action="" onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Add Todo"
            variant="outlined"
            onChange={handleChange}
            value={text}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="create todo" edge="end" type="submit">
                    <Create />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </form>
      </ListItem>
    </div>
  );
}
