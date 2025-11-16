import { useEffect, useState } from "react"

/* const Counter = () => {
    const [count, setCount] = useState(0)

    console.log('render', count)

    useEffect(() => {
        console.log('useEffect', count)

        return () => console.log('cleanup', count)
    }, [count])

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}> Incrementar </button>
        </div>
    )
} */

/* const ClicksCounter = () => {
    const [clicks, setClicks] = useState(0)

    useEffect(() => {
        const handleClick = () => {
            console.log('handleClick')    
            setClicks(prevClicks => prevClicks + 1)
        }

        document.addEventListener('click', handleClick)

        return () => document.removeEventListener('click', handleClick)
    }, [])

    return <h1>{clicks}</h1>
} */

/* const Interval = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('interval')
            setCount(prevCount => prevCount + 1)
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
} */

/* const App = () => {
    const [show, setShow] = useState(true)

    return (
        <div>
            {show && <Interval />}
            <button onClick={() => setShow(!show)}> Mostrar/Ocultar </button>
        </div>
    )
} */

const App = () => {
    const [count, setCount] = useState(0)
    const [play, setPlay] = useState(true)

    useEffect(() => {
        if (!play) return 
        const intervalId = setInterval(
            () => setCount(prevCount => prevCount + 1),
            1000
        )

        return () => clearInterval(intervalId)
    }, [play])

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setPlay(!play)}> {play ? 'Pause': 'Play'} </button>
        </div>
    )
}

export default App
