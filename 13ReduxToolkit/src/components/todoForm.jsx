import "../css/todoform.css"
import { useDispatch } from "react-redux"
import {addTodo} from "../features/todo/todoSlice"
import { useState } from "react"

export default function ToDoForm() {

    const [task,setTask] = useState("");    //for input

    const dispatch = useDispatch()         

    function addTodoHanler() {
        dispatch(addTodo(task))           //reducers are called inside of the useDispatch()
        setTask('')
    }

    return (
        <div className="form">
            <input 
                className="input"
                type="text" 
                placeholder="add a task !"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button className="add" onClick={addTodoHanler}>Add</button>
        </div>
    )
}