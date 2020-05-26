import React from 'react';
import transactions from '../../../transactions.json';
import TransactionOne from '../TransactionOne/TransactionOne';
import css from './TransactionHistory.module.css';

const TransactionHistory = () => (
  <table className={css.transactionHistory}>
    <thead className={css.tHead}>
      <tr className={css.tRow}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      <TransactionOne from items={transactions} />
    </tbody>
  </table>
);

export default TransactionHistory;
