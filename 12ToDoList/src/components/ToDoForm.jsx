import { useEffect, useState } from "react";
import "../css/todoform.css";
import useToDo from "../context/ToDoContext";

export default function ToDoForm() {
    //from context
    const { tasks, setTasks } = useToDo();

    //local states
    const [ToDo, setToDo] = useState("");
    const [id, setId] = useState(() => {
        const currentId = localStorage.getItem("currentId"); //getting the saved id from localstorage to set to default (retaining prev info)
        return currentId ? JSON.parse(currentId) : 1;
    });

    //saving the id into the localstorage
    useEffect(
        function () {
            localStorage.setItem("currentId", JSON.stringify(id));
        },
        [id]
    );

    function addTask() {
        if (!ToDo) return alert("please add a task");

        // const randomNumber = Math.floor(Math.random()*10 + 1)  // it can repeat values
        setId(id + 1); // if we used default value (0) then first id 0 hoti because yha ake state update hui but ye funcn pehle pura run hoga then component reload hoga so next time state will be 1

        setTasks((prevTasks) => [
            ...prevTasks,
            {
                id,
                text: ToDo,
                checked: false,
                editable: false,
            },
        ]);

        //clear out the input field after
        setToDo("");
    }

    return (
        <div className="form">
            <input
                type="text"
                placeholder="Add a Task !"
                className="input"
                value={ToDo}
                onChange={(e) => setToDo(e.target.value)}
            />

            <button className="add-btn" onClick={addTask}>
                Add
            </button>
        </div>
    );
}
