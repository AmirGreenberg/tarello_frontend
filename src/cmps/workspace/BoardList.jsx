import { Link } from 'react-router-dom'
import { DynamicActionModal, TO_RIGHT } from '../dynamic-cmps/DynamicActionModal'
import { useState } from 'react'
import { CreateBoardContent } from '../dynamic-cmps/CreateBoardContent'

export function BoardList({
    boards,
    onToggleStarred,
    isStarred = false,
}) {
    const [modalProps, setModalProps] = useState({})
    const modalContent = {
        addBoard: <CreateBoardContent {...{ onCloseModal }} />,
    }

    function onCloseModal() {
        setModalProps({})
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
                                            src="https://res.cloudinary.com/dqjddwtf4/image/upload/v1706438603/11_star_yellow_filled_xy9fw2.svg"
                                            alt=""
                                            title="Click to unstar this board. It will be removed from your starred list."
                                            className="star-icon starred"
                                            onClick={(ev) => {
                                                onToggleStarred(ev, board._id)
                                            }}
                                        />
                                    ) : (
                                        <img
                                            src="https://res.cloudinary.com/dqjddwtf4/image/upload/v1706438639/8_star_white_unfilled_ama09b.svg"
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
                    onClick={event => setModalProps({ event, content: modalContent.addBoard })}
                >
                    <span>Create new board</span>
                </div>
            )}
            <DynamicActionModal {...{ ...modalProps, modalPosition: TO_RIGHT, onOutsideClick: onCloseModal }} />
        </div>
    )
}
