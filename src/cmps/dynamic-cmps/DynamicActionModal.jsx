import { useRef, useEffect, useState } from 'react'
import useOutsideClick from '../customHooks/useOutsideClick'
import React from 'react';
import { useLocation } from 'react-router-dom';

const MARGIN = 10
const WIDTH = 304

export const TO_RIGHT = 'TO_RIGHT'
export const TO_BOTTOM = 'TO_BOTTOM'

export function DynamicActionModal({ content, event, onOutsideClick, modalPosition }) {
    if (!content) return
    const [lastEvent, setLastEvent] = useState(event)
    if (!event) event = lastEvent
    const location = useLocation();

    const [height, setHeight] = useState(window.innerHeight)
    const [modalHeight, setModalHeight] = useState()
    const refModal = useRef(null)
    const parentElement = (event.target.parentElement.tagName === ('DIV' || null) && location.pathname !== '/workspace') ? event.target.parentElement : event.target

    function updateDimensions() {
        setHeight(window.innerHeight)
    }

    useEffect(() => {
        setLastEvent(event)
        content.type.name === ('AddCover' || 'u_') ? setModalHeight(refModal.current.offsetHeight + 110) : setModalHeight(refModal.current.offsetHeight)
        window.addEventListener('resize', updateDimensions)
        return () => window.removeEventListener('resize', updateDimensions)
    }, [content])

    if (onOutsideClick) useOutsideClick(refModal, onOutsideClick)

    function getModalPosition() {
        if (!modalHeight) return { opacity: 0, pointerEvents: 'none' }

        const {
            top: topEv,
            right: rightEv,
            bottom: bottomEv,
            left: leftEv,
        } = parentElement.getBoundingClientRect()

        let positionStyle = {}

        const positionTop = { top: window.innerHeight - modalHeight - MARGIN }
        const positionRight = { left: rightEv }
        const positionBottom = { top: bottomEv + MARGIN }
        const positionLeft = { left: leftEv }

        const spaceToTop = topEv
        const spaceToRight = window.innerWidth - rightEv
        const spaceToBottom = window.innerHeight - bottomEv
        const spaceToLeft = leftEv

        switch (modalPosition) {
            case TO_BOTTOM:
                if (modalHeight + 2 * MARGIN <= spaceToBottom
                ) positionStyle = positionBottom
                else positionStyle = positionTop
                if (leftEv + WIDTH + MARGIN <= window.innerWidth) positionStyle.left = leftEv
                else positionStyle.left = window.innerWidth - WIDTH - MARGIN
                break
            case TO_RIGHT:
                if (WIDTH + 2 * MARGIN <= spaceToRight ||
                    spaceToLeft < WIDTH + 2 * MARGIN) {
                    positionStyle = positionRight
                }
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

