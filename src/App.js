import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Pickers from './Pickers';
import Boutton from './components/Boutton';



class App extends Component {


  render(){

    return (
      <div className="Container">
        <Boutton />
      </div>
    );
  }
  
}

export default App;
