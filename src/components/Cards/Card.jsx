import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Card.scoped.scss';

import CardDetail from '../CardDetail/CardDetail';

function Card({ contentObj, selectedColor }) {
  const { name, properties } = contentObj;
  const [detailOpened, setDetailOpen] = useState(false);
  const [bgColor, setBgColor] = useState('color-1');

  const handleClick = () => {
    if (selectedColor === 'color-0') {
      setDetailOpen(true);
    } else {
      setBgColor(selectedColor);
    }
  };

  return (
    <>
      <button
        className={cx(bgColor)}
        onClick={handleClick}
        type="button"
      >
        {name}
      </button>
      <CardDetail
        properties={properties}
        opened={detailOpened}
        setDetailOpen={() => setDetailOpen(false)}
      />
    </>
  );
}

Card.propTypes = {
  contentObj: PropTypes.shape(),
  selectedColor: PropTypes.string,
};

Card.defaultProps = {
  contentObj: {
    name: '',
    properties: [],
  },
  selectedColor: '',
};

export default Card;
