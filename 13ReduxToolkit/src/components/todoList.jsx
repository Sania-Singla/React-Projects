import "../css/todolist.css"
import { useDispatch,useSelector } from "react-redux"
import {removeTodo} from "../features/todo/todoSlice"

export default function ToDoList() {

    const todos = useSelector(state => (state.todos))    //will give access to state from store so can get the todos property from state 

    const dispatch = useDispatch()        //still need this to make a modification and sent the data back to the store 
     
    function removeTodoHanler(id) {
        dispatch(removeTodo(id))
    }

    const todoElements = todos.map(todo=>(
        <div className="todo" key={todo.id}>
            <div className="text">
                {todo.text}
            </div>
            <button className="cross" onClick={ () => {removeTodoHanler(todo.id)} }>❌</button>
        </div>
    ))
    
    return (
        <div className="todos">
            {todoElements}
        </div>
    )
}