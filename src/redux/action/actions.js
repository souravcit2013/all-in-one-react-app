import { TODO_LIST_FAIL, TODO_LIST_REQUEST, TODO_LIST_SUCCESS } from "./actionConstant"

export const todoRequest = () => ({ type: TODO_LIST_REQUEST })
export const todoSuccess = (data) => ({ type: TODO_LIST_SUCCESS, data })
export const todoFail = (error) => ({ type: TODO_LIST_FAIL, error })