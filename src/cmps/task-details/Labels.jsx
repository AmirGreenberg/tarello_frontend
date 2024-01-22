import { IconPlusAddList } from "../../services/icons.service"

export function Labels({ labels, onClickLabel }) {
    if (!labels?.length) return

    return (
        <div className="labels">
            <p className="mini-title">Labels</p>
            <div className="labels-colors flex align-center">
                {labels.filter(label => label.isActive).map((label, index) =>
                    <li className="flex align-center justify-center" key={index} onClick={onClickLabel}
                        style={{ backgroundColor: label.bgColor, color: label.txtColor }}>
                        {label.title}
                    </li>
                )}

                <button className="plus-btn-members flex center" onClick={onClickLabel}>
                    <IconPlusAddList color={`var(--txtClrDark)`} />
                </button>
            </div>
        </div>
    )
}
