import { useState } from 'react'

export default function Input() {
  const [value, setValue] = useState('')
  const handleChange = e => {
    console.log('handling change...')
    const { value } = e.target
    setValue(value)
  }
  return (
    <div className='container'>
      <h2>Input</h2>
      <input type="text" value={value} onChange={handleChange} />
      <h3>The value inside the input is... {value}</h3>
    </div>
  )
}
