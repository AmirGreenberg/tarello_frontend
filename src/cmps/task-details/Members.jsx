import { IconPlusAddList } from "../../services/icons.service"
import { MemberImg } from "./MemberImg"
import { useState } from "react"

export function Members({ task, board, onClickMembers }) {
    if (!task.memberIds?.length) return
    const [modalProps, setModalProps] = useState({})
    const members = board.members

    return (
        <div className="members">
            <p className="title">Members</p>
            <div className="flex align-center clean-list">
                {members.map((member, index) =>
                    <li className="" key={index} onClick={onClickMembers}>
                        {task.memberIds.includes(member._id) && <MemberImg member={member} size={32} />}
                    </li>

                )}
                <button className="square-btn flex center" onClick={onClickMembers}>
                    <IconPlusAddList />
                </button>
            </div>
        </div>
    )
}