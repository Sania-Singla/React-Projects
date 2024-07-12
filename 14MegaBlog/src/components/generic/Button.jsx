import React from 'react'

function Button({
  btnText,
  bgColor = "bg-blue-600",
  textColor = "text-white",
  type="button",
  className="",
  ...props                           //other remaining props will be destructured using this
}) {
  return (
    <div>
      <button type={type} className={` px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}` } {...props}> {btnText} </button>
    </div>
  )
}

export default Button