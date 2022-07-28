import React from "react";
import {Routes, Route} from "react-router-dom"
import { Private } from "../Componets/Private";
import { Grocery } from "./Grocery";
import { Home } from "./Home";
import { Login } from "./Login";
import { Pharmacy } from "./Pharmacy";
export const Pages = ()=>{
    return (
        <div>

            <Routes>
                <Route path="/" element={<Private><Home/></Private>}> </Route>
                <Route path="/grocery" element={<Private><Grocery/></Private>}> </Route>
                <Route path="/pharmacy" element={<Private><Pharmacy/></Private>}> </Route>
                <Route path="/login" element={<Login/>}> </Route>
            </Routes>
        </div>
    )
}