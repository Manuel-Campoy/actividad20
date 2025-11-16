import { useEffect, useState } from "react"

const App = () => {
    const [count, setCount] = useState({ count: 0})
    const [step, setStep] = useState(1)

    const copy = { ...count }

    useEffect(() => {
        console.log('useEffect', count)
        document.title = count.count
    }, [count])

    return (
    <div>
        <h1>{count.count}</h1>
        <h2>Step: {step}</h2>
        <button
            onClick={() => {
                setCount({ count: count.count + step });
            }}
        >
            Incrementar
        </button>
        <button
            onClick={() => {
                setStep(step + 1);
            }}
        >
            Incrementar step
        </button>
    </div>
    )
}

export default App
