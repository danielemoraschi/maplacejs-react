/* global google */
import React from 'react';
import renderer from 'react-test-renderer';
import Maplace from './../Maplace';


test('Valid Maplace types for the `type` parameter', () => {
  //Valid Maplace type list
  let maplaceValidTypes = Maplace.getValidMaplaceTypes();
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
  expect(Maplace.mapMaplaceValidTypes('Circles')).toBe('circle');
  expect(Maplace.mapMaplaceValidTypes('Directions')).toBe('directions');
  expect(Maplace.mapMaplaceValidTypes('Fusion')).toBe('fusion');
  expect(Maplace.mapMaplaceValidTypes('Polygon')).toBe('polygon');
  expect(Maplace.mapMaplaceValidTypes('Polyline')).toBe('polyline');
  expect(Maplace.mapMaplaceValidTypes('Markers')).toBe('marker');
  expect(Maplace.mapMaplaceValidTypes('default')).toBe('marker');

  //Invalid types
  expect(Maplace.mapMaplaceValidTypes('invalid')).toBe('marker');
});

test('Valid Maplace', () => {
  const component = renderer.create(
    <Maplace
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});