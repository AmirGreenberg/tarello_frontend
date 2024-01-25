import { useSelector } from 'react-redux'
import { removeCover, updateColorBackground, updatePhotoBackground } from '../../store/actions/board.actions'
import { useEffect, useState } from 'react'
import { UNSPLASH_KEY } from '../../services/apiKeys'
import { IconX } from '../../services/icons.service'

export function AddCover({ onCloseModal }) {

    const [photos, setImgs] = useState([])

    const board = useSelector(storeState => storeState.boardModule.board)
    const group = useSelector(storeState => storeState.boardModule.group)
    const task = useSelector(storeState => storeState.boardModule.task)
    const storeCmp = useSelector(storeState => storeState.boardModule.cmp)

    const colors = ["#4bce97", "#f5cd47", "#fea362", "#f87168", "#9f8fef", "#579dff", "#6cc3e0", "#94c748", "#e774bb", "#8590a2"]

    useEffect(() => {
        async function fetchImgs() {
            const response = await fetch(`https://api.unsplash.com/photos/random?count=6&client_id=${UNSPLASH_KEY}`)
            const data = await response.json()
            let photos = data.map(d => d.urls.small)
            setImgs(photos)
        }
        fetchImgs()
    }, [])

    async function onSetColorBackground(color) {
        try {
            await updateColorBackground(board, group, task, color)
        } catch (err) {
            console.log('Cannot update background color', err)
        }
    }

    async function onSetImageBackground(photo) {
        try {
            await updatePhotoBackground(board, group, task, photo)
        } catch (err) {
            console.log('Cannot update background photo', err)
        }
    }

    async function onRemoveCover() {
        try {
            await removeCover(board, group, task)
        } catch (err) {
            console.log('Cannot remove cover', err)
        }
    }

    return (
        <section className="feature-checklist scroll">
            <section className="modal-header">
                <h6 className="modal-header-txt" title="Create board">
                    Cover
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

                    <section className="feature-cover scroll">

                        <div className='remove-cover' onClick={onRemoveCover}>Remove cover</div>

                        <h1>Colors</h1>
                        <div className='colors-container flex'>
                            {colors.map(color =>
                                <div key={color}
                                    className='color-container'
                                    onClick={() => onSetColorBackground(color)}
                                    style={{ backgroundColor: color }}>
                                </div>)}
                        </div>

                        <h1>Photos from Unsplash</h1>
                        <div className='photos-container flex'>
                            {photos.map(photo =>
                                <div key={photo}
                                    className='photo-container'
                                    onClick={() => onSetImageBackground(photo)}
                                    style={{ backgroundImage: `url(${photo})` }}>
                                </div>)}
                        </div>

                    </section>
                </div>
            </section>
        </section>
    )
}