import React, { useState } from "react";
import "../styles/style.css";
import "../scripts/queries";
import openTab from '../scripts/scripts';
import FirstPageFrontend from './FirstPageFrontend';
import FirstPageBackend from './FirstPageBackend';


const FirstPage = () => {

    const [isPressed, setPress] = useState(false);
    const [isFrontPressed, setFrontPress] = useState(false);

    const handleTabFrontPress = () => {
        setPress(true);
        setFrontPress(true);
        console.log('123');
    }
    const handleTabBackPress = () => {
        setPress(true);
        setFrontPress(false);
        console.log('123');
    }

    return (
        <center className="outer-div">
            <div className="mid-div">
                <div className="center-div">
                    <div className="tabs">
                        <button id="front" className="front-end tablink" onClick={handleTabFrontPress}>Front-end</button>
                        <button id="back" className="back-end tablink" onClick={handleTabBackPress}>Back-end</button>
                        <div className="underline"></div>
                        <div id="bar" className="animation start-front"></div>
                    </div>
                    {
                        isPressed ?
                            (
                                <>
                                    <FirstPageFrontend isPressed={isFrontPressed} />
                                    <FirstPageBackend isPressed={isFrontPressed} />
                                </>
                            )
                            :
                            <>
                            </>
                    }
                </div>
            </div>
        </center>
    );
}

export default FirstPage;

