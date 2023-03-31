import React from "react"

// should be a either a checkbox or radio (Yes or no)
// checkbox => 


function Filter({pigData, handleGreaseFilter}){
    return(
        <div>
            <h2>
                <label>
                    <input type="checkbox" name="grease" onChange={handleGreaseFilter}/>  
                    {"    Filter by greased pigs?"}
                </label>
            </h2>
        </div>
    )
}



export default Filter