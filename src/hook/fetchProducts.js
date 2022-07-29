import axios from "axios";
import { useEffect, useState } from "react"

export const useFetchProducts =(url ,page ,sort)=>{
       const [products,setProducts] =useState({
        loading:false,
        error:false,
        data:[]
    });
 const {loading ,error,data} =products;
    const getProds =(url,page,sort )=>{
        const paramObj ={
            _page:page
        }
        if(sort){
            paramObj._sort="price";
             paramObj._order=sort
        }
            setProducts(prev =>({
                ...prev,
                loading:true
            }))
            axios({
                method:"get",
                url,
                params:paramObj
                   
                
              
            }).then(res => setProducts(prev =>({
                ...prev,
                loading:false,
                error:false,
                data:res.data
            })))
            .catch(err =>setProducts(prev =>({
                ...prev,
                loading:false,
                error:true

            })))
        
    }
    useEffect(()=>{
        getProds(url,page,sort)
    },[page,sort])
   return {loading ,error,data, }
}




