import {Dispatch}  from "redux";
import axios from "axios";

import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    CLEAR_ERRORS,
    ProductType,
    ErrorType,
    ProductDispatchTypes
} from "../constants/productConstants"

export const getProduct = (product: string) => async (dispatch: Dispatch<ProductDispatchTypes>) => {
    try {
    dispatch ({
        type: ALL_PRODUCT_REQUEST
    });

    const res = await axios.get("/api/v1/products");

    dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: res.data
    })

    } catch(error) {
        dispatch ({
            type:ALL_PRODUCT_FAIL,
            
        })
    }
};

export const clearErrors = () => async (dispatch: Dispatch<ProductDispatchTypes>) => {
    dispatch({
        type: CLEAR_ERRORS
    });
}

