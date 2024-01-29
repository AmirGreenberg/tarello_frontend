import { useSelector } from 'react-redux'

import {
    Icon3DotsWithSpacing,
    IconSearch,
    IconStarFull,
    IconStarOutline,
} from '../../services/icons.service'
import { useEffect, useRef, useState } from 'react'
import useOutsideClick from '../customHooks/useOutsideClick'
import { MemberImg } from '../task-details/MemberImg'

export function BoardHeader({ onSetFilter, onUpdateBoard }) {
    const storeBoradTitle = useSelector(state => state.boardModule.board.title)
    const storeIsStarred = useSelector(state => state.boardModule.board.isStarred)
    const members = useSelector(state => state.boardModule.board.members)

    const [boardTitle, setBoardTitle] = useState(storeBoradTitle)
    const [isStarred, setIsStarred] = useState(storeIsStarred)
    const [isEditingBoardTitle, setIsEditingBoardTitle] = useState(false)
    const refInputBoardTitle = useRef()

    useOutsideClick(refInputBoardTitle, () => setIsEditingBoardTitle(false))

    useEffect(() => {
        setBoardTitle(storeBoradTitle)
    }, [storeBoradTitle])

    useEffect(() => {
        setIsStarred(storeIsStarred)
    }, [storeIsStarred])

    function onChangeBoardTitle(ev) {
        const title = ev.target.value
        setBoardTitle(title)
        onUpdateBoard('title', title, true)
    }

    function onChangeIsStarred() {
        setIsStarred(prevIsStarred => {
            const newIsStarred = !prevIsStarred
            onUpdateBoard('isStarred', newIsStarred, true)
            return newIsStarred
        })
    }

    return (
        <header className="board-header">
            <section className="btns-container h100">
                {
                    isEditingBoardTitle
                        ?
                        <input
                            className="board-title input-cleaner"
                            type="text"
                            value={boardTitle}
                            onChange={onChangeBoardTitle}
                            ref={refInputBoardTitle}
                            autoFocus
                        />
                        :
                        <button
                            className="board-title header-btn"
                            onClick={() => setIsEditingBoardTitle(true)}
                        >
                            {boardTitle}
                        </button>
                }
                <div
                    className="header-icon-btn icon flex center"
                    onClick={onChangeIsStarred}
                >
                    {isStarred ? <IconStarFull size={18} /> : <IconStarOutline size={18} />}
                </div>
            </section>

            <section className="btns-container h100">
                <div className="search-box">
                    <IconSearch />
                    <input
                        className="search-input input-cleaner"
                        type="text"
                        name="keyword"
                        placeholder="Filter by keyword..."
                        onChange={ev => onSetFilter(ev.target.value)}
                    />
                </div>
                <div className="members flex mar-end-8">
                    {
                        members.map((member, index) => {
                            return (
                                <MemberImg key={index} member={member} size={28} gap={-2} />
                            )
                        })
                    }
                </div>

                {/* <button className="header-btn">
                    <Icon3DotsWithSpacing />
                </button> */}
            </section>
        </header>
    )
}
