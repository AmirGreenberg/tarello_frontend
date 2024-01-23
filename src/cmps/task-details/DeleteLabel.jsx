import { useSelector } from "react-redux"
import { removeLabel } from "../../store/actions/board.actions"
import { IconBackBtnSvg } from "../../services/icons.service"

export function DeleteLabel({ labelIdToEdit }) {

    const board = useSelector(storeState => storeState.boardModule.board)
    const group = useSelector(storeState => storeState.boardModule.group)
    const task = useSelector(storeState => storeState.boardModule.task)
    const storeCmp = useSelector(storeState => storeState.boardModule.cmp)

    async function onRemoveLabel() {
        try {
            await removeLabel(board, group, task, labelIdToEdit)
            getCmp('Labels')
        } catch (err) {
            console.log('cannot remove label, error: ', err);
        }
    }

    return (
        <section className="delete-label scroll">
            <p>This will remove this label from all cards. There is no undo.</p>
            <button className="delete-btn" onClick={onRemoveLabel}>Delete</button>
            <div className="back-btn" onClick={() => getCmp('Edit label')}>
                <IconBackBtnSvg />
            </div>
        </section>
    )
}