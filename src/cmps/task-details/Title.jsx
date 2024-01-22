import { useEffect, useRef } from "react"
import { IconTaskDetails, IconX } from "../../services/icons.service"

export function Title({ iconProps, taskTitle, groupTitle, onChangeTask, onUpdateBoard }) {
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
        <section className="title">
            <IconTaskDetails {...iconProps} />
            <section className="title-input-container">
                <textarea
                    className="title-input clean-textarea"
                    type="text"
                    name="title"
                    value={taskTitle}
                    onChange={onChangeTask}
                    onKeyDown={onTitleInputKeyDown}
                    onBlur={onUpdateBoard}
                    ref={refTextarea}
                    rows={1}
                />
                {/* <button
                    className="btn-close"
                    onClick={onCloseTaskDetails}
                >
                    <IconX {...{...iconProps}} />
                </button> */}
            </section>
            <p className="in-group">in list <a href="#">{groupTitle}</a></p>
        </section>
    )
}