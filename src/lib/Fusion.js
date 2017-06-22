import Markers from './Markers';


/**
 * Fusion component
 */
class Fusion extends Markers {

  /**
   *
   * @type {string}
   */
  static TYPE = 'fusion';

  /**
   *
   * @type {{type: (*)}}
   */
  static defaultProps = {
    type: Fusion.TYPE,
  };
}

export default Fusion;
