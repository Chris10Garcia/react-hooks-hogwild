import React from "react"

function FormInputs({bttnPurpose, formData, handleChange}){
    const {text, type, placeholder, name, step} = bttnPurpose

    return(

                <div className = "field">
					<label>{text}</label>
					<input 
                            type={type} 
                            placeholder={placeholder} 
                            name = {name}
                            onChange = {handleChange}
                            value = {formData[name]}
                            step = {step}
                    >
                    </input>
				</div>
    )
}


export default FormInputs