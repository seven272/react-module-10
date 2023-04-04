import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';

const Container = ({className, children, ...attrs}) => {
  const classes = classNames("ui-container",
    className
  )
  return (
      <div className={classes} {...attrs}>
       {children}
      </div>
    );
}

Container.propTypes = {
  className: propTypes.string,
  children: propTypes.node.isRequired
}

Container.defaultProps = {
  className: '',
  // children: null
}

export default Container;