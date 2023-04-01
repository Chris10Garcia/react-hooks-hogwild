import React from "react"
import FormInputs from "./FormInputs"


function AddPig({formData, handleChange, handleSubmit}){



    const buildForm = {
        name: {text: "Name", type:"text", placeholder:"name", name:"name"},
        specialty : {text: "Specialty", type: "text", placeholder:"specialty", name: "specialty"},
        greased : {text: "Greased", type: "checkbox", placeholder: "", name: "greased", checked: false},
        award : {text: "highest medal achieved", type: "text", placeholder:"highest award", name: "award"},
        weight : {text: "weight", type: "number", placeholder:"0.0", name: "weight", step: "0.1"},
        image : {text: "Image url", type: "text", placeholder:"url", name: "image"},
    }

    const forminputsJSX = []

    for (let key in buildForm){
        forminputsJSX.push(
                <FormInputs formData={formData} 
                            handleChange= {handleChange} 
                            key = {key} 
                            bttnPurpose={buildForm[key]}
                />
                )
    }
    
//onClick= {(event)=>{event.preventDefault(); handleSubmit()}} 
	return(
		<div className ="ui form">
			<h4 className="ui dividing header">Add a new pig!</h4>
			<form className="fields" onSubmit={(event)=>{event.preventDefault(); handleSubmit()}}>
                {forminputsJSX}
                <button  className = "ui button">Submit Pig Data</button>
			</form>
			
			<div><br></br></div>
		</div>
	)
}


export default AddPig