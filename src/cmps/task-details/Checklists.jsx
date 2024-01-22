import { Checklist } from './Checklist'

export function Checklists({ iconProps, checklists, onUpdateTask, refTaskDetails }) {
    if (!checklists?.length) return

    function onDeleteChecklist(idx) {
        checklists.splice(idx, 1)
        onUpdateTask('checklists', checklists)
    }

    return (
        <>
        {
            checklists.map((checklist, i) => 
                <Checklist key={i} {...{
                    iconProps,
                    checklist,
                    onUpdateTask,
                    onDeleteChecklist: () => onDeleteChecklist(i),
                    refTaskDetails
                }} />
            )
        }
        </>
    )
}
