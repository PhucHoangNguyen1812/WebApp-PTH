import { combineReducers } from "redux";
import productReducer from "./productReducer";

const RootReducer = combineReducers ({
    product: productReducer
}); 

export default RootReducer
