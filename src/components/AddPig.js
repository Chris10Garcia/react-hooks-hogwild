import React from "react"


function AddPig(){
	return(
		<div className ="ui form">
			<h4 className="ui dividing header">Add a new pig!</h4>
			<form className="fields" onSubmit={() => alert("this worked")}>
				<div className = "field">
					<label>Add Name</label>
					<input type="text" placeholder="name"></input>
				</div>
				<div className = "field">
					<label>Add Specialty</label>
					<input type="text" placeholder="specialty"></input>
				</div>
				<div className = "field">
					<label>Add Greased</label>
					<input type="checkbox"></input>
				</div>
				<div className = "field">
					<label>weight</label>
					<input type="number" placeholder="0" step="0.1"></input>
				</div>
				<div className = "field">
					<label>highest medal achieved</label>
					<input type="text" placeholder="award"></input>
				</div>
				<div className = "field">
					<label>image</label>
					<input type="text" placeholder="pasta image url"></input>
				</div>
				<div className = "field">
					<label>test </label>
					<button className = "ui button">Submit Pig Data</button>
				</div>
			</form>
			
			<div><br></br></div>
		</div>
	)
}


export default AddPig