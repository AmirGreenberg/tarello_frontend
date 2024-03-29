import { useRef } from "react"
import useOutsideClick from "../customHooks/useOutsideClick"
import { IconX } from "../../services/icons.service"

export function GroupMenu({ onToggleMenu, onCreateCard, onDuplicateGroup, onMoveGroup, onWatchGroup, onGroupSortBy, onRemoveGroup }) {
    const refGroupMenu = useRef()

    useOutsideClick(refGroupMenu, onToggleMenu)

    return (
        <section ref={refGroupMenu} className="group-menu menu-type-1">
            <div className="group-menu-header">
                <span className="header-font" >List actions</span>
                <button className="x-btn btn-type-2 clean-btn flex center" onClick={onToggleMenu}>
                    <IconX size={10} color={'var(--clr4)'} />
                </button>
            </div>
            <button className="clean-btn group-menu-btn" onClick={onCreateCard}>
                Add card
            </button>
            <button className="clean-btn group-menu-btn" onClick={onDuplicateGroup}>
                Copy list
            </button>
            <button className="clean-btn group-menu-btn" onClick={onMoveGroup}>
                Move list
            </button>
            <button className="clean-btn group-menu-btn" onClick={onWatchGroup}>
                Watch
            </button>
            <hr />
            <button className="clean-btn group-menu-btn" onClick={onGroupSortBy}>
                Sort by...
            </button>
            <hr />
            <button className="clean-btn group-menu-btn" onClick={onRemoveGroup}>
                Delete List
            </button>
        </section>
    )
}