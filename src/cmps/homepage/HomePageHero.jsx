import { Link } from 'react-router-dom'

export function HomePageHero() {
    return (
        <section className="homepage-hero flex">
            <div className="homepage-hero-txt">
                <h1 className="homepage-hero-header">
                    {' '}
                    Tarello brings all your tasks, teammates, and tools together
                </h1>
                <p className="homepage-hero-p">
                    Keep everything in the same place-even if your team isn’t.
                </p>
                <Link to={'/workspace'}>
                    <button className="blue-action-btn">Start now</button>
                </Link>
            </div>

            <div className="homepage-img">
                <img
                    src={
                        'https://res.cloudinary.com/dug2dklcy/image/upload/v1699313624/wutd1rrfsjkoyewkdyjc.webp'
                    }
                    alt="home-image"
                />
            </div>
        </section>
    )
}
