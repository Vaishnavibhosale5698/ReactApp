import React, { Component } from 'react';
import '../Component/App.scss';
import ResponsiveDrawer from './TemporaryDrawer'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      date: new Date(),
    }
  }
  
  onChange = date => this.setState({ date })
  
 render(){
  return (
    <div className="App">
      {/* <DashBoard/> */}
    <ResponsiveDrawer/>

    {/* <NotesContainer/> */}

    {/* <Abc/> */}
    </div>
  );
 } 
}

export default App;


// import React, { Component } from 'react'
// import logo from './logo.svg'
// import './App.css'
// import LoginComponent from './LoginCompoenet'
// import { BrowserRouter as Router, Route, } from 'react-router-dom'
// import Chat from './Chat'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         {/* <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header> */}
//         {/* <Chat /> */}
//   <Router >
// <div>
// <Route path="/login" component={LoginComponent}/>
// <Route path="/chat" component={Chat}/>
// {/* <Route path="/forgetpassword" component={forpassword}/>
// <Route path="/dashboard" component={Dash}/>
// <Route path='/resetpassword' component={Resetpassword}/> */}
// </div>
// </Router>
//         {/* <LoginComponent/> */}
//       </div>
//     )
//   }
// }

// export default App
