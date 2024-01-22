import { useRef, useEffect, useState } from 'react'
import useOutsideClick from '../customHooks/useOutsideClick'

const HEADER_HEIGHT = 48
const MARGIN = 10

export const TO_RIGHT = 'TO_RIGHT'
export const TO_BOTTOM = 'TO_BOTTOM'


export function DynamicActionModal({ content, event, onOutsideClick, modalPosition }) {
    if (!event || !content) return

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)
    const [modalWidth, setModalWidth] = useState()
    const [modalHeight, setModalHeight] = useState()
    const refModal = useRef(null)

    function updateDimensions() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    useEffect(() => {
        setModalWidth(refModal.current.offsetWidth)
        setModalHeight(refModal.current.offsetHeight)
        window.addEventListener('resize', updateDimensions)
        return () => window.removeEventListener('resize', updateDimensions)
    }, [])

    if (onOutsideClick) useOutsideClick(refModal, onOutsideClick)

    function getModalPosition() {
        if (!modalWidth || !modalHeight) return { opacity: 0, pointerEvents: 'none' }

        const {
            top: topEv,
            right: rightEv,
            bottom: bottomEv,
            left: leftEv,
        } = event.target.getBoundingClientRect()

        let positionStyle = {}

        const positionTop = { top: topEv - modalHeight - MARGIN }
        const positionRight = { left: rightEv + MARGIN }
        const positionBottom = { top: bottomEv + MARGIN }
        const positionLeft = { left: leftEv - modalWidth - MARGIN }

        const spaceToTop = topEv
        const spaceToRight = window.innerWidth - rightEv
        const spaceToBottom = window.innerHeight - bottomEv
        const spaceToLeft = leftEv

        switch (modalPosition) {
            case TO_BOTTOM:
                if (modalHeight + 2 * MARGIN <= spaceToBottom ||
                    spaceToTop < modalHeight + 2 * MARGIN) positionStyle = positionBottom
                else positionStyle = positionTop
                if (leftEv + modalWidth + MARGIN <= window.innerWidth) positionStyle.left = leftEv
                else positionStyle.left = window.innerWidth - modalWidth - MARGIN
                break
            case TO_RIGHT:
                if (modalWidth + 2 * MARGIN <= spaceToRight ||
                    spaceToLeft < modalWidth + 2 * MARGIN) positionStyle = positionRight
                else positionStyle = positionLeft
                if (topEv + modalHeight + MARGIN <= window.innerHeight) positionStyle.top = topEv
                else positionStyle.top = window.innerHeight - modalHeight - MARGIN
                break
            default:
                positionStyle = positionBottom
                break
        }
        return positionStyle
    }

    if (!event) return <></>
    return (
        <section
            onClick={ev => ev.stopPropagation()}
            className="dynamic-action-modal"
            style={getModalPosition()}
            ref={refModal}
        >
            {content}
        </section>
    )
}
