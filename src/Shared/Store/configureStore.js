import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Products} from "./products";
import {Cart} from "./cart";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            products: Products,
            cart: Cart
        }),
        applyMiddleware(thunk)
    ) ;
    return store;
};