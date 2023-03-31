import React from "react"
import Button from "./Button"



function SortPigs( {handlePigSort}){
	return(
	<div>
        <br></br>
        <h3>Sort by name or weight:</h3>
            <Button id = {"name"} text={"Name"} handlePigSort={handlePigSort}/>
            <Button id = {"weight"} text={"Weight"} handlePigSort={handlePigSort}/>
            <br></br>
            <br></br>
	</div>
	)
}



export default SortPigs