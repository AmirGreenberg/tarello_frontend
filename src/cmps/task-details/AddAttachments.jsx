import { useSelector } from 'react-redux'
import { addTaskAttach, updatePhotoBackground } from '../../store/actions/board.actions'
import { IconX } from '../../services/icons.service'

export function AddAttachments({ onCloseModal }) {

    const board = useSelector(storeState => storeState.boardModule.board)
    const group = useSelector(storeState => storeState.boardModule.group)
    const task = useSelector(storeState => storeState.boardModule.task)

    const UPLOAD_PRESET = process.env.UPLOAD_PRESET
    const UPLOAD_URL = process.env.UPLOAD_URL

    async function onSaveFile(ev) {

        const FORM_DATA = new FormData()
        console.log(ev.target.files[0]);

        FORM_DATA.append('file', ev.target.files[0], ev.target.files[0].name)
        FORM_DATA.append('upload_preset', UPLOAD_PRESET)

        try {
            const res = await fetch(UPLOAD_URL, {
                method: 'POST',
                body: FORM_DATA,
            })
            const { url } = await res.json()
            const fileName = ev.target.files[0].name
            const attach = { fileName, url }
            onCloseModal()
            addTaskAttach(board, group, task, attach)
            updatePhotoBackground(board, group, task, url)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <section className="feature-checklist scroll">
            <section className="modal-header">
                <h6 className="modal-header-txt" title="Create board">
                    Attach
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
                    <section className="feature-attachment scroll">
                        <p className="modal-header-txt">Attach a file from your computer</p>
                        <label className='upload-btn' htmlFor="files">Choose a file</label>
                        <input type="file" id="files" name="files" onChange={onSaveFile} />
                    </section>
                </div>
            </section>
        </section>

    )
}