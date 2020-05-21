import React from 'react';
import PropTypes from 'prop-types';
import StatOne from '../StatOne/StatOne';
import css from './Stats.module.css';

const Stats = ({ title, stats }) => {
  return (
    <section className={css.statsSection}>
      <h2 className={css.title}>{title}</h2>
      <StatOne stats={stats} />
    </section>
  );
};

Stats.defaultProps = {
  title: '',
};

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
export default Stats;
