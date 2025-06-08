import { useState } from 'react'

function ButtonGroup({ inc, dec }) {
  return (
    <div className="button-group">
      <button onClick={inc}>Increase</button>
      <button onClick={dec}>Decrease</button>
    </div>
  )
}

function CountDisplay({ count }) {
  return <h3>{count}</h3>
}

export default function Counter() {
  const [count, setCount] = useState(0)
  const inc = e => setCount(count + 1)
  const dec = e => setCount(count - 1)

  return (
    <div>
      <h2>Counter</h2>
      <CountDisplay count={count} />
      <ButtonGroup inc={inc} dec={dec} />
    </div>
  )
}
