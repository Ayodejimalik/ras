import React, { useState } from "react";
import './App.css';

export function Second(props) {
  let [title, setTitle] = useState(props.title)
  const changeTitle = () => {
    title = props.title / 2

    setTitle("$" + title)
  }



  return (
    <>
     
    <div className="App" id="col">



      <h1>{props.third} </h1>
      <img src={props.logo} width="70%" alt="" id="rel" /> <br></br>
      <h1> PRICE:  {title}</h1>
      <button onClick={changeTitle}>Get Discount</button>

    </div>
    </>
 

  )
}