import { utilService } from "../../services/util.service";

export function Users({ members = [], size, gap = -2 }) {


    function getRandomClr() {
        const bgColors = ['--clr1', '--clr2', '--clr3', '--clr4', '--clr5', '--clr8', '--clr9']
        return bgColors[utilService.getRandomIntInclusive(0, bgColors.length)]
    }

    return (
        <section className="member-container flex align-center">
            {members?.filter(member => member.isActive).map((member) =>
                <div key={member._id} className="user-img-wrapper">
                    {member.imgUrl ? <img src={member.imgUrl} className="user-img" style={{ width: size + 'px', margin: `0 ${gap}px` }} />
                        :
                        <div className="member-initials" style={{ width: size + 'px', backgroundColor: `var(${getRandomClr()})`, margin: `0 ${gap}px` }}>
                            {utilService.getInitials(member.fullname)}
                        </div>}
                </div>)}
        </section>
    )
}

