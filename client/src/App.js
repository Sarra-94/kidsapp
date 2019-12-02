import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import EducationVideos from "./pages/educationVideo/educationVideos";
import WatchMovie from './pages/educationVideo/watcheducationvideos'
import Footer from "./components/footer";
import Home from "./pages/Intro/introduction";
import Navbar from './components/navbar'
import EducationGames from './pages/educationGames/educationGames'
import ReadBook from './pages/readingbooks/readBook'

import './App.css'
import Readingbooks from "./pages/readingbooks/readingbooks";
import Movie from './pages/movie/movie'

const App = () => {
  return (
    <div>
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/edGames' component={EducationGames} />
          <Route exact path="/edVideos" component={EducationVideos} />
          <Route exact path="/:title" component={WatchMovie} />
          <Route exact  path="/readingbooks" component ={Readingbooks}/>
          <Route exact path="/readingbooks/:title" component={ReadBook}></Route>
          <Route  path="/movies" component ={Movie}/>
        </Switch>
      </Router>

      <Footer/>
    </div>
  );
};

export default App;
