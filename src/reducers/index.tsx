import { combineReducers } from "redux";
import productListReducer from "../container/MainPage/ProductPage/slice";

const rootReducer = combineReducers({
    listProduct: productListReducer,

})

export default rootReducer;