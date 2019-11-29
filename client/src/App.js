import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import EducationVideos from "./pages/educationVideo/educationVideos";
import Watcheducationvideos from './pages/educationVideo/watcheducationvideos'
import Footer from "./components/footer";
import Home from "./pages/Intro/introduction";
import Navbar from './components/navbar'
import EducationGames from './pages/educationGames/educationGames'

import './App.css'

const App = () => {
  return (
    <div>
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/edGames' component={EducationGames} />
          <Route path="/edVideos" component={EducationVideos} />
          <Route  path="/:title" component={Watcheducationvideos} />
        </Switch>
      </Router>

      <Footer/>
    </div>
  );
};

export default App;
