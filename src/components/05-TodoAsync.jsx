import { useState, useEffect } from 'react'
import cointoss from '../utils/cointoss'

export default function Todo() {
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    async function foo() {
      try {
        const result = await cointoss()
        console.log(result)
      } catch (err) {
        console.log(err.message)
        console.log('embarrasing but should not crash app')
      }
    }
    foo()
  }, [])

  useEffect(() => {
    async function fetchTodos() {
      const res = await fetch('http://localhost:9009/api/todos')
      const parsed = await res.json()
      setTodoList(parsed)
    }
    fetchTodos()
  }, [])

  const onDone = id => evt => {
    async function deleteTodo() {
      const res = await fetch(`http://localhost:9009/api/todos/${id}`, {
        method: 'DELETE',
      })
      const parsed = await res.json()
      setTodoList(parsed)
    }
    deleteTodo(id)
  }
  return (
    <div className="container">
      <h2>Todo</h2>
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
