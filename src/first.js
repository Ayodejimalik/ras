import React from "react";
import './App.css';
import image from './jordan.jpeg';
import { Link } from "react-router-dom";

export function Dad(props) {


    return (
        <>
            <div className="sam" id="sam">
                <img src={image} alt="" id="id" />

                <ul>
                    <li><Link to='/' id="hul">Level one</Link> </li>
                    <li><Link to='/bad'  id="hul">Level Two</Link></li>
                    <li>Level Three</li>
                    <li>Level four</li>
                </ul>
            </div>
        </>
    )
}
