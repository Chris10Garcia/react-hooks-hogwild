import React, { useState } from "react";
import Nav from "./Nav";
import HogTile from "./HogTile";
import hogs from "../porkers_data";
import Filter from "./Filter";
import SortPigs from "./SortPigs";


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

function App() {
	const [pigData, setPigData] = useState(hogs)

	function handlePigSort(event){
		// event.target.classList.toggle('active')

		const sortPigs = [...pigData]

		// eslint-disable-next-line default-case
		switch (event.target.id){
			case "name":
				sortPigs.sort((a,b)=> {
					const textA = a.name.toUpperCase()
					const textB = b.name.toUpperCase()
					return (textA < textB) ? -1 : (textA > textB)? 1 : 0})
				setPigData(sortPigs)
				break;
			case "weight":
				sortPigs.sort((a,b)=> a.weight - b.weight)
				setPigData(sortPigs)
				break;
		}

	}

	function handleGreaseFilter(event){
		const pigGrease = event.target.checked 
			? pigData.filter(pigs => pigs.greased)
			: hogs
		// console.log(pigGrease)
		setPigData([...pigGrease])
	}

	return (
		<div className="App">
			<Nav />
			<AddPig />
			<Filter handleGreaseFilter = {handleGreaseFilter}/>
			<SortPigs sortByText={"Sort by name or weight:"} handleClick= {handlePigSort}/>
			<HogTile hogs = {pigData} />
		</div>
	);
}

export default App;
