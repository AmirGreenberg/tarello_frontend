import { useEffect, useRef } from "react"
import { IconWatch } from "../../services/icons.service"

export function Title({ iconProps, task, taskTitle, groupTitle, onChangeTask, onUpdateBoard }) {
    const refTextarea = useRef()

    useEffect(() => {
        if (refTextarea.current) {
            refTextarea.current.style.height = 'auto'
            refTextarea.current.style.height = `${refTextarea.current.scrollHeight}px`
        }
    }, [taskTitle])

    function onTitleInputKeyDown(ev) {
        if (ev.key === 'Enter') {
            ev.preventDefault();
            refTextarea.blur()
        }
    }

    return (
        <div className="checklist-title">

            <section className="title-input-container">
                <textarea
                    className="title-input clean-textarea blue-focus"
                    type="text"
                    name="title"
                    value={taskTitle}
                    onChange={onChangeTask}
                    onKeyDown={onTitleInputKeyDown}
                    onBlur={onUpdateBoard}
                    ref={refTextarea}
                    rows={1}
                />

                <p className="flex align-center">in list
                    <a href="#">{groupTitle}</a>
                </p>
            </section>
        </div>
    )
}