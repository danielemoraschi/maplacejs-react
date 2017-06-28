import React from 'react';
import MaplaceTypeChecker from './../MaplaceTypeChecker';


test('Valid MaplaceTypeChecker types for the `type` parameter', () => {
  //Valid Maplace type list
  let maplaceValidTypes = MaplaceTypeChecker.getValidMaplaceTypes();
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
  expect(MaplaceTypeChecker.mapMaplaceValidTypes('Circles')).toBe('circle');
  expect(MaplaceTypeChecker.mapMaplaceValidTypes('Directions')).toBe('directions');
  expect(MaplaceTypeChecker.mapMaplaceValidTypes('Fusion')).toBe('fusion');
  expect(MaplaceTypeChecker.mapMaplaceValidTypes('Polygon')).toBe('polygon');
  expect(MaplaceTypeChecker.mapMaplaceValidTypes('Polyline')).toBe('polyline');
  expect(MaplaceTypeChecker.mapMaplaceValidTypes('Markers')).toBe('marker');
  expect(MaplaceTypeChecker.mapMaplaceValidTypes('default')).toBe('marker');

  //Invalid types
  expect(MaplaceTypeChecker.mapMaplaceValidTypes('invalid')).toBe('marker');
});