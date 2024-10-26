import { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
    const [password, setPassword] = useState("");
    // const [numberAllowed,setNumberAllowed] = useState(false)
    // const [charAllowed,setCharAllowed] = useState(false)
    // const [length,setLength] = useState(0)
    const [options, setOptions] = useState({
        charAllowed: false,
        numberAllowed: false,
        length: 0,
    });

    function handleChange(e) {
        const { name, value, checked, type } = e.target;
        setOptions((prevOptions) => ({
            ...prevOptions,
            [name]: type === "checkbox" ? checked : value,
        }));
    }

    useEffect(
        function passwordGenerator() {
            let pass = "";
            let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            if (options.charAllowed) str += "!@#$%^&*()_+=~`?/><;',";
            if (options.numberAllowed) str += "0123456789";

            for (let i = 0; i < options.length; i++) {
                const randomIndex = Math.floor(Math.random() * str.length);
                pass += str[randomIndex];
            }

            setPassword(pass);
        },
        [options]
    );

    const passwordRef = useRef(null); //default value = null

    function copyToClipboard() {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 12); //upper statement is required for this to work
        window.navigator.clipboard.writeText(
            passwordRef.current?.value.substring(
                passwordRef.current.selectionStart,
                passwordRef.current.selectionEnd
            )
        );
        // window.navigator.clipboard.writeText(password);  but like this we are direclty providing the text to copy even if i write "sania" it would copy sania to clipboard so we want to link it to the firld it self using ref hook
        //ref hook can help giving any ui effect (on selection in this case) and helping us to access the text in a range
        //.select() & .setSelectionRange() doesnt return the selected part thats why we needed to use the .substring() method(or .slice())
        //using passwordRef.current?.value will get the whole value even if in ui only showing 3 char selected
    }

    return (
        <div className="main-container">
            <div className="input-section">
                <input
                    type="text"
                    placeholder="password"
                    name="password"
                    id="password"
                    value={password}
                    readOnly
                    ref={passwordRef} // so basically passwordRef ke andr ab is input ka referene a jayega
                />
                <button id="copy-btn" onClick={copyToClipboard}>
                    Copy
                </button>
            </div>

            <div className="options-section">
                <input
                    type="range"
                    min={0}
                    max={20}
                    value={options.length}
                    id="range"
                    onChange={handleChange}
                    name="length"
                />
                <label htmlFor="range">Length ({options.length})</label>

                <input
                    type="checkbox"
                    checked={options.charAllowed}
                    id="char"
                    onChange={handleChange}
                    name="charAllowed"
                />
                <label htmlFor="char">Characters</label>

                <input
                    type="checkbox"
                    checked={options.numberAllowed}
                    id="number"
                    name="numberAllowed"
                    onChange={handleChange}
                />
                <label htmlFor="number">Numbers</label>
            </div>
        </div>
    );
}

export default App;
