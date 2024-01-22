import React from 'react'

export function CarouselItem({ item, width }) {
    return (
        <div className="carousel-item" style={{ width: width }}>
            <div></div>
            <img className="carousel-img" src={item.img} />
        </div>
    )
}
