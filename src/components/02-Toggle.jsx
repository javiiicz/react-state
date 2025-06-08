import { useState } from 'react'

export default function Toggle() {
  const [isOn, setIsOn] = useState(false)
  const setDay = e => setIsOn(true)
  const setNight = e => setIsOn(false)
  const toggle = e => setIsOn(!isOn)
  return (
    <div className="App">
      <h2>Toggle</h2>
      <div className="emoji">{isOn ? '💡' : '🌌'}</div>
      <div className="button-group">
        <button onClick={setDay}>Day</button>
        <button onClick={setNight}>Night</button>
        <button onClick={toggle}>Toggle</button>
      </div>
    </div>
  )
}
