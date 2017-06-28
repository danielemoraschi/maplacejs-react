import React from 'react';
import MaplaceValidator from './../MaplaceValidator';


test('Valid MaplaceValidator types for the `type` parameter', () => {
  //Valid Maplace type list
  let maplaceValidTypes = MaplaceValidator.getValidMaplaceTypes();
  expect(maplaceValidTypes).toEqual({
    'Circles': 'circle',
    'Directions': 'directions',
    'Fusion': 'fusion',
    'Polygon': 'polygon',
    'Polyline': 'polyline',
    'Markers': 'marker',
    'default': 'marker',
  });

  //Valid types
  expect(MaplaceValidator.mapMaplaceValidTypes('Circles')).toBe('circle');
  expect(MaplaceValidator.mapMaplaceValidTypes('Directions')).toBe('directions');
  expect(MaplaceValidator.mapMaplaceValidTypes('Fusion')).toBe('fusion');
  expect(MaplaceValidator.mapMaplaceValidTypes('Polygon')).toBe('polygon');
  expect(MaplaceValidator.mapMaplaceValidTypes('Polyline')).toBe('polyline');
  expect(MaplaceValidator.mapMaplaceValidTypes('Markers')).toBe('marker');
  expect(MaplaceValidator.mapMaplaceValidTypes('default')).toBe('marker');

  //Invalid types
  expect(MaplaceValidator.mapMaplaceValidTypes('invalid')).toBe('marker');
});