import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MaplaceLib from 'maplace-js';


/**
 * New "empty" MaplaceJs library isntance.
 */
const maplaceLib = new MaplaceLib();


/**
 * MaplaceJs React.js component
 */
class Maplace extends Component {

  /**
   * Render the component.
   * @returns {XML}
   */
  render() {
    return (
      <div
        className={this.props.class_name}
        id={this.props.map_div.replace(/#|\./g, '')}
      >
      </div>
    );
  }

  /**
   * Called after the component is mounted in the DOM.
   * Will load MaplaceJs using defined parameters.
   */
  componentDidMount() {
    maplaceLib.Load(this.props);
  }
}


Maplace.propTypes = {
  class_name: PropTypes.string,
  debug: PropTypes.bool,
  map_div: PropTypes.string,
  controls_div: PropTypes.string,
  generate_controls: PropTypes.bool,
  controls_type: PropTypes.oneOf(['dropdown', 'list']),
  controls_cssclass: PropTypes.string,
  controls_title: PropTypes.string,
  controls_on_map: PropTypes.bool,
  controls_applycss: PropTypes.bool,
  controls_position: PropTypes.number,
  type: PropTypes.oneOf(
    ['marker', 'circle', 'polyline', 'polygon', 'directions', 'fusion']),
  view_all: PropTypes.bool,
  view_all_text: PropTypes.string,
  pan_on_click: PropTypes.bool,
  start: PropTypes.number,
  locations: PropTypes.array,
  shared: PropTypes.object,
  map_options: PropTypes.object,
  stroke_options: PropTypes.shape({
    strokeColor: PropTypes.string,
    strokeOpacity: PropTypes.number,
    strokeWeight: PropTypes.number,
    fillColor: PropTypes.string,
    fillOpacity: PropTypes.number,
  }),
  directions_options: PropTypes.shape({
    travelMode: PropTypes.string,
    unitSystem: PropTypes.number,
    optimizeWaypoints: PropTypes.bool,
    provideRouteAlternatives: PropTypes.bool,
    avoidHighways: PropTypes.bool,
    avoidTolls: PropTypes.bool,
  }),
  circle_options: PropTypes.shape({
    radius: PropTypes.number,
    visible: PropTypes.bool,
  }),
  styles: PropTypes.object,
  fusion_options: PropTypes.object,
  directions_panel: PropTypes.string,
  draggable: PropTypes.bool,
  editable: PropTypes.bool,
  show_infowindows: PropTypes.bool,
  show_markers: PropTypes.bool,
  infowindow_type: PropTypes.oneOf(['bubble']),
  listeners: PropTypes.object,

  //events
  beforeViewAll: PropTypes.func,
  afterViewAll: PropTypes.func,
  beforeShow: PropTypes.func,
  afterShow: PropTypes.func,
  afterCreateMarker: PropTypes.func,

  beforeCloseInfowindow: PropTypes.func,
  afterCloseInfowindow: PropTypes.func,
  beforeOpenInfowindow: PropTypes.func,
  afterOpenInfowindow: PropTypes.func,

  afterRoute: PropTypes.func,
  onPolylineClick: PropTypes.func,
  onPolygonClick: PropTypes.func,

  circleRadiusChanged: PropTypes.func,
  circleCenterChanged: PropTypes.func,

  drag: PropTypes.func,
  dragEnd: PropTypes.func,
  dragStart: PropTypes.func,
};


Maplace.defaultProps = {};


export default Maplace;