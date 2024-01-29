import React from "react";
import './App.css';


  export  function Second(props) {
  return (
    <div className="App" id="col">
     <h1>{props.Second} </h1>
    <h1> {props.third}</h1>
    <img src={props.logo} width= "70%" alt="" /> <br></br>
    <button>{props.samuel}</button>

    <img src= {props.image} width= "70%" alt="" />
    <h1> {props.fouth}</h1>
    <button>{props.kamo}</button>

    </div>
  )
}