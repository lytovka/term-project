import React, { useState } from "react";
import "../styles/style.css";
import "../scripts/queries";
import logo from "../images/reactFull.png";
import rating from "../images/ratingReact.png";
import openTab from '../scripts/scripts';

const FirstPageFrontend = ({ isPressed }) => {

    const startFront = isPressed ? "animation start-front" : "";

    return (
        <>
            <div id="Front-end-content" style={isPressed ? { display: "block" } : { display: "none" }} className="tabcontent">
                <center>
                    <div className="heading">
                        <div><img className="head" src={logo} alt="React logo" width="261px" height="85px" /></div>
                        <div><img className="head" src={rating} alt="React rating" width="261px" height="85px" /></div>
                    </div>
                    <div className="data">
                        <p className="section-name">Popularity</p>
                        <p className="sub-data">In 2019, React is one of (if not the most) popular JavaScript frontend framework. According to StackOverflow's 2018 surveys, React ranks #3 in most popular. Per the stateofjs.com survey for 2018, React ranks highly on amount of users that have used it and would use it again: 64.8% used it and would use it again and only 6.7% of users would not use it again.</p>
                        <p className="section-name">Usage</p>
                        <p className="sub-data">React excels because it’s pure JavaScript. If you have a team of JavaScript developers that know the ins and outs of the language, then it’s a great fit. JavaScript developers will be able to embrace JS, build components with pure JavaScript and understand styling with CSS-in-JS.</p>
                    </div>
                    <br />
                    <div className="pros-cons-container">
                        <div className="pros-cons">
                            <p>Advantages</p>
                            <ul><li>Clean programming, strong community, fast performance</li></ul>
                        </div>
                        <div id="disadvantages" className="pros-cons">
                            <p>Disadvantages</p>
                            <ul><li>Large library, learning curve, view-orientedness</li></ul>
                        </div>
                    </div>
                </center>
            </div>
        </>
    );
}


export default FirstPageFrontend;