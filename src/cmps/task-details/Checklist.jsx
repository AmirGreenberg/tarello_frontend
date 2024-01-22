import React from "react";

import { useEffect, useRef, useState } from 'react'
import { boardService } from '../../services/board.service'
import { IconChecked, IconExit, IconX } from '../../services/icons.service'
import useOutsideClick from '../customHooks/useOutsideClick'

export function Checklist({ iconProps, checklist, onUpdateTask, onDeleteChecklist, refTaskDetails }) {
    if (!checklist) return

    const [isAddTodo, setIsAddTodo] = useState(false)
    const [todoTitle, setTodoTitle] = useState('')
    const refTodoTitleInput = useRef()
    const refAddTodoForm = useRef()

    useEffect(() => {
        if (refTodoTitleInput.current) {
            refTodoTitleInput.current.style.height = 'auto'
            refTodoTitleInput.current.style.height = `${refTodoTitleInput.current.scrollHeight}px`
        }
    }, [todoTitle])

    useOutsideClick(refAddTodoForm, () => setIsAddTodo(false), refTaskDetails)

    function onTextAreaKeyDown(ev) {
        if (ev.key === 'Enter') {
            ev.preventDefault();
            onAddTodo(ev)
        }
    }

    function onAddTodo(ev) {
        ev.preventDefault()
        const newTodo = boardService.createTodo(todoTitle)
        if (checklist.todos) var todos = [...checklist.todos, newTodo]
        else var todos = [newTodo]
        checklist.todos = todos
        onUpdateTask('checklist', checklist)
        setTodoTitle('')
        refTodoTitleInput.current.focus()
    }

    function onDeleteTodo(idx) {
        checklist.todos = checklist.todos?.toSpliced(idx, 1) || []
        onUpdateTask('checklist', checklist)
    }

    function onToggleTodo(todoId, isChecked) {
        checklist.todos = checklist.todos.map(todo =>
            todo.id === todoId ? { ...todo, isDone: isChecked } : todo
        )
        onUpdateTask('checklist', checklist)
    }

    return (
        <section className="check-list-container">

            <div className="header flex align-center justify-between">
                <input className="checklist-title"
                    value={checklist.title}>
                </input>
                <button
                    className="delete-checklist"
                    onClick={onDeleteChecklist}
                >
                    Delete
                </button>
            </div>

            {
                checklist.todos?.map((todo, i) =>
                    <React.Fragment key={todo.id}>
                        <div className="todo flex align-center" >
                            <input className="todo-checkbox" type="checkbox" name="todo" id={todo.id} checked={todo.isDone} onChange={(e) => onToggleTodo(todo.id, e.target.checked)} />
                            <div className="todo-title">
                                <label style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }} htmlFor={todo.id}>{todo.title}</label>
                            </div>
                            <div className="remove-todo" onClick={() => onDeleteTodo(i)}>
                                <IconExit />
                            </div>
                        </div>
                    </React.Fragment>
                )
            }

            <section className="add-todo">
                {
                    !isAddTodo &&
                    <button
                        className="btn-add-todo btn-type-3"
                        onClick={() => setIsAddTodo(true)}
                    >
                        Add an item
                    </button>
                }
                {
                    isAddTodo &&
                    <form className="form-add-todo" onSubmit={onAddTodo} ref={refAddTodoForm}>
                        <textarea
                            className="todo-title-input clean-textarea textarea-input"
                            ref={refTodoTitleInput}
                            onKeyDown={onTextAreaKeyDown}
                            name="title"
                            value={todoTitle}
                            onChange={ev => setTodoTitle(ev.target.value)}
                            autoFocus
                            required
                            rows={1}
                        />
                        <section className="button-container">
                            <button
                                type="submit"
                                className="btn-confirm btn-type-1"
                            >
                                Add
                            </button>
                            <button
                                type="button"
                                className="btn-cancel btn-type-3"
                                onClick={() => setIsAddTodo(false)}
                            >
                                Cancel
                            </button>
                        </section>
                    </form>
                }
            </section>
        </section >
    )
}
