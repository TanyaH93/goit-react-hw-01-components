import React from 'react';
import PropTypes from 'prop-types';
import css from './Stats.module.css';
import randomColor from '../../Helpers/Helpers';

const Stats = ({ title, stats }) => (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}

    <ul className={css.statisticsList}>
      {stats.map(stats => (
        <li
          className={css.item}
          key={stats.id}
          style={{ backgroundColor: '#' + randomColor() }}
        >
          <span className={css.label}>{stats.label}</span>
          <span className={css.percentage}>{stats.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

Stats.defaultProps = {
  title: '',
};

export default Stats;
