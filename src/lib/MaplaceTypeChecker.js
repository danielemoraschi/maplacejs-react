import React from 'react';

/**
 *
 */
export default (() => {

  /**
   *
   * @returns {{Circles: string, Directions: string, Fusion: string, Polygon: string, Polyline: string, Markers: string}}
   */
  const getValidMaplaceTypes = () => {
    return {
      'Circles': 'circle',
      'Directions': 'directions',
      'Fusion': 'fusion',
      'Polygon': 'polygon',
      'Polyline': 'polyline',
      'Markers': 'marker',
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
    getValidMaplaceTypes: getValidMaplaceTypes,
    mapMaplaceValidTypes: mapMaplaceValidTypes,
    isValidMaplaceType: isValidMaplaceType,
  }
})();