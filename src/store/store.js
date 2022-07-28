import { reducer  as authReducer} from "./auth/reducer";
import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    auth:authReducer
})
export const store =createStore(rootReducer, compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
 