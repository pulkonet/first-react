import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import qr from './qr.jpg'



class QRBoard extends Component{
    render (){
    let image = {
      uri: '../src/qr.jpg', //to be uniquely generated at payment
      altQR: 'someshit' //to be uniquely generated at payment
    }
    
    let user = {
      username: 'username'
    }

    return (
      <div>
        <h1>Welcome, {user.username}!</h1>
        <h2>Your unique QR code is</h2>
        <img src={qr} alt={image.altQR}/>
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
          <h2>Welcome to TEDx IIT Roorkee</h2>
        </div>
                  <QRBoard />
      </div>
    );
  }
}

export default App;
