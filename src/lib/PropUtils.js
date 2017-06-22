import React from 'react';

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

  /**
   *
   * @param props
   * @param propName
   * @param componentName
   * @param componentTypesToCheck
   * @returns {*}
   */
  const checkChildrenAgainstTypes =
      (props, propName, componentName, componentTypesToCheck) => {
    const prop = props[propName];
    let errors = [];

    React.Children.forEach(prop, function (child) {
      componentTypesToCheck.forEach((component) => {
        if (child.type !== component) {
          errors.push(new Error(
            '`' + componentName +
            '` children should be of type `' + component + '`.'
          ));
        }
      });
    });

    if(errors.length
      && errors.length / prop.length === componentTypesToCheck.length) {
      return errors[0];
    }
  };


  return {
    whiteListProps: whiteListProps,
    checkChildrenAgainstTypes: checkChildrenAgainstTypes,
  }
})();