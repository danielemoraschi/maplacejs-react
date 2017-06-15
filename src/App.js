import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Maplace from './lib/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Maplace
            class_name='map'
            map_div='#gmap'
            show_markers={true}
            locations={[{
                lat: 45.9,
                lon: 10.9,
                zoom: 8
            }]}
          />
        </div>
        <p className="App-intro">
          MaplaceJs / React
        </p>
      </div>
    );
  }
}

export default App;
