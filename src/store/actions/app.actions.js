import { TOGGLE_MODAL } from '../reducers/app.reducer.js'
import { store } from '../store.js'

export async function toggleModal(
    event = null,
    type = null,
    isShown = false,
    member = null,
    title,
) {
    try {
        const dispatch = store.dispatch
        dispatch({
            type: TOGGLE_MODAL,
            modalInfo: {
                event,
                type,
                isShown,
                member,
                title,
            },
        });
    } catch (error) {
        console.error("An error occurred in toggleModal:", error);
    }
}