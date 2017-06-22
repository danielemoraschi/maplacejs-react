import Markers from './Markers';


/**
 * Polygon component
 */
class Polygon extends Markers {

  /**
   *
   * @type {string}
   */
  static TYPE = 'polygon';

  /**
   *
   * @type {{type: (*)}}
   */
  static defaultProps = {
    type: Polygon.TYPE,
  };
}

export default Polygon;
