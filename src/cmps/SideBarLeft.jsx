import { useEffect, useState } from "react";
import { IconNext, IconTarelloFace } from "../services/icons.service";
import { useSelector } from "react-redux";
import { MenuBoardList } from "./MenuBoardList";
import { updateBoard, loadBoards } from '../../src/store/actions/board.actions.js'
import { Link, useNavigate } from 'react-router-dom'



export function SideBarLeft() {

    const boards = useSelector((state) => state.boardModule.boards)
    const [sideBarIsOpen, settSideBarIsOpen] = useState(false)
    const [modal, setModal] = useState({ isModalOpen: false, type: null })
    const navigate = useNavigate()

    useEffect(() => {
        loadBoards().catch(() => {
            showErrorMsg('Cannot show boards')
        })
    }, [])



    function onToggleSideBar(ev) {
        ev.stopPropagation()
        settSideBarIsOpen(prevState => !prevState)
    }

    function onClickSideBar(ev) {
        ev.stopPropagation()
        settSideBarIsOpen(true)
    }

    function onSetBoard(ev, boardId) {
        ev.preventDefault()
        const board = boards.find((board) => {
            return board._id === boardId
        })
        board.isStarred = !board.isStarred
        updateBoard(board)
    }



    function onToggleStarred(ev, boardId) {
        ev.preventDefault()
        const board = boards.find((board) => {
            return board._id === boardId
        })
        board.isStarred = !board.isStarred
        updateBoard(board)
    }

    function toggleModal({ event, type }) {
        if (modal.isModalOpen) {
            setModal({ ...modal, isModalOpen: false })
            return
        }

        setModal({ isModalOpen: true, type, event })
    }


    return (
        <section
            onClick={onClickSideBar}
            id="side-bar-left"
            className={`${sideBarIsOpen ? 'side-bar-on-open' : 'side-bar-on-close'} side-bar-left`}
        >
            <button
                onClick={onToggleSideBar}
                className={sideBarIsOpen ? 'side-bar-btn clean-btn round-btn btn-on-open' : 'side-bar-btn clean-btn btn-on-close'}
                anchor="side-bar-left"
            >
                <span className="side-bar-btn-icon flex center"><IconNext size={28} color={'var(--txtClr)'} /></span>
            </button>
            {
                sideBarIsOpen &&
                <>
                    <section className="logo ">
                        <div className="square-logo flex justify-center align-center">
                            W
                        </div>
                        <div className="logo-title bold">
                            Your workspace
                        </div>
                    </section>
                    <hr className="horizontal-line" />
                    <div className="btn-container">
                        <Link className="custom-link" to="/workspace">
                            <div className="menu-item clean-btn flex justify-start align-center gap pad-left-0 ">
                                <IconTarelloFace size={16} color={'var(--txtClr)'} />
                                <span>Boards</span>
                            </div>
                        </Link>
                        <hr className="horizontal-line" />
                        <div className="borad-list-container-title flex center justify-between">
                            <span className="bold">Your boards:</span>
                        </div>
                        <MenuBoardList
                            boards={boards}
                            onToggleStarred={onToggleStarred}
                            isStarred
                        />
                    </div>
                </>
            }
        </section>
    )
}

