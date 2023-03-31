import React from "react"
import Button from "./Button"



function SortPigs( {handleClick, sortByText}){
	return(
	<div>
        <br></br>
        <h3>{sortByText}</h3>
            <Button id = {"name"} text={"Name"} handleClick={handleClick}/>
            <Button id = {"weight"} text={"Weight"} handleClick={handleClick}/>
            <br></br>
            <br></br>
	</div>
	)
}



export default SortPigs