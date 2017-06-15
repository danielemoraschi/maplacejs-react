import React from 'react';
import PropTypes from 'prop-types';
import MaplaceLib from 'maplace-js';


class Maplace extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.maplace = new MaplaceLib();
  }

  render() {
    return (
      <div
        className={this.props.class_name}
        id={this.props.map_div.replace(/#|\./g, '')}
      >
      </div>
    );
  }

  componentDidMount() {
    this.maplace.Load(this.props);
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
  type: PropTypes.oneOf(['marker', 'circle', 'polyline', 'polygon', 'directions', 'fusion']),
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

Maplace.defaultProps = {
  class_name: 'map',
  debug: false,
  map_div: 'gmap',
  controls_div: 'controls',
  generate_controls: true,
  controls_type: 'dropdown',
  controls_cssclass: '',
  controls_title: '',
  controls_on_map: true,
  controls_applycss: true,
  controls_position: 7,
  type: 'marker',
  view_all: true,
  view_all_text: 'View All',
  pan_on_click: true,
  start: 0,
  locations: [],
  shared: {},
  map_options: {
      mapTypeId: 'roadmap',
  },
  stroke_options: {
      strokeColor: '#0000FF',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#0000FF',
      fillOpacity: 0.4,
  },
  directions_options: {
      travelMode: 'DRIVING',
      unitSystem: 0,
      optimizeWaypoints: false,
      provideRouteAlternatives: false,
      avoidHighways: false,
      avoidTolls: false,
  },
  circle_options: {
      radius: 100,
      visible: true,
  },
  styles: {},
  fusion_options: {},
  directions_panel: null,
  draggable: false,
  editable: false,
  show_infowindows: true,
  show_markers: true,
  infowindow_type: 'bubble',
  listeners: {},

  //events
  beforeViewAll: function() {},
  afterViewAll: function() {},
  beforeShow: function(index, location, marker) {},
  afterShow: function(index, location, marker) {},
  afterCreateMarker: function(index, location, marker) {},

  beforeCloseInfowindow: function(index, location) {},
  afterCloseInfowindow: function(index, location) {},
  beforeOpenInfowindow: function(index, location, marker) {},
  afterOpenInfowindow: function(index, location, marker) {},

  afterRoute: function(distance, status, result) {},
  onPolylineClick: function(obj) {},
  onPolygonClick: function(obj) {},

  circleRadiusChanged: function(index, circle, marker) {},
  circleCenterChanged: function(index, circle, marker) {},

  drag: function(index, location, marker) {},
  dragEnd: function(index, location, marker) {},
  dragStart: function(index, location, marker) {},
};

export default Maplace;
