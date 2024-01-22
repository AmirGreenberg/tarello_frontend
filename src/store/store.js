import { legacy_createStore as createStore, combineReducers } from 'redux'

import { systemReducer } from './reducers/system.reducer.js'
import { userReducer } from './reducers/user.reducer.js'
import { boardReducer } from './reducers/board.reducer.js'
import { appReducer } from './reducers/app.reducer.js'

const rootReducer = combineReducers({
    systemModule: systemReducer,
    userModule: userReducer,
    boardModule: boardReducer,
    appModule: appReducer,
})

const middleware = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : undefined

export const store = createStore(rootReducer, middleware)

window.gStore = store