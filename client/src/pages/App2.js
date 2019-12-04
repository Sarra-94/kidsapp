import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import EducationVideos from "./educationVideo/educationVideos";
import Watcheducationvideos from "./educationVideo/watcheducationvideos";
import Home from "./Intro/introduction";
import EducationGames from "./educationGames/educationGames";
import ReadBook from "./readingbooks/readBook";
import Listenbooks from "./Listenbook/Listenbook";
import Readingbooks from "./readingbooks/readingbooks";
import Movie from "./movie/movie";
import Homeuser from "./home/home";
import App from "../App.js"


import Navbar from "../components/navbar";

class App2 extends Component {
 
    render() { 
        return ( 
     <>
        <Navbar />
        <Switch>  
           {/* <Route exact path="/" component={App} /> */}
          <Route  exact path='/home' component={Homeuser} />
          <Route  exact path="/home/edGames" component={EducationGames} />
          <Route exact path="/home/readingbooks" component={Readingbooks} />
          <Route exact path="/home/movie" component={Movie} />
          <Route exact path="/home/edVideos" component={EducationVideos} />
          <Route exact path="/home/:title" component={Watcheducationvideos} />
          <Route exact path="/home/readingbooks/:title" component={ReadBook}></Route>
          <Route exact path="/home/listen" component={Listenbooks} />
        </Switch>
    
</>
         );
    }
}
 
export default App2;