import React, { Component } from 'react';
import './App.css';

import Maplace from './lib/Maplace';
import Location from './lib/Location';

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
            {
              //<{Marker|Circle|Polyline|Polygon|Fusion|Direction}>
              //</Type>
            }
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
