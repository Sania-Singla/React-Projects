import React, { forwardRef } from 'react'

function Select({
    options,   //array of objects 
    label,
    id,
    className="",
    ...props
},ref ) {
    const optionElements = options.map(option=>(
        <option key={option} value={option}>
            {option}
        </option>
    ))

  return (
    <div className='w-full'>
        {label && <label htmlFor={id}>{label}</label>}

        <select 
            id={id} 
            ref={ref}  
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} 
            {...props}
         >      
            {options && optionElements}
        </select>
        
    </div>
  )
}

export default forwardRef(Select)      //or wrap the complete funcn as we did in input component