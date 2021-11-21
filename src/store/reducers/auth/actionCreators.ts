import {IUser} from "../../../models/IUser";
import {AuthActionEnum, SetAuthAction, SetErrorAction, SetLoadingAction, SetUserAction} from "./types";
import {AppDispatch} from "../../index";
import axios from "axios";
import {Dispatch} from "redux";

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: auth}),
    setIsLoading: (payload: boolean): SetLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING, payload}),
    setError: (payload: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload}),
    login: (username: string, password: string) =>
       async (dispatch: Dispatch) => {
            try {
                dispatch(AuthActionCreators.setIsLoading(true))
                const res = await axios.get<IUser[],any>("./users.json")
                const mockUsers=res.data.find((user:IUser)=>user.username===username && user.password===password)
                debugger



                    if(mockUsers){
                        localStorage.setItem('auth','true');
                        localStorage.setItem('username',mockUsers.username);
                        dispatch(AuthActionCreators.setIsAuth(true))
                        dispatch(AuthActionCreators.setUser(mockUsers))
                    } else {
                        dispatch(AuthActionCreators.setError('uncorrect email oro password'))
                    }
                    dispatch(AuthActionCreators.setIsLoading(false))



            } catch (e) {
                dispatch(AuthActionCreators.setError('Ошибка'))
            }
        }
    ,
    logOut: () => async (dispatch: Dispatch) => {
        try {
            localStorage.removeItem('auth')
            localStorage.removeItem('username')
            dispatch(AuthActionCreators.setUser({}as IUser))
            dispatch(AuthActionCreators.setIsAuth(false))

        } catch (e){

        }

    }
}