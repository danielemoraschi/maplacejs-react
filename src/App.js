import React, { Component } from 'react';
import './App.css';

import Maplace from './lib/Maplace';
import Markers from './lib/Markers';
import Circles from './lib/Circles';
import Directions from './lib/Directions';
import Polygon from './lib/Polygon';
import Polyline from './lib/Polyline';
import Fusion from './lib/Fusion';
import Location from './lib/Location';
import CircledLocation from './lib/CircledLocation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Maplace
            class_name='map'
            map_div='#gmap'
            show_markers={true}
          >
            <Circles>
              <Location
                title="One"
                lat={45.9}
                lon={10.9}
              />
              <Location
                title="Two"
                lat={46.9}
                lon={11.9}
              />
              <Location
                title="Three"
                lat={46.9}
                lon={10.9}
              />
              <CircledLocation
                title="One"
                lat={45.9}
                lon={11.9}
              />
            </Circles>
          </Maplace>
        </div>
        <p className="App-intro">
          MaplaceJs / React
        </p>
      </div>
    );
  }
}

export default App;
