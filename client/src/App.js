import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EducationVideos from "./pages/educationVideos";
import './App.css'
import Footer from "./components/footer";
import Home from "./pages/home";
const App = () => {
  return (
    <div>
 
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aboutUs" component={EducationVideos} />
        </Switch>
      </Router>
      
      <Footer></Footer>
    </div>
  );
};

export default App;
