import { todoFail, todoRequest, todoSuccess } from "./actions";

export function fetchTodoList() {
    return dispatch => {
        dispatch(todoRequest());
        return fetch(`https://jsonplaceholder.typicode.com/todos`)
            .then(handleErrors)
            .then(res => res.json())
            .then(data => dispatch(todoSuccess(data)))
            .catch(error => {
                console.error(`__ERROR__`, error);
                dispatch(todoFail(error))
            })
    }
}

function handleErrors(response) {
    if (!response.ok) {
        console.error("response not ok...")
    }
    return response
}