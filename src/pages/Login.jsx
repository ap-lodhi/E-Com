import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { loginError, loginLoading, loginSuccess } from "../store/auth/action";
import { Navigate } from "react-router-dom";
export const Login =() =>{
    const [loginData ,setLoginData] =useState({
        email:"",
        password:"",
    })
    const token = useSelector(state=>state.auth.token)
    const dispatch = useDispatch();
    const handleChange =(e)=>{
        const{name,value} =e.target;
        setLoginData(prev =>({
            ...prev,
            [name]:value
        }))
    }
    const handleLogin =()=>{
        dispatch(loginLoading())
        axios({
            method:"post",
            url:"https://reqres.in/api/login",
            data:loginData

        }).then(res =>{
            dispatch(loginSuccess(res.data.token))

        }).catch( error=>{
             dispatch(loginError())
        })
    }

    if(token){
        return <Navigate to="/" />
    }
    return(
        
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        {Object.keys(loginData).map(el=> <TextField id="outli"name={el} value={loginData[el]} onChange={handleChange} label={el.toLocaleUpperCase()} variant="outlined" />)}
        <br />
        <Button variant="outlined" onClick={handleLogin}>Login</Button>
      
      </Box>
    )
}

/**    "email": "eve.holt@reqres.in",
 */