import { boardService } from '../../services/board.service.js'
import { store } from '../store.js'
import { showSuccessMsg, showErrorMsg } from '../../services/event-bus.service.js'
import { SET_BOARDS, SET_BOARD, ADD_BOARD, UPDATE_BOARD, REMOVE_BOARD, UNDO_REMOVE_BOARD } from '../reducers/board.reducer.js'

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
        const gIdx = getGroupIdx(board, group)
        const tIdx = getTaskIdx(group, task)

        board.groups[gIdx].tasks[tIdx].attachment.splice(attachIdx, 1)

        await updateBoard(board)

    } catch (err) {
        console.log('Cannot delete attachment', err)
        throw err
    }
}

function getGroupIdx(board, group) {
    return board.groups.findIndex(g => g.id === group.id)
}

function getTaskIdx(group, task) {
    return group.tasks.findIndex(t => t.id === task.id)
}

export async function updatePhotoBackground(board, group, task, photo) {
    try {
        const gIdx = getGroupIdx(board, group)
        const tIdx = getTaskIdx(group, task)

        board.groups[gIdx].tasks[tIdx].cover.img.imgBgClr = ''
        board.groups[gIdx].tasks[tIdx].cover.img.url = photo

        await updateBoard(board)

    } catch (err) {
        console.log('Cannot update background photo', err)
        throw err
    }
}