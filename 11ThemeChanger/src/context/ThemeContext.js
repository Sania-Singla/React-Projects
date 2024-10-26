import { useContext } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

export default ThemeContext;

//we are creating a custom hook (basically a function) which would return (can't you see) so that we will just have to import one thing (this hook) and not two things as useContext() & ThemeContext
export function useTheme() {
    return useContext(ThemeContext);
}
