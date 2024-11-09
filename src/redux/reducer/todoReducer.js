import { TODO_LIST_FAIL, TODO_LIST_REQUEST, TODO_LIST_SUCCESS } from "../action/actionConstant";


const initialState = {
    loading: false,
    data: [],
    error: false
}

export default function todoListReducer(state = initialState, action) {
    switch (action.type) {
        case TODO_LIST_REQUEST:
            return { ...state, loading: true, error: false, data: [] }
        case TODO_LIST_SUCCESS:
            return { ...state, loading: false, data: action.data }
        case TODO_LIST_FAIL:
            return { ...state, data: [], loading: false, error: '**__ERROR__**' }
        default:
            return { ...state }
    }
}