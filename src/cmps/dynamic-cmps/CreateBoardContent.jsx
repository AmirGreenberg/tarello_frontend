import { useState } from 'react'
import { useDispatch } from 'react-redux'
import boardPreview from '../../assets/img/board-preview.svg'
import { useNavigate } from 'react-router-dom'

// Actions
import { addBoard, loadBoard } from '../../store/actions/board.actions'
import { boardService } from '../../services/board.service'

export function CreateBoardContent({ onToggleModal }) {
    const navigate = useNavigate()

    const [board, setBoard] = useState(
        boardService.createBoard(
            'https://images.unsplash.com/photo-1703818770847-0f2948e0611b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNzA0NTUwNjgwfA&ixlib=rb-4.0.3&q=80&w=400'
        )
    )

    function setSelectedBackground(background, type, link) {
        if (type === 'color') {
            setBoard({
                ...board,
                style: {
                    ...board.style,
                    backgroundImage: link,
                    backgroundColor: undefined,
                    background: background,
                },
            })
        } else {
            setBoard({
                ...board,
                style: {
                    ...board.style,
                    backgroundColor: undefined,
                    backgroundImage: link,
                    background: background,
                },
            })
        }
    }

    function onAddBoard(ev) {
        ev.preventDefault()
        if (!board.title) return
        closeModal(ev)
        setBoard({ ...board, title: '' })
        addBoard(board)
            .then((addedBoard) => loadBoard(addedBoard._id))
            .then((addedBoard) => navigate(`/board/${addedBoard._id}`))
    }

    function closeModal(event) {
        onToggleModal({ event, type: 'createBoard' })
    }

    const gColors = [
        {
            title: '❄️',
            url: 'https://trello.com/assets/707f35bc691220846678.svg',
            link: 'https://trello.com/assets/707f35bc691220846678.svg',
        },
        {
            title: '🌊',
            url: '	https://trello.com/assets/d106776cb297f000b1f4.svg',
            link: 'https://trello.com/assets/707f35bc691220846678.svg',
        },
        {
            title: '🔮',
            url: 'https://trello.com/assets/8ab3b35f3a786bb6cdac.svg',
            link: 'https://trello.com/assets/8ab3b35f3a786bb6cdac.svg',
        },
        {
            title: '🌈',
            url: 'https://trello.com/assets/a7c521b94eb153008f2d.svg',
            link: 'https://trello.com/assets/a7c521b94eb153008f2d.svg',
        },
        {
            title: '🍑',
            url: 'https://trello.com/assets/aec98becb6d15a5fc95e.svg',
            link: 'https://trello.com/assets/aec98becb6d15a5fc95e.svg',
        },
        {
            title: '🌸',
            url: 'https://trello.com/assets/b75536d1afb40980ca57.svg',
            link: 'https://trello.com/assets/b75536d1afb40980ca57.svg',
        },
    ]

    const gImages = [
        {
            title: 'Custon image',
            url: 'https://images.unsplash.com/photo-1703818770847-0f2948e0611b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNzA0NTQzNDc5fA&ixlib=rb-4.0.3&q=80',
            link: 'https://images.unsplash.com/photo-1703818770847-0f2948e0611b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNzA0NTQzNDc5fA&ixlib=rb-4.0.3&q=80',
        },
        {
            title: 'Custon image',
            url: 'https://images.unsplash.com/photo-1690321607822-669326f4e3cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDJ8MzE3MDk5fHx8fHwyfHwxNzA0NTQzNDc5fA&ixlib=rb-4.0.3&q=80',
            link: 'https://images.unsplash.com/photo-1690321607822-669326f4e3cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDJ8MzE3MDk5fHx8fHwyfHwxNzA0NTQzNDc5fA&ixlib=rb-4.0.3&q=80',
        },
        {
            title: 'Custon image',
            url: 'https://images.unsplash.com/photo-1703758435024-c91738662ab8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDN8MzE3MDk5fHx8fHwyfHwxNzA0NTQzNDc5fA&ixlib=rb-4.0.3&q=80',
            link: 'https://images.unsplash.com/photo-1703758435024-c91738662ab8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDN8MzE3MDk5fHx8fHwyfHwxNzA0NTQzNDc5fA&ixlib=rb-4.0.3&q=80',
        },
        {
            title: 'Custon image',
            url: 'https://images.unsplash.com/photo-1701703995100-cf8f31378968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDR8MzE3MDk5fHx8fHwyfHwxNzA0NTQzNDc5fA&ixlib=rb-4.0.3&q=80',
            link: 'https://images.unsplash.com/photo-1701703995100-cf8f31378968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDR8MzE3MDk5fHx8fHwyfHwxNzA0NTQzNDc5fA&ixlib=rb-4.0.3&q=80',
        },
    ]
    return (
        <section className="create-board-modal">
            <section className="modal-header">
                <h6 className="modal-header-txt" title="Create board">
                    Create board
                </h6>

                <button
                    onClick={(event) => closeModal(event)}
                    aria-label="Close popover"
                    className="popover-close-btn"
                    data-testid="popover-close"
                >
                    <span aria-hidden="true" className="span-close">
                        <img
                            src="https://res.cloudinary.com/dqjddwtf4/image/upload/v1706438668/close-modal-x_hqmwzk.svg"
                            alt=""
                            className="header-icon"
                        />
                    </span>
                </button>
            </section>
            <section className="modal-details">
                <div className="board-preview-wrapper">
                    <div
                        className="board-preview-container"
                        style={{
                            background: board.style.backgroundColor
                                ? `url("${board.style.background}") center center / cover`
                                : `url("${board.style.background}${board.style.background.includes('unsplash') ? '&w=400' : ''}") center center / cover`,
                        }}
                    >
                        <img src={boardPreview} alt="" />
                    </div>
                </div>
                <div className="background-container">
                    <div>
                        <label>Background</label>
                    </div>
                    <div className="background-picker">
                        <ul className="background-list clean-list flex">
                            {gImages.map((img, idx) => (
                                <li key={idx} className="img-container" style={{
                                    margin: `3px`,
                                }}>
                                    <button
                                        className="background-select"
                                        type="button"
                                        onClick={() => {
                                            setSelectedBackground(
                                                img.url,
                                                'photo',
                                                img.link
                                            )
                                        }}
                                        title={img.title}
                                        style={{
                                            background: `url("${img.url}${board.style.background.includes('unsplash') ? '&w=400' : ''}") center center / cover`,
                                        }}
                                    ></button>
                                </li>
                            ))}
                        </ul>
                        <ul className="background-list clean-list flex">
                            {gColors.map((color, idx) => (
                                <li key={idx}>
                                    <button
                                        className="background-select"
                                        onClick={() =>
                                            setSelectedBackground(
                                                color.url,
                                                'color',
                                                color.link
                                            )
                                        }
                                        type="button"
                                        title={color.title}
                                        style={{
                                            background: `url("${color.url}") center center / cover`,
                                        }}
                                    ></button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <label>Board Title</label>

                    <form onSubmit={onAddBoard}>
                        <input
                            type="text"
                            className={`add-board-title ${board.title ? '' : 'error'}`}
                            value={board.title}
                            onChange={(ev) =>
                                setBoard(board => ({ ...board, title: ev.target.value }))
                            }
                        />

                        <button
                            className={`create-btn ${board.title ? 'filled' : ''}`}
                            onClick={onAddBoard}
                        >
                            Create
                        </button>
                    </form>
                </div>
            </section>
        </section>
    )
}
