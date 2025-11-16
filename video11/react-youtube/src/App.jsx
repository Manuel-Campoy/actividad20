import { useEffect, useState } from "react"

const App = () => {
    const [count, setCount] = useState(0)

    console.log('Render, antes')

    useEffect(() => {
        if (count === 0) return
        console.log('useEffect', count)
        document.title = count
    })

    console.log('Render, despues')

    return (
    <div>
        <h1>{count}</h1>
        <button
            onClick={() => {
                setCount(count + 1);
                // document.title = count + 1;
            }}
        >
            +1
        </button>
        <button
            onClick={() => {
                setCount(count + 2);
                // document.title = count + 2;
            }}
        >
            +2
        </button>
        <button
            onClick={() => {
                setCount(count + 3);
                // document.title = count + 3;
            }}
        >
            +3
        </button>
    </div>
    )
}

export default App
