import {useState, useEffect} from "react";

interface DemoProps {}

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // The code that we want to run
        console.log("The count is:", count);

        // Optional return function
        return () => {
            console.log("I am being cleaned up!");
        }
    }, [count]); // The dependency array

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
