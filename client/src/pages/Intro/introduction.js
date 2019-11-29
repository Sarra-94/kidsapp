import React from "react";
import "./introduction.css";
import { Link } from "react-router-dom";
import logo from "../../assets/home/logo.png";
import homeback1 from "../../assets/home/homeback1.jpeg";
import homecarousel1 from "../../assets/home/homecarousel1.jpeg";
import homeplaying from "../../assets/home/homeplaying.jpg";
import homereading from "../../assets/home/homereading.jpg";
import homereading2 from "../../assets/home/homereading2.jpg";
import ABC from "../../assets/intro/ABC.png"

function App() {
  return (
    <div className="App">
      <div className="bgimg-1">
        <div className="auth ml-2">
          <img
            src={logo}
            alt="logo"
            width="135px"
            height="115px"
            className="mt-2 ml-2"
          />
          <div className="m-2">
            <button
              className="btn btn-outline-primary m-3 p-3"
              style={{ width: "120px" }}
            >
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "white" }}
              >
                Inscription
              </Link>
            </button>
            <button
              className="btn btn-outline-primary m-3 mr-5 p-3"
              style={{ width: "120px" }}
            >
              <Link
                to="/signin"
                style={{ textDecoration: "none", color: "white" }}
              >
             Connexion
              </Link>
            </button>
          </div>
          <div className="caption"  
            style={{
              backgroundColor: "transparent",
              fontSize: "25px",
              fontWeight: "Bold",
              textShadow:
                "1px 1px 2px black, 0 0 250px #b67338, 0 0 5px darkblue",
              color: "white"
            }}>
          <span className="border"> {"Vos enfants sur Internet en toute sécurité".toUpperCase()}</span>
        </div>
        </div>
       
      </div>

      <div
        style={{
          color: "#777",
          backgroundColor: "white",
          padding: "50px 80px",
          textAlign: "justify"
        }}
      >
        <h3
          style={{
            textAlign: "center",
            fontWeight: "Bold",
            textShadow: "1px 1px 2px black, 0 0 10px #b67338, 0 0 5px darkblue",
            color: "white",
            margin:'1% 10%'
          }}
        >
          Notre vision est d'etre la source pour l'apprentissage des enfants sur internet
        </h3>
        <div className="d-flex justify-content-center flex-wrap">
          <figure className="snip1307">
            <img src={homeplaying} alt="sample52" />
            <img src={homeback1} alt="sample52" />
            <figcaption>
              <h3 style={{ fontWeight:'bold', color:'#ffffff'}}>
                Education
              </h3>
              <p>
              les enfants apprennent en jouant. Ne s'ennuient jamais
              </p>
            </figcaption>
          </figure>
          <figure className="snip1307">
            <img src={homecarousel1} alt="sample52" />
            <img src={homeplaying} alt="sample52" />
            <figcaption>
              <h3 style={{ fontWeight:'bold', color:'#ffffff'}}>
                S'amuser
              </h3>
              <p>
                If we wanted more leisure, we'd invent machines that do things
                less efficiently.
              </p>
            </figcaption>
          </figure>
          <figure className="snip1307">
            <img src={homereading} alt="sample52" />
            <figcaption>
              <h3 style={{ fontWeight:'bold', color:'#ffffff'}}>
                Lire un Livre
              </h3>
              <p>
                Un livre est un ami qui nous parle tout bas.
              </p>
            </figcaption>
            <img src={homereading2} alt="sample52" />
         

          </figure>
        </div>
      </div>

      <div className="bgimg-2">
        <div className="caption">
          <span
            className="border"
            style={{
              backgroundColor: "transparent",
              fontSize: "25px",
              fontWeight: "Bold",
              textShadow:
                "1px 1px 2px black, 0 0 250px #b67338, 0 0 5px darkblue",
              color: "white"
            }}
          >
            {"Learn & Learn".toUpperCase()}
          </span>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div
          style={{
            color: "#ddd",
            backgroundColor: "white",
            padding: "50px 80px",
            textAlign: " justify"
          }}
        >
          <div className="d-flex justify-content-center flex-wrap">
            <figure className="snip1563">
              <img
                src= {homereading}
                alt="sample110"
                style={{ width:'100%', height:'100%'}}
              />
              <figcaption>
                <h3>Samuel Serif</h3>
                <p>
                  The only skills I have the patience to learn are those that
                  have no real application in life.
                </p>
              </figcaption>
            </figure>
            <figure className="snip1563 ">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample86.jpg"
                alt="sample86"
              />
              <figcaption>
                <h3>Abraham Pigeon</h3>
                <p>
                  The real fun of living wisely is that you get to be smug about
                  it.
                </p>
              </figcaption>
            </figure>
            <figure className="snip1563">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample59.jpg"
                alt="sample59"
              />
              <figcaption>
                <h3>Fletch Skinner</h3>
                <p>
                  But Calvin is no kind and loving god! He's one of the old
                  gods! He demands sacrifice!
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div className="bgimg-1">
     
      </div>
    </div>
  );
}

export default App;
