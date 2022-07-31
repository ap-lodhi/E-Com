import axios from "axios";
import { useEffect, useState } from "react"

export const useFetchProducts =(url ,page ,sort ,sortRating)=>{
       const [products,setProducts] =useState({
        loading:false,
        error:false,
        data:[]
    });
 const {loading ,error,data} =products;
    const getProds =(url,page,sort ,sortRating)=>{
        const paramObj ={
            _page:page
        }
        if(sort){
            paramObj._sort="price";
             paramObj._order=sort
        }
        if(sortRating.length){

            const max =Math.max(...sortRating)
            const min =Math.min(...sortRating)
            if(max == min){
                paramObj.rating_gte =min;
                paramObj.rating_lte=min+1;
            }else{
                paramObj.rating_gte =min;
                paramObj.rating_lte=max+1;
            }
            // sortRating.forEach(el =>{
                //

            // });
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
        getProds(url,page,sort,sortRating)
    },[page,sort,sortRating])
   return {loading ,error,data, }
}




