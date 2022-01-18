import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    CLEAR_ERRORS,
    ProductType,
    ErrorType,
    ProductDispatchTypes
} from "../constants/productConstants"


interface DefaultStateI {
    loading: boolean,
    product?: [],
    //productsCount?: 
    error?: ErrorType
}

const defaultState: DefaultStateI = {
    loading: false,
    product: []
};

const productReducer = (state: DefaultStateI = defaultState, action: ProductDispatchTypes) => {
    switch (action.type) {
        case ALL_PRODUCT_REQUEST:

            return {
                loading: true,
                product: []
            };
        case ALL_PRODUCT_SUCCESS:
            return {
                loading: false,
                product: action.payload,
                //productsCount: action.payload
            };
        case ALL_PRODUCT_FAIL:
            return {
                loading: false,
                //error: action.payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }

};

export default productReducer