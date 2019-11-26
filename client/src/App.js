import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EducationVideos from './pages/educationVideos'
import Home from "./pages/home";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path ="/aboutUs" component={EducationVideos}/>
      </Switch>
    </Router>
  );
};

export default App;
