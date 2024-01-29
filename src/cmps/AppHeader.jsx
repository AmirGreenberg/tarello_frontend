import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

// Cmps
import { DynamicActionModal, TO_BOTTOM } from '../cmps/dynamic-cmps/DynamicActionModal'
import {
    IconBell,
    IconWorkspace,
    TarelloLogo,

} from '../services/icons.service'

import { utilService } from '../services/util.service'
import { CreateBoardContent } from './dynamic-cmps/CreateBoardContent'
import { UserInfoModal } from './dynamic-cmps/UserInfoModal'

export function AppHeader() {
    const navigate = useNavigate()
    const [modalProps, setModalProps] = useState({})
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
    const [loggedUser, setLoggedUser] = useState({ fullname: 'Guest', imgUrl: '#c76ebe' })
    const [isViewUserInfo, setIsViewUserInfo] = useState(false)
    const user = useSelector(storeState => storeState.userModule.loggedinUser)
    const buttonRef = useRef(null)

    const initials = utilService.getInitials(user?.fullname)

    const modalContent = {
        addBoard: <CreateBoardContent {...{ onCloseModal }} />,
        userInfo: <UserInfoModal {...{ onCloseModal, user, initials, handleUserInfo, handleLogOut }} />,
    }

    useEffect(() => {
        if (user) {
            setIsUserLoggedIn(true)
            setLoggedUser(user)
        }
    }, [loggedUser])

    function onCloseModal() {
        setModalProps({})
    }

    function handleUserInfo() {
        if (user.fullname && user.fullname === 'Guest') return
        setIsViewUserInfo(!isViewUserInfo)
    }
    function handleLogOut() {
        setIsViewUserInfo(!isViewUserInfo)
        setIsUserLoggedIn(false)
        setLoggedUser({ fullname: 'Guest', imgUrl: '#c76ebe' })
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
                <button className='blue-action-btn' onClick={event => setModalProps({ event, content: modalContent.addBoard })}>Create</button>

            </section>

            <section className="btns-container">
                <div className="main-header-icon icon round">
                    <IconBell size={24} />
                </div>

                {(user) ?
                    <button className="btn-user btn-img-user" onClick={event => setModalProps({ event, content: modalContent.userInfo })} ref={buttonRef}>
                        <div className="center-svg">
                            {(!user.imgUrl) ? <span style={{ 'background': user.imgUrl }}>{initials}</span>
                                :
                                <img style={{
                                    backgroundImage: `url(${loggedUser.imgUrl})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center center',
                                    backgroundRepeat: 'no-repeat',
                                    padding: '12px'
                                }} />
                            }
                        </div>
                    </button> :

                    <div className='mar-end-8'>
                        <button onClick={() => navigate('/auth')} className='blue-action-btn'>Login</button>
                    </div>
                }

            </section>
            <DynamicActionModal {...{ ...modalProps, modalPosition: TO_BOTTOM, onOutsideClick: onCloseModal }} />
        </header>
    )
}

