import {useState} from "react";

interface DemoProps {}

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>Count: {count}</h1>
            <button
                onClick={() => setCount(count - 1)}
                className="border-2 border-black rounded-full p-1 m-1"
            >
                Decrement
            </button>
            <button
                onClick={() => setCount(count + 1)}
                className="border-2 border-black rounded-full p-1 m-1"
            >
                Increment
            </button>
        </div>
    )
}

export default App
