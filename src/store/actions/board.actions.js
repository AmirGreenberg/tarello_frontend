import { boardService } from '../../services/board.service.js'
import { store } from '../store.js'
import { showSuccessMsg, showErrorMsg } from '../../services/event-bus.service.js'
import { SET_BOARDS, SET_BOARD, SET_GROUP, SET_TASK, ADD_BOARD, UPDATE_BOARD, REMOVE_BOARD, UNDO_REMOVE_BOARD } from '../reducers/board.reducer.js'

export async function loadBoards() {
    try {
        const boards = await boardService.query()
        store.dispatch({ type: SET_BOARDS, boards })
    } catch (err) {
        console.log('Cannot load boards', err)
        throw err
    }
}

export async function loadBoard(boardId) {
    try {
        const board = await boardService.getBoardById(boardId)
        store.dispatch({ type: SET_BOARD, board })
        return board
    } catch (err) {
        console.log('Cannot load board', err)
        throw err
    }
}

export async function loadGroup(boardId, groupId) {
    try {
        const group = await boardService.getGroupById(boardId, groupId)
        store.dispatch({ type: SET_GROUP, group })
        return group
    } catch (err) {
        console.log('Cannot load group', err)
        throw err
    }
}

export async function loadTask(boardId, groupId, taskId) {
    try {
        const task = await boardService.getTaskById(boardId, groupId, taskId)
        store.dispatch({ type: SET_TASK, task })
        return task
    } catch (err) {
        console.log('Cannot load task', err)
        throw err
    }
}


export async function loadEmptyBoard() {
    try {
        const board = {}
        store.dispatch({ type: SET_BOARD, board: null })
        return board
    } catch (err) {
        console.log('Cannot load board', err)
        throw err
    }
}

export async function removeBoard(boardId) {
    try {
        const removedBoard = await boardService.remove(boardId)
        if (!removeBoard) throw new Error('No board to remove')
        store.dispatch({ type: REMOVE_BOARD, boardId })
        return removeBoard
    } catch (err) {
        console.log('Cannot remove board', err)
        throw err
    }
}

export async function addBoard(board) {
    try {
        const addedBoard = await boardService.add(board);
        store.dispatch({ type: ADD_BOARD, board: addedBoard });
        return addedBoard;
    } catch (err) {
        console.log('Cannot add board', err);
        throw err;
    }
}

export async function updateBoard(board) {
    const prevBoard = store.getState().boardModule.board
    try {
        store.dispatch({ type: UPDATE_BOARD, board: board })
        let updatedBoard = await boardService.update(board)
        store.dispatch({ type: UPDATE_BOARD, board: updatedBoard })
        return updatedBoard
    } catch (err) {
        store.dispatch({ type: UPDATE_BOARD, board: prevBoard })
        console.log('Cannot save board', err)
        throw err
    }
}

export async function removeAttachment(board, group, task, attachIdx) {
    try {
        const groupId = getGroupIdx(board, group)
        const taskId = getTaskIdx(group, task)

        board.groups[groupId].tasks[taskId].attachment.splice(attachIdx, 1)

        await updateBoard(board)

    } catch (err) {
        console.log('Cannot delete attachment', err)
        throw err
    }
}

export async function updateBoardGroupTaskType(boardId, groupId, taskId) {
    if (boardId === null) {
        store.dispatch({ type: SET_BOARD, board: null })
        store.dispatch({ type: SET_GROUP, group: null })
        store.dispatch({ type: SET_TASK, task: null })
    }
    else {
        const board = await boardService.getBoardById(boardId)
        const group = board.groups.find(group => group.id === groupId)
        const task = group.tasks.find(task => task.id === taskId)
        store.dispatch({ type: SET_BOARD, board: board })
        store.dispatch({ type: SET_GROUP, group: group })
        store.dispatch({ type: SET_TASK, task: task })
    }
}

export async function EditTaskMember(board, group, task, memberId) {
    try {
        const gIdx = getGroupIdx(board, group)
        const tIdx = getTaskIdx(group, task)

        if (board.groups[gIdx].tasks[tIdx].memberIds.includes(memberId)) {
            const memberIdx = task.memberIds.findIndex(mId => mId === memberId)
            board.groups[gIdx].tasks[tIdx].memberIds.splice(memberIdx, 1)
        }
        else {
            board.groups[gIdx].tasks[tIdx].memberIds.push(memberId)
        }
        await updateBoard(board)

    } catch (err) {
        console.log('Cannot edit member', err)
        throw err
    }
}


export async function setLabelNotChecked(board, group, task, labelId) {
    try {
        const newLabelIds = task.labelIds.filter(lId => lId !== labelId)

        const gIdx = getGroupIdx(board, group)
        const tIdx = getTaskIdx(group, task)

        board.groups[gIdx].tasks[tIdx].labelIds = newLabelIds

        await updateBoard(board)

    } catch (err) {
        console.log('Cannot remove label from task', err)
        throw err
    }
}

export async function setLabelChecked(board, group, task, labelId) {
    try {
        const gIdx = getGroupIdx(board, group)
        const tIdx = getTaskIdx(group, task)

        board.groups[gIdx].tasks[tIdx].labelIds.push(labelId)

        await updateBoard(board)

    } catch (err) {
        console.log('Cannot remove label from task', err)
        throw err
    }
}

export async function editLabel(board, group, task, labelId, color, title) {
    try {
        const newLabel = {
            id: utilService.makeId(),
            title,
            color: color.color,
            colorName: color.colorName,
            shade: color.shade
        }

        const gIdx = getGroupIdx(board, group)
        const tIdx = getTaskIdx(group, task)

        if (task.labelIds.includes(labelId)) { //edit
            const labelIdx = board.labels.findIndex(label => label.id === labelId)
            board.labels[labelIdx].title = title
            board.labels[labelIdx].color = color.color
            board.labels[labelIdx].colorName = color.colorName
            board.labels[labelIdx].shade = color.shade

        }
        else { //add
            board.labels.push(newLabel)
            board.groups[gIdx].tasks[tIdx].labelIds.push(newLabel.id)
        }

        await updateBoard(board)

    } catch (err) {
        console.log('Cannot add label', err)
        throw err
    }
}

export async function removeLabel(board, group, task, labelId) {
    const gIdx = getGroupIdx(board, group)
    const tIdx = getTaskIdx(group, task)
    const lTaskIdx = getLabelIdsIndex(task, labelId)

    const lBoardIdx = board.labels.findIndex(label => label.id === labelId)
    board.labels.splice(lBoardIdx, 1)

    board.groups[gIdx].tasks[tIdx].labelIds.splice(lTaskIdx, 1)

    await updateBoard(board)
}


function getGroupIdx(board, group) {
    return board.groups.findIndex(g => g.id === group.id)
}

function getTaskIdx(group, task) {
    return group.tasks.findIndex(t => t.id === task.id)
}

export async function updatePhotoBackground(board, group, task, photo) {
    try {
        const groupId = getGroupIdx(board, group)
        const taskId = getTaskIdx(group, task)

        board.groups[groupId].tasks[taskId].cover.img.imgBgClr = ''
        board.groups[groupId].tasks[taskId].cover.img.url = photo

        await updateBoard(board)

    } catch (err) {
        console.log('Cannot update background photo', err)
        throw err
    }
}