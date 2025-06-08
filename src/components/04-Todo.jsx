import { useState } from 'react'
const todos = [
  { id: 1, label: "Refactor the refactor of the refactor", completed: false },
  { id: 2, label: "Convince rubber duck I'm not the problem", completed: false },
  { id: 3, label: "Rename variables to something less shameful", completed: false },
  { id: 4, label: "Google how to center a div (again)", completed: false },
  { id: 5, label: "Add one more console.log for good luck", completed: false }
]

export default function Todo() {
  const [todoList, setTodoList] = useState(todos)
  const onDone = idToDelete => () => {
    setTodoList(oldTodos => {
      return oldTodos.filter(todo => todo.id !== idToDelete)
    })
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
