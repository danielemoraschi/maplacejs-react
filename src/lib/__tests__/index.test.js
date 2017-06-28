import CircledLocation from '../CircledLocation';
import Circles from '../Circles';
import Directions from '../Directions';
import Fusion from '../Fusion';
import Location from '../Location';
import Maplace from '../Maplace';
import MaplaceTypeChecker from '../MaplaceTypeChecker';
import MarkedLocation from '../MarkedLocation';
import Markers from '../Markers';
import Polygon from '../Polygon';
import Polyline from '../Polyline';
import PropUtils from '../PropUtils';


describe(`index`, () => {
  it(`should be exported`, () => {
    expect(CircledLocation).toBeDefined();
    expect(Circles).toBeDefined();
    expect(Directions).toBeDefined();
    expect(Fusion).toBeDefined();
    expect(Location).toBeDefined();
    expect(Maplace).toBeDefined();
    expect(MaplaceTypeChecker).toBeDefined();
    expect(MarkedLocation).toBeDefined();
    expect(Markers).toBeDefined();
    expect(Polygon).toBeDefined();
    expect(Polyline).toBeDefined();
    expect(PropUtils).toBeDefined();
  });
});