import React from 'react';
import { Link } from 'react-router-dom'


export function HomePageHeader() {
    return (
        
        <header className="header-row">
            <nav className="homepage-header flex justify-between align-center">
                <div className="logo-area flex">
                    <Link to="/">
                        <div className="logo-area header-btn flex">
                            <img style={{width:"40px"}}
                                src="https://res.cloudinary.com/dtty3yxsg/image/upload/v1705387866/logo-gif5_ac1nlh.gif"
                                alt=""
                                className="gif-icon"
                            />
                            <img
                                src="https://res.cloudinary.com/dtty3yxsg/image/upload/v1705388374/Tarello_logo_mvrvlk.svg"
                                alt=""
                                className="logo-title"
                            />
                        </div>
                    </Link>
                </div>
                <div className="homepage-header-links">
                    <Link to="/auth">
                        <button className="hompage-header-login-btn">
                            Login
                        </button>
                    </Link>

                    <Link to={'/workspace'}>
                        <button className="btn-action login-btn flex">
                            Start now
                        </button>
                    </Link>
                </div>
            </nav>
        </header>
    )
}
