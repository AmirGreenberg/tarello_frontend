import { IconCover } from '../../services/icons.service'

export function Cover({ cover }) {
    if (!cover) return

    return (
        <div className={`cover ${task.style.cover ? 'img' : ''}`}
            style={{
                backgroundColor: isSvg ? 'transparent' : task.style.backgroundColor ? task.style.backgroundColor : bgColor ? bgColor : 'transparent',
                backgroundImage: task.style.cover ? `url(${task.style.cover})` : 'none'
            }}>

        </div>)
}
