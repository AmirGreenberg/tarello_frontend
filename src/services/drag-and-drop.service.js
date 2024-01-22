export const dragAndDropService = {
    handleDragEnd,
    handleDragGroup,
    toGroup,
    handleDragTask,
    handleMoveToDifferentTaskList,
    handleMoveInSameTaskLis,
    reorder
}
let gBoard = {}
let groups = {}
export function handleDragEnd(result, board) {
    gBoard = board
    groups = board.groups
    if (!result.destination) {
        return gBoard
    }
    if (result.type === 'group') {
        result.groups = groups
        return handleDragGroup(result)
    }
    if (result.type === 'task') {
        handleDragTask(result)
        return gBoard
    }
}

export function handleDragGroup(result) {
    const { source, destination, groups } = result;

    if (!Array.isArray(groups)) {
        return
    }

    const updatedGroups = [...groups]
    reorder(updatedGroups, source.index, destination.index);

    const updatedBoard = { ...gBoard }
    updatedBoard.groups = updatedGroups
    return updatedBoard
}

export function toGroup(groupId) {
    const group = groups.find((group) => group.id === groupId)
    return group
}

export function handleDragTask(result) {
    const sourceGroupId = result.source.droppableId
    const destinationGroupId = result.destination.droppableId

    const sourceGroup = { ...toGroup(sourceGroupId) }
    if (sourceGroupId !== destinationGroupId) {
        const destinationGroup = { ...toGroup(destinationGroupId) }
        return handleMoveToDifferentTaskList(sourceGroup, destinationGroup, result.source.index, result.destination.index)
    }

    return handleMoveInSameTaskLis(sourceGroup, result.source.index, result.destination.index)

}

export function handleMoveToDifferentTaskList(sourceGroup, destinationGroup, sourceIndex, destinationIndex) {
    const [removed] = sourceGroup.tasks.splice(sourceIndex, 1);
    destinationGroup.tasks.splice(destinationIndex, 0, removed)

    const updatedGroups = groups.map((group) => {

        if (group.id === sourceGroup.id) {
            return sourceGroup
        }
        else if (group.id === destinationGroup.id) {
            return destinationGroup
        }
        else return group
    })
    const updatedBoard = gBoard
    updatedBoard.groups = updatedGroups

    return updatedBoard
}

export function handleMoveInSameTaskLis(group, sourceIndex, destinationIndex) {
    reorder(group.tasks, sourceIndex, destinationIndex)
    const updatedGroup = groups.map((g, index) => {
        if (g.id === group.id) {
            groups[index] = group
            gBoard.groups = groups
        }
    })
}

export function reorder(list, startIndex, endIndex) {
    const [removed] = list.splice(startIndex, 1)
    list.splice(endIndex, 0, removed)
}