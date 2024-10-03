import useToDo from "../context/ToDoContext";
import "../css/clearall.css";

export default function ClearAll() {
    const { setTasks } = useToDo();

    //delete all todos
    async function clearAllTasks() {
        await setTasks([]); //just try kiya because iske bina tasks empty ho rha tha but delete ni from local storage but using await it worked
        localStorage.clear();
    }

    return (
        <div className="clear-all">
            <button onClick={clearAllTasks}>Clear All</button>
        </div>
    );
}
