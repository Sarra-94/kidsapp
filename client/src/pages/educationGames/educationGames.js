import React, { Component } from "react";
import { connect } from "react-redux";
import Cardgame from "../../components/cardGames";
import { geteducationGames } from "../../actions";
import './educationGames.css'

class EducationGames extends Component {
  componentDidMount() {
      console.log("working");
    this.props.geteducationGames();
    
  }

  render() {
    return (
      <div className="cardsGames">
        {this.props.educationGames.map(el => (
          <Cardgame key={el._id} card={el}></Cardgame>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({ educationGames: state.educationGames });

export default connect(mapStateToProps, { geteducationGames })(EducationGames);
