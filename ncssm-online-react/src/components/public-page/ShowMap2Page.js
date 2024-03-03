import { GetLocationList } from "../../javascript-functions/database-access.mjs";
//import Map2 from "./map2.js";
import React from 'react';
import "../../styles/about.css";


export default function ShowMap2() {
    return (
        <div className="map2">
            <div className = "titleaa">
            <p> Water Basins</p>
            
            <a href="/capeFear" class="btn btn-primary" style={{ color: "#EFEFEF", marginRight: '10px' }}>
          CapeFear
        </a>
        <a href="/Neuse" class="btn btn-primary" style={{ color: "#EFEFEF", marginRight: '10px' }}>
        Neuse-Pamlico
        </a>
        <a href="/PeeDee" class="btn btn-primary" style={{ color: "#EFEFEF", marginRight: '10px' }}>
        Pee Dee
        </a>
        <a href="/Chowan" class="btn btn-primary" style={{ color: "#EFEFEF", marginRight: '10px' }}>
        Chowan-Roanoke
        </a>
        <a href="/Edisto" class="btn btn-primary" style={{ color: "#EFEFEF", marginRight: '10px' }}>
        Edisto-Santee
        </a>
        </div>
        <div className="titleaa">
        <img src='CarPigg.png' display= "block" className="images"></img> 
        </div>
        </div>
    )
    
}
