export const TOGGLE_MODAL = 'TOGGLE_MODAL'

const initialState = {
  popupModal: {
    isModalOpen: false,
    event: null,
    type: null,
    member: null,
    boardTitle: '',
  },
}

export function appReducer(state = initialState, action) {
  let newState = state
  switch (action.type) {
    case TOGGLE_MODAL:
      return (newState = {
        ...state,
        popupModal: {
          ...state.popupModal,
          isModalOpen: action.modalInfo.isShown,
          event: action.modalInfo.event,
          type: action.modalInfo.type,
          boardTitle: action.modalInfo.title,
        },
      })

    default:
      return newState
  }
}
