import React, { ReactNode } from "react";
import '../../../styles/card.css'

type CardProps = {
    imageSrc?: string
    imageAlt?: string
    imgW?: string
    imgH?: string
    cardClass?: string
    title?: string
    subTitle?: string
    content?: string
    icones?: ReactNode[]
    backgroudColor?: string
    borderColor?: string
}


const Card: React.FC<CardProps> = ({imageSrc, imageAlt, cardClass, title, subTitle, content, icones, imgH, imgW, backgroudColor, borderColor}) => {
    return (
        <div className={`rounded m-2 p-2 border ${cardClass} ${backgroudColor} ${borderColor} `}>
            <div className=" mb-3">
                <img className=" rounded" src={imageSrc} alt={imageAlt} width={imgW} height={imgH}/>
            </div>

            <div className="mb-1 text-xs text-gray-400 ">
                {subTitle}
            </div>

            <div className="mb-2 text-sm exo2SM">
                {title}
            </div>

            <div className="mb-2 text-xs">
                {content}
            </div>
            
            <div className=" flex flex-row gap-2">
                {icones?.map(icone =>{
                    return (
                        <div className=" rounded-full p-2">
                            {icone}
                        </div>
                    )
                })}
            </div>
            

        </div>
    )
}

export default Card;