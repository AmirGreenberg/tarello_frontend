import { IconAttachment, IconCover } from "../../services/icons.service";

export function Attachments({ iconProps, imgUrl }) {

    return (
        <section className="attachments-container">
            <IconAttachment {...{ iconProps, color: 'var(--clr9)', size: 24 }} />
            <h3 className="main-content-title">Attachments</h3>

            <div className="attachments-area flex gap align-center">
                <img className="img-attachment" src={imgUrl} alt="" srcSet="" />
                <div className="img-attachment-txt flex column justify-between h100">
                    <div>
                        <span className="bold">2024_01_18_Dreams.jpg</span>
                        <div className="img-attchmet-text-container flex gap">
                            <span>Added Jan 18 at 23:59 PM</span>
                            <span>•</span>
                            <a href="">Comment</a>
                            <span>•</span>
                            <a href="">Delete</a>
                            <span>•</span>
                            <a href="">Edit</a>
                        </div>
                    </div>
                    <div className="flex gap">
                        <IconCover {...{ iconProps, color: 'var(--clr9)', size: 16 }} />
                        <a href="">Remove cover</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
