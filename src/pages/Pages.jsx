import React from "react";
import {Routes, Route} from "react-router-dom"
import { Private } from "../Componets/Private";
import { Home } from "./Home";
import { Login } from "./Login";
export const Pages = ()=>{
    return (
        <div>

            <Routes>
                <Route path="/" element={<Private><Home/></Private>}> </Route>
                <Route path="/login" element={<Login/>}> </Route>
            </Routes>
        </div>
    )
}