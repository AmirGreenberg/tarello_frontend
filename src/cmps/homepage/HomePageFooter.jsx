import { useRef } from 'react';
import { Link } from 'react-router-dom';

export function HomePageFooter({ scrollToTop }) {

    return (
        <footer className="homepage-footer flex align-center justify-center">
            <section className="upper-section justify-between flex align-center">
                <button className='clean-btn' onClick={scrollToTop}>
                    <div className="footer-logo align-center justify-center">
                        <div className="logo flex align-center justify-center">
                            <Link to="/">
                                <div className="logo-area header-btn flex">
                                    <img
                                        src="https://res.cloudinary.com/dtty3yxsg/image/upload/v1705387866/logo-gif5_ac1nlh.gif"
                                        alt=""
                                        className="gif-icon"
                                    />
                                    <img
                                        src="../src/assets/icons/logo_white.svg"
                                        alt=""
                                        className="logo-title"
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>
                </button>
            </section>
        </footer>
    )
}
