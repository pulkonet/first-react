import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';



class QRBoard extends Component{
    render (){
    let image = {
      uri: '', //to be uniquely generated at payment
      altQR: 'someshit' //to be uniquely generated at payment
    }
    
    let user = {
      username: 'Some name'
    }

    return (
      <div>
        <h1>{user.username}</h1>
      </div>
    )
  }
}



class App extends Component {
  
  
  render() {
    let user = {
    firstname: 'Pulkit',
    last: 'Gupta'
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to TEDx</h2>
        </div>
                  <QRBoard />
      </div>
    );
  }
}

export default App;
