// import { IconCover } from '../../services/icons.service'

import { useState } from "react"

export function Cover({ task }) {
    console.log("🚀  task:", task)
    const isCover = task.style.backgroundColor || task.style.cover
    if (!isCover) return

    const [bgColor, setBgColor] = useState('transparent')


    const isSvg = task.style.cover.substring(task.style.cover.length - 3, task.style.cover.length) === 'svg' ? true : false

    return (
        <div className={`cover ${task.style.cover ? 'img' : ''}`}
            style={{
                backgroundColor: isSvg ? 'transparent' : task.style.backgroundColor ? task.style.backgroundColor : bgColor ? bgColor : 'transparent',
                backgroundImage: task.style.cover ? `url(${task.style.cover})` : 'none'
            }}>

        </div>)
}
