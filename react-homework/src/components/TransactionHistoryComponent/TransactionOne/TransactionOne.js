import React from 'react';
import PropTypes from 'prop-types';
import css from './TransactionOne.module.css';

const TransactionOne = ({ transactions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.headTable}>
        <tr className={css.headRow}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.bodyTable}>
        {transactions.map(transaction => (
          <tr className={css.bodyRow} key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionOne.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionOne;
