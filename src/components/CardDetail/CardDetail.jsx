import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './CardDetail.scoped.scss';

function CardDetail({ properties, opened, setDetailOpen }) {
  const [text, setText] = useState('');
  const [heroOpen, setHeroOpen] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className={cx('card-detail', { active: opened })}>
      <button
        onClick={setDetailOpen}
        type="button"
      >
        X
      </button>

      <menubar>
        剖
      </menubar>

      <textarea
        onChange={(e) => handleChange(e)}
        value={text}
      />

      {!heroOpen
        ? (
          <menubar
            onClick={() => setHeroOpen(true)}
            onKeyPress={() => setHeroOpen(false)}
            role="button"
          >
            英
          </menubar>
        )
        : (
          <div>
            {properties.map((item) => <p key={item}>{item}</p>)}
          </div>
        )}
    </div>
  );
}

CardDetail.propTypes = {
  properties: PropTypes.arrayOf(PropTypes.string),
  opened: PropTypes.bool,
  setDetailOpen: PropTypes.func,
};

CardDetail.defaultProps = {
  properties: [],
  opened: false,
  setDetailOpen: () => {},
};

export default CardDetail;
