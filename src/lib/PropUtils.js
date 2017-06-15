/**
 *
 * @returns {{whiteListProps: (function(*=, *))}}
 */
export default (() => {

  /**
   *
   * @param propTypes {{}}
   * @param props
   * @returns {{}}
   */
  const whiteListProps = (propTypes, props) => {
    let propsWhitelisted = {};
    Object.keys(propTypes).forEach(key => {
      props[key] && (propsWhitelisted[key] = props[key]);
    });
    return propsWhitelisted;
  };

  return {
    whiteListProps: whiteListProps,
  }
})();