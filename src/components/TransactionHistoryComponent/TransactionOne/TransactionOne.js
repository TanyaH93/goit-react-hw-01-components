import React from 'react';
import PropTypes from 'prop-types';
import css from './TransactionOne.module.css';

const TransactionOne = ({ items = [] }) =>
  items.map(item => (
    <tr key={item.id}>
      <td className={css.tData}>{item.type}</td>
      <td className={css.tData}>{item.amount}</td>
      <td className={css.tData}>{item.currency}</td>
    </tr>
  ));

TransactionOne.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionOne;
