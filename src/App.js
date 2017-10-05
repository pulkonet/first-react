import React, {Component} from 'react';
import logo from './logo.png';
import './App.css';
import qr from './qr.jpg'

class PreviousNotes extends Component {
  render() {

    return (
      <div></div>
    )
  } 
}

class App extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Place the text here" id="clipholder"></input>
        <PreviousNotes/>
      </div>
    )
  }
}

export default App;
