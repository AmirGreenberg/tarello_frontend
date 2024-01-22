export function Dates({ dates, onClickDates }) {
    if (!(dates?.startDate || dates?.dueDate)) return

    function getDatesTitle() {
        if (dates.startDate && dates.dueDate) return 'Dates'
        else if (dates.startDate) return 'Start date'
        else if (dates.dueDate) return 'Due date'
    }

    return (
        <section className="dates">
            <h4>{getDatesTitle()}</h4>
            <button className="dates" onClick={onClickDates}>
                {dates.longString}
            </button>
        </section>
    )
}
