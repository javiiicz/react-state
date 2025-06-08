import { useState, useEffect } from 'react'
import cointoss from '../utils/cointoss'

const URL = 'http://localhost:9009/api/todos'
const API_KEY = import.meta.env.VITE_API_KEY // add .env file at the root

export default function Todo() {
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    async function asyncFunc() { // wish to await for things inside
      try {
        const result = await cointoss()
        console.log(result)
      } catch (err) {
        console.log(err.message)
        console.log('embarrasing but should not crash app')
      }
    }
    asyncFunc()
  }, [])

  useEffect(() => {
    async function fetchTodos() {
      const res = await fetch(URL)
      const parsed = await res.json()
      setTodoList(parsed)
    }
    fetchTodos()
  }, [])

  const onDone = id => evt => {
    async function deleteTodo() {
      const res = await fetch(`${URL}/${id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${API_KEY}`
        }
      })
      const parsed = await res.json()
      setTodoList(parsed)
    }
    deleteTodo(id)
  }
  return (
    <div className="container">
      <h2>Todo Async</h2>
      <div>
        {
          todoList.map(todo => {
            return (
              <ul key={todo.id}>
                <li>{todo.label} <button onClick={onDone(todo.id)}>Done!</button></li>
              </ul>
            )
          })
        }
      </div>
    </div>
  )
}
