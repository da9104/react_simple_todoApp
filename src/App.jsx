import { useState } from 'react'
import { CssBaseline } from '@mui/material';
import './App.css'
import TodoList from './TodoList';
 import NavBar from './Navbar'

function App() {
  const [items, setItems] = useState([]);
  const handleClick = () => {
  }

  return (
      <>
      <CssBaseline />
      <NavBar />
      <h1> Todos </h1> 
      <TodoList />
      </>
  )
}

export default App

