import * as React from 'react';
import List from '@mui/material/List';
import {v4 as uuid}from 'uuid' 
import { useState, useEffect } from 'react';
import TodoItem from './TodoItem'
import TodoForm from './TodoForm';

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos"))
    if (!data) return []
    return data
}

// const initialTodos = [
//     {id: uuid(), text: "Walking", completed: false },
//     {id: uuid(), text: "eating", completed: false },
// ]

export default function TodoList() {
    const [todos, setTodos] = useState(getInitialData)

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const removeTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((t) => t.id !== id)
        })
    }
    const togleTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {...todo, completed: !todo.completed}
                } else {
                    return todo
                }
            })
        })
    }
    const addTodo = (text) => {
        setTodos((prevTodos) => {
            return [...prevTodos, {text: text, id: crypto.randomUUID(), completed: false }]
        })
    }

    return (
        <>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
         {todos.map((todo) => (
                <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                  //  removeTodo={() => removeTodo(todo.id)} 
                    remove={removeTodo}
                    toggle={() => togleTodo(todo.id)}
                    />   
              ))}
         <TodoForm addTodo={addTodo} />
        </List>
        </>
    )
}
