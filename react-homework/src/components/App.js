import React from 'react';
import ProfileComponent from './ProfileComponent/Profiles/Profiles';
import StatsComponent from './StatsComponent/Stats/Stats';
import FriendListComponent from './FriendListComponent/FriendList/FriendList';
import TransactionHistoryComponent from './TransactionHistoryComponent/TransactionHistory/TransactionHistory';

import stats from '../stats.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

const App = () => {
  return (
    <>
      <ProfileComponent />
      <StatsComponent title="Upload stats" stats={stats} />
      <FriendListComponent friends={friends} />
      <TransactionHistoryComponent transactions={transactions} />
    </>
  );
};
export default App;
