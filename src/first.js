import React from "react";
import './App.css';

export function Dad(props){
    return(
    <div className="App" id="sam">
        <h1>{props.god}</h1>
        <h1>{props.home}</h1>  
        <img src={props.Image} width="70%" alt=""/><br></br>
        <button>{props.btn}</button>

    </div>
    )
}
