import { AddNewTask } from './AddNewTask'
import { TaskPreview } from './TaskPreview'
import { Droppable, Draggable } from 'react-beautiful-dnd'

export function TaskList({ onIsCheckDate, boardId, onAddTask, onCancelAddTask, onToggleLabel, isTagOpen, isCreateTopCard, isCreateBottomCard, topGroup, group }) {
    return (
        <Droppable droppableId={group.id} type="task">
            {(provided) => (
                <section
                    className="task-list clean-list"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{ 'overflow:': 'hidden' }}
                >
                    {isCreateTopCard && (
                        <>
                            {
                                topGroup.tasks
                                    .map((task, i) =>
                                        <TaskPreview
                                            key={i}
                                            boardId={boardId}
                                            groupId={group.id}
                                            task={task}
                                            isTagOpen={isTagOpen}
                                            onToggleLabel={onToggleLabel}
                                        />
                                    )
                            }
                            <AddNewTask {...{ onAddTask, onCancelAddTask }} />
                        </>
                    )}
                    {group.tasks
                        .map((task, i) => (
                            <Draggable
                                key={task.id}
                                draggableId={task.id}
                                index={i}
                            >
                                {(provided, snapshot) => (
                                    <li
                                        key={task.id}
                                        className={
                                            snapshot.isDragging
                                                ? 'list-item dragged'
                                                : 'list-item'
                                        }
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}
                                    >
                                        <TaskPreview
                                            key={i}
                                            boardId={boardId}
                                            groupId={group.id}
                                            group={group}
                                            task={task}
                                            isTagOpen={isTagOpen}
                                            onToggleLabel={onToggleLabel}
                                            onIsCheckDate={onIsCheckDate}
                                        />
                                    </li>
                                )}
                            </Draggable>
                        ))}
                    {provided.placeholder}

                    {isCreateBottomCard && (
                        <AddNewTask {...{ onAddTask, onCancelAddTask }} />
                    )}
                </section>
            )}
        </Droppable>
    )
}
