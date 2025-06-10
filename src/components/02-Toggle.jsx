import { useState } from "react";

export default function Toggle() {
    const [emoji, setEmoji] = useState(false)

    const onToggle = () => {setEmoji(prev => !prev)}
    
    return (
        <div className="App">
            <h2>Toggle</h2>
            <div className="emoji">{emoji ? "💡" : "🌌"}</div>
            <div className="button-group">
                <button onClick={() => {setEmoji(true)}}>Day</button>
                <button onClick={() => {setEmoji(false)}}>Night</button>
                <button onClick={onToggle}>Toggle</button>
            </div>
        </div>
    );
}
