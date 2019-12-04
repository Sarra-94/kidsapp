import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Footer from "./components/footer";
import Home from "./pages/Intro/introduction";
import SignUp from "./components/signup2";
import SignIn from "./components/signin2";
import "./App.css";
import Homeuser from "./pages/home/home";
import Navbar from "./components/navbar";

import EducationVideos from "./pages/educationVideo/educationVideos";
import Watcheducationvideos from "./pages/educationVideo/watcheducationvideos";
import EducationGames from "./pages/educationGames/educationGames";
import ReadBook from "./pages/readingbooks/readBook";
import Listenbooks from "./pages/Listenbook/Listenbook";
import Readingbooks from "./pages/readingbooks/readingbooks";
import Movie from "./pages/movie/movie";

const App = () => {
  return (
    <div>
      <Router>
      
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exacte path="/home" component={Homeuser} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route path="/edGames" component={EducationGames} />
          <Route exact path="/readingbooks" component={Readingbooks} />
          <Route exact path="/movie" component={Movie} />
          <Route exact path="/edVideos" component={EducationVideos} />
          <Route exact path="/:title" component={Watcheducationvideos} />
          <Route exact path="/readingbooks/:title" component={ReadBook}></Route>
          <Route exact path="/listen" component={Listenbooks} />
        </Switch>
      </Router>

      <Footer />
    </div>
  );
};

export default App;
