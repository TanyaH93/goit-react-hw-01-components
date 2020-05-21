import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import FriendOne from '../FriendOne/FriendOne';

const FriendList = ({ friends }) => {
  return (
    <section className={css.friendsListSec}>
      <FriendOne friends={friends} />
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default FriendList;
