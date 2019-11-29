import React, { Component } from "react";
import { connect } from "react-redux";
import Cardcomp from "../../components/card";
import { geteducationVideos } from "../../actions/index";
import "./educationVideo.css";

class EducationVideos extends Component {
  componentDidMount(){
    this.props.geteducationVideos();
  }
  render() {
    return (
      <div className="cards">
        {this.props.educationVideos.map(el => (
          <Cardcomp key={el._id} card={el}></Cardcomp>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({ educationVideos: state.educationVideos });

export default connect(mapStateToProps, { geteducationVideos })(
  EducationVideos
);
