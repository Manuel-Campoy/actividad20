import { useState } from "react";

/* const App = () => {
    const [search, setSearch] = useState('');

    if (search === 'reset') setSearch('');

    return (
        <form>
            <input 
            type="text" 
            name="search" 
            autoComplete="off"
            value={search}
            onChange={ev => setSearch(ev.target.value)}
            />
            <button type="submit">Buscar</button>
            <p>Resultados para: {search}</p>
        </form>
    )
} */

const App = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const errorMessage = validate(email, password)

    return (
        <form onSubmit={ev => {
            ev.preventDefault()
            // const eventEmail = ev.target.email.value 
            login(email, password)
            }}
        >
            <input 
                type="text"
                name="email"
                placeholder="Email"
                autoComplete="off"
                value={email}
                onChange={ev => setEmail(ev.target.value)} 
            />
            <input 
                type="password" 
                name="password" 
                placeholder="Contraseña"
                value={password}
                onChange={ev => setPassword(ev.target.value)}
            />
            <p>{errorMessage}</p>
            <button type="submit" disabled={errorMessage}>Inicar sesión</button>
        </form>
    )
}

const login = (email, password) => {
    if (email === 'hola@desarrolloutil.com' && password === 'test')
        alert('Login correcto')
    else alert('Login incorrecto')
}

const validate = (email, password) => {
    if (!email.includes('@')) return 'Email incorrecto'
    if (!password.lenght < 4) return 'Contraseña incorrecta'
}

export default App
