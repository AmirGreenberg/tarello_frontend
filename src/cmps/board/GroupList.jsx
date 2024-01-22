import { AddNewGroup } from './AddNewGroup.jsx'
import { GroupPreview } from './GroupPreview.jsx'

//drag n drop
import { dragAndDropService } from '../../services/drag-and-drop.service.js'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useSelector } from 'react-redux'

export function GroupList({ filter, groups, boardId, onToggleLabel, onUpdateBoard, isTagOpen, board }) {
    function onAddGroup(newGroup) {
        onUpdateBoard('groups', [...groups, newGroup])
    }

    async function onHandleDragEnd(result) {
        const updateBoard = dragAndDropService.handleDragEnd(result, board)
        const newGroups = updateBoard.groups
        onUpdateBoard('groups', newGroups)
    }
    return (
        <>
            <section className="group-list-container">
                <DragDropContext onDragEnd={onHandleDragEnd}>
                    <Droppable
                        droppableId="board"
                        direction="horizontal"
                        type="group"
                    >
                        {(provided) => (
                            <section
                                className="group-list clean-list"
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {groups.length > 0 &&
                                    groups?.filter(group => RegExp(filter.keyword, 'i').test(group.title))
                                    .map((group, i) => (
                                        <Draggable
                                            key={group.id}
                                            draggableId={group.id}
                                            index={i}
                                        >
                                            {(provided, snapshot) => (
                                                <li
                                                    className={
                                                        `group-preview-container ${
                                                        snapshot.isDragging
                                                            ? 'dragged'
                                                            : ''
                                                        }
                                                    `}
                                                    key={group.id}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    ref={provided.innerRef}
                                                >
                                                    <GroupPreview
                                                        key={i}
                                                        {...{
                                                            filter,
                                                            group,
                                                            groups,
                                                            boardId,
                                                            isTagOpen,
                                                            onUpdateBoard,
                                                            onToggleLabel,
                                                            provided,
                                                        }}
                                                    />
                                                </li>
                                            )}
                                        </Draggable>
                                    ))}
                                <AddNewGroup onAddGroup={onAddGroup} />
                                {provided.placeholder}
                            </section>
                        )}
                    </Droppable>
                </DragDropContext>
            </section>
        </>
    )
}
