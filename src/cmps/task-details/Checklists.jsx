import { removeChecklist, addChecklistTodo, removeTodo, updateBoardGroupTaskType, updateChecklistTitle, updateTodo } from "../../store/actions/board.actions"
import { IconX } from "../../services/icons.service"
import { useState } from 'react'
import React from 'react'
import { ProgressBar } from "./ProgressBar"

export function Checklists({ board, group, task, checklist, onSetChecklistIdToEdit, checklistIdToEdit }) {

    const [isTitleInputFocused, setTitleInputFocus] = useState(false)
    const [focusedTodoId, setFocusedTodoId] = useState(null)
    const [isAddItemFocused, setIsAddItemFocused] = useState(false)
    const inputRefs = {}

    const [checkListTitle, setCheckListTitle] = useState(checklist.title)
    const [currTodo, setTodo] = useState({ id: '', title: '' })
    const [newTodoTitle, setNewTodoTitle] = useState('')

    function onFocusChecklistInput() {
        setTitleInputFocus(true)
    }

    function onFocusTodoInput(todoId) {
        setFocusedTodoId(todoId)
    }

    function onFocusAddItemInput() {
        setIsAddItemFocused(true)
    }

    function onBlurChecklistInput(ev) {
        if (ev.relatedTarget instanceof HTMLButtonElement &&
            Array.from(ev.relatedTarget.classList).includes('save-title')) {
            onSaveCheckListTitle(ev)
            return
        }
        setCheckListTitle(checklist.title)
        setTitleInputFocus(false);
    }

    function onBlurTodoInput(ev) {
        if (ev.relatedTarget instanceof HTMLButtonElement &&
            Array.from(ev.relatedTarget.classList).includes('save-title')) {
            onSaveTodoTitle()
            return
        }
        setFocusedTodoId(null)
        setTodo({ id: '', title: '' })
    }

    function onBlurAddItemInput(ev) {
        if (ev.relatedTarget instanceof HTMLButtonElement &&
            Array.from(ev.relatedTarget.classList).includes('save-title')) {
            onSaveTodo()
            return
        }
        setIsAddItemFocused(false)
        setNewTodoTitle('')
    }

    function onHandleTitleChange({ target }) {
        setCheckListTitle(target.value)
    }

    function onHandleTodoChange({ target }, todoId) {
        setTodo({ id: todoId, title: target.value })
    }

    function onHandleAddItemInput({ target }) {
        setNewTodoTitle(target.value)
    }

    async function onRemoveChecklist(ev) {
        try {
            await removeChecklist(board, group, task, checklistIdToEdit)
            onCloseModal()
        } catch (err) {
            console.log('cannot remove label, error: ', err);
        }
    }

    async function onUpdateIsDoneTodo({ target }, todoId) {
        try {
            await updateTodo(board, group, task, checklist, todoId, 'isDone', target.checked)
        } catch (err) {
            console.log('Cannot update todo', err)
        }
    }

    async function onSaveCheckListTitle(ev) {
        ev.preventDefault()
        try {
            await updateChecklistTitle(board, group, task, checklist, checkListTitle)
            setTitleInputFocus(false);
        } catch (err) {
            console.log('Cannot update checklist title', err)
        }
    }

    async function onSaveTodoTitle() {
        try {
            if (currTodo.id) {
                updateTodo(board, group, task, checklist, currTodo.id, 'title', currTodo.title)
                setTodo({ id: '', title: '' })
            }
            setFocusedTodoId(null)
        } catch (err) {
            console.log('Cannot update todo', err)
        }
    }

    async function onSaveTodo(ev) {
        try {
            await addChecklistTodo(board, group, task, checklist, newTodoTitle)
            setIsAddItemFocused(false)
            setNewTodoTitle('')
        } catch (err) {
            console.log('Cannot add todo', err)
        }
    }

    async function onRemoveTodo(todoId) {
        try {
            await removeTodo(board, group, task, checklist, todoId)
        } catch (err) {
            console.log('Cannot remove todo', err)
        }
    }

    return (
        <section className="check-list-container">

            {/* checklist title */}
            <div className="header flex align-center justify-between">
                <input className="checklist-title"
                    value={checkListTitle}
                    onFocus={onFocusChecklistInput}
                    onBlur={onBlurChecklistInput}
                    onChange={onHandleTitleChange}>
                </input>
                <button className={`delete-checklist ${isTitleInputFocused ? 'focused' : ''}`}
                    onClick={onRemoveChecklist}>
                    Delete
                </button>
            </div>

            <ProgressBar checklist={checklist} />

            <div className={`update-btns ${isTitleInputFocused ? 'focused button-container' : ''}`}>
                <button className="save-title" onClick={onSaveCheckListTitle}>Save</button>
                <button className="btn-cancel">Cancel</button>
            </div>

            {/* todos */}
            {checklist.todos.length > 0 && checklist.todos.map(todo =>
                <React.Fragment key={todo.id}>
                    <div className="todo flex align-center" >
                        <input className="todo-checkbox"
                            type="checkbox"
                            checked={todo.isDone}
                            onChange={(ev) => onUpdateIsDoneTodo(ev, todo.id)} />
                        <input className={`todo-title ${todo.isDone ? 'isDone' : ''}`}
                            type="text"
                            value={currTodo.id === todo.id ? currTodo.title : todo.title}
                            onFocus={() => onFocusTodoInput(todo.id)}
                            onBlur={onBlurTodoInput}
                            onChange={(ev) => onHandleTodoChange(ev, todo.id)}
                            ref={(el) => (inputRefs[todo.id] = el)} />
                        <div className="remove-todo" onClick={() => onRemoveTodo(todo.id)}>
                            <IconX size={10} color={'var(--clr4)'} />
                        </div>
                    </div>

                    <div className={`update-btns todo ${focusedTodoId === todo.id ? 'flex button-container' : ''}`}>
                        <button className="save-title" onClick={onSaveTodoTitle}>Save</button>
                        <button className="btn-cancel"> Cancel</button>
                    </div>
                </React.Fragment>
            )}

            {/* add item */}
            <input className="add-item"
                value={newTodoTitle}
                placeholder="Add an item"
                onChange={onHandleAddItemInput}
                onFocus={onFocusAddItemInput}
                onBlur={onBlurAddItemInput}>
            </input>

            {isAddItemFocused && <div className={`button-container  flex`}>
                <button className="save-title" onClick={onSaveTodo}>Save</button>
                <button className="btn-cancel">Cancel</button>

            </div>}

        </section>
    )
}

// button - container
// <button className="btn-confirm" onClick={onSaveTodo}>Save</button>
// <button className="btn-cancel">Cancel</button>


