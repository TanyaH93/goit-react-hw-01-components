import React from 'react';
import PropTypes from 'prop-types';
import TransactionOne from '../TransactionOne/TransactionOne';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => {
  return (
    <section className={css.transactionsSection}>
      <TransactionOne transactions={transactions} />
    </section>
  );
};

TransactionHistory.defaultProps = {
  transactions: [],
};
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape()),
};

export default TransactionHistory;
