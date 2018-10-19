import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './Header/Header';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <Header/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
