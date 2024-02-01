import React from "react";
import './App.css';
import image from './jordan.jpeg'

export function Dad(props) {


    return (
        <>
            <div className="sam" id="sam">
                <img src= {image} alt=""  id="id"/>
                
             <ul>
                <li>Level one</li>
                <li>Level Two</li>
                <li>Level Three</li>
                <li>Level four</li>
</ul>
            </div>
        </>
    )
}
