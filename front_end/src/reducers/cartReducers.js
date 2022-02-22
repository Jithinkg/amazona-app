import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  // debugger;
  switch (action.type) {
    case CART_ADD_ITEM:
      // debugger;
      const item = action.payload;
      console.log(item)
      console.log(state);
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      }
      //  state={cartItems:[{nike},{adidas}]}

      
       else {
        return { ...state, cartItems:[...state.cartItems, item]};
        // return { ...state.cartItems, cartItems:[item]};
        // 
      }
      case CART_REMOVE_ITEM:
        return{...state,cartItems:state.cartItems.filter(x=>x.product!==action.payload)}
    default:
      return state; 
  }
};
