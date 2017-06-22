import Markers from './Markers';


/**
 * Polyline component
 */
class Polyline extends Markers {

  /**
   *
   * @type {string}
   */
  static TYPE = 'polyline';

  /**
   *
   * @type {{type: (*)}}
   */
  static defaultProps = {
    type: Polyline.TYPE,
  };
}

export default Polyline;
