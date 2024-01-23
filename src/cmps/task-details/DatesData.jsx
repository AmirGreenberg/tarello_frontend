import { boardService } from "../../services/board.service"
import { utilService } from "../../services/util.service"
import { setIsCheckDate, updateBoardGroupTaskType } from "../../store/actions/board.actions"

export function DatesData({ board, group, task }) {

    const { startDate, dueDate } = task

    const dueDatetimestamp = task.dueDate ? task.dueDate.timeStamp : Math.floor(new Date().getTime() / 1000) + 86400 * 2
    const dueTime = utilService.getTime(dueDatetimestamp)

    const currentDate = new Date()
    const datesTitle = (task.startDate && !task.dueDate) ? 'Start date' : (!task.startDate && task.dueDate) ? 'Due date' : 'Dates'

    if (startDate) {
        var formattedStartDate = boardService.getFormattedDate(task.startDate).formattedDate
    }
    if (dueDate) {
        var date = boardService.getFormattedDate(dueDate.timeStamp).date
        var formattedDueDate = boardService.getFormattedDate(dueDate.timeStamp).formattedDate
        var isDueDatePassed = date < currentDate
    }

    const datesData = (formattedStartDate && !formattedDueDate) ? formattedStartDate :
        (!formattedStartDate && formattedDueDate) ? formattedDueDate + ' at ' + dueTime :
            formattedStartDate + ' - ' + formattedDueDate + ' at ' + dueTime

    function getDynamicCmp(ev, cpmType) {
        const parentElement = ev.currentTarget;
        const data = parentElement.getBoundingClientRect()
        const location = { top: data.top, left: data.left }
        updateBoardGroupTaskType(board._id, group.id, task.id, cpmType, location)
    }

    function onUpdateIsDone() {
        try {
            setIsCheckDate(board, group, task)
        } catch (err) {
            console.log('err')
        }
    }

    const dynClass = (dueDate && isDueDatePassed && !dueDate.isDone) ? 'overdue' :
        ((dueDate && isDueDatePassed && dueDate.isDone) || (dueDate && !isDueDatePassed && dueDate.isDone)) ? 'completed' : ''

    return (
        <div className="dates-data" >
            <p className="dates-title">{datesTitle}</p>
            <div className="flex checkbox-and-dates">
                {task.dueDate && <input type="checkbox"
                    checked={task.dueDate.isDone}
                    onChange={(ev) => onUpdateIsDone()} />}
                <div className="dates-txt" onClick={((ev) => getDynamicCmp(ev, 'Dates'))}>
                    <p className='class-Done'>{datesData}</p>
                    {dueDate && isDueDatePassed && !dueDate.isDone && <p className={`${dynClass}`}>Overdue</p>}
                    {dueDate && isDueDatePassed && dueDate.isDone && <p className={`${dynClass}`}>Completed</p>}
                    {dueDate && !isDueDatePassed && dueDate.isDone && <p className={`${dynClass}`}>Completed</p>}
                </div>
            </div>
        </div>
    )
}