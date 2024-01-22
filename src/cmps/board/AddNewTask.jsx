import { useEffect, useRef, useState } from "react"
import useOutsideClick from "../customHooks/useOutsideClick"
import { IconX } from "../../services/icons.service"

export function AddNewTask({ onAddTask, onCancelAddTask }) {
    const [cardTitle, setCardTitle] = useState('')
    const refAddNewTask = useRef()
    const refAddTaskInput = useRef()

    useOutsideClick(refAddNewTask, onCancel)

    useEffect(() => {
        if (refAddTaskInput.current) {
            refAddTaskInput.current.style.height = 'auto'
            refAddTaskInput.current.style.height = `calc(${refAddTaskInput.current.scrollHeight}px + 1lh)`
        }
    }, [cardTitle])

    useEffect(() => {
        refAddNewTask.current.scrollIntoView(false)
    })

    function onTextAreaKeyDown(ev) {
        if (ev.key === 'Enter') {
            ev.preventDefault();
            onSubmitAddCard(ev)
        }
    }

    function onChangeCardTitle(ev) {
        const title = ev.target.value
        setCardTitle(title)
    }

    function onSubmitAddCard(ev) {
        ev.preventDefault()
        if (cardTitle) onAddTask(cardTitle)
        else onCancelAddTask()
        setCardTitle('')
    }

    function onCancel() {
        if (cardTitle) onAddTask(cardTitle)
        onCancelAddTask()
        setCardTitle('')
    }

    return (
        <section className="add-new-task" ref={refAddNewTask}>
        {
            <form onSubmit={onSubmitAddCard}>
                <textarea
                    className="add-task-input input-cleaner"
                    type="text"
                    value={cardTitle}
                    onChange={onChangeCardTitle}
                    onKeyDown={onTextAreaKeyDown}
                    placeholder="Add a card"
                    ref={refAddTaskInput}
                    autoFocus
                />
                <section className="buttons-container">
                    <button type="submit" className="clean-btn bold btn-type-1 ">Add card</button>
                    <button type="button" className="clean-btn btn-type-2 flex center" onClick={onCancel}><IconX color={'var(--txtClrDark)'}/></button>
                </section>
            </form>
        }
        </section>
    )
}
