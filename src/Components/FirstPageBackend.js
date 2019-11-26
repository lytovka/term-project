import React, { useState } from "react";
import "../styles/style.css";
import "../scripts/queries";
import logo from "../images/mongoFull.png";
import rating from "../images/ratingReact.png";
import openTab from '../scripts/scripts';

const FirstPageBackend = ({ isPressed }) => {

    const startBack = isPressed ? "" : "animation start-back";


    return (
        <>
            <div id="Back-end-content" style={!isPressed ? { display: "block" } : { display: "none" }} className="tabcontent">
                <center>
                    <div className="heading">
                        <div><img className="head" src={logo} alt="MongoDB logo" width="261px" height="85px" /></div>
                        <div><img className="head" src={rating} alt="MongoDB rating" width="261px" height="85px" /></div>
                    </div>
                    <div className="data">
                        <p className="section-name">Popularity</p>
                        <p className="sub-data">MongoDB is by far the most popular choice in NoSQL world as its distributed architecture allows for more scalability and its document data model provides good flexibility to developers, with over 15 million downloads and counting, MongoDB is empowering users to query, manipulate and find interesting insights from their data.</p>
                        <p className="section-name">Usage</p>
                        <p className="sub-data">MongoDB is a general purpose database that is used for a variety of use cases. The most common use cases for MongoDB include Single View, Internet of Things, Mobile, Real-Time Analytics, Personalization, Catalog, and Content Management.</p>
                    </div>
                    <br />
                    <div className="pros-cons-container">
                        <div className="pros-cons">
                            <p>Advantages</p>
                            <ul><li>Flexible database, sharding, high speed, scalability</li></ul>
                        </div>
                        <div id="disadvantages" className="pros-cons">
                            <p>Disadvantages</p>
                            <ul><li>Joins not supported, high memory usage, limited data size</li></ul>
                        </div>
                    </div>
                </center>
            </div>
        </>
    );
}


export default FirstPageBackend;