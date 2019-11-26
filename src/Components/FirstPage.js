import React, { useState } from "react";
import "../styles/style.css";
import "../scripts/queries";
import openTab from '../scripts/scripts';
import FirstPageFrontend from './FirstPageFrontend';
import FirstPageBackend from './FirstPageBackend';


const FirstPage = () => {

    const [isPressed, setPress] = useState(false);
    const [isFrontPressed, setFrontPress] = useState(false);
    const [isBackPressed, setBackPress] = useState(false);

    const handleTabFrontPress = () => {
        setPress(true);
        setFrontPress(true);
        setBackPress(false);
    }
    const handleTabBackPress = () => {
        setPress(true);
        setBackPress(true);
        setFrontPress(false);
    }

    const styles = {
        tablinkFront: {
            opacity: isPressed && isFrontPressed ? "1" : "0.5"
        },
        tablinkBack: {
            opacity: isPressed && isBackPressed ? "1" : "0.5"
        }
    }
    // style={styles.tablinkFront}
    return (
        <center className="outer-div">
            <div className="mid-div">
                <div className="center-div">
                    <div className="tabs">
                        <button id="front" className="front-end tablink" style={styles.tablinkFront} onClick={handleTabFrontPress} onMouseUp={() => console.log('123')} onMouseLeave={() => console.log('567')}>Front-end</button>
                        <button id="back" className="back-end tablink" style={styles.tablinkBack} onClick={handleTabBackPress}>Back-end</button>
                        <div className="underline"></div>
                        <div id="bar" className={`animation ${isFrontPressed ? "start-front" : "start-back"}`}></div>
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

