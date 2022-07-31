import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {Routes, Route} from "react-router-dom"
import { Private } from "../Componets/Private";
import { Grocery } from "./Grocery";
import { Home } from "./Home";
import { IndividualItem } from "./IndividualItem";
import { Login } from "./Login";
import { Pharmacy } from "./Pharmacy";
export const Pages = ()=>{

    // const dispatch =useDispatch();
    // const getUser =()=>{
    //     dispatch()
    //     axios({
    //         method:"get",
    //         url:"http://localhost:8000/user"

    //     }).then(res =>{
    //         dispatch()
    //     }).catch(err =>{
    //         dispatch()
    //     })
    // }
  
    // useEffect(()=>{
//   getUser()
    // },[])
    return (
        <div>

            <Routes>
                <Route path="/" element={<Private><Home/></Private>}> </Route>
                <Route path="/grocery" element={<Private><Grocery/></Private>}> </Route>
                <Route path="/pharmacy" element={<Private><Pharmacy/></Private>}> </Route>
                <Route path="/product/:id" element={<Private><IndividualItem/></Private>}> </Route>
                <Route path="/login" element={<Login/>}> </Route>
            </Routes>
        </div>
    )
}