import { useState } from "react"
import { FastAverageColor } from 'fast-average-color'

export function Cover({ task }) {
    const isCover = task.style.backgroundColor || task.style.cover
    if (!isCover) return
    const [bgColor, setBgColor] = useState('transparent')

    async function getBgc() {
        const fac = new FastAverageColor();
        const color = await fac.getColorAsync(task.style.cover);
        setBgColor(color.hex);
    }

    if (task.style.cover) getBgc();

    const isSvg = task.style.cover.substring(task.style.cover.length - 3, task.style.cover.length) === 'svg' ? true : false

    return (
        <div className={`cover ${task.style.cover ? 'img' : ''}`}
            style={{
                backgroundColor: isSvg ? 'transparent' : task.style.backgroundColor ? task.style.backgroundColor : bgColor ? bgColor : 'transparent',
                backgroundImage: task.style.cover ? `url(${task.style.cover})` : 'none'
            }}>

        </div>)
}
