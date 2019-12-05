import React, { Component } from "react";
import slide1 from "../../assets/home/slide1.png";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import recommandation from "../../assets/home/recommandation.png";
import itkids from "../../assets/home/itkids.jpg";
import fleche from "../../assets/home/fleche.jpeg";
import news from "../../assets/home/news.jpg";
import cst from "../../assets/home/cst.jpg";
import disney from "../../assets/home/disney.jpg";
import recette from "../../assets/home/recette.jpg";
import creation from "../../assets/home/creation.png";
import "./home.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class Homeuser extends Component {
  render() {
    return (
      <div className="homepage">

        <div id="carousel" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target=".carousel" data-slide-to="0"></li>
            <li data-target=".carousel" data-slide-to="1"></li>
            <li data-target=".carousel" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-50 h-15" src={slide1} alt="slide1" />
              <div class="carousel-caption">
                <h2>
                  VIVEZ AU QUOTIDIEN LES ACTUALITE DE VOS ENFANTS AVEC{" "}
                  <span style={{ color: "#E91E63" }}>3ALLAMNI</span>
                </h2>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-50 h-15" src={slide2} alt="slide2" />
              <div class="carousel-caption">
                <h2 style={{ color: "#fff" }}>SURFER EN TOUTE SECURITE</h2>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-50 h-20" src={slide4} alt="slide3" />
              <div class="carousel-caption">
                <h2>
                  C'EST PLUS FACILE AVEC{" "}
                  <span style={{ color: "#E91E63" }}>3ALLAMNI</span>
                </h2>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carousel" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#carousel" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>
        {/* <div className="textpresentation">
          <p className="allamnidescription">
            <span>3LAMNY </span>
            est une plateforme éducative tunisienne pour vos enfants,
          </p>
          <img src={slide3} />
        </div> */}
        <div className="news">
          <div className="idee">
            <div className="textenews">
              <div>
                <img
                  src={recette}
                  style={{ width: "250px", height: "350px" }}
                />
              </div>

              <h6>Idée recette saine </h6>
            </div>
            <div className="textenews">
              <img src={creation} style={{ width: "250px", height: "350px" }} />
              <h6>Idée creation pour enfant</h6>
            </div>
          </div>
          <div className="partienews">
            <img className="newimage" src={news} />
            <div className="sousnews">
              <img src={cst} className="imagesct" />
              <h6>Mois 10-2019</h6>
              <p className="descriptionsct">
                20-10-2019 | La Robotique à la Cité des Sciences
              </p>
            </div>
            <div className="sousnews">
              <img src={disney} className="imagesct" />
              <h6>Mois 11-2019</h6>
              <p className="descriptionsct">
                30-11-2019 | Disney:Festival de Tunis
              </p>
            </div>
            <div className="sousnews">
              <img src={disney} className="imagesct" />
              <h6>Mois 12-2019</h6>
              <p className="descriptionsct">
                15-12-2019 | Cigognes et companie,Miss Peregrine et les enfants
                particuliers,Trolls
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homeuser;
