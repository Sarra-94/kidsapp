import React, { Component } from 'react';
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import { Modal, Button } from 'antd';

class Signup extends React.Component {
  state = { visible: false };

//   showModal = () => {
//     this.setState({
//       visible: true,
//     });
//   };

//   handleOk = e => {
//     console.log(e);
//     this.setState({
//       visible: false, name:'',password:'',email:'' 
//     });
//   };

//   handleCancel = e => {
//     console.log(e);
//     this.setState({
//       visible: false,
//     });
//   };
   handleChange=(e)=>{
      this.setState({[e.target.name]:e.target.value})
  }
    signin=()=>{

        axios.post('/user/login',this.state).then(res=>{
            if(res.data.token){
                    localStorage.setItem('token',res.data.token)
                    this.props.history.push('/movie')
            }
        

            else
            alert('error')
        })
    }
// localStorage.getItem('token') // decodage
  render() {
    return (
  <div>
        <Button type="primary" onClick={this.showModal}>
          sign in
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.signin}
          onCancel={this.handleCancel}
        >
        <div style={{display:'flex', flexDirection:'column'}}>
        <input placeholder='email' style={{margin:'2%'}} value={this.state.email} name='email' onChange={this.handleChange}/>
        <input placeholder='password' style={{margin:'2%'}} value={this.state.password} name='password'  onChange={this.handleChange}/>
</div>
        </Modal>
      </div>
        );
  }
}

export default withRouter(Signup)