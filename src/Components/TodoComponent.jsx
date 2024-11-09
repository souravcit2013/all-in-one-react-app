import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTodoList } from "../redux/action/fetchData"


const Todo = () => {
    const dispatch = useDispatch()
    const { loading, data, error } = useSelector(state => state.todoListReducer)
    console.log({loading, data, error})
    useEffect(() => {
        dispatch(fetchTodoList())
    }, [dispatch])
    
    return (<>
        {!loading && !error && data?.map(({ title = '', id='' }) => <>
            <span>{`${id} - ${title.toUpperCase()}`}</span><br />
        </>)}
    </>)
}

export default Todo