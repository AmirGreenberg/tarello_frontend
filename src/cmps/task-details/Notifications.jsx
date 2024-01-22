import { IconV, IconWatch } from "../../services/icons.service"

export function Notifications({ buttonIconProps, isWatching, onClickWatching }) {
    return (
        <section className="notifications">
            <h4>Notifications</h4>
            <button
                className="btn-watch"
                onClick={onClickWatching}
            >
                <IconWatch {...buttonIconProps} />
                {isWatching ? 'Watching' : 'Watch'}
                {
                    isWatching &&
                    <div className="icon-v-container">
                        <IconV size={28} color={'#fff'} />
                    </div>
                }
            </button>
        </section>
    )
}
