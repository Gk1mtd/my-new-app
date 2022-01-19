import React from "react";

function ImprovedCard(props) {
    
    return (
        <div className="movies-list-card">
            <h2>{props.title}</h2>
            <p>Director: {props.director}</p>
            <button onClick={props.clickTodeleteMovie}>Delete</button>
        </div>
    )
}

export default ImprovedCard