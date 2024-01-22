import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'

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
import { IconArrow, IconAttachment, IconChecked, IconClock, IconDuplicate, IconLabel, IconMan, IconShare, IconShareSocial, IconX, IconXLarge, IconXSmall } from '../services/icons.service'
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
        <section className="task-details-container" >

            <section className="task-details" ref={refTaskDetails} onClick={(ev) => ev.stopPropagation()} >
                <header className="task-details-header">
                    <button
                        className="btn-clean btn-close btn-round flex center "
                        onClick={(ev) => onCloseTaskDetails(ev)}
                    >
                        <IconXLarge color={"var(--txtClrDark)"} />
                    </button>
                    <Cover {...{ cover: task.cover }} />
                    <Title {...{ iconProps, taskTitle: task.title, groupTitle: group.title, onChangeTask, onUpdateBoard }} />
                </header>

                <section className="main-content">
                    <section>
                        <Members        {...{ members: task.members, onClickMembers: event => setModalProps({ event, content: modalContent.addMembers }) }} />
                    </section>
                    <section>
                        <Labels         {...{ labels: task.labels, onClickLabel: event => setModalProps({ event, content: modalContent.addLabels }) }} />
                    </section>
                    {task.dates && <section className="small-items">
                        <div className="dates-container">
                            <p className="mini-title">Dates</p>
                            <div className='date-box flex center gap'>

                                <IconClock color={'var(--txtClrDark)'} />
                                <span>{task.dates.longString}</span>
                            </div>
                        </div>
                    </section>}
                    <section className="small-items">
                        {/* <Notifications  {...{ buttonIconProps, isWatching, onClickWatching: () => setIsWatching(prev => !prev) }} /> */}
                    </section>

                    <section className="small-items">
                        {/* <Dates          {...{ dates: task.dates, onClickDates: event => setModalProps({ event, content: modalContent.addDates }) }} /> */}
                    </section>

                    <Description    {...{ iconProps, taskDescription: task.description, refTaskDetails, onUpdateTask }} />
                    {task.cover?.imgUrl && <Attachments    {...{ iconProps, imgUrl: task.cover.imgUrl }} />}
                    <Checklists     {...{ iconProps, checklists: task.checklists, onUpdateTask, refTaskDetails }} />
                    {/* <Activity       {...{ iconProps, activities: task.activities }} /> */}
                </section>
                <section className="side-bar">
                    <section className="add-to-card mini-title-side">
                        <h4>Add to card</h4>
                        <button
                            className="btn-add-members task-detail-btn"
                            onClick={event => setModalProps({ event, content: modalContent.addMembers })}
                        >
                            <IconMan {...buttonIconProps} />
                            Members
                        </button>
                        <button
                            className="btn-add-labels task-detail-btn"
                            onClick={event => setModalProps({ event, content: modalContent.addLabels })}
                        >
                            <IconLabel {...buttonIconProps} size={12} />
                            Labels
                        </button>
                        <button
                            className="btn-add-checklist task-detail-btn"
                            onClick={event => setModalProps({ event, content: modalContent.addChecklist })}
                        >
                            <IconChecked {...buttonIconProps} />
                            Checklist
                        </button>
                        <button
                            className="btn-add-dates task-detail-btn"
                            onClick={event => setModalProps({ event, content: modalContent.addDates })}
                        >
                            <IconClock {...buttonIconProps} />
                            Dates
                        </button>

                        <button
                            className="btn-add-dates task-detail-btn"
                            onClick={event => setModalProps({ event, content: modalContent.addDates })}
                        >
                            <IconAttachment {...buttonIconProps} />
                            Attachments
                        </button>
                        <h4>Actions</h4>
                        <button
                            className="btn-add-dates task-detail-btn"
                            onClick={onDeleteTask}
                        >
                            <IconXSmall {...buttonIconProps} size={10} />
                            Delete
                        </button>

                        <button
                            className="btn-add-dates task-detail-btn"
                            onClick={event => setModalProps({ event, content: modalContent.addDates })}
                        >
                            <IconDuplicate {...buttonIconProps} />
                            Copy
                        </button>

                        <button
                            className="btn-add-dates task-detail-btn"
                            onClick={event => setModalProps({ event, content: modalContent.addDates })}
                        >
                            <IconArrow {...buttonIconProps} />
                            Move
                        </button>

                        <button
                            className="btn-add-dates task-detail-btn"
                            onClick={event => setModalProps({ event, content: modalContent.addDates })}
                        >
                            <IconShareSocial {...buttonIconProps} />
                            Share
                        </button>

                    </section>
                </section>
            </section>
            <DynamicActionModal {...{ ...modalProps, modalPosition: TO_BOTTOM, onOutsideClick: onCloseModal }} />
        </section>
    )
}
