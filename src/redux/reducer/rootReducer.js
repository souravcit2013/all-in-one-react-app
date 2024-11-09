import { combineReducers } from "redux";
import todoListReducer from "./todoReducer";

const rootReducer = combineReducers({
    todoListReducer
})

export default rootReducer