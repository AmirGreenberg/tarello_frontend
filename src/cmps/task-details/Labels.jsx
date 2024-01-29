import { IconPlusAddList } from "../../services/icons.service"
import { boardService } from "../../services/board.service"

export function Labels({ task, board, onClickLabel }) {
    if (!task.labelIds?.length) return
    const labelsColors = boardService.getTaskLabelsColors(board, task)

    return (
        <div className="labels">
            <p className="title">Labels</p>
            <div className="labels-colors flex align-center">
                {labelsColors.map((labelsColor, index) =>
                    <li onClick={onClickLabel} className="flex align-center justify-center" key={index}
                        style={{ backgroundColor: labelsColor.color }}>
                        {labelsColor.title}
                    </li>
                )}
                <button className="square-btn " onClick={onClickLabel}>
                    <IconPlusAddList />
                </button>
            </div>
        </div>
    )
}
