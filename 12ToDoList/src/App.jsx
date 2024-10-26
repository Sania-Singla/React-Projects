import "./App.css";
import { useEffect, useState } from "react";
// import ToDoForm from './components/ToDoForm'
// import ToDoList from './components/ToDoList'
// import ClearAll from './components/ClearAll'
//or
import { ToDoForm, ToDoList, ClearAll } from "./components"; //auto search for index.js
import { ToDoContextProvider } from "./context/ToDoContext";

function App() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks"); //getting the saved tasks from localstorage to set to default (retaining prev info)
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    //saving the tasks into the localstorage
    useEffect(
        function () {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        },
        [tasks]
    );

    return (
        <ToDoContextProvider value={{ tasks, setTasks }}>
            <div className="main-container">
                <ToDoForm />
                <ToDoList />
                <ClearAll />
            </div>
        </ToDoContextProvider>
    );
}

export default App;
