import {createStore, applyMiddleware,compose,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import data from './data';
import { composeWithDevTools } from 'redux-devtools-extension';
import {productDetailsReducer, productListReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducers';

const initialState={
    cart:{
        cartItems:localStorage.getItem('cartItemsddd')? JSON.parse(localStorage.getItem('cartItems')):[]
        
    }
};
console.log(initialState);
const reducer=combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer,
});

// const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
    );

    export default store;