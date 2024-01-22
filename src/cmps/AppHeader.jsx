import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

// Cmps
import { DynamicActionModal, TO_BOTTOM } from '../cmps/dynamic-cmps/DynamicActionModal'
import {
    IconArrowDown,
    IconBell,
    IconInfo,
    IconSearch,
    IconShare,
    IconWorkspace,
    TarelloLogo,

} from '../services/icons.service'

import { utilService } from '../services/util.service'
import { CreateBoardContent } from './dynamic-cmps/CreateBoardContent'

export function AppHeader() {
    const navigate = useNavigate()
    const [modal, setModal] = useState({ isModalOpen: false, type: null })
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
    const [loggedUser, setLoggedUser] = useState({
        fullname: 'Guest',
        imgUrl: '#',
    })
    const [isViewUserInfo, setIsViewUserInfo] = useState(false)
    const [userInfoPostion, setUserInfoPostion] = useState({
        left: null,
        top: null,
    })
    const buttonRef = useRef(null)
    const user = useSelector((storeState) => storeState.userModule.loggedinUser)
    const initials = utilService.getInitials(loggedUser.fullname)

    function handleUserInfo() {
        if (loggedUser.fullname === 'Guest') return
        const buttonRect = buttonRef.current.getBoundingClientRect()
        setUserInfoPostion({
            left: buttonRect.left - 265,
            top: buttonRect.top + 40,
        })
        setIsViewUserInfo(!isViewUserInfo)
    }
    function handleLogOut() {
        setIsViewUserInfo(!isViewUserInfo)
        setIsUserLoggedIn(false)
        setLoggedUser({ fullname: 'Guest', imgUrl: '#' })
    }

    function toggleModal({ event, type }) {
        if (modal.isModalOpen) {
            setModal({ ...modal, isModalOpen: false })
            return
        }

        setModal({ isModalOpen: true, type, event })
    }

    return (
        <header className="app-header">
            <section className="btns-container">
                <Link to="/" className="custom-link">
                    <div className="logo-area header-btn">
                        <img
                            src="https://res.cloudinary.com/dtty3yxsg/image/upload/v1705387866/logo-gif5_ac1nlh.gif"
                            className="gif-icon"
                        />
                        <TarelloLogo size={70} />
                    </div>
                </Link>
                <button className="header-btn" onClick={() => navigate('/workspace')}>
                    Workspaces
                    <IconWorkspace />

                </button>
                {/* <button className="header-btn">
                    Recent
                    <IconArrowDown />
                </button> */}
                {/* <button className="header-btn">
                    Starred
                    <IconArrowDown />
                </button> */}
                {/* <button className="header-btn">
                    Templates
                    <IconArrowDown />
                </button> */}
                <button
                    onClick={(event) => {
                        toggleModal({
                            event,
                            type: 'createBoard',
                        })
                    }}
                    className="create-btn header-btn"
                >
                    Create
                </button>
            </section>

            <section className="btns-container">
                <div className="main-header-icon icon round">
                    <IconBell size={24} />
                </div>

                {/* <div className="main-header-icon icon round">
                    <IconInfo size={24} />
                </div> */}

                {isUserLoggedIn && user ? (
                    <button
                        className="btn-user btn-img-user"
                        onClick={handleUserInfo}
                        ref={buttonRef}
                    >
                        <div className="center-svg">
                            {user.imgUrl[0] === '#' ? (
                                <span style={{ background: user.imgUrl }}>
                                    {initials}
                                </span>
                            ) : (
                                <img
                                    style={{
                                        backgroundImage: `url(${loggedUser.imgUrl})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center center',
                                        backgroundRepeat: 'no-repeat',
                                        padding: '12px',
                                    }}
                                />
                            )}
                        </div>
                    </button>
                ) : (
                    <button
                        onClick={() => navigate('/auth')}
                        className="header-btn login-btn flex center"
                    >
                        Login
                    </button>
                )}
            </section>
            {modal.isModalOpen && (
                <DynamicActionModal
                    event={modal.event}
                    content={<CreateBoardContent onToggleModal={toggleModal} />}
                    modalPosition={TO_BOTTOM}
                    onOutsideClick={() => setModal(prev => ({ ...prev, isModalOpen: false }))}
                />
            )}
        </header>
    )
}
