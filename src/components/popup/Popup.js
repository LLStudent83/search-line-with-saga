import * as React from 'react';
import PropTypes from 'prop-types';
import './popup.scss';

export default function Popup({ text }) {
  return (
    <div className="Popup__wrapper">
      <p className="Popup__main">
        {text}
      </p>
    </div>
  );
}

Popup.propTypes = {
  text: PropTypes.string.isRequired,
};
