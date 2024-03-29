import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import React from "react";


import { updateBoard } from '../store/actions/board.actions'
import { AddLabels } from '../cmps/task-details/AddLabels'
import { Labels } from '../cmps/task-details/Labels'
import { Cover } from '../cmps/task-details/Cover'
import { Members } from '../cmps/task-details/Members'
import { Description } from '../cmps/task-details/Description'
import { Attachments } from '../cmps/task-details/Attachments'
import { Checklists } from '../cmps/task-details/Checklists'
import { AddChecklist } from '../cmps/task-details/AddChecklist'
import { AddDates } from '../cmps/task-details/AddDates'
import { AddMembers } from '../cmps/task-details/AddMembers'
import { IconArrow, IconAttachment, IconChecked, IconClock, IconCover, IconDescription, IconDuplicate, IconEye, IconLabel, IconMan, IconShareSocial, IconTaskDetails, IconV, IconWatch, IconX, IconXDetails, IconXSmall } from '../services/icons.service'
import { DynamicActionModal } from '../cmps/dynamic-cmps/DynamicActionModal'
import { TO_BOTTOM } from '../cmps/dynamic-cmps/DynamicActionModal'
import { boardService } from '../services/board.service';
import { updateBoardGroupTaskType } from '../store/actions/board.actions';
import { EditLabel } from '../cmps/task-details/EditLabel';
import { DeleteLabel } from '../cmps/task-details/DeleteLabel';
import { DatesData } from '../cmps/task-details/DatesData';
import { AddAttachments } from '../cmps/task-details/AddAttachments';
import { AddCover } from '../cmps/task-details/AddCover';
import { Title } from '../cmps/task-details/Title';

const ICON_SIZE = 21
const ICON_SIZE_BUTTON = 16
const ICON_COLOR = 'var(--clr9)'

export function TaskDetails() {
    const boards = useSelector(storeState => storeState.boardModule.boards);
    const [task, setTask] = useState(null)
    const [group, setGroup] = useState(null)
    const [board, setBoard] = useState(null)
    const { boardId, groupId, taskId } = useParams()
    const [errorMessage, setErrorMessage] = useState('')
    const [isWatching, setIsWatching] = useState(false)
    const [modalProps, setModalProps] = useState({})
    const [labelIdToEdit, setLabelIdToEdit] = useState('')
    const [labelModalEvent, setLabelModalEvent] = useState('')
    const [checklistIdToEdit, setChecklistIdToEdit] = useState('')

    const refTaskDetails = useRef()
    const navigate = useNavigate()

    useEffect(() => {
        loadTask()
    }, [boards])

    async function loadTask() {
        try {
            const { board, group, task } = await boardService.getBoardGroupTask(boardId, groupId, taskId)
            setTask(task)
            setGroup(group)
            setBoard(board)
            updateBoardGroupTaskType(boardId, groupId, taskId)
        } catch (err) {
            console.log('Cant load task')
        }
    }

    function onCloseTaskDetails(ev) {
        navigate(`/board/${boardId}`)
    }

    function onSetChecklistIdToEdit(checklistId) {
        setChecklistIdToEdit(checklistId)
    }

    function onSetLabelIdToEdit(labelId) {
        setLabelIdToEdit(labelId)
    }

    function onUpdateTask(name, value, isCloseModal = true) {
        setTask(prev => ({ ...prev, [name]: value }))
        task[name] = value
        onUpdateBoard()
        if (isCloseModal) setModalProps({})
    }

    function onUpdateBoard() {
        const taskIdx = group.tasks.findIndex(_task => _task.id === task.id)
        group.tasks.splice(taskIdx, 1, task)
        updateBoard(board)
    }

    function onDeleteTask() {
        group.tasks = group.tasks.filter(_task => _task.id !== taskId)
        updateBoard(board).then(() => navigate(`/board/${boardId}`))
    }

    function onCloseModal() {
        setModalProps({})
    }

    function onSetModalProps(event, content) {
        setModalProps({ event, content })
    }

    function onChangeTask(ev) {
        const name = ev.target.name
        const value = ev.target.value
        setTask(prev => ({ ...prev, [name]: value }))
    }


    if (!task) {
        if (!errorMessage)
            return <></>
        else return <section className="error-message">{errorMessage}</section>
    }

    const modalContent = {
        addMembers: <AddMembers {...{ onCloseModal }} />,
        editLabel: <EditLabel {...{ onCloseModal, labelIdToEdit, onSetModalProps }} />,
        deleteLabel: <DeleteLabel {...{ onCloseModal, labelIdToEdit }} />,
        addLabels: <AddLabels {...{ onCloseModal, onSetLabelIdToEdit, onSetModalProps, labelModalEvent }} />,
        addChecklist: <AddChecklist {...{ checklists: task.checklists, onUpdateTask, onCloseModal }} />,
        addDates: <AddDates {...{ onCloseModal }} />,
        addAttachments: <AddAttachments {...{ onCloseModal }} />,
        addCover: <AddCover {...{ onCloseModal }} />,
    }

    const iconProps = {
        size: ICON_SIZE,
        color: ICON_COLOR,
    }

    const buttonIconProps = {
        size: ICON_SIZE_BUTTON,
        color: ICON_COLOR,
    }

    return (
        <div className="overlay flex justify-center" >

            <section className="task-details-container" ref={refTaskDetails} onClick={(ev) => ev.stopPropagation()} >
                <Cover {...{ task }} />

                <header className="task-header">
                    <div className="title-img">
                        <IconTaskDetails {...iconProps} />
                    </div>

                    <div className="task-title">
                        <Title {...{ iconProps, taskTitle: task.title, groupTitle: group.title, onChangeTask, onUpdateBoard }} />
                    </div>
                </header>


                <main className="task-details-content flex">
                    <section className="task-details-data">

                        <section className="features-data flex">

                            <Members        {...{ task, board, onClickMembers: event => setModalProps({ event, content: modalContent.addMembers }) }} />

                            <Labels         {...{
                                task, board, onClickLabel: event => {
                                    setLabelModalEvent(event)

                                    setModalProps({ event, content: modalContent.addLabels })
                                }
                            }} />

                            {/* <div className="watch">
                                <p className="title">Notifications</p>
                                <div className="notifications flex" >
                                    <IconWatch />
                                    {task.isWatch ? <p className="txt">Watching</p> : <p className="txt">Watch</p>}
                                    {task.isWatch &&
                                        <div className="v-icon flex justify-center align-center"><IconV /></div>}
                                </div>
                            </div> */}

                            {(task.startDate !== null || task.dueDate !== null) &&
                                <DatesData
                                    board={board}
                                    group={group}
                                    task={task} />}

                        </section>

                        <div className="description-svg">
                            <IconDescription {...{ iconProps, color: 'var(--clr9)', size: 24 }} />
                        </div>
                        <Description    {...{ iconProps, taskDescription: task.description, refTaskDetails, onUpdateTask }} />

                        {task.attachment.length > 0 &&
                            <Attachments    {...{ board, group, task }} />}

                        {
                            task.checklists.length > 0 && task.checklists.map((checklist, i) =>
                                <React.Fragment key={checklist.id}>
                                    <div className="checklist-svg">
                                        <IconChecked {...iconProps} />
                                    </div>
                                    <div className="checklist-item">
                                        <Checklists     {...{ board, group, task, checklist, onSetChecklistIdToEdit, checklistIdToEdit }} />
                                    </div>
                                </React.Fragment>)}

                    </section>

                    <section className="task-features">

                        <h3>Add to card</h3>
                        <div onClick={event => setModalProps({ event, content: modalContent.addMembers })}>
                            <IconMan {...buttonIconProps} />
                            <p>Members</p>
                        </div>

                        <div onClick={event => {
                            setLabelModalEvent(event)
                            setModalProps({ event, content: modalContent.addLabels })
                        }}>
                            <IconLabel {...buttonIconProps} size={12} />
                            <p>Labels</p>
                        </div>

                        <div onClick={event => setModalProps({ event, content: modalContent.addChecklist })}>
                            <IconChecked {...buttonIconProps} />
                            <p>Checklist</p>
                        </div>

                        <div onClick={event => setModalProps({ event, content: modalContent.addDates })}>
                            <IconClock {...buttonIconProps} />
                            <p>Dates</p>
                        </div>

                        <div onClick={event => setModalProps({ event, content: modalContent.addAttachments })}>
                            <IconAttachment {...buttonIconProps} />
                            <p>Attachment</p>
                        </div>

                        <div onClick={event => setModalProps({ event, content: modalContent.addCover })}>
                            <IconCover {...buttonIconProps} />
                            <p>Cover</p>
                        </div>

                        <h3 className='actions-btn'>Actions</h3>

                        <div onClick={onDeleteTask}>
                            <IconXSmall {...buttonIconProps} size={10} />
                            <p>Delete</p>
                        </div>

                        <div>
                            <IconDuplicate {...buttonIconProps} />
                            <p>Copy</p>
                        </div>

                        <div>
                            <IconArrow {...buttonIconProps} />
                            <p>Move</p>
                        </div>

                        <div>
                            <IconShareSocial {...buttonIconProps} />
                            <p>Share</p>
                        </div>

                    </section>

                </main>

                <div className="exit-taxt-details-btn" onClick={(ev) => onCloseTaskDetails(ev)}>
                    <IconXDetails />
                </div>

            </section>
            <DynamicActionModal {...{ ...modalProps, modalPosition: TO_BOTTOM, onOutsideClick: onCloseModal }} />
        </div>
    )
}
