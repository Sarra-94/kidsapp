import React,{Component} from "react";
import { connect } from "react-redux";
import Cardcomp from '../components/card'
import {geteducationVideos} from '../actions/index'


class  EducationVideos extends Component {
  
  componentDidMount(){
    this.props.geteducationVideos()
  }

render()
{ 
  // console.log(this.props.educationVideos)
  return  (
    <div>
      {this.props.educationVideos.map(el =>
        <Cardcomp card={el}></Cardcomp>
      )}
      
    </div>
  );
};}

const mapStateToProps = state => 
({ educationVideos: state.educationVideos });

export default connect(mapStateToProps, {geteducationVideos})(EducationVideos);
