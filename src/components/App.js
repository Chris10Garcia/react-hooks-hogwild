import React, { useState } from "react";
import Nav from "./Nav";
import HogTile from "./HogTile";
import hogs from "../porkers_data";
import Filter from "./Filter";
import SortPigs from "./SortPigs";


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
			<Filter handleGreaseFilter = {handleGreaseFilter}/>
			<SortPigs handlePigSort= {handlePigSort}/>
			<HogTile hogs = {pigData} />
		</div>
	);
}

export default App;
