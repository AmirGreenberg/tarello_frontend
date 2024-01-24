import { useEffect, useRef, useState } from 'react'
import { AddNewTask } from './AddNewTask'
import { TaskList } from './TaskList.jsx'
import { GroupMenu } from './GroupMenu.jsx'
import { utilService } from '../../services/util.service.js'
import { boardService } from '../../services/board.service.js'
import { Icon3DotsNarrowGap, Icon3DotsWithSpacing, IconPlusSmall } from '../../services/icons.service.jsx'

export function GroupPreview({
    filter,
    group,
    groups,
    boardId,
    isTagOpen,
    onUpdateBoard,
    onToggleLabel,
    provided,
    board,
    onIsCheckDate,
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [groupTitle, setGroupTitle] = useState(group.title)
    const [isCreateTopCard, setIsCreateTopCard] = useState(false)
    const [isCreateBottomCard, setIsCreateBottomCard] = useState(false)
    const [topGroup, setTopGroup] = useState(boardService.createGroup())
    const textAreaRef = useRef(null)

    useEffect(() => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = 'auto'
            textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`
        }
    }, [groupTitle])

    function handleFocus(event) {
        event.target.select()
    }

    function onTextAreaKeyDown(ev) {
        if (ev.key === 'Enter') {
            ev.preventDefault()
            ev.target.blur()
        }
    }

    function onChangeGroupTitle(event) {
        const title = event.target.value
        setGroupTitle(title)
        group.title = title
        onUpdateBoard('groups', groups, true)
    }

    function onToggleMenu() {
        setIsMenuOpen((prev) => !prev)
    }

    function onCreateCard() {
        setIsCreateTopCard(true)
        setIsCreateBottomCard(false)
        setIsMenuOpen(false)
    }

    function onAddTask(taskTitle) {
        const newTask = boardService.createTask(taskTitle)
        if (isCreateTopCard) {
            setTopGroup((_topGroup) => ({
                ..._topGroup,
                tasks: [..._topGroup.tasks, newTask],
            }))
            topGroup.tasks.push(newTask)
        } else {
            group.tasks.push(newTask)
            onUpdateBoard('groups', groups)
        }
    }

    function onCancelAddTask() {
        if (topGroup.tasks.length) {
            group.tasks = [...topGroup.tasks, ...group.tasks]
            onUpdateBoard('groups', groups)
            setTopGroup(boardService.createGroup())
        }
        setIsCreateTopCard(false)
        setIsCreateBottomCard(false)
    }

    async function onDuplicateGroup() {
        try {
            const duplicatedGroup = { ...group, id: utilService.makeId() }
            duplicatedGroup.tasks = duplicatedGroup.tasks.map((task) => ({ ...task, id: utilService.makeId() }));
            const groupIdx = groups.findIndex((_group) => _group.id === group.id);
            if (groupIdx < 0) return;
            const _groups = await groups.toSpliced(groupIdx + 0, 0, duplicatedGroup);
            await onUpdateBoard('groups', _groups);
            setIsMenuOpen(false);
        } catch (error) {
            console.error('Error in duplicating group:', error);
        }
    }

    function onRemoveGroup() {
        const _groups = groups.filter((_group) => _group.id !== group.id)
        onUpdateBoard('groups', _groups)
    }

    function onMoveGroup() { }

    function onWatchGroup() { }

    function onGroupSortBy() { }
    return (
        <section className="group-preview">
            <div
                className="group-preview-header flex justify-between "
                {...provided.dragHandleProps}
            >
                <textarea
                    className="group-preview-title  clean-textarea blue-focus"
                    maxLength="512"
                    ref={textAreaRef}
                    name="group-title"
                    type="text"
                    autoComplete="off"
                    spellCheck="false"
                    id="txt"
                    value={groupTitle}
                    onFocus={handleFocus}
                    onKeyDown={onTextAreaKeyDown}
                    onChange={onChangeGroupTitle}
                    rows={1}
                />
                <button
                    onClick={onToggleMenu}
                    className="open-menu-btn header-btn btn-type-2 clean-btn"
                >
                    <Icon3DotsWithSpacing color={'var(--txtClrDark)'} />
                </button>
                {isMenuOpen && (
                    <GroupMenu
                        onToggleMenu={onToggleMenu}
                        onCreateCard={onCreateCard}
                        onDuplicateGroup={onDuplicateGroup}
                        onMoveGroup={onMoveGroup}
                        onWatchGroup={onWatchGroup}
                        onGroupSortBy={onGroupSortBy}
                        onRemoveGroup={onRemoveGroup}

                    />
                )}
            </div>
            <TaskList
                {...{
                    filter,
                    boardId,
                    onAddTask,
                    isCreateTopCard,
                    isCreateBottomCard,
                    onCancelAddTask,
                    topGroup,
                    group,
                    onToggleLabel,
                    isTagOpen,
                    board,
                    onIsCheckDate,
                }}
            />
            {!isCreateTopCard && !isCreateBottomCard && (
                <section className="group-preview-footer">
                    <button
                        className="header-btn clean-btn add-task-btn"
                        onClick={() => setIsCreateBottomCard(true)}
                    >
                        <IconPlusSmall color={'var(--txtClrDark)'} />
                        <span className='bold'>Add a card</span>
                    </button>
                </section>
            )}
        </section>
    )
}
