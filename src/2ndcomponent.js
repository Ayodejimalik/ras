import React, { useState } from "react";
import './App.css';

export function Second(props) {
  let [title, setTitle] = useState(props.title)
  const changeTitle = () => {
    setTitle('$750')
  }
  let [common, setcommon] = useState(props.common)
  const changecommon = () => {
    setcommon('$780')
  }
  let [simon, setsimon] = useState(props.simon)
  const changesimon = () => {
    setsimon('$200')
  }

  return (
    <div className="App" id="col">
      <h1>{props.third} </h1>
      <h1> PRICE:  {title}</h1>
      <img src={props.logo} width="70%" alt="" /> <br></br>
      <button onClick={changeTitle}>{props.samuel}</button><br></br><br></br>
      <div  id="sal">
        <h1>{props.Second}</h1>
        <h1>PRICE:{common}</h1>
        <img src={props.image} width="70%" alt="" /><br></br><br></br>
        <button onClick={changecommon}>{props.kamo} </button>
      </div>
    

    <div id="ram">
      <h1>{props.god}</h1>
        <h1>PRICE:{simon}</h1>  
        <img src={props.Image} width="70%" alt=""/><br></br>
        <button onClick={changesimon} >{props.btn}</button>
    </div>
    </div>
  )
}