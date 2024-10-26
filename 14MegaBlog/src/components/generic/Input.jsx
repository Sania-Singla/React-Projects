import { forwardRef } from "react";

const Input = forwardRef(function Input(
    {
        //basically to use forwardRef to get references we need to wrap the complete funcn in this hook
        label,
        id,
        type = "text",
        placeholder,
        className = "",
    },
    ref
) {
    return (
        <div>
            {label && (
                <label className="inline-block mb-1 pl-1" htmlFor={id}>
                    {label}
                </label>
            )}

            <input
                id={id}
                type={type}
                placeholder={placeholder}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                ref={ref} //so basically to is ref variable ke andr is input ka reference aa jayega so that we can set its value according to the state and add onChange event handlers to this input
            />
        </div>
    );
});

export default Input;
