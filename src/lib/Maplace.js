import React, { Component } from 'react';
import MaplaceLib from 'maplace-js';
import MaplaceValidator from './MaplaceValidator';
import PropUtils from './PropUtils';
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
   *
   * @type {{maplace: *, class_name: *, children: ((p1?:*, p2?:*, p3?:*)), locations: *, type: *, map_div: *, debug: *, controls_div: *, generate_controls: *, controls_type: *, controls_cssclass: *, controls_title: *, controls_on_map: *, controls_applycss: *, controls_position: *, view_all: *, view_all_text: *, pan_on_click: *, start: *, shared: *, map_options: *, stroke_options: *, directions_options: *, circle_options: *, styles: *, fusion_options: *, directions_panel: *, draggable: *, editable: *, show_infowindows: *, show_markers: *, infowindow_type: *, listeners: *, beforeViewAll: *, afterViewAll: *, beforeShow: *, afterShow: *, afterCreateMarker: *, beforeCloseInfowindow: *, afterCloseInfowindow: *, beforeOpenInfowindow: *, afterOpenInfowindow: *, afterRoute: *, onPolylineClick: *, onPolygonClick: *, circleRadiusChanged: *, circleCenterChanged: *, drag: *, dragEnd: *, dragStart: *}}
   */
  static propTypes = MaplaceValidator.getMaplacePropTypes(
    Maplace,
    Location
  );

  /**
   *
   * @type {{class_name: string, map_div: string}}
   */
  static defaultProps = {
    class_name: 'map',
    map_div: 'gmap',
  };

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


export default Maplace;
