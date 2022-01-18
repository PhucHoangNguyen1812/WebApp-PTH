import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from  "redux-devtools-extension"
import RootReducer from './reducers/RootReducer';


 
let initialState = {};


const store = createStore(
    RootReducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(thunk))
);

export type RootStore = ReturnType<typeof RootReducer>

export default store;