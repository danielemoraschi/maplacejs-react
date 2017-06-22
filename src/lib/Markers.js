import React, { Component } from 'react';
import Maplace from './Maplace';
import PropUtils from './PropUtils';
import Location from './Location';
import MarkedLocation from './MarkedLocation';
import CircledLocation from './CircledLocation';


/**
 * Markers component
 */
class Markers extends Component {

  /**
   *
   * @type {string}
   */
  static TYPE = 'marker';

  /**
   *
   * @param props
   */
  constructor(props) {
    super(props);
    this.extraProps = {};
  }

  /**
   *
   * @type {{type: ((p1:*, p2:*, p3?:*)), children: ((p1?:*, p2?:*, p3?:*))}}
   */
  static propTypes = {
    type: (props, propName, componentName) => {
      if(Maplace.isValidMaplaceType(componentName, props.type)) {
        return null
      }
      return new Error('Invalid type `' + props.type + '`');
    },
    children: (props, propName, componentName) => {
      return PropUtils.checkChildrenAgainstTypes(
        props,
        propName,
        componentName,
        [
          Location,
          MarkedLocation,
          CircledLocation
        ]
      );
    },
  };

  /**
   *
   * @type {{type: (*)}}
   */
  static defaultProps = {
    type: Markers.TYPE,
  };

  /**
   * Generates the array of locations
   * from the children elements.
   */
  componentWillMount() {
    // Generate `locations` array from children elements.
    let locationsGeneratedViaChildren =
      React.Children.map(this.props.children, child => {
        return {
          ...child.props,
          ...(this.extraProps ? this.extraProps : {})
        }
      });

    this.props.setLocations(
      this.TYPE,
      locationsGeneratedViaChildren
    );
  }

  /**
   * Render the component.
   * @returns {JSX}
   */
  render() {
    return null;
  }
}


export default Markers;
