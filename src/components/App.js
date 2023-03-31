import React, { useState } from "react";
import Nav from "./Nav";
import HogTile from "./HogTile";
import hogs from "../porkers_data";
import Filter from "./Filter";


function App() {
	const [pigData, setPigData] = useState(hogs)

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
			{/* location to sort */}
			<HogTile hogs = {pigData} />
			
		</div>
	);
}

export default App;
