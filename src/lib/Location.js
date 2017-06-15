import { Component } from 'react';
import PropTypes from 'prop-types';


/**
 * Location component
 */
class Location extends Component {

  /**
   * Render the component.
   * @returns {JSX}
   */
  render() {
    return null;
  }
}


Location.propTypes = {
  lat: PropTypes.number.isRequired,
  lon: PropTypes.number.isRequired,
  title: PropTypes.string,
  html: PropTypes.string,
  infoWindowMaxWidth: PropTypes.number,
  icon: PropTypes.string,
  zoom: PropTypes.number,
  show_infowindow: PropTypes.bool,
  visible: PropTypes.bool,
  animation: PropTypes.object,
  stopover: PropTypes.bool,
  stroke_options: PropTypes.object,
  circle_options: PropTypes.object,
};


Location.defaultProps = {};


export default Location;
