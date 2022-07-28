import React from "react";
import { MediaCard } from "../Componets/Card";
import { useFetchProducts } from "../hook/fetchProducts";

export const Home=()=>{
    const {loading ,error ,data} =useFetchProducts("http://localhost:8000/products")
 
    return(

        loading ?<h2>...loading</h2>
       :error ? <h2>Somthing went Wrong</h2> 
       :data.map(el => <div  key={el.id} className="card_container"><MediaCard  {...el}/></div>)
        // <div>home</div>
    )
}