import { useSelector } from "react-redux";
import { boardService } from "../../services/board.service"
import { editLabel, removeLabel } from "../../store/actions/board.actions"
import { IconBackBtnSvg, IconExit, IconX } from "../../services/icons.service"
import { useEffect, useState } from 'react'
import { AddLabels } from "./AddLabels";

const colors = [
    { color: '#baf3db', colorName: 'green', shade: 'subtle' }, { color: '#f8e6a0', colorName: 'yellow', shade: 'subtle' }, { color: '#ffe2bd', colorName: 'orange', shade: 'subtle' }, { color: '#ffd2cc', colorName: 'red', shade: 'subtle' }, { color: '#dfd8fd', colorName: 'purple', shade: 'subtle' },
    { color: '#4bce97', colorName: 'green', shade: '' }, { color: '#e2b203', colorName: 'yellow', shade: '' }, { color: '#faa53d', colorName: 'orange', shade: '' }, { color: '#f87462', colorName: 'red', shade: '' }, { color: '#9f8fef', colorName: 'purple', shade: '' },
    { color: '#1f845a', colorName: 'green', shade: 'bold' }, { color: '#946f00', colorName: 'yellow', shade: 'bold' }, { color: '#b65c02', colorName: 'orange', shade: 'bold' }, { color: '#ca3521', colorName: 'red', shade: 'bold' }, { color: '#6e5dc6', colorName: 'purple', shade: 'bold' },
    { color: '#cce0ff', colorName: 'blue', shade: 'subtle' }, { color: '#c1f0f5', colorName: 'sky', shade: 'subtle' }, { color: '#d3f1a7', colorName: 'lime', shade: 'subtle' }, { color: '#fdd0ec', colorName: 'pink', shade: 'subtle' }, { color: '#dcdfe4', colorName: 'black', shade: 'subtle' },
    { color: '#579dff', colorName: 'blue', shade: '' }, { color: '#60c6d2', colorName: 'sky', shade: '' }, { color: '#94c748', colorName: 'lime', shade: '' }, { color: '#e774bb', colorName: 'pink', shade: '' }, { color: '#8590a2', colorName: 'black', shade: '' },
    { color: '#0c66e4', colorName: 'blue', shade: 'bold' }, { color: '#1d7f8c', colorName: 'sky', shade: 'bold' }, { color: '#5b7f24', colorName: 'lime', shade: 'bold' }, { color: '#ae4787', colorName: 'pink', shade: 'bold' }, { color: '#626f86', colorName: 'black', shade: 'bold' }
]

export function EditLabel({ onCloseModal, labelIdToEdit = null, onSetModalProps }) {

    const board = useSelector(storeState => storeState.boardModule.board)
    const group = useSelector(storeState => storeState.boardModule.group)
    const task = useSelector(storeState => storeState.boardModule.task)
    let headerStr = (labelIdToEdit) ? 'Edit label' : 'Add label'
    const [title, setTitle] = useState('')
    const [color, setColor] = useState({ color: '#ffd2cc', colorName: 'red', shade: 'subtle' })

    useEffect(() => {
        getTitle()

        async function getTitle() {
            if (labelIdToEdit) {
                const label = await boardService.getLabel(board._id, labelIdToEdit)
                setTitle(label.title)
                setColor({ color: label.color, colorName: label.colorName, shade: label.shade })
            }
        }
    }, [])

    function handleChange({ target }) {
        setTitle(target.value)
    }

    function onSetColor(newColor, colorName, shade) {
        setColor({ color: newColor, colorName, shade })
    }

    async function onSaveLabel() {
        try {
            await editLabel(board, group, task, labelIdToEdit, color, title);
            onCloseModal()
        } catch (err) {
            console.log('Cannot add label', err)
        }
    }

    async function onRemoveLabel() {
        try {
            await removeLabel(board, group, task, labelIdToEdit)
            onCloseModal()
        } catch (err) {
            console.log('cannot remove label, error: ', err);
        }
    }

    const dynClass = color.color === '#091E420F' ? 'without-color' : ''

    return (
        <section className="feature-labels scroll">
            <section className="modal-header">
                <h6 className="modal-header-txt" title="Create board">
                    {headerStr}
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
                <section className="edit-label scroll">

                    <div className="display-chosen-label flex justify-center align-center">
                        <div className="chosen-color flex align-center"
                            style={{ backgroundColor: color.color }}>
                            {title}
                        </div>
                    </div>

                    <h3>Title</h3>
                    <input className="add-lable" type="text" value={title} onChange={handleChange} />

                    <h3>Select a color</h3>
                    <div className="colors-container flex ">
                        {colors.map((color, idx) => (
                            <li className="color-container clean-list"
                                key={idx}
                                style={{ backgroundColor: color.color }}
                                onClick={() => onSetColor(color.color, color.colorName, color.shade)}>
                            </li>
                        ))}
                    </div>

                    <div className={`remove-color-btn flex ${dynClass}`}
                        onClick={() => onSetColor('#091E420F', '', '')}>
                        <IconExit />
                        <p className={`create-new-label ${dynClass}`}>Remove Color</p>
                    </div>
                    <hr />

                    <div className="save-delete-btns flex justify-between">
                        <button onClick={onSaveLabel}>Save</button>
                        <button onClick={onRemoveLabel}
                            style={{ display: labelIdToEdit ? 'inline' : 'none' }}
                        >Delete</button>
                    </div>

                    <div className="back-btn" >
                        <IconBackBtnSvg />
                    </div>

                </section>
            </section>
        </section>
    )
}