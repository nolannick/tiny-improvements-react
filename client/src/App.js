import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Modal from './components/modal'
import './css/style.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Modal />
      </div>
    );
  }
}

export default App;
