import React from "react";
import { useEffect } from "react";
import { useState } from "react";


export const Home=()=>{
    const [products,setProducts] =useState({
        loading:false,
        error:false,
        data:[]
    });

    useEffect(()=>{
        setProducts(prev =>({
            ...prev,
            loading:true
        }))
        axios({
            method:"get",
            url:"http://localhost:8000/products"
        })
    })
}