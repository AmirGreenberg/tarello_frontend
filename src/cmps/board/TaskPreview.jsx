import { useState } from 'react'
import { boardService } from '../../services/board.service'
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
import { useSelector } from 'react-redux'
import { DateTaskBtn } from './DateTaskBtn'

export function TaskPreview({ onToggleLabel, isTagOpen, boardId, groupId, task, onIsCheckDate, group }) {

    const board = useSelector(storeState => storeState.boardModule.board)
    const navigate = useNavigate()

    function onTagsClick(ev) {
        ev.preventDefault()
        ev.stopPropagation()
        onToggleLabel()
    }

    const {
        labelIds,
        title,
        description,
        attachment,
        checklists,
        comments,
        memberIds,
        dueDate,
        startDate,
        style,
    } = task

    const labelsColors = boardService.getTaskLabelsColors(board, task)

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
                        {style && style.cover && <img src={style.cover} alt="" />}
                        {style && !style.cover && style.backgroundColor && <div style={{ backgroundColor: `${style.backgroundColor}` }} className="task-cover">
                        </div>}
                    </div>

                    <section className='task-main-body'>
                        {labelIds &&
                            <section className="label-container">
                                {labelsColors.map((labelsColor, index) => (
                                    isTagOpen ? (
                                        <div className="container" key={index}>
                                            <div style={{ backgroundColor: labelsColor.color }} className="label-tag expended">
                                                <div className='label-title'>{labelsColor.title}</div>
                                                <div className="on-hover-mask" onClick={onTagsClick}></div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="container" key={index}>
                                            <div style={{ backgroundColor: labelsColor.color }} className="label-tag collapsed">
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

                            {(dueDate || startDate) &&
                                <DateTaskBtn
                                    group={group}
                                    task={task}
                                    dueDate={dueDate}
                                    startDate={startDate}
                                    onIsCheckDate={onIsCheckDate} />}

                            {description && <span title="This card have a description">
                                <IconAlignText color={'var(--txtClrDark)'} />
                            </span>}

                            {attachment?.length > 0 && <span title="Attachments">
                                <IconAttachment color={'var(--txtClrDark)'} />
                                {attachment.length}
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

                    {memberIds?.length > 0 &&
                        <section className="members-container">
                            <Users board={board} task={task} taskMemberIds={memberIds} size={24} gap={1} />
                        </section>}
                </>
            </section>
        </>
    )
}
