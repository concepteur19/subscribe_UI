import { FC } from 'react'

interface ButtonProps {
    btnP?: string,
    btnText?: string,
    btnBg?: string,
    btnBorder?: string,
    buttonText?: string,
    btnIcon?: any,
    btnClass?: any,
    btnType?: "submit" | "reset" | "button" | undefined

    handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
} 

const Button: FC<ButtonProps> = ({btnType, btnBg, btnBorder, btnP, btnText, buttonText, btnIcon, btnClass, handleClick}) => {
  return (
    <>
        <button type={btnType} onClick={handleClick} className={`flex items-center justify-center space-x-[6px] text-white-2 ${btnP} ${btnText} ${btnBg} ${btnBorder} ${btnClass}`} >
            {btnIcon? btnIcon : ''}  <span>{buttonText}</span>
        </button>
    </>
  )
}

export default Button