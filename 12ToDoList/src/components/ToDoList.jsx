import "../css/todolist.css";
import useToDo from "../context/ToDoContext";

export default function ToDoList() {
    const { tasks, setTasks } = useToDo(); //array of objects(todo)

    //remove task method
    function removeTask(id) {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    }

    //toggle css method
    function toggleCheck(id, value) {
        setTasks((prevTasks) =>
            prevTasks.map((task) => {
                if (task.id === id) {
                    return {
                        ...task,
                        checked: value,
                    };
                }
                return task;
            })
        );
    }

    //toggle edit/save method
    function toggleEditBtn(id) {
        setTasks((prevTasks) =>
            prevTasks.map((task) => {
                if (task.id === id) {
                    const current = task.editable;
                    return {
                        ...task,
                        editable: !current, //or editable: !task.editable
                    };
                }
                return task;
            })
        );
    }

    //save the edited input method
    function changeTask(id, newText) {
        setTasks((prevTasks) =>
            prevTasks.map((task) => {
                if (task.id === id) {
                    return {
                        ...task,
                        text: newText,
                    };
                }
                return task;
            })
        );
    }

    //generate the array of elements(tasksElements) from array of objects(tasks)
    const tasksElements = tasks.map((task) => {
        return (
            <div className={`list-item ${task.checked ? "list-item-checked" : ""}`} key={task.id}>
                <input
                    type="checkbox"
                    className="checkbox"
                    checked={task.checked}
                    onChange={(e) => {
                        toggleCheck(task.id, e.target.checked);
                    }}
                />

                {task.editable ? (
                    <input type="text" value={task.text} autoFocus onChange={(e) => changeTask(task.id, e.target.value)} className="list-input" />
                ) : (
                    <span>{task.text}</span>
                )}

                <button
                    className={task.checked ? "faded-save-edit-btn" : "save-edit-btn"}
                    onClick={() => {
                        !task.checked && toggleEditBtn(task.id);
                    }} //we dont want it to be clickable when checked(completed)
                >
                    {task.editable ? "📁" : "✏️"}
                </button>

                <button
                    className="cross-btn"
                    onClick={() => {
                        removeTask(task.id);
                    }}
                >
                    ❌
                </button>
            </div>
        );
    });

    return <div className="list">{tasksElements}</div>;
}
