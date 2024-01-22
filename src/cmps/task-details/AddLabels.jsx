import { useState } from 'react'
import { boardService } from '../../services/board.service'
// import { IconPencail, IconSuggestionSvg } from "../../services/icons.service"
import * as React from 'react'
import { FormGroup } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { IconPencail, IconPencilLabels, IconSuggestionSvg, IconX } from '../../services/icons.service'
// import { setLabelChecked, setLabelNotChecked, updateCmp } from "../../store/actions/board.actions"
// import { useSelector } from 'react-redux'

const bgColors = {
    greenSubtle: 'var(--greenSubtleBg)',
    green: 'var(--greenBg)',
    greenBold: 'var(--greenBoldBg)',
    yellowSubtle: 'var(--yellowSubtleBg)',
    yellow: 'var(--yellowBg)',
    yellowBold: 'var(--yellowBoldBg)',
    orangeSubtle: 'var(--orangeSubtleBg)',
    orange: 'var(--orangeBg)',
    orangeBold: 'var(--orangeBoldBg)',
    redSubtle: 'var(--redSubtleBg)',
    red: 'var(--redBg)',
    redBold: 'var(--redBoldBg)',
    purpleSubtle: 'var(--purpleSubtleBg)',
    purple: 'var(--purpleBg)',
    purpleBold: 'var(--purpleBoldBg)',
    blueSubtle: 'var(--blueSubtleBg)',
    blue: 'var(--blueBg)',
    blueBold: 'var(--blueBoldBg)',
    skySubtle: 'var(--skySubtleBg)',
    sky: 'var(--skyBg)',
    skyBold: 'var(--skyBoldBg)',
    limeSubtle: 'var(--limeSubtleBg)',
    lime: 'var(--limeBg)',
    limeBold: 'var(--limeBoldBg)',
    pinkSubtle: 'var(--pinkSubtleBg)',
    pink: 'var(--pinkBg)',
    pinkBold: 'var(--pinkBoldBg)',
    blackSubtle: 'var(--blackSubtleBg)',
    black: 'var(--blackBg)',
    blackBold: 'var(--blackBoldBg)',
}

const txtColors = {
    greenSubtle: 'var(--greenSubtleTxt)',
    green: 'var(--greenTxt)',
    greenBold: 'var(--greenBoldTxt)',
    yellowSubtle: 'var(--yellowSubtleTxt)',
    yellow: 'var(--yellowTxt)',
    yellowBold: 'var(--yellowBoldTxt)',
    orangeSubtle: 'var(--orangeSubtleTxt)',
    orange: 'var(--orangeTxt)',
    orangeBold: 'var(--orangeBoldTxt)',
    redSubtle: 'var(--redSubtleTxt)',
    red: 'var(--redTxt)',
    redBold: 'var(--redBoldTxt)',
    purpleSubtle: 'var(--purpleSubtleTxt)',
    purple: 'var(--purpleTxt)',
    purpleBold: 'var(--purpleBoldTxt)',
    blueSubtle: 'var(--blueSubtleTxt)',
    blue: 'var(--blueTxt)',
    blueBold: 'var(--blueBoldTxt)',
    skySubtle: 'var(--skySubtleTxt)',
    sky: 'var(--skyTxt)',
    skyBold: 'var(--skyBoldTxt)',
    limeSubtle: 'var(--limeSubtleTxt)',
    lime: 'var(--limeTxt)',
    limeBold: 'var(--limeBoldTxt)',
    pinkSubtle: 'var(--pinkSubtleTxt)',
    pink: 'var(--pinkTxt)',
    pinkBold: 'var(--pinkBoldTxt)',
    blackSubtle: 'var(--blackSubtleTxt)',
    black: 'var(--blackTxt)',
    blackBold: 'var(--blackBoldTxt)',
}

export function AddLabels({ board, task, onUpdateTask, onCloseModal }) {

    const [isCreateNewLabel, setIsCreateNewLabel] = useState(false)
    const [newLabelTitle, setNewLabelTitle] = useState('')
    const [newLabelColor, setNewLabelColor] = useState('')
    const [searchTxt, setSearchTxt] = useState('')
    const [boardLabels, setLabels] = useState(board.labels)
    const [taskLabels, setTaskLabels] = useState(task.labels)

    function handleChange({ target }) {
        setSearchTxt(target.value)
    }

    function onToggleLabel(label) {
        if (!label.isActive) label.isActive = true
        else label.isActive = !label.isActive

        setTaskLabels(task.labels)
        onUpdateTask('labels', task.labels, false)
    }

    // function onCreateLabel(ev) {
    //     ev.preventDefault()
    //     const newLabel = boardService.createLabel(
    //         newLabelTitle,
    //         bgColors[newLabelColor]
    //     )
    //     const boardLabels = board.labels
    //         ? [newLabel, ...board.labels]
    //         : [newLabel]
    //     const taskLabels = task.labels ? [newLabel, ...task.labels] : [newLabel]
    //     board.labels = boardLabels
    //     onUpdateTask('labels', taskLabels, false)
    //     setIsCreateNewLabel(false)
    // }

    return (
        <section className="feature-labels scroll">
            <section className="modal-header">
                <h6 className="modal-header-txt" title="Labels">
                    Labels
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
            <section className="feature-labels scroll">

                <input className="search-lables" value={searchTxt} type="text" placeholder="Search labels..." onChange={handleChange} />
                <div className="labels-suggestions flex align-center">
                    <p className="labels-title">Labels</p>
                </div>

                <ul className="label-options">
                    {taskLabels.map((label, idx) => (
                        label.title?.toLowerCase().includes(searchTxt.toLowerCase()) &&
                        <li className="flex align-center" key={idx}>
                            <FormGroup className="checkbox-item">
                                <FormControlLabel control={<Checkbox
                                    className="mui-check-box"
                                    checked={label.isActive}
                                    onChange={(e) => onToggleLabel(label)} />}
                                    label={<div className="color-display"
                                        style={{ backgroundColor: label.bgColor, color: label.txtColor }}>
                                        {label.title}
                                    </div>}
                                    sx={{ '& .MuiSvgIcon-root': { height: '23px' } }} />
                            </FormGroup>
                            {/* <div className="edit-label" onClick={(ev) => onEditLabel(ev, label.id, "Edit")}> */}
                            <div className="edit-label" >
                                <IconPencilLabels />
                            </div>
                        </li>
                    ))}
                    <div>
                        <button
                            className={`create-btn create-new-label`}
                        // onClick={onAddBoard}
                        >
                            Create a new label
                        </button>
                    </div>
                </ul>
                {/* <p className="new-label" onClick={(ev) => onEditLabel(ev, null, 'Add')}>Create a new label</p> */}

            </section>
        </section>
    )
}

