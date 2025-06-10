import { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h2>Counter</h2>
            <h3>{counter}</h3>
            <div className="button-group">
                <button
                    onClick={() => {
                        setCounter((prev) => prev + 1);
                    }}
                >
                    Increase
                </button>
                <button
                    onClick={() => {
                        setCounter((prev) => prev - 1);
                    }}
                >
                    Decrease
                </button>
            </div>
        </div>
    );
}
