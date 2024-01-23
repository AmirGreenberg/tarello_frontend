import { IconPencilLabels, IconSuggestionSvg, IconX } from "../../services/icons.service"
import * as React from 'react'
import { FormGroup } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { setLabelChecked, setLabelNotChecked } from "../../store/actions/board.actions"
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { boardService } from "../../services/board.service"

export function AddLabels({ onCloseModal, onSetLabelIdToEdit }) {

    const board = useSelector(storeState => storeState.boardModule.board)
    const group = useSelector(storeState => storeState.boardModule.group)
    const task = useSelector(storeState => storeState.boardModule.task)

    const [labels, setLabels] = useState(board.labels)
    console.log("🚀  labels:", labels)
    const [searchTxt, setSearchTxt] = useState('')

    async function handleChange(event, labelId) {
        const { target } = event
        try {
            if (target.checked) {
                await setLabelChecked(board, group, task, labelId)
            }
            else {
                await setLabelNotChecked(board, group, task, labelId)
            }
        } catch (err) {
            console.log('cannot add/remove label, error: ', err);
        }
    }

    async function handleSearchChange({ target }) {
        setSearchTxt(target.value)
        const filterLabels = await boardService.getLabels(board._id, target.value)
        setLabels(filterLabels)
    }

    function onEditLabel(ev, labelId) {
        ev.stopPropagation()
        onSetLabelIdToEdit(labelId)
    }

    return (
        <section className="feature-labels scroll">
            <section className="modal-header">
                <h6 className="modal-header-txt" title="Create board">
                    Labels
                </h6>

                <button
                    onClick={(event) => onCloseModal()}
                    aria-label="Close popover"
                    className="popover-close-btn align-center"
                    data-testid="popover-close"
                >
                    <span aria-hidden="true" className="span-close align-center">
                        <IconX size={10} color={'var(--clr4)'} />
                    </span>
                </button>
            </section>

            <section className="modal-details">
                <div className="board-preview-wrapper">
                    <input className="search-lables" value={searchTxt} type="text" placeholder="Search labels..." onChange={handleSearchChange} />
                </div>

                <div className="labels-suggestions flex align-center">
                    <p className="labels-title">Labels</p>
                </div>

                <div className="label-options">
                    {labels.map(label => (
                        <li className="flex align-center" key={label.id}>
                            <FormGroup className="checkbox-item">
                                <FormControlLabel control={<Checkbox
                                    className="mui-check-box"
                                    checked={task.labelIds ? task.labelIds.includes(label.id) : false}
                                    onChange={(ev) => handleChange(ev, label.id)} />}
                                    label={<div className="color-display"
                                        style={{ backgroundColor: label.color }}>
                                        {label.title}
                                    </div>}
                                    sx={{ '& .MuiSvgIcon-root': { height: '23px' } }} />
                            </FormGroup>
                            <div className="edit-label" onClick={(ev) => onEditLabel(ev, label.id, "Edit")}>
                                <IconPencilLabels />
                            </div>
                        </li>
                    ))}
                </div>

                <p className="create-new-label" onClick={(ev) => onEditLabel(ev, null, 'Add')}>Create a new label</p>

            </section>
        </section>
    )
}

