import React from 'react'
import './index.css'
import { v4 as uuid } from 'uuid'

function Button({buttonData, buttonType, handleClick}) {
    return (
        buttonData.map((value) => {
            return <button key={uuid()} id={value} className={buttonType} onClick={() => {handleClick(value)}}>{value.toString()}</button>
        }) 
    )
}

export default Button