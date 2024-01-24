import { useEffect, useRef, useState } from "react";
import { utilService } from "../../services/util.service";

export function MemberImg({ member, size, gap = 4 }) {

    const [isAvatarClicked, setIsAvatarClicked] = useState(false)
    const [imgSize, setImgSize] = useState(null)
    const imgRef = useRef(null)
    const initials = utilService.getInitials(member.fullname)
    const small = 24
    const medium = 28
    const large = 32

    useEffect(() => {
        setSize(size)
    }, [])
    function setSize(size) {
        if (size === small) setImgSize(small)
        else if (size === medium) setImgSize(medium)
        else setImgSize(large)
    }

    return (
        <div key={member._id} className="user-img-wrapper">
            {member.imgUrl ? <img src={member.imgUrl} className="user-img" style={{ width: size + 'px', marginInlineEnd: gap + 'px' }} />
                :
                <div className="member-initials" style={{ width: size + 'px', backgroundColor: `#717d92`, marginInlineEnd: gap + 'px' }}>
                    {utilService.getInitials(member.fullname)}
                </div>}
        </div>)
}