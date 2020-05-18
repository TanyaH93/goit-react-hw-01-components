import React from 'react';
import Profile from '../ProfileOne/ProfileOne';
import user from '../../../userData';
import css from './Profiles.module.css';

const Profiles = () => {
  return (
    <section className={css.profiles}>
      <Profile user={user} />
    </section>
  );
};

export default Profiles;
