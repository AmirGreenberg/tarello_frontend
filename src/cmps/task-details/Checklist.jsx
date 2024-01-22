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
        <section className="checklist">
            <IconChecked {...iconProps} />
            <section className="checklist-title">
                <h3 className='main-content-title'>{checklist.title}</h3>
                <button
                    className="btn-delete-checklist btn-type-3"
                    onClick={onDeleteChecklist}
                >
                    Delete
                </button>
            </section>
            <ul className="checklist-todos clean-list">
                {
                    checklist.todos?.map((todo, i) =>
                        <li className="todo" key={todo.id}>
                            <input type="checkbox" name="todo" id={todo.id} checked={todo.isDone} onChange={(e) => onToggleTodo(todo.id, e.target.checked)} />
                            <div className="todo-item">
                                <label style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }} htmlFor={todo.id}>{todo.title}</label>
                                <button
                                    className="btn-delete-todo"
                                    onClick={() => onDeleteTodo(i)}
                                >
                                    <IconExit />
                                </button>
                            </div>
                        </li>
                    )
                }
            </ul>
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
        </section>
    )
}
