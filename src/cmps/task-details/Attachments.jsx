import { IconAttachment, IconCover } from "../../services/icons.service";
import { AttachmentData } from "./task-details-data/AttachmentData";

export function Attachments({ board, group, task }) {

    return (
        <>
            <div className="attachment-svg">
                <IconAttachment />
            </div>
            <p className="attachment-header">Attachment</p>
            <div className="attachments-container flex">
                {task.attachment.map((attachment, idx) =>
                    <div key={idx}>
                        <AttachmentData
                            board={board}
                            group={group}
                            task={task}
                            attachment={attachment}
                            attachIdx={idx} />
                    </div>
                )}
            </div>
        </>
    )
}
