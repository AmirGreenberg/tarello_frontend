import { useState } from 'react'
import { utilService } from '../../services/util.service'

// Actions
import { IconV, IconVMembers, IconX } from '../../services/icons.service'

export function AddMembers({ boardMembers, board, task, onUpdateTask, onCloseModal }) {
    const [searchTxt, setSearchTxt] = useState('')
    const [taskMembers, setTaskMembers] = useState(task.members)
    const [vIcon, setVIcon] = useState(< IconVMembers />)
    const SIZE = 24
    const GAP = 1

    function handleChange({ target }) {
        setSearchTxt(target.value)
    }

    function onToggleMember(member) {
        if (!member.isActive) {
            member.isActive = true
            setVIcon(< IconVMembers />)
        }

        else {
            member.isActive = !member.isActive
            setVIcon('')
        }
        onUpdateTask('members', task.members, false)
        setTaskMembers(task.members)
    }

    function getRandomClr() {
        const bgColors = ['--clr1', '--clr2', '--clr3', '--clr4', '--clr5', '--clr8', '--clr9']
        return bgColors[utilService.getRandomIntInclusive(0, bgColors.length)]
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
                        <IconX size={10} color={'var(--txtClrDark)'} />

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
                        {taskMembers?.map((member, idx) => (
                            member.fullname?.toLowerCase().includes(searchTxt.toLowerCase()) &&
                            <div className="member flex align-center" onClick={() => onToggleMember(member)} key={idx}>
                                {member.imgUrl ? <img src={member.imgUrl} className="user-img" style={{ width: SIZE + 'px', margin: `0 ${GAP}px` }} />
                                    :
                                    <div className="member-initials" style={{ width: SIZE + 'px', backgroundColor: `var(${getRandomClr()})`, margin: `0 ${GAP}px` }}>
                                        {utilService.getInitials(member.fullname)}
                                    </div>}
                                <p className="member-name">{member?.fullname + ' (' + member?.username + ')'}</p>

                                {member.isActive && vIcon}

                            </div>
                        ))}

                    </div>

                </div>
            </section>
        </section >
    )
}