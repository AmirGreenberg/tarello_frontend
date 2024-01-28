import { useEffect, useRef } from 'react';
import { logout } from '../../store/actions/user.actions';
import { useNavigate } from 'react-router-dom'
import { utilService } from '../../services/util.service';
import { IconX } from '../../services/icons.service';

export function UserInfoModal({ onCloseModal, user, initials, handleUserInfo, handleLogOut }) {
    console.log("🚀  user:", user)
    // const { top, left } = position
    const navigate = useNavigate()
    const modalRef = useRef(null)
    const isComponentMounted = useRef(false)

    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (modalRef.current && !modalRef.current.contains(event.target)) {
    //             if (isComponentMounted.current) handleUserInfo()
    //         }
    //         isComponentMounted.current = true
    //     }
    //     document.addEventListener("click", handleClickOutside)

    //     return () => {
    //         document.removeEventListener("click", handleClickOutside)
    //     }

    // }, [handleUserInfo])

    const { email, fullname, imgUrl } = user

    async function onLogout() {
        try {
            await logout()
            handleLogOut()
            onCloseModal()
            navigate('/auth')
        } catch (err) {
            console.log('err:', err)
        }
    }
    return (
        <section className=" scroll">
            <section className="modal-header">

                <h6 className="modal-header-txt" title="Create board">
                    Account
                </h6>

                <button
                    onClick={(event) => onCloseModal()}
                    aria-label="Close popover"
                    className="popover-close-btn align-center"
                    data-testid="popover-close"
                >
                    <span aria-hidden="true" className="span-close align-center">
                        <IconX size={10} color={'var(--txtClrDark)'} />

                    </span>
                </button>
            </section>

            <section className="modal-details">
                <div className="background-container">
                    <section className="feature-attachment scroll">
                        <div className="user-info-modal" ref={modalRef}>
                            <div className="user-info-modal-content pad0">
                                <div>
                                    {(imgUrl) ? <span className='user-info-modal-img' style={{ 'background': imgUrl }}>{initials}</span>
                                        :
                                        <span className='user-info-modal-img' style={{ 'background': `#baf3db` }}>{initials}</span>
                                    }

                                </div>
                                <div className="user-info-modal-text">
                                    <h5 className="mar0">{fullname}</h5>
                                    <p className="mar0">{email}</p>
                                </div>
                            </div>
                            <hr />
                            <button className="upload-btn mar0" onClick={onLogout}>Logout</button>
                        </div>
                    </section>
                </div>
            </section>
        </section>
    )
}