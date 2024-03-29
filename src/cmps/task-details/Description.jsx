import { useRef, useState } from 'react'
import { IconDescription } from '../../services/icons.service'
import useOutsideClick from '../customHooks/useOutsideClick'
import { TextInput } from './TextInput'

export function Description({ iconProps, taskDescription, refTaskDetails, onUpdateTask }) {
    const [isTextareaOpen, setIsTextareaOpen] = useState(false)
    const [description, setDescription] = useState(taskDescription)
    const refDescriptionContainer = useRef()

    useOutsideClick(refDescriptionContainer, onSave, refTaskDetails)

    function onSave() {
        if (!isTextareaOpen) return
        setIsTextareaOpen(false)
        onUpdateTask('description', description)
    }

    function onCancel() {
        setIsTextareaOpen(false)
        setDescription(taskDescription)
    }

    return (
        <section className="description-container" ref={refDescriptionContainer}>

            <h2>Description</h2>

            {
                isTextareaOpen
                    ?
                    <TextInput {...{
                        onSave,
                        onCancel,
                        value: description,
                        onSetValue: setDescription,
                        name: 'description',
                        className: 'description-input'
                    }} />
                    :
                    <pre
                        className={`btn-description ${taskDescription ? 'not-button' : ''}`}
                        onClick={() => setIsTextareaOpen(true)}
                    >
                        {taskDescription || "Add a more detailed description..."}
                    </pre>
            }
        </section>
    )
}
