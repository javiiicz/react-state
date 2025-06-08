
import { Routes, Route, NavLink } from 'react-router'
import Counter from './components/01-Counter'
import Toggle from './components/02-Toggle'
import Input from './components/03-Input'
import Todo from './components/04-Todo'
import TodoAsync from './components/05-TodoAsync'

export default function App() {
  return (
    <>
      <h1>React State</h1>
      <nav>
        <NavLink to="/">Counter</NavLink>
        <NavLink to="/toggle">Toggle</NavLink>
        <NavLink to="/input">Input</NavLink>
        <NavLink to="/todo">Todo</NavLink>
        <NavLink to="/todoasync">TodoAsync</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/toggle" element={<Toggle />} />
        <Route path="/input" element={<Input />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/todoasync" element={<TodoAsync />} />
      </Routes>
    </>
  )
}
