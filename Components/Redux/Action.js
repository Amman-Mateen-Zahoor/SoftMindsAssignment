import {ADD_TO_CART,ADD_TO_CART_Remove,add_to_cart_remove} from './Constants'


export function addToCart (item) {
    // console.log('action called')

    return{
        type : ADD_TO_CART,
         //payload
         data : item
    }
}

export function addToCartRemove (item) {
    // console.log('action called')

    return{
        type : ADD_TO_CART_Remove,
         //payload
         data : item
    }
}