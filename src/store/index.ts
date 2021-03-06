import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import {authReducer} from "./reducers/auth";

const rootReducer=combineReducers({
    authReducer
})
export const store=createStore(rootReducer,applyMiddleware(thunk))

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=ReturnType<typeof store.dispatch>