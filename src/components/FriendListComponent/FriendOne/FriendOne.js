import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendOne.module.css';

const FriendOne = ({ name, avatar, isOnline }) => {
  const statusClasses = isOnline ? css.online : css.offline;
  return (
    <li className={css.item}>
      <span className={statusClasses}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt={name} width="58" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
FriendOne.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendOne;
