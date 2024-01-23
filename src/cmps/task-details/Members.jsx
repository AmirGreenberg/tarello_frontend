import { IconPlusAddList } from "../../services/icons.service"
import { MemberImg } from "./MemberImg"
import { AddMembers } from "./AddMembers"
import { useState } from "react"

export function Members({ task, board, onClickMembers }) {
    if (!task.memberIds?.length) return
    const [modalProps, setModalProps] = useState({})
    const members = board.members

    return (
        <div className="members">
            <p className="title">Members</p>
            <div className="members-img flex align-center clean-list">
                {members.map((member, index) =>
                    <li className="" key={index} onClick={onClickMembers}>
                        {task.memberIds.includes(member._id) && <MemberImg member={member} size={32} />}
                    </li>

                )}
                <button className="round-btn plus-btn-members flex center" onClick={onClickMembers}>
                    <IconPlusAddList />
                </button>
            </div>
        </div>
    )
}

// {/* // return (
//         <section className="members">
//             <h4>Members</h4>
//             <ul>
//                 {members.map((member, i) => (
//                     <li key={i}>
//                         {member.fullname}
//                         {member.username ? ` (${member.username})` : ''}
//                     </li>
//                 ))}
//             </ul>
//             <button className="add-member">+</button>
//         </section>
//     )
// } */}
