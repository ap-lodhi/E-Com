import { ADD_TO_CART, CLEAR_CART, DEC_CART, DELETE_ITEM_FROM_CART, GET_CART, INC_CART } from "./actionType"

export const  addToCart =()=>{
       return{
        type:ADD_TO_CART,

       }
}

export const incrementCart =()=>{
    return{
     type:INC_CART,
     
    }
}
export const  decrementCart =()=>{
    return{
        type:DEC_CART

    }

}

export const  deleteItemFromCart=()=>{
    return{
        type:DELETE_ITEM_FROM_CART

    }

}

export const  clearCart =()=>{
    return{
        type:CLEAR_CART

    }

}

export const  getCart=(payload)=>{
    return{
        type:GET_CART,
        payload

    }

}