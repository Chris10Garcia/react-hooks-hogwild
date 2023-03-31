import React from "react"


function Button ({text, handleClick, id}){
    return(
        <span>  
            <button id={id} onClick = {handleClick} className="button"> {text} </button>  
        </span>
    )
}



export default Button