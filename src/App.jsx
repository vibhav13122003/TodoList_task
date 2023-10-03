import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Memo from './Memo'
import Ref from './Ref'
import Reducer from './Reducer'
import Typo from './Typo'
import { CssBaseline } from '@mui/material'
import TodoList from './TodoList'
import Navbar from './Navbar'

function App() {
  

  return (
   
      <>
      <Navbar/>
      
      <CssBaseline/>
      <TodoList/>
      
      </>
  )
}

export default App
