import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MaplaceLib from 'maplace-js';
import MaplaceTypeChecker from './MaplaceTypeChecker';
import PropUtils from './PropUtils';
import Markers from './Markers';
import Circles from './Circles';
import Polyline from './Polyline';
import Polygon from './Polygon';
import Fusion from './Fusion';
import Directions from './Directions';
import Location from './Location';


/**
 * MaplaceJs React.js component
 */
class Maplace extends Component {

  /**
   *
   * @param props
   */
  constructor(props) {
    super(props);

    this.state = {
      // New "empty" MaplaceJs library instance.
      maplace: this.props.maplace || new MaplaceLib(),

      // Validated props against schema.
      options: {
        ...PropUtils.whiteListProps(
          Maplace.propTypes,
          this.props
        ),
        ...{
          locations: [],
          type: 'marker'
        }
      }
    };
  }

  /**
   * Generates `type`
   * from the children element.
   */
  componentWillMount() {
    if (! this.props.children) {
      return;
    }

    this.setState({
      type: React.Children.map(this.props.children, child => {
        return {
          ...child.props
        }
      })[0].type
    });
  }

  /**
   *
   * @param type string
   * @param locations []
   */
  setLocations(type, locations) {
    this.setState({
      options: {
        ...this.state.options,
        ...{
          type: type,
          locations: locations
        }
      }
    });
  }

  /**
   * Render the component.
   * @returns {JSX}
   */
  render() {
    return (
      <div
        className={this.props.class_name}
        id={this.props.map_div.replace(/#|\./g, '')}
      >
        {this.props.children && React.cloneElement(
          this.props.children,
          {
            setLocations: this.setLocations.bind(this),
          }
        )}
      </div>
    );
  }

  /**
   *
   * Will load MaplaceJs using passed options.
   */
  componentDidUpdate() {
    this.state.maplace.Load({
      ...this.state.options,
    });
  }
}


Maplace.propTypes = {
  maplace: PropTypes.instanceOf(Maplace),
  class_name: PropTypes.string.isRequired,
  children: (props, propName, componentName) => {
    return PropUtils.checkChildrenAgainstTypes(
      props,
      propName,
      componentName,
      [
        Markers,
        Circles,
        Polyline,
        Polygon,
        Fusion,
        Directions
      ]
    );
  },
  locations: PropTypes.shape(Location.propTypes),
  type: PropTypes.oneOf(
    (() => {
      const types = MaplaceTypeChecker.getValidMaplaceTypes();
      return Object.keys(types).map(function(key) {
        return types[key];
      });
    })()
  ),
  map_div: PropTypes.string.isRequired,
  debug: PropTypes.bool,
  controls_div: PropTypes.string,
  generate_controls: PropTypes.bool,
  controls_type: PropTypes.oneOf(['dropdown', 'list']),
  controls_cssclass: PropTypes.string,
  controls_title: PropTypes.string,
  controls_on_map: PropTypes.bool,
  controls_applycss: PropTypes.bool,
  controls_position: PropTypes.number,
  view_all: PropTypes.bool,
  view_all_text: PropTypes.string,
  pan_on_click: PropTypes.bool,
  start: PropTypes.number,
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
  map_div: 'gmap',
};


export default Maplace;
