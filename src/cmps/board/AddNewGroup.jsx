import { useState, useRef, useEffect } from 'react'
import useOutsideClick from '../../cmps/customHooks/useOutsideClick'
import { boardService } from '../../services/board.service'
import { IconLargeThinPlus, IconX } from '../../services/icons.service'

export function AddNewGroup({ onAddGroup }) {
    const [isFormVisible, setIsFormVisible] = useState(false)
    const [groupTitle, setGroupTitle] = useState('')
    const refAddNewGroup = useRef(null)
    const textAreaRef = useRef(null)

    useOutsideClick(refAddNewGroup, () => setIsFormVisible(false))

    function toggleForm() {
        setIsFormVisible((prevState) => {
            if (prevState) setGroupTitle('')
            return !prevState
        })
    }

    useEffect(() => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = 'auto'
            textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`
        }
    }, [groupTitle])

    useEffect(() => {
        refAddNewGroup?.current?.scrollIntoView(false)
    })

    function onTextAreaKeyDown(ev) {
        if (ev.key === 'Enter') {
            ev.preventDefault();
            onAddList(ev)
        }
    }

    function handleInputChange(event) {
        setGroupTitle(event.target.value)
    }

    function onAddList(ev) {
        ev.preventDefault()
        if (!groupTitle) return
        const newGroup = boardService.createGroup(groupTitle)
        onAddGroup(newGroup)
        setGroupTitle('')
    }

    return (
        <>
            {
                !isFormVisible &&
                <button
                    className="add-new-group-btn flex align-center width100 clean-btn bold"
                    onClick={toggleForm}
                >
                    <IconLargeThinPlus size={18} />
                    Add another list
                </button>
            }
            {
                isFormVisible &&
                <div className="group-preview add-group-form" ref={refAddNewGroup}>
                    <form onSubmit={onAddList}>
                        <textarea
                            className="group-title-input clean-textarea blue-focus"
                            ref={textAreaRef}
                            value={groupTitle}
                            onKeyDown={onTextAreaKeyDown}
                            onChange={handleInputChange}
                            name="group-title"
                            spellCheck="false"
                            maxLength="512"
                            autoComplete="off"
                            placeholder="Enter list title…"
                            autoFocus
                            rows={1}
                        ></textarea>
                        <div className="btn-container">
                            <button
                                type="submit"
                                className="btn-type-1 clean-btn"
                            >
                                Add list
                            </button>
                            <button
                                type="button"
                                className="x-btn btn-type-2 clean-btn"
                                onClick={toggleForm}
                            >
                                <IconX color={'var(--txtClrDark)'} />
                            </button>
                        </div>
                    </form>
                </div>
            }
        </>
    )
}
