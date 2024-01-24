import { useSelector } from "react-redux";
import { utilService } from "../../services/util.service";
import { MemberImg } from "../task-details/MemberImg";

export function Users({ taskMemberIds = [], size, gap = -2 }) {

    const board = useSelector(storeState => storeState.boardModule.board)

    return (
        <section className="member-container flex align-center">
            {board?.members?.map((member, index) =>
                <li className="" key={index}>
                    {taskMemberIds?.includes(member._id) && <MemberImg member={member} size={26} />}
                </li>

            )}
        </section>
    )
}

