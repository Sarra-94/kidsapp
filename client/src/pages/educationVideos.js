import React, { Component } from 'react';
import { connect } from "react-redux";
import {geteducationVideos} from '../actions/index'
class EducationVideos extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        this.props.geteducationVideos()
    }
    render() { 
        return ( <div>
            Hi
        </div> );
    }
}
 
export default connect (null,geteducationVideos)(EducationVideos);