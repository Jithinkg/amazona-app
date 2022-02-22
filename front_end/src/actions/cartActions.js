import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";
import axios from "axios";
import { useSelector } from "react-redux";
export const addToCart=(productId,qty)=>async(dispatch,getState)=>{
    const {data}=await axios.get(`/api/products/${productId}`);
    // debugger;
    dispatch({
        type:CART_ADD_ITEM,
        payload:{
            name:data.name,
            image:data.image,
            price:data.price,
            countInStock:data.countInStock,
            product:data._id,
            qty,
        }
    });
    // const cart = useSelector((state) => state.cart);
    // const { cartItems } = cart;
    // console.log(cartItems);
    // localStorage.setItem('cartItems',JSON.stringify(cartItems));
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
    // debugger;
};

export const removeFromCart=(productId)=>(dispatch,getState)=>{
    dispatch({type:CART_REMOVE_ITEM,payload:productId});
    localStorage.setItem('cartItems',JSON.stringify(getState().cartItems));
}
