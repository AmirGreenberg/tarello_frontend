import { IconCover } from '../../services/icons.service'

export function Cover({ cover }) {
    if (!cover) return

    return (
        <section className="cover-container">
            {cover.bgClr && (
                <div className="cover-bg-clr"
                    style={{backgroundColor: `var(${cover.bgClr})` }}>

                    {/* <div style={{ height: '0' }}></div> */}

                    {cover.imgUrl && <div className="cover-img-warpper">
                        <img src={cover.imgUrl} alt="cover-img"  />
                        </div>}
                    <div className="cover-btn btn-type-3 flex center">
                        <span>
                            <IconCover color={'var(--txtClrDark)'} /> Cover
                        </span>
                    </div>
                </div> // need to change the colors according to labels
            )}

            {cover.label && (
                <div
                    className="cover"
                    style={{
                        backgroundColor: cover.label.labelBgClr,
                        height: '116px',
                    }}
                >
                    {/* <div style={{ height: '0' }}></div>
                    <div style={{ height: '0' }}></div> */}
                    <div className="cover-btn">
                        <span style={{ color: cover.label.labelTxtClr }}>
                            {' '}
                            <IconCover color={cover.label.labelTxtClr} /> Cover
                        </span>
                    </div>
                </div> // need to change the colors according to labels
            )}
        </section>
    )
}
