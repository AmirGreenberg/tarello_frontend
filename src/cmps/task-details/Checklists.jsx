import { Checklist } from './Checklist'

export function Checklists({ i, checklist, iconProps, checklists, onUpdateTask, refTaskDetails }) {
    if (!checklists?.length) return

    function onDeleteChecklist(idx) {
        checklists.splice(idx, 1)
        onUpdateTask('checklists', checklists)
    }

    return (
        <Checklist key={i} {...{
            iconProps,
            checklist,
            onUpdateTask,
            onDeleteChecklist: () => onDeleteChecklist(i),
            refTaskDetails
        }} />
    )
}
