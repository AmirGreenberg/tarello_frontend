import { useSelector } from 'react-redux'

import { BoardHeader } from '../cmps/board/BoardHeader.jsx'
import { GroupList } from '../cmps/board/GroupList.jsx'
import { setIsCheckDate, getActionUpdateBoard, loadBoard, loadBoards, updateBoard } from '../store/actions/board.actions.js'
import { useEffect, useRef, useState } from 'react'
import { Outlet, useParams } from 'react-router'
import { utilService } from '../services/util.service.js'
import { boardService } from '../services/board.service.js'
import { SOCKET_EMIT_JOINED_BOARD, SOCKET_EVENT_BOARD_UPDATED, socketService } from '../services/socket.service.js'
import { useDispatch } from 'react-redux'


export function BoardApp() {
    const { boardId } = useParams()
    const board = useSelector((storeState) => storeState.boardModule.board)
    const [errorMessage, setErrorMessage] = useState('')
    const debounceUpdateBoard = useRef(utilService.debounce(updateBoard))
    const [isTagOpen, setIsTagOpen] = useState(false)
    const [filter, setFilter] = useState(boardService.getDefaultFilter())


    useEffect(() => {
        loadBoards()
            .then(() => loadBoard(boardId))
            .catch(() => setErrorMessage(`No such board id='${boardId}'`))

    }, [])


    useEffect(() => {
        socketService.emit(SOCKET_EMIT_JOINED_BOARD, boardId)
        console.log('socketService.emit')
    }, [boardId])


    const dispatch = useDispatch()

    useEffect(() => {
        socketService.on(SOCKET_EVENT_BOARD_UPDATED, board => {
            dispatch(getActionUpdateBoard(board))
        })

        return () => {
            socketService.off(SOCKET_EVENT_BOARD_UPDATED)
        }
    }, [])

    async function onIsCheckDate(group, task) {
        try {
            setIsCheckDate(board, group, task)
        } catch (err) {
            console.log('err')
        }
    }

    function onToggleLabel() {
        setIsTagOpen(prevState => !prevState)
    }

    function onUpdateBoard(name, value, isDebounce) {
        const updatedBoard = { ...board, [name]: value }
        if (isDebounce) debounceUpdateBoard.current(updatedBoard)
        else updateBoard(updatedBoard)
    }

    function onSetFilter(keyword) {
        setFilter(prev => ({ ...prev, keyword }))
    }

    if (!board)
        return (
            <div className="loader-container flex justify-center align-center height-100vh">
                <section className="loader flex justify-center align-center column">
                    <></>
                    <img src="https://res.cloudinary.com/dtty3yxsg/image/upload/v1705387866/logo-gif5_ac1nlh.gif" />
                    <img
                        src="https://res.cloudinary.com/dtty3yxsg/image/upload/v1705388374/Tarello_logo_mvrvlk.svg"
                        alt=""
                        className="logo-title"
                    />
                </section>
            </div>
        )
    return (
        <>
            <section
                className="board-app"
                style={{ backgroundImage: `url(${board.style.backgroundImage})` }}
            >
                <BoardHeader {...{ onSetFilter, onUpdateBoard }} />
                <GroupList
                    {...{ filter, groups: board.groups, boardId, onUpdateBoard, onToggleLabel, isTagOpen, board, onIsCheckDate }}
                />
            </section>
            <Outlet />
        </>
    )

}
