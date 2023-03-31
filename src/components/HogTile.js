import React from "react"


function HogTile({hogs}){
    
   function showHideCard(event){
        const divDescription = event.target.querySelector('.description')
        divDescription.hidden = !divDescription.hidden
   }
    const hogsJSX = hogs.map(hogObj =>{
        return (
            <div key={hogObj.name} className="card" onClick={showHideCard}>
                <div className="image" style={{pointerEvents: "none"}}>
                    <img src = {hogObj.image} alt={hogObj.name} ></img>
                </div>
                <div className="content" style={{pointerEvents: "none"}}>
                    <div className="header">
                        {hogObj.name}
                    </div>
                    <div className="description" hidden={true}>
                        <p>Specialty: {hogObj.specialty}</p>
                        <p>Greased: {String(hogObj.greased)}</p>
                        <p>Weight: {hogObj.weight.toFixed(2)}</p>
                        <p>Hightest medal achieved: {hogObj["highest medal achieved"]}</p>
                    </div>
                </div>
            </div>
        )
    })
		
    return(
        <div className="ui link cards">
            {hogsJSX}
        </div>
    )
}


export default HogTile