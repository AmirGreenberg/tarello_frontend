import React from 'react'
import { IconClock } from '../../services/icons.service'
import { boardService } from '../../services/board.service'

export function DateTaskBtn({ dueDate, startDate, onIsCheckDate, task, group }) {
    const currentDate = new Date()

    if (dueDate) {
        var { date, formattedDate } = boardService.getFormattedDate(dueDate.timeStamp)
        var isDueDatePassed = date < currentDate
    }

    if (startDate) {
        var formattedStartDate = boardService.getFormattedDate(task.startDate).formattedDate
    }

    function handleClick(ev) {
        ev.stopPropagation()
        if (dueDate) onIsCheckDate(group, task)
    }

    var dateOutput
    if (startDate && !dueDate) dateOutput = "Starts: " + formattedStartDate
    if (!startDate && dueDate) dateOutput = formattedDate
    if (startDate && dueDate) dateOutput = formattedStartDate + ' - ' + formattedDate

    return (
        <div className={`btn-task-f flex align-center `}
            onClick={handleClick}>
            <IconClock />
            <p className={`fs12 mar0 pad0`}>{dateOutput}</p>
        </div>
    )
}
