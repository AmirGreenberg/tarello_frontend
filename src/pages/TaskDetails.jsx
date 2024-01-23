import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import React from "react";


import { loadBoard, loadBoards, updateBoard } from '../store/actions/board.actions'
import { AddLabels } from '../cmps/task-details/AddLabels'
import { Labels } from '../cmps/task-details/Labels'
import { Cover } from '../cmps/task-details/Cover'
import { Title } from '../cmps/task-details/Title'
import { Members } from '../cmps/task-details/Members'
import { Notifications } from '../cmps/task-details/Notifications'
import { Description } from '../cmps/task-details/Description'
import { Attachments } from '../cmps/task-details/Attachments'
import { Checklists } from '../cmps/task-details/Checklists'
import { Activity } from '../cmps/task-details/Activity'
import { AddChecklist } from '../cmps/task-details/AddChecklist'
import { AddDates } from '../cmps/task-details/AddDates'
import { Dates } from '../cmps/task-details/Dates'
import { AddMembers } from '../cmps/task-details/AddMembers'
import useOutsideClick from '../cmps/customHooks/useOutsideClick'
import { IconArrow, IconAttachment, IconCheckList, IconChecked, IconClock, IconCover, IconDescription, IconDuplicate, IconLabel, IconMan, IconShare, IconShareSocial, IconTaskDetails, IconV, IconWatch, IconX, IconXDetails, IconXLarge, IconXSmall } from '../services/icons.service'
import { DynamicActionModal, TO_RIGHT } from '../cmps/dynamic-cmps/DynamicActionModal'
import { TO_BOTTOM } from '../cmps/dynamic-cmps/DynamicActionModal'

const ICON_SIZE = 21
const ICON_SIZE_BUTTON = 16
const ICON_COLOR = 'var(--clr9)'

export function TaskDetails() {
    const board = useSelector(state => state.boardModule.board)
    const { boardId, groupId, taskId } = useParams()
    const [errorMessage, setErrorMessage] = useState('')
    const [group, setGroup] = useState(undefined)
    const [task, setTask] = useState(undefined)
    const [isWatching, setIsWatching] = useState(false)
    const [modalProps, setModalProps] = useState({})
    const refTaskDetails = useRef()
    const navigate = useNavigate()

    useEffect(() => {
        if (!board) {
            loadBoards()
                .then(() => loadBoard(boardId))
                .catch(() => setErrorMessage(`No such board id='${boardId}'`))
        } else {
            const group = board.groups?.find(group => group.id === groupId)
            if (!group) {
                setErrorMessage(`No such group id=${groupId}`)
                return
            }
            const task = group.tasks?.find(task => task.id === taskId)
            if (!task) {
                setErrorMessage(`No such task id=${taskId}`)
                return
            }
            setGroup(group)
            setTask(task)
        }
    }, [board])

    function onCloseTaskDetails(ev) {
        navigate(`/board/${boardId}`)
    }

    function onChangeTask(ev) {
        const name = ev.target.name
        const value = ev.target.value
        setTask(prev => ({ ...prev, [name]: value }))
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

    if (!task) {
        if (!errorMessage)
            return <section className="loading">Loading...</section>
        else return <section className="error-message">{errorMessage}</section>
    }

    const modalContent = {
        addMembers: <AddMembers {...{ taskMembers: task.members, boardMembers: board.members, board, task, onUpdateTask, onCloseModal }} />,
        addLabels: <AddLabels {...{ board, task, onUpdateTask, onCloseModal }} />,
        addChecklist: <AddChecklist {...{ checklists: task.checklists, onUpdateTask, onCloseModal }} />,
        addDates: <AddDates {...{ dates: task.dates, onUpdateTask, onCloseModal }} />,
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

                <header className="task-header flex align-start">
                    <div className="title-img">
                        <IconTaskDetails {...iconProps} />
                    </div>
                    <Title {...{ iconProps, task, taskTitle: task.title, groupTitle: group.title, onChangeTask, onUpdateBoard }} />
                </header>


                <main className="task-details-content flex">
                    <section className="task-details-data">

                        <section className="features-data flex">

                            <Members        {...{ members: task.members, onClickMembers: event => setModalProps({ event, content: modalContent.addMembers }) }} />

                            <Labels         {...{ labels: task.labels, onClickLabel: event => setModalProps({ event, content: modalContent.addLabels }) }} />

                            <div className="watch">
                                <p className="title">Notifications</p>
                                {/* <div className="notifications flex" onClick={onSetIsWatch}> */}
                                <div className="notifications flex" >
                                    <IconWatch />
                                    {task.isWatch ? <p className="txt">Watching</p> : <p className="txt">Watch</p>}
                                    {task.isWatch &&
                                        <div className="v-icon flex justify-center align-center"><IconV /></div>}
                                </div>
                            </div>

                            {task.dates &&
                                <div className="dates-data" >
                                    <p className="dates-title">Dates</p>
                                    <div className="flex checkbox-and-dates">
                                        <div className="dates-txt">
                                            <p className="class-Done">{task.dates.longString}</p>

                                            {/* <IconClock color={'var(--txtClrDark)'} /> */}
                                        </div>
                                    </div>
                                </div>}

                        </section>

                        {/* <section className="small-items"> */}
                        {/* <Notifications  {...{ buttonIconProps, isWatching, onClickWatching: () => setIsWatching(prev => !prev) }} /> */}
                        {/* </section> */}

                        {/* <section className="small-items"> */}
                        {/* <Dates          {...{ dates: task.dates, onClickDates: event => setModalProps({ event, content: modalContent.addDates }) }} /> */}
                        {/* </section> */}

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
                                        <Checklists     {...{ i, iconProps, checklist, checklists: task.checklists, onUpdateTask, refTaskDetails }} />
                                    </div>
                                </React.Fragment>)}

                        {/* <Activity       {...{ iconProps, activities: task.activities }} /> */}
                    </section>

                    <section className="task-features">

                        <h3>Add to card</h3>
                        <div onClick={event => setModalProps({ event, content: modalContent.addMembers })}>
                            <IconMan {...buttonIconProps} />
                            <p>Members</p>
                        </div>

                        <div onClick={event => setModalProps({ event, content: modalContent.addLabels })}>
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

                        <div onClick={event => setModalProps({ event, content: modalContent.addDates })}>
                            <IconAttachment {...buttonIconProps} />
                            <p>Attachment</p>
                        </div>

                        <div onClick={event => setModalProps({ event, content: modalContent.addDates })}>
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
