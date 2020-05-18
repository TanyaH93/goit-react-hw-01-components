import React from 'react';
import PropTypes from 'prop-types';
import css from './StatOne.module.css';

const randColor = function randomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const StatOne = ({ stats }) => {
  return (
    <>
      <ul className={css.statsList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            style={{ backgroundColor: randColor() }}
            className={css.item}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </>
  );
};

StatOne.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default StatOne;
