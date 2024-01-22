export function ProductivitySlider() {
    return (
        <section>
            <div className="productivity-slider-container">
                <div>
                    <div className="slider-card-list">
                        <button className="productivity-card">
                            <h3>Boards</h3>
                            <p>
                                Tarello boards keep tasks organized and work
                                moving forward. In a glance, see everything from
                                “things to do” to “aww yeah, we did it!”
                            </p>
                        </button>

                        <button className="productivity-card">
                            <h3>Lists</h3>
                            <p>
                                The different stages of a task. Start as simple
                                as To Do, Doing or Done—or build a workflow
                                custom fit to your team’s needs. There’s no
                                wrong way to Tarello.
                            </p>
                        </button>

                        <button className="productivity-card">
                            <h3>Cards</h3>
                            <p>
                                Cards represent tasks and ideas and hold all the
                                information to get the job done. As you make
                                progress, move cards across lists to show their
                                status.
                            </p>
                        </button>
                    </div>
                </div>

                <div>
                    <img
                        src={'src//assets//img//productivity1.webp'}
                        alt="home-image"
                    />
                </div>
            </div>
        </section>
    )
}
