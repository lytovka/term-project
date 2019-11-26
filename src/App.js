import React from 'react';
import Navbar from "./Components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FirstPage from "./Components/FirstPage";
import SecondPage from "./Components/SecondPage";
import ThirdPage from "./Components/ThirdPage";
import ForthPage from "./Components/ForthPage";
import FifthPage from "./Components/FifthPage";
import SixthPage from "./Components/SixthPage";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" >
            <FirstPage />
          </Route>
          <Route path="/installation">
            <SecondPage />
          </Route>
          <Route path="/tutorial">
            <ThirdPage />
          </Route>
          <Route path="/demo-app">
            <ForthPage />
          </Route>
          <Route path="/fifth-page">
            <FifthPage />
          </Route>
          <Route path="/about-team">
            <SixthPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
