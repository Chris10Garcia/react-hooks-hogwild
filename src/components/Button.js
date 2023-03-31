import React from "react"


function Button ({text, handlePigSort, id}){
    return(
        <span>  
            <button id={id} onClick = {handlePigSort} className="button"> {text} </button>  
        </span>
    )
}



export default Button