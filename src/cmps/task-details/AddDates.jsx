import { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'


export function AddDates({ dates, onUpdateTask }) {
    return
}
//     if (!dates) dates = { startDate: '', dueDate: '', shortString: '', longString: '' }

//     const [startDate, setStartDate] = useState(dates.startDate)
//     const [dueDate, setDueDate] = useState(dates.dueDate)


//     function onAddDates(ev) {
//         ev.preventDefault()
//         const dates = getDates()
//         onUpdateTask('dates', dates)
//     }

//     function getDates() {
//         var shortStringDatesList = []
//         var longStringDatesList = []
//         var shortStringStartDate = ''
//         var shortStringDueDate = ''
//         const currYear = new Date().getFullYear()
//         if (startDate) {
//             const _startDate = new Date(startDate)
//             const startYear = _startDate.getFullYear()
//             let longStringStartDate = _startDate.toDateString().split(' ').slice(1, 3).join(' ')
//             if (startYear !== currYear) longStringStartDate += `, ${startYear}`
//             shortStringStartDate += `${dueDate ? '' : (Date.now() < _startDate ? 'Starts: ' : 'Started: ')}${longStringStartDate}`
//             shortStringDatesList.push(shortStringStartDate)
//             longStringDatesList.push(longStringStartDate)
//         }
//         if (dueDate) {
//             const _dueDate = new Date(dueDate)
//             const dueYear = _dueDate.getFullYear()
//             let longStringDueDate = _dueDate.toDateString().split(' ').slice(1, 3).join(' ')
//             if (dueYear !== currYear) longStringDueDate += `, ${dueYear}`
//             shortStringDueDate = longStringDueDate
//             longStringDueDate += ` at ${_dueDate.getHours()}:${_dueDate.getMinutes()}`
//             shortStringDatesList.push(shortStringDueDate)
//             longStringDatesList.push(longStringDueDate)
//         }
//         const shortString = shortStringDatesList.join(' - ')
//         const longString = longStringDatesList.join(' - ')
//         return { startDate, dueDate, shortString, longString }
//     }

//     function onChangeDate(ev) {
//         if (ev.target.name === 'startDate') setStartDate(ev.target.value)
//         else if (ev.target.name === 'dueDate') setDueDate(ev.target.value)
//     }

//     function onRemoveDates() {
//         setStartDate('')
//         setDueDate('')
//         const dates = {
//             startDate: '',
//             dueDate: '',
//             shortString: '',
//             longString: '',
//         }
//         onUpdateTask('dates', dates)
//     }

//     return (
//         <section className="feature-dates scroll">
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//                 <StaticDatePicker orientation="landscape" onChange={handleDateChange} />
//             </LocalizationProvider>
//             <p className={dynClassStart}>Start date</p>
//             <div className='start-date flex'>
//                 <input type="checkbox" checked={isStartDate} onChange={handleCheckboxChange} name="start-date" />
//                 <input type="text" className={dynClassStart} onChange={handleChange} value={isStartDate ? startDate : "M/D/YYYY"}
//                 />
//             </div>
//             <p className={dynClassDue}>Due date</p>
//             <div className='due-date flex'>
//                 <input type="checkbox" checked={isDueDate} onChange={handleCheckboxChange} name="due-date" />
//                 <input type="text" className={dynClassDue} onChange={handleChange} value={isDueDate ? dueDate : "M/D/YYYY"} />
//                 <input type="text" className={dynClassDue} onChange={handleChange} value={isDueDate ? dueTime : "h:mm A"} />
//             </div>
//             <button className='save-btn' onClick={onSaveDate}>Save</button>
//             <button className='remove-btn' onClick={onRemoveDate}>Remove</button>
//         </section>
//     )
// }


///// michael:

// return (
//     <section className="add-dates">
//         <h3>Dates</h3>
//         <form className="dates" onSubmit={onAddDates}>
//             <h4>Start date</h4>
//             <input
//                 type="date"
//                 name="startDate"
//                 value={startDate}
//                 onChange={onChangeDate}
//             />
//             <h4>Due date</h4>
//             <input
//                 type="datetime-local"
//                 name="dueDate"
//                 value={dueDate}
//                 onChange={onChangeDate}
//             />
//             <button className="save-dates button-link">Save</button>
//             <button
//                 type="button"
//                 className="remove-dates button-link"
//                 onClick={onRemoveDates}
//             >
//                 Remove
//             </button>
//         </form>
//     </section>
// )
// }
