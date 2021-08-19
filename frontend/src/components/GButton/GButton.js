import React from 'react';
import PropTypes from 'prop-types';
import './GButton.css';

function GButton(props) {
  const { text, onClick } = props;
  return React.createElement(
    'button',
    { type: 'button', onClick: onClick },
    text
  );
}

GButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

GButton.defaultProps = {
  onClick: null
};

export default GButton;

