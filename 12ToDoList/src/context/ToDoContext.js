import { createContext, useContext } from "react";

export const ToDoContext = createContext();

export const ToDoContextProvider = ToDoContext.Provider;

export default function useToDo() {
    return useContext(ToDoContext);
}
