import React, { Component } from "react";
import { connect } from "react-redux";
import Cardcomp from "../../components/card";
import { getMovie } from "../../actions/index";
import "./movie.css";

class Movie extends Component {

  componentDidMount() {
    this.props.getMovie();
  }

  render() {
    return (
      <div className="cards">
        {this.props.movie.map(el => (
          <Cardcomp key={el._id} card={el}></Cardcomp>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({ movie: state.movie });

export default connect(mapStateToProps, { getMovie })(Movie);
