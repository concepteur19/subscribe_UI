import React from 'react'

interface InputProps {
    inputType: string
    inputClass: string
    placeholder: string
    handleChange?: () => void
}

const Input = ({handleChange, inputType, inputClass, placeholder}: InputProps) => {
  return <input type={inputType} onChange={handleChange} className={" py-2 " + inputClass } placeholder={placeholder} /> 
}

export default Input