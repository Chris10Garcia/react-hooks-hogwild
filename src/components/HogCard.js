import React from "react"


function HogCard ({hog}) {
    const {name, specialty, greased, weight, image} = hog

    const award = hog["highest medal achieved"]

    function showHideCard(){
        const divDescription = document.querySelector('#' + name + 'toHide')
        divDescription.hidden = !divDescription.hidden
        console.log(name)
   }

return(
    <div className="card" onClick={() =>showHideCard()}>
                
        <div className="image" style={{pointerEvents: "none"}}>
            <img src = {image} alt={name} ></img>
        </div>

        <div className="content" style={{pointerEvents: "none"}}>
            <div className="header">
                <h2 className="ui header">{name}</h2>
            </div>

            <div className="description" hidden={true} id={name + "toHide" }>
                <p>Specialty: {specialty}</p>
                <p>Greased: {String(greased)}</p>
                <p>Weight: {weight.toFixed(2)}</p>
                <p>Hightest medal achieved: {award}</p>
            </div>
        </div>

    </div>
    )
}


export default HogCard