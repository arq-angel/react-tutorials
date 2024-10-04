import {useMemo, useState} from "react";
import {initialItems} from "./utils";

interface AppProps {};

function App({}: AppProps) {
    const [count, setCount] = useState(0);
    const [items] = useState(initialItems);

    /*const selectedItem = useMemo(
    () => items.find((item) => item.isSelected),
    [items],
    );*/

    const selectedItem = useMemo(() => items.find((item) => item.id === count), [items, count],);

    return (
        <div>
            <h1>Count: {count}</h1>
            <h1>Selected Item: {selectedItem?.id}</h1>
            <button onClick={() => setCount(count + 1)}
                    className="border-2 border-black p-2 rounded-full"
            >
                Increment
            </button>
        </div>
    )
}

export default App