import { useState } from 'react'
import { boardService } from '../../services/board.service'
import { IconX } from '../../services/icons.service'

export function AddChecklist({ checklists, onUpdateTask, onCloseModal }) {

    const [titleTxt, setTitleTxt] = useState('Checklist')

    function onAddChecklist(ev) {
        ev.preventDefault()
        const newChecklist = boardService.createChecklist(titleTxt)
        if (checklists) checklists = [...checklists, newChecklist]
        else checklists = [newChecklist]
        onUpdateTask('checklists', checklists)
    }

    function handleChange({ target }) {
        setTitleTxt(target.value)
    }

    return (
        <section className="feature-checklist scroll">
            <section className="modal-header">
                <h6 className="modal-header-txt" title="Create board">
                    Add checklist
                </h6>

                <button
                    onClick={(event) => onCloseModal()}
                    aria-label="Close popover"
                    className="popover-close-btn align-center"
                    data-testid="popover-close"
                >
                    <span aria-hidden="true" className="span-close align-center">
                        <IconX size={10} color={'var(--txtClrDark)'} />

                    </span>
                </button>
            </section>
            <section className="modal-details">

                <div className="background-container">
                    <p className="checklist-title">Title</p>
                    <form action="" onSubmit={onAddChecklist}>
                        <input value={titleTxt} className="title-input" type="text" onChange={handleChange} />
                        <button>Add</button>
                    </form>

                </div>
            </section>
        </section >
    )
}
// return (
//     <section className="feature-checklist scroll">
//         <h3>Add checklist</h3>
//         <form onSubmit={onAddChecklist}>
//             <h4>Title</h4>
//             <input type="text" name="title" />
//             <button className="button-add-checklist">Add</button>
//         </form>
//     </section>
// )
// }
