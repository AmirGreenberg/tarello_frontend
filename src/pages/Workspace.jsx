import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showErrorMsg } from '../services/event-bus.service.js'

// Actions
import {
    updateBoard,
    loadBoards,
    loadEmptyBoard,
} from '../../src/store/actions/board.actions.js'

// Cmps
import { BoardList } from '../cmps/workspace/BoardList.jsx'
import { DynamicActionModal, TO_RIGHT } from '../cmps/dynamic-cmps/DynamicActionModal.jsx'
import { CreateBoardContent } from '../cmps/dynamic-cmps/CreateBoardContent.jsx'

export function Workspace() {
    const boards = useSelector((state) => state.boardModule.boards)
    console.log('boards:', boards)
    const [modal, setModal] = useState({ isModalOpen: false, type: null })

    useEffect(() => {
        document.body.classList.remove('dark-mode')
        document.body.style.setProperty('--themeBGcolor', '#fff');
        loadBoards().catch(() => {
            showErrorMsg('Cannot show boards')
        })
        loadEmptyBoard()
    }, [])

    function getStarredBoards() {
        return boards?.filter((board) => board.isStarred)
    }

    function getUnStarredBoards() {
        return boards?.filter((board) => !board.isStarred)
    }

    async function onToggleStarred(ev, boardId) {
        ev.preventDefault();
        try {
            const board = await boards.find(board => board._id === boardId);
            if (!board) {
                throw new Error('Board not found');
            }
            board.isStarred = !board.isStarred;
            await updateBoard(board);
        } catch (error) {
            console.error('Error toggling starred status:', error);
            // Handle the error as needed
        }
    }


    function toggleModal({ event, type }) {
        if (modal.isModalOpen) {
            setModal({ ...modal, isModalOpen: false })
            return
        }

        setModal({ isModalOpen: true, type, event })
    }

    return (
        <section className="workspace-page">
            <section className="all-boards">
                <div className="content-all-boards">
                    <section className="stared-boards-section">
                        <div className="title-header">
                            <div className="title-header-icon-container">
                                <img
                                    src="../src/assets/icons/8_star_workspace_header.svg"
                                    alt=""
                                    className="header-icon"
                                />
                            </div>
                            <h3>Starred boards</h3>
                        </div>
                        <div className="primary-boards-container-section">
                            <BoardList
                                boards={getStarredBoards()}
                                onToggleStarred={onToggleStarred}
                                isStarred
                            />
                        </div>
                    </section>
                    <section className="recent-boards-section ">
                        <div className="title-header">
                            <div className="title-header-icon-container">
                                <img
                                    src="../src/assets/icons/18_clock_workspace_header.svg"
                                    alt=""
                                    className="header-icon"
                                />
                            </div>
                            <h3>Recently viewed</h3>
                        </div>
                        <div className="primary-boards-container-section">
                            {boards && boards?.length > 0 && <BoardList
                                boards={boards}
                                onToggleStarred={onToggleStarred}
                                toggleModal={toggleModal}
                            />}
                        </div>
                    </section>
                </div>
            </section>
            {modal.isModalOpen && (
                <DynamicActionModal
                    event={modal.event}
                    content={<CreateBoardContent onToggleModal={toggleModal} />}
                    modalPosition={TO_RIGHT}
                    onOutsideClick={() => setModal(prev => ({ ...prev, isModalOpen: false }))}
                />
            )}
        </section>
    )
}
