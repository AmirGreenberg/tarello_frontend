import { useEffect, useState } from 'react'
import { loadUsers, login, signup } from '../store/actions/user.actions'
import { useNavigate, useLocation } from 'react-router-dom'
import { IconAlert, IconWarning } from '../services/icons.service'
import { utilService } from '../services/util.service'

export function LoginSignup() {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
        fullname: '',
    })
    const [isSignup, setIsSignup] = useState(false)
    const [isLoginCredentialsWrong, setIsLoginCredentialsWrong] =
        useState(false)
    const [isSignUpCredentialsWrong, setIsSignUpCredentialsWrong] =
        useState(false)
    const [isPasswordEmpty, setIsPasswordEmpty] = useState(false)
    const [isEmailEmpty, setIsEmailEmpty] = useState(false)
    const [isFullNameEmpty, setIsFullNameEmpty] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (location.state) {
            setIsSignup(true)
            setCredentials({ ...credentials, username: location.state })
        }
        loadUsers()
        sessionStorage.removeItem('')
    }, [])

    async function onLogin(ev) {
        ev.preventDefault()
        try {
            await login(credentials)
            navigate(`/workspace`)
        } catch (err) {
            console.log('cannot login')
            setIsLoginCredentialsWrong(true)
            if (!credentials.username) setIsEmailEmpty(true)
            if (!credentials.password) setIsPasswordEmpty(true)
            throw err
        }
    }

    async function onSignup(ev) {
        ev.preventDefault()
        try {
            await signup(credentials)
            navigate(`/workspace`)
            clearState()
        } catch (err) {
            setIsSignUpCredentialsWrong(true)
            if (!credentials.username) setIsEmailEmpty(true)
            if (!credentials.password) setIsPasswordEmpty(true)
            if (!credentials.fullname) setIsFullNameEmpty(true)
            console.log('cannot sign up')
        }
    }

    function clearState() {
        setCredentials({ username: '', password: '', fullname: '' })
        setIsSignup(false)
    }

    function handleChange(ev) {
        const field = ev.target.name
        const value = ev.target.value

        setCredentials({ ...credentials, [field]: value })
    }

    function toggleSignup(ev) {
        setIsSignup(!isSignup)
    }
    return (
        <div className="login-signup-page">
            <section className="main-login">
                <div className="login-container">
                    <div className="login-container-layout flex column">
                        <div className="logo-area header-btn flex">
                            <img
                                src="https://res.cloudinary.com/dtty3yxsg/image/upload/v1705387866/logo-gif5_ac1nlh.gif"
                                alt=""
                                className="gif-icon"
                            />
                            <img
                                src="https://res.cloudinary.com/dtty3yxsg/image/upload/v1705388374/Tarello_logo_mvrvlk.svg"
                                alt=""
                                className="logo-title"
                            />
                        </div>{' '}
                        {!isSignup && (
                            <div>
                                <h1 className="login-signup-title">
                                    Log in to continue
                                </h1>

                                {isLoginCredentialsWrong && (
                                    <div className="credentials-warning">
                                        <div className="warning-icon">
                                            <IconWarning />
                                        </div>
                                        <div>
                                            <p>
                                                Incorrect username and / or
                                                password.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                <div className="login-password-container">
                                    <form
                                        className="login-form"
                                        onSubmit={(e) => onLogin(e)}
                                    >
                                        <input
                                            className="email-input "
                                            type="username"
                                            placeholder="Enter username"
                                            name="username"
                                            value={credentials.username}
                                            onChange={handleChange}
                                        />

                                        {isEmailEmpty &&
                                            isLoginCredentialsWrong && (
                                                <div className="empty-input">
                                                    <span className="alert-icon">
                                                        <IconAlert />
                                                    </span>
                                                    <span>
                                                        Enter your username
                                                    </span>
                                                </div>
                                            )}

                                        <input
                                            className="email-input "
                                            type="password"
                                            placeholder="Enter password"
                                            name="password"
                                            value={credentials.password}
                                            onChange={handleChange}
                                        />
                                        {isPasswordEmpty &&
                                            isLoginCredentialsWrong && (
                                                <div className="empty-input">
                                                    <span className="alert-icon">
                                                        <IconAlert />
                                                    </span>
                                                    <span>
                                                        Enter your password
                                                    </span>
                                                </div>
                                            )}

                                        <button className="btn-action login-btn flex ">
                                            Log in
                                        </button>
                                    </form>
                                    <p className="or-btn">OR</p>
                                </div>
                            </div>
                        )}
                        {isSignup && (
                            <div>
                                <h1 className="login-signup-title">
                                    Sign up to continue
                                </h1>
                                <div className="login-password-container">
                                    <form
                                        className="login-form"
                                        onSubmit={(ev) => onSignup(ev)}
                                    >
                                        <input
                                            className="email-input "
                                            type="username"
                                            placeholder="Enter email"
                                            name="username"
                                            value={credentials.username}
                                            onChange={handleChange}
                                        />
                                        {isEmailEmpty &&
                                            isSignUpCredentialsWrong && (
                                                <div className="empty-input">
                                                    <span className="alert-icon">
                                                        <IconAlert />
                                                    </span>
                                                    <span>
                                                        Please enter an username
                                                        address
                                                    </span>
                                                </div>
                                            )}

                                        <input
                                            className="email-input "
                                            type="text"
                                            placeholder="Enter full name"
                                            name="fullname"
                                            value={credentials.fullname}
                                            onChange={handleChange}
                                        />

                                        {isFullNameEmpty &&
                                            isSignUpCredentialsWrong && (
                                                <div className="empty-input">
                                                    <span className="alert-icon">
                                                        <IconAlert />
                                                    </span>
                                                    <span>
                                                        Please enter full name
                                                    </span>
                                                </div>
                                            )}

                                        <input
                                            className="email-input "
                                            type="password"
                                            placeholder="Enter password"
                                            name="password"
                                            value={credentials.password}
                                            onChange={handleChange}
                                        />

                                        {isPasswordEmpty &&
                                            isSignUpCredentialsWrong && (
                                                <div className="empty-input">
                                                    <span className="alert-icon">
                                                        <IconAlert />
                                                    </span>
                                                    <span>
                                                        Please enter password
                                                    </span>
                                                </div>
                                            )}

                                        <p className="legal-message">
                                            By signing up, I accept the
                                            Atlassian{' '}
                                            <span className="policy-btn">
                                                Cloud Terms of Service
                                            </span>{' '}
                                            and acknowledge{' '}
                                            <span className="policy-btn">
                                                the Privacy Policy
                                            </span>
                                            .
                                        </p>
                                        <button className="btn-action login-btn flex ">
                                            Sign up
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}
                        <hr />
                        <button
                            className={'account-btn'}
                            onClick={toggleSignup}
                        >
                            {!isSignup
                                ? 'Create an account'
                                : 'Already have an account? Log in'}
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
