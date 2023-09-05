import { combineReducers } from "redux";
import ProdReducer from "./ProdReducer";


const rootreducer = combineReducers({
         items : ProdReducer
})

export default rootreducer;