import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actionTypes"

export const loginLoading =()=>{
    return{
        type:LOGIN_LOADING
    }
}
export const loginSuccess =(payload)=>{
    return{
        type:LOGIN_SUCCESS,
        payload:payload
    }
}
export const loginError =()=>{
    return{
        type:LOGIN_ERROR
    }
}

export const logutSuccess =()=>{
    return{
        type:LOGOUT_SUCCESS
    }
}