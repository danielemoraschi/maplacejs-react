import Markers from './Markers';


/**
 * Circles component
 */
class Circles extends Markers {

  /**
   *
   * @type {string}
   */
  static TYPE = 'circle';

  /**
   *
   * @param props
   */
  constructor(props) {
    super(props);
    this.extraProps = {
      type: Circles.TYPE,
    };
  }

  /**
   *
   * @type {{type: (*)}}
   */
  static defaultProps = {
    type: Circles.TYPE,
  };
}

export default Circles;
