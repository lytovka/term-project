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
        </Switch>
      </Router>
    </>
  );
}

export default App;
