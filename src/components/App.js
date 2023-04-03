import React, { useState } from "react";
import Nav from "./Nav";
import HogTiles from "./HogTiles";
import hogs from "../porkers_data";
import Filter from "./Filter";
import SortPigs from "./SortPigs";
import AddPig from "./AddPig";




function App() {
	const [pigData, setPigData] = useState(hogs)
	const [formData, setFormData] = useState({
		name: "",
        specialty : "",
        greased : false,
		weight: 0.0,
        award : "",
        image : ""
	})

	function handleChange (event){
        const key = event.target.name
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value
        setFormData({...formData, [key] : value})
		
	}

	function handleSubmit (){
		const string = formData.weight
		formData.weight = parseInt(string)
		setPigData([...hogs, formData])
		setFormData({
			name: "",
			specialty : "",
			greased : false,
			weight: 0.0,
			award : "",
			image : ""
		})
	}

	function handlePigSort(event){
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
			<AddPig formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
			<Filter handleGreaseFilter = {handleGreaseFilter}/>
			<SortPigs sortByText={"Sort by name or weight:"} handleClick= {handlePigSort}/>
			<HogTiles hogs = {pigData} />
		</div>
	);
}

export default App;
