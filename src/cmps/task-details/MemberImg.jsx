import { useEffect, useRef, useState } from "react";
// import { updateBoardGroup    Type, updateUserCmp } from "../../store/actions/board.actions";
import { utilService } from "../../services/util.service";

export function MemberImg({ member, size }) {

    const [isAvatarClicked, setIsAvatarClicked] = useState(false)
    const [imgSize, setImgSize] = useState(null)
    const imgRef = useRef(null)
    const initials = utilService.getInitials(member.fullname)
    const small = 24
    const medium = 28
    const large = 32

    function getRandomClr() {
        const bgColors = ['--clr1', '--clr2', '--clr3', '--clr4', '--clr5', '--clr8', '--clr9']
        return bgColors[utilService.getRandomIntInclusive(0, bgColors.length)]
    }


    useEffect(() => {
        setSize(size)
    }, [])
    function setSize(size) {
        if (size === small) setImgSize(small)
        else if (size === medium) setImgSize(medium)
        else setImgSize(large)
    }

    // function handleAvtarClick(ev) {
    //     ev.stopPropagation()
    //     setIsAvatarClicked(!isAvatarClicked)
    //     const screenWidth = window.innerWidth;
    //     let rightBorder = imgRef.current.getBoundingClientRect().left
    //     if (rightBorder > screenWidth - 304) {
    //         rightBorder = imgRef.current.getBoundingClientRect().right - 165
    //     }
    //     const position = {
    //         top: imgRef.current.getBoundingClientRect().top,
    //         left: rightBorder
    //     }

    //     const userCmp = { isOpen: true, user: member, position: position }
    //     updateUserCmp(userCmp)
    //     updateBoardGroupTaskType(null, null, null, '', null)
    // }

    return (
        // <div className="member-img-container" ref={imgRef} onClick={handleAvtarClick}>
        <div key={member._id} className="user-img-wrapper">
            {member.imgUrl ? <img src={member.imgUrl} className="user-img" style={{ width: size + 'px', marginInlineEnd: '7px' }} />
                :
                <div className="member-initials" style={{ width: size + 'px', backgroundColor: `#717d92`, marginInlineEnd: '7px' }}>
                    {utilService.getInitials(member.fullname)}
                </div>}
        </div>)
}