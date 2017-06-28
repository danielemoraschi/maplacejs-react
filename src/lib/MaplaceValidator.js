import React from 'react';
import PropTypes from 'prop-types';
import PropUtils from './PropUtils';

const Markers = 'Markers';
const Circles = 'Circles';
const Polyline = 'Polyline';
const Polygon = 'Polygon';
const Fusion = 'Fusion';
const Directions = 'Directions';
const Location = 'Location';
const MarkedLocation = 'MarkedLocation';
const CircledLocation = 'CircledLocation';

/**
 *
 */
export default (() => {

  /**
   *
   * @param MaplaceComponent
   * @param LocationComponent
   * @returns {{maplace: *, class_name: *, children: (function(*=, *=, *=)), locations: *, type: *, map_div: *, debug: *, controls_div: *, generate_controls: *, controls_type: *, controls_cssclass: *, controls_title: *, controls_on_map: *, controls_applycss: *, controls_position: *, view_all: *, view_all_text: *, pan_on_click: *, start: *, shared: *, map_options: *, stroke_options: *, directions_options: *, circle_options: *, styles: *, fusion_options: *, directions_panel: *, draggable: *, editable: *, show_infowindows: *, show_markers: *, infowindow_type: *, listeners: *, beforeViewAll: *, afterViewAll: *, beforeShow: *, afterShow: *, afterCreateMarker: *, beforeCloseInfowindow: *, afterCloseInfowindow: *, beforeOpenInfowindow: *, afterOpenInfowindow: *, afterRoute: *, onPolylineClick: *, onPolygonClick: *, circleRadiusChanged: *, circleCenterChanged: *, drag: *, dragEnd: *, dragStart: *}}
   */
  const getMaplacePropTypes = (
    MaplaceComponent,
    LocationComponent
  ) => {
    return {
      maplace: PropTypes.instanceOf(MaplaceComponent),
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
      locations: PropTypes.shape(LocationComponent.propTypes),
      type: PropTypes.oneOf(
        (() => {
          const types = getValidMaplaceTypes();
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
  };

  /**
   *
   * @returns {{type: (function(*, *, *=)), children: (function(*=, *=, *=))}}
   */
  const getMarkersTypePropTypes = () => {
    return {
      type: (props, propName, componentName) => {
        if (isValidMaplaceType(componentName, props.type)) {
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
    }
  };

  /**
   *
   * @returns {{Circles: string, Directions: string, Fusion: string, Polygon: string, Polyline: string, Markers: string}}
   */
  const getValidMaplaceTypes = () => {
    return {
      Circles: 'circle',
      Directions: 'directions',
      Fusion: 'fusion',
      Polygon: 'polygon',
      Polyline: 'polyline',
      Markers: 'marker',
      'default': 'marker',
    }
  };

  /**
   *
   * @param componentName string
   * @returns {*}
   */
  const mapMaplaceValidTypes = (componentName) => {
    const validTypes = getValidMaplaceTypes();
    return validTypes[componentName]
      ? validTypes[componentName]
      : validTypes['default'];
  };

  /**
   *
   * @param componentName
   * @param type
   * @returns {boolean}
   */
  const isValidMaplaceType = (componentName, type) => {
    return mapMaplaceValidTypes(componentName) === type;
  };


  return {
    getMaplacePropTypes: getMaplacePropTypes,
    getMarkersTypePropTypes: getMarkersTypePropTypes,
    getValidMaplaceTypes: getValidMaplaceTypes,
    mapMaplaceValidTypes: mapMaplaceValidTypes,
    isValidMaplaceType: isValidMaplaceType,
  }
})();