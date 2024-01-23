import { Link } from 'react-router-dom'
import { DynamicActionModal, TO_RIGHT } from '../dynamic-cmps/DynamicActionModal'
import { useState } from 'react'
import { CreateBoardContent } from '../dynamic-cmps/CreateBoardContent'

export function BoardList({
    boards,
    onToggleStarred,
    isStarred = false,
}) {
    const [modal, setModal] = useState({ isModalOpen: false, type: null })

    function toggleModal({ event, type }) {
        if (modal.isModalOpen) {
            setModal({ ...modal, isModalOpen: false })
            return
        }

        setModal({ isModalOpen: true, type, event })
    }

    if (!boards?.length) return <></>
    return (
        <div className="board-list">
            {boards.map((board) => {
                return (
                    <Link
                        key={board._id}
                        className="clean-ref "
                        to={`/board/${board._id}`}
                    >
                        <div
                            className="board-preview "
                            style={{
                                background: board.style.backgroundColor
                                    ? `url("${board.style.background}") center center / cover`
                                    : `url("${board.style.backgroundImage}${board.style.backgroundImage?.includes('unsplash') ? '&w=400' : ''}") center center / cover`,
                            }}
                        >
                            <div className="board-preview-details">
                                <div className="board-title-container">
                                    <h3>
                                        {board.title.length > 20
                                            ? board.title.substring(0, 20) +
                                            '...'
                                            : board.title}
                                    </h3>
                                </div>
                                <div className="starred-container">
                                    {board.isStarred ? (
                                        <img
                                            src="../src/assets/icons/11_star_yellow_filled.svg"
                                            alt=""
                                            title="Click to unstar this board. It will be removed from your starred list."
                                            className="star-icon starred"
                                            onClick={(ev) => {
                                                onToggleStarred(ev, board._id)
                                            }}
                                        />
                                    ) : (
                                        <img
                                            src="../src/assets/icons/8_star_white_unfilled.svg"
                                            alt=""
                                            title="Click to star this board. It will be added to your starred list."
                                            className="star-icon"
                                            onClick={(ev) =>
                                                onToggleStarred(ev, board._id)
                                            }
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })}
            {!isStarred && (
                <div
                    className="add-board-preview create-new-board-btn board-preview flex align-center justify-center"
                    style={{ padding: '0' }}
                    onClick={(event) => {
                        toggleModal({
                            event,
                            type: 'createBoard',
                        })
                    }}
                >
                    <span>Create new board</span>
                </div>
            )}
            {modal.isModalOpen && (
                <DynamicActionModal
                    event={modal.event}
                    content={<CreateBoardContent onToggleModal={toggleModal} />}
                    modalPosition={TO_RIGHT}
                    onOutsideClick={() => setModal(prev => ({ ...prev, isModalOpen: false }))}
                />
            )}
        </div>
    )
}
