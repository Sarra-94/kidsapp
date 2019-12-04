import React, { Component } from "react";
import { Link } from "react-router-dom";
import parent from "../assets/intro/parent.svg";
import child from "../assets/intro/child.svg";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            <button className="btn btn-outline-primary m-3 p-3" href="#">
              Home
            </button>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Education
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link
                    to="/home/edVideo"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <button class="dropdown-item">Video Education</button>
                  </Link>
                  <Link
                    to="/home/edGames"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <button class="dropdown-item">Games Education</button>
                  </Link>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Entertaiment
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                 <Link
                    to="/home/movie"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <button class="dropdown-item">watch movie</button>
                  </Link>
                  <Link
                    to="/home/game"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <button class="dropdown-item">Play games</button>
                  </Link>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Books
                </a>

                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link
                    to="/home/readingbooks"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <button class="dropdown-item">Read Books</button>
                  </Link>
               <Link
                    to="/home/listen"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <button class="dropdown-item">Listen book</button>
                  </Link>
                </div>
              </li>
           
            </ul>
          </div>

          <div class="form-inline my-2 my-lg-0">
            <div className="authentification">
              <div className="parentsection">
                <img class="parent" src={parent} style={{ width: "30px" }} />
                <span>xxxx yyyy</span>
                <div class="dropdown">
                  <a
                    class="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></a>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" href="#">
                      Setting
                    </a>
                    <a class="dropdown-item" href="#">
                      Premium
                    </a>
                    <Link to='/'   style={{ textDecoration: "none", color: "white" }}>
                    <a class="dropdown-item" href="#">
                      Log out
                    </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="parentsection child">
                <img class="child" src={child} style={{ width: "40px" }} />
                <span>Enfant </span>
                <div class="dropdown">
                  <a
                    class="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></a>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" href="#">
                      Enfant 1
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <button type="button" class="btn btn-labeled btn-default">
                  <span>
                    <i class="fad fa-user-plus"></i> Ajouter
                  </span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
