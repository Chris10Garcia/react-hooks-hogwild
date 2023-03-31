import React from "react"

// should be a either a checkbox or radio (Yes or no)
// checkbox => 


function Filter({ handleGreaseFilter}){
    return(
        <div className="ui checkbox">
            <input type="checkbox" name="grease" onChange={handleGreaseFilter} />  
            <label><h3 className="ui header large">Filter by greased pigs?</h3></label>
        </div>
    )
}



export default Filter