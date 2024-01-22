import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    IconAlignText,
    IconAttachment,
    IconChecked,
    IconClock,
    IconComment,
    IconPencail,

} from '../../services/icons.service'
import { Users } from './Users'

export function TaskPreview({ onToggleLabel, isTagOpen, boardId, groupId, task }) {
    const navigate = useNavigate()

    function onTagsClick(ev) {
        ev.preventDefault()
        ev.stopPropagation()
        onToggleLabel()
    }

    const {
        cover,
        labels,
        title,
        dates,
        description,
        attachments,
        checklists,
        comments,
        members
    } = task

    function getChecklistsTaskCount() {
        let taskCount = 0
        let doneTaskCount = 0

        if (checklists.length) {
            checklists.map((checklist) => {
                if (checklist.todos?.length) {
                    taskCount += checklist.todos.length
                    doneTaskCount += checklist.todos.filter(todo => todo.isDone).length
                }
            })
        }
        return (taskCount === 0) ? '' : `${doneTaskCount}/${taskCount}`;
    }

    function isShowTodosCount() {
        const test = checklists.some(checklist => checklist.todos?.length)
        return test
    }

    return (
        <>
            <section
                className="task-preview"
                onClick={() =>
                    navigate(`/board/${boardId}/${groupId}/${task.id}`)
                }
            >
                <>

                    <div className="task-cover">
                        {cover && cover.imgUrl && <img src={cover.imgUrl} alt="" />}
                        {cover && !cover.imgUrl && cover.bgClr && <div style={{ backgroundImage: `var(${cover.bgClr})` }} className="task-cover">
                        </div>}
                    </div>

                    <section className='task-main-body'>
                        {labels && labels.length > 0 &&
                            <section className="label-container">
                                {labels.filter(label => label.isActive).map((label) => (
                                    isTagOpen ? (
                                        <div className="container" key={label.id}>
                                            <div style={{ backgroundColor: label.bgColor }} className="label-tag expended">
                                                <div style={{ color: label.txtColor }} className='label-title'>{label.title}</div>
                                                <div className="on-hover-mask" onClick={onTagsClick}></div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="container" key={label.id}>
                                            <div style={{ backgroundColor: label.bgColor }} className="label-tag collapsed">
                                                <div className="on-hover-mask" onClick={onTagsClick}></div>
                                            </div>
                                        </div>
                                    )
                                ))}

                            </section>
                        }

                        <div className="task-preview-title clean-textarea">
                            {title}
                        </div>

                        {<div className="icon-container">
                            {/* <IconWatch color={'var(--txtClrDark)'}/> */}

                            {dates && <div className="flex center gap" title="Due date ">
                                <IconClock color={'var(--txtClrDark)'} />
                                <span>{dates.shortString}</span>
                            </div>}

                            {description && <span title="This card have a description">
                                <IconAlignText color={'var(--txtClrDark)'} />
                            </span>}

                            {attachments?.length > 0 && <span title="Attachments">
                                <IconAttachment color={'var(--txtClrDark)'} />
                                {attachments.length}
                            </span>}

                            {isShowTodosCount() && <span title="Checklist items">
                                <IconChecked color={'var(--txtClrDark)'} />
                                {getChecklistsTaskCount()}
                            </span>}

                            {comments?.length > 0 && <span title="Comments">
                                <IconComment color={'var(--txtClrDark)'} />
                                {comments.length}
                            </span>}
                        </div>}

                        <button className="edit-task-btn btn-type-2 clean-btn">
                            <IconPencail color={'var(--txtClrDark)'} />
                        </button>

                    </section>

                    {members?.length > 0 &&
                        <section className="members-container">
                            <Users members={members} size={24} gap={1} />
                        </section>}
                </>
            </section>
        </>
    )
}
