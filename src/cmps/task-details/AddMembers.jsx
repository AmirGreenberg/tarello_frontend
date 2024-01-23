import { useEffect, useState } from 'react'
import { utilService } from '../../services/util.service'

// Actions
import { IconV, IconVMembers, IconX } from '../../services/icons.service'
import { EditTaskMember } from '../../store/actions/board.actions'
import { useSelector } from 'react-redux'

export function AddMembers({ onCloseModal }) {
    const board = useSelector(storeState => storeState.boardModule.board)
    const group = useSelector(storeState => storeState.boardModule.group)
    const task = useSelector(storeState => storeState.boardModule.task)

    const [searchTxt, setSearchTxt] = useState('')
    const SIZE = 24
    const GAP = 1

    function handleChange({ target }) {
        setSearchTxt(target.value)
    }

    function onEditTaskMember(memberId) {
        try {
            EditTaskMember(board, group, task, memberId)
        } catch (err) {
            console.log('Cannot edit member', err)
        }
    }



    return (
        <section className="feature-members scroll">
            <section className="modal-header">
                <h6 className="modal-header-txt" title="Create board">
                    Members
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
                    <input value={searchTxt} className="search-members" type="text" placeholder="Search members" onChange={handleChange} />
                </div>
                <div className="background-container">
                    <div>
                        <label>Board Members</label>
                    </div>
                    <div className="members-container">
                        {board.members.map(member => (
                            member.fullname.toLowerCase().includes(searchTxt.toLowerCase()) &&
                            <div className="member flex align-center" onClick={() => onEditTaskMember(member._id)} key={member._id}>
                                <img className="member-img" style={{
                                    backgroundImage: `url(${member.imgUrl})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center center',
                                    backgroundRepeat: 'no-repeat',
                                }} />
                                <p className="member-name">{member.fullname + ' (' + member.username + ')'}</p>
                                {task.memberIds.includes(member._id) && <IconVMembers />}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    )
}


// return (
//     <section className="feature-members scroll">
//         <section className="modal-header">
//             <h6 className="modal-header-txt" title="Create board">
//                 Members
//             </h6>

//             <button
//                 onClick={(event) => onCloseModal()}
//                 aria-label="Close popover"
//                 className="popover-close-btn align-center"
//                 data-testid="popover-close"
//             >
//                 <span aria-hidden="true" className="span-close align-center">
//                     <IconX size={10} color={'var(--txtClrDark)'} />

//                 </span>
//             </button>
//         </section>
//         <section className="modal-details">
//             <div className="board-preview-wrapper">
//                 <input value={searchTxt} className="search-members" type="text" placeholder="Search members" onChange={handleChange} />
//             </div>
//             <div className="background-container">
//                 <div>
//                     <label>Board Members</label>
//                 </div>
//                 <div className="members-container">
//                     {taskMembers.map((member, idx) => (
//                         member.fullname?.toLowerCase().includes(searchTxt.toLowerCase()) &&
//                         <div className="member flex align-center" onClick={() => onToggleMember(member)} key={idx}>
//                             {member.imgUrl ? <img src={member.imgUrl} className="user-img" style={{ width: SIZE + 'px', margin: `0 ${GAP}px` }} />
//                                 :
//                                 <div className="member-initials" style={{ width: SIZE + 'px', backgroundColor: `var(${getRandomClr()})`, margin: `0 ${GAP}px` }}>
//                                     {utilService.getInitials(member.fullname)}
//                                 </div>}
//                             <p className="member-name">{member?.fullname + ' (' + member?.username + ')'}</p>

//                             {member.isActive && vIcon}

//                         </div>
//                     ))}

//                 </div>

//             </div>
//         </section>
//     </section >
// )
// }



