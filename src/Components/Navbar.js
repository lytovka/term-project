import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "../styles/navbar.css";
import FirstPage from "../Components/FirstPage";
import SecondPage from "../Components/SecondPage";


const Navbar = () => {
    return (
        <>
            {/* <Router> */}
                <nav>
                    <div>
                        <ul className="nav-links" id="default">
                            <li><Link className='a' to="/">Page 1</Link></li>
                            <li><Link className='a' to="/installation">Page 2</Link></li>
                            <li><Link className='a' to="/">Page 3</Link></li>
                            <li><Link className='a' to="/">Page 4</Link></li>
                            <li><Link className='a' to="/">Page 5</Link></li>
                            <li><Link className='a' to="/">Page 6</Link></li>

                        </ul>
                    </div>
                    <div className="page-selector">
                        <button className="dropbtn"><p>Select Page <span id="arrow-drop">&#9654&#xFE0E;</span></p></button>
                        <div className="drop-content">
                            <div id="hidden" className="nav-links disabled">
                                <li><Link className='a' to="/">Page 1</Link></li>
                                <li><Link className='a' to="/installation">Page 2</Link></li>
                                <li><Link className='a' to="/">Page 3</Link></li>
                                <li><Link className='a' to="/">Page 4</Link></li>
                                <li><Link className='a' to="/">Page 5</Link></li>
                                <li><Link className='a' to="/">Page 6</Link></li>
                            </div>
                        </div>
                    </div>
                </nav>

            {/* </Router> */}
        </>
    );
}

export default Navbar;