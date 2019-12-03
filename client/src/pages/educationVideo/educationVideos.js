import React, { Component } from "react";
import { connect } from "react-redux";
import Cardcomp from "../../components/card";
import { geteducationVideos } from "../../actions/index";
import "./educationVideo.css";
import ReactDOM from "react-dom";

import { MultiSelect } from "@progress/kendo-react-dropdowns";

class EducationVideos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      langue: ["choisir la langue", "français", "anglais", "arabe"],
      valuelangue: "choisir la langue",
      isloading: true
    };
  }

  componentDidMount() {
    this.props.geteducationVideos();
  }
  render() {
    return (
      <div className="pageeducation">
        <select
          placeHolder="choisir la langue"
          onChange={e => this.setState({ valuelangue: e.target.value })}
          style={{ width: "20%" }}
        >
          {this.state.langue.map(el => (
            <option value={el}>{el}</option>
          ))}
        </select>
        { !this.props.educationVideos? 'is Loading':
        <div className="cards">
          {this.state.valuelangue === "choisir la langue"
            ? this.props.educationVideos && this.props.educationVideos.map(el => (
                <Cardcomp key={el._id} card={el}></Cardcomp>
              ))
            : this.props.educationVideos
                .filter(el => el.lang === this.state.valuelangue)
                .map(el => <Cardcomp key={el._id} card={el}></Cardcomp>)}
        </div>}
      </div>
    );
  }
}

const mapStateToProps = state => ({ educationVideos: state.educationVideos });

export default connect(mapStateToProps, { geteducationVideos })(
  EducationVideos
);
