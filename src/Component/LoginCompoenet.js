import React, { Component } from 'react';
import axios from 'axios';

class LoginComponent extends Component {
    callAPI = () =>{
        var data={
            "email":"sachin@gmail.com",
            "password":"123456"
            }
        axios.post(`http://192.168.0.251:3000/login`,data)
      .then(res => {
       console.log('response',res)
      })   
      
      this.props.history.push("/chat")
    }
  render() {
    return (
     <div style={{height : '100%',width : '100%',backgroundColor:'',display:'flex',justifyContent:'center'}}>
      <div style ={{backgroundColor :'pink',margin : 10, width : '50%',display :'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',border: '1px solid black'}}> 
         <div style={{fontSize:25}}>LOGIN PAGE</div> 
        <div style={{margin : 10}}>Email : <input type="email" id="first" placeholder="Email"/></div> 
          
        <div style ={{margin :10}}>Password : <input type="password" id="password" placeholder="Password"/></div>

        <div style={{width : 100}}>
        <button id="submit"
        onClick = {this.callAPI}>Submit</button>
        </div>
    </div>
    </div>
    );
  }
}

export default LoginComponent;
