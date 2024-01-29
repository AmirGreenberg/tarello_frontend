import { removeAttachment, updatePhotoBackground } from "../../../store/actions/board.actions"
import { IconArrowTopRightCorner, IconCover } from "../../../services/icons.service"
import React from 'react'

export function AttachmentData({ board, group, task, attachment, attachIdx }) {

    const filename = attachment.fileName
    const lastIndex = filename.lastIndexOf(".");
    const fileType = lastIndex !== -1 ? filename.substring(lastIndex + 1, filename.length) : ''

    const imgFormats = ["svg", "jpeg", "jpg", "png", "SVG", "JPEG", "PNG", "JPG"]

    function onRemoveAttachment() {
        try {
            removeAttachment(board, group, task, attachIdx)
        } catch (err) {
            console.log('Cannot delete attachment', err)
            throw err
        }
    }

    async function onSetImageBackground(photo) {
        try {
            await updatePhotoBackground(board, group, task, photo)
        } catch (err) {
            console.log('Cannot update background photo', err)
        }
    }

    const isImgFormat = imgFormats.includes(fileType)
    const backgroundImage = isImgFormat ? `url(${attachment.url})` : 'none'

    return (
        <section className="attachment-container flex">

            {fileType &&
                <div className={`file-type flex ${isImgFormat ? 'img' : ''}`}
                    style={{ backgroundImage: backgroundImage }}>
                    <a className="filetype-preview flex justify-center align-center"
                        href={attachment.url}
                        target="_blank" >
                        {isImgFormat ? '' : fileType}
                    </a>
                </div>}

            <div className="content flex">
                <div>
                    <a href={attachment.url} target="_blank">{attachment.fileName}</a>
                    <IconArrowTopRightCorner />
                </div>

                <div className="options flex">
                    <button className="delete-attachment" onClick={onRemoveAttachment}>Delete</button>
                    {isImgFormat &&
                        <div className="flex align-center" onClick={() => onSetImageBackground(attachment.url)}>
                            <IconCover size={10} color={'var(--clr4)'} />
                            <button className="make-cover">Make Cover</button>
                        </div>}
                </div>
            </div>

        </section>
    )
}