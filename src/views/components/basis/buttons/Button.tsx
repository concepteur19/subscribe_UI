import { FC } from 'react'

interface ButtonProps {
    btnP?: string,
    btnText?: string,
    btnBg?: string,
    btnBorder?: string,
    buttonText?: string,
    btnIcon?: any,
    btnClass?: any

    handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
} 

const Button: FC<ButtonProps> = ({btnBg, btnBorder, btnP, btnText, buttonText, btnIcon, btnClass, handleClick}) => {
  return (
    <>
        <button onClick={handleClick} className={`flex items-center space-x-[6px] ${btnP} ${btnText} ${btnBg} ${btnBorder} ${btnClass}`} >
            {btnIcon? btnIcon : ''}  <span>{buttonText}</span>
        </button>
    </>
  )
}

export default Button