import { useState } from "react";

export default function Input() {
    const [input, setInput] = useState('')

    return (
        <div className="container">
            <h2>Input</h2>
            <input type="text" value={input} onChange={e => {setInput(e.target.value)}}/>
            <h3>The value inside the input is... {input}</h3>
        </div>
    );
}
