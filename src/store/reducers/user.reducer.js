import { userService } from '../../services/user.service.js'

export const SET_USERS = 'SET_USERS'
export const SET_USER = 'SET_USER'
export const REMOVE_USER = 'REMOVE_USER'

const initialState = {
    users: [],
    user: userService.getLoggedinUser(),
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.user }

        case REMOVE_USER:
            return { ...state, users: state.users.filter(user => user._id !== action.userId) }

        case SET_USERS:
            return { ...state, users: action.users }

        default:
            return state
    }
}
