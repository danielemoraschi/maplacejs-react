import Markers from './Markers';


/**
 * Directions component
 */
class Directions extends Markers {

  /**
   *
   * @type {string}
   */
  static TYPE = 'directions';

  /**
   *
   * @type {{type: (*)}}
   */
  static defaultProps = {
    type: Directions.TYPE,
  };
}

export default Directions;
