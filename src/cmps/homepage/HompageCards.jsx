import { useState } from 'react'

export function HomePageCards() {
    const img1 =
        'https://res.cloudinary.com/dqjddwtf4/image/upload/v1705045702/Tarello/demo_page_qaup8f.jpg'
    const img2 =
        'https://res.cloudinary.com/dug2dklcy/image/upload/v1699313861/ufkk1ktu5242utbewd7g.png'
    const img3 =
        'https://images.ctfassets.net/rz1oowkt5gyp/26CA6JZeRgoOK4nuRHnIlY/060702a80cf7c3be3651d9297d196267/Carousel_Image_Cards_2x.png'

    const [img, setImg] = useState(img1)

    return (
        <div className="productivity-slider-container">
            <div className="slider-layout">
                <div className="cards">
                    <button
                        onClick={() => setImg(img1)}
                        className={img === img1 ? 'card active' : 'card'}
                    >
                        <h4 style={{ color: "var(--txtClrDark)" }}>Boards</h4>
                        <p style={{ color: "var(--txtClrDark)" }}>
                            Tarello boards keep tasks organized and work moving
                            forward. In a glance, see everything from “things to
                            do” to “aww yeah, we did it!”
                        </p>
                    </button>
                    <button
                        onClick={() => setImg(img2)}
                        className={img === img2 ? 'card active' : 'card'}
                    >
                        <h4 style={{ color: "var(--txtClrDark)" }}>Lists</h4>
                        <p style={{ color: "var(--txtClrDark)" }}>
                            The different stages of a task. Start as simple as
                            To Do, Doing or Done—or build a workflow custom fit
                            to your team’s needs. There’s no wrong way to
                            Tarello.
                        </p>
                    </button>
                    <button
                        onClick={() => setImg(img3)}
                        className={img === img3 ? 'card active' : 'card'}
                    >
                        <h4 style={{ color: "var(--txtClrDark)" }}>Cards</h4>
                        <p style={{ color: "var(--txtClrDark)" }}>
                            Cards represent tasks and ideas and hold all the
                            information to get the job done. As you make
                            progress, move cards across lists to show their
                            status.
                        </p>
                    </button>
                </div>

                <div className="images-slider ">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}
