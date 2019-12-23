import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer";
import Intro from "./pages/Intro/introduction";
import StepForm from "./components/signUp";
import SignIn from "./components/signin2";
import "./App.css";
import Homeuser from "./pages/home/home";
import App2 from './pages/App2'



const App = () => {
  return (
    <div>
    
      <Router>
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exacte path="/home" component={App2} />
          <Route exact path="/signup" component={StepForm} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
      </Router>

      <Footer />
    </div>
  );
};

export default App;
