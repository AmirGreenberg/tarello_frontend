import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function HomePageSignUp() {
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    function handleChange(ev) {
        const value = ev.target.value
        setEmail(value)
    }

    function onSubmit() {
        navigate('/auth', { state: email })
    }

    return (
        <div className="homepage-signup-container">
            <div className="signup-content">
                <h2>Get started with Tarello today</h2>
                <form onSubmit={onSubmit}>
                    <input
                        className="email-input"
                        value={email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Email"
                    />
                    <button className="btn-action">Sign up - it's free!</button>
                </form>
            </div>
        </div>
    )
}
